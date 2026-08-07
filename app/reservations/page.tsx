"use client";
import { useState, useEffect, useRef, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { DayPicker, type DayButtonProps } from "react-day-picker";
import {
  fetchHours,
  getClosedWeekdays,
  getWeekdaySchedule,
  getTimeSlotsForDay,
  FALLBACK_CLOSED_WEEKDAYS,
  FALLBACK_WEEKDAY_SCHEDULE,
  type WeekdaySchedule,
} from "@/lib/hours";

const BOOKING_API = "https://reservations.sienaatl.com/api/book";

// Re-check which weekdays are closed on this interval, same as the footer's
// hours poll, so the calendar reflects changes made on the reservations
// backend without needing a page reload.
const HOURS_POLL_INTERVAL_MS = 5 * 60 * 1000;

const WEEKDAY_NAMES = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

function formatClosedDaysHint(closedWeekdays: number[]): string {
  if (closedWeekdays.length === 0) return "";
  const names = [...closedWeekdays].sort((a, b) => a - b).map((d) => `${WEEKDAY_NAMES[d]}s`);
  if (names.length === 1) return `Siena is closed on ${names[0]}.`;
  if (names.length === 2) return `Siena is closed on ${names[0]} and ${names[1]}.`;
  return `Siena is closed on ${names.slice(0, -1).join(", ")}, and ${names[names.length - 1]}.`;
}

const phoneRegex = /^\+?[\d\s\-(). ]{7,20}$/;

// "YYYY-MM-DD" <-> local Date, deliberately not going through UTC/ISO
// conversion (new Date().toISOString() rolls over a day early for anyone
// west of UTC, e.g. showing tomorrow as "today" in the evening).
function dateToISO(d: Date) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, "0");
  const day = String(d.getDate()).padStart(2, "0");
  return `${y}-${m}-${day}`;
}

function parseLocalDate(dateStr: string) {
  const [y, m, d] = dateStr.split("-").map(Number);
  return new Date(y, m - 1, d);
}

function todayISO() {
  return dateToISO(new Date());
}

function startOfToday() {
  const d = new Date();
  d.setHours(0, 0, 0, 0);
  return d;
}

function formatDisplayDate(dateStr: string) {
  if (!dateStr) return "";
  return parseLocalDate(dateStr).toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });
}

const schema = z.object({
  partySize: z.string().min(1, "Please select a party size"),
  // Which weekdays are closed comes from the live hours API and can change,
  // so that check lives in the calendar's `disabled` matcher (dynamic,
  // API-driven) rather than here in a static schema — the calendar already
  // makes those dates unselectable, this is just the past-date backstop.
  date: z
    .string()
    .min(1, "Please pick a date")
    .refine((v) => v >= todayISO(), "Please choose today or a future date"),
  time: z.string().min(1, "Please pick a time"),
  fullName: z
    .string()
    .min(2, "Full name must be at least 2 characters")
    .max(80, "Full name is too long"),
  email: z.string().email("Please enter a valid email address").max(100, "Email is too long"),
  phone: z.string().refine((v) => phoneRegex.test(v), "Please enter a valid phone number"),
  occasion: z.string().optional().or(z.literal("")),
  notes: z.string().max(500, "Notes cannot exceed 500 characters").optional().or(z.literal("")),
  smsOptIn: z.boolean().optional(),
  marketingOptIn: z.boolean().optional(),
});

type FormData = z.infer<typeof schema>;

const inputClass =
  "w-full border border-[#58021f]/20 px-4 py-[11px] text-[14px] text-[#333] placeholder-[#bbb] focus:outline-none focus:border-[#58021f] focus:ring-1 focus:ring-[#58021f]/20 bg-white transition";

const PARTY_SIZES = Array.from({ length: 14 }, (_, i) => i + 1);

const OCCASIONS = ["None", "Birthday", "Anniversary", "Date Night", "Business Meal", "Celebration", "Other"];

function to24Hour(time12: string) {
  const [time, period] = time12.split(" ");
  const [h, m] = time.split(":").map(Number);
  let hour = h;
  if (period === "PM" && hour !== 12) hour += 12;
  if (period === "AM" && hour === 12) hour = 0;
  return `${String(hour).padStart(2, "0")}:${String(m).padStart(2, "0")}`;
}

type ConfirmedReservation = {
  id: string;
  guest_name: string;
  email: string;
  party_size: number;
  reservation_at: string;
  status: string;
};

type BookingResponse = {
  ok: boolean;
  reservation: ConfirmedReservation;
  manage_url: string;
  email_sent: boolean;
  sms_sent: boolean;
};

function SelectChevron() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="#58021f"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2"
    >
      <path d="M6 9l6 6 6-6" />
    </svg>
  );
}

// Custom day-cell renderer so disabled dates (past days, days the restaurant is closed) are
// genuinely unclickable in the calendar UI itself, styled to match Siena's
// palette — rather than relying on a native <input type="date">'s `min`
// attribute, which Safari (macOS and iOS) doesn't consistently enforce.
function CalendarDayButton({ day, modifiers, className, ...buttonProps }: DayButtonProps) {
  const { selected, disabled, today, outside } = modifiers;
  return (
    <button
      {...buttonProps}
      disabled={disabled}
      className={[
        "w-9 h-9 mx-auto flex items-center justify-center text-[13px] rounded-full transition",
        disabled
          ? "text-[#777] line-through cursor-not-allowed"
          : "text-[#222] cursor-pointer hover:bg-[#58021f]/10",
        selected ? "bg-[#58021f] text-[#f5efdd] hover:bg-[#58021f]" : "",
        today && !selected && !disabled ? "font-bold text-[#58021f] ring-1 ring-inset ring-[#58021f]/40" : "",
        outside && !disabled ? "text-[#ccc]" : "",
      ]
        .filter(Boolean)
        .join(" ")}
    />
  );
}

function StepHeader({ num, title, desc }: { num: string; title: string; desc: string }) {
  return (
    <div className="flex items-start gap-4 mb-6">
      <span className="w-8 h-8 rounded-full bg-[#58021f] text-[#f5efdd] flex items-center justify-center text-[14px] font-semibold flex-shrink-0">
        {num}
      </span>
      <div>
        <h3 className="text-[19px] md:text-[20px] font-semibold text-[#222] leading-tight">{title}</h3>
        <p className="text-[13px] text-[#888] mt-0.5">{desc}</p>
      </div>
    </div>
  );
}

function Field({
  label,
  required,
  error,
  hint,
  children,
}: {
  label: string;
  required?: boolean;
  error?: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-1">
      <label className="text-[12px] font-semibold text-[#222] tracking-wider uppercase">
        {label} {required && <span className="text-[#58021f]">*</span>}
      </label>
      {children}
      {hint && !error && <p className="text-[11px] text-[#999] mt-0.5">{hint}</p>}
      {error && (
        <motion.p
          className="text-[12px] text-[#58021f] mt-0.5 flex items-center gap-1"
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <span className="w-3 h-3 flex items-center justify-center border border-[#58021f] text-[9px] flex-shrink-0">!</span>
          {error}
        </motion.p>
      )}
    </div>
  );
}

export default function Reservations() {
  const [confirmation, setConfirmation] = useState<BookingResponse | null>(null);
  const [submitError, setSubmitError] = useState<string | null>(null);
  const [datePickerOpen, setDatePickerOpen] = useState(false);
  const [closedWeekdays, setClosedWeekdays] = useState<number[]>(FALLBACK_CLOSED_WEEKDAYS);
  const [weekdaySchedule, setWeekdaySchedule] = useState<WeekdaySchedule>(FALLBACK_WEEKDAY_SCHEDULE);

  const dateFieldRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    let cancelled = false;

    // One fetch feeds both the calendar's closed-day list and the time
    // dropdown's per-day slots, instead of hitting the API twice.
    const loadHours = () => {
      fetchHours()
        .then((entries) => {
          if (cancelled) return;
          setClosedWeekdays(getClosedWeekdays(entries));
          setWeekdaySchedule(getWeekdaySchedule(entries));
        })
        .catch(() => {
          // API unreachable — fall back to the known schedule rather than
          // leaving the calendar/time picker with no restriction at all.
          if (cancelled) return;
          setClosedWeekdays(FALLBACK_CLOSED_WEEKDAYS);
          setWeekdaySchedule(FALLBACK_WEEKDAY_SCHEDULE);
        });
    };

    loadHours();
    const interval = setInterval(loadHours, HOURS_POLL_INTERVAL_MS);
    return () => {
      cancelled = true;
      clearInterval(interval);
    };
  }, []);

  const {
    register,
    handleSubmit,
    setValue,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      partySize: "2",
      date: "",
      time: "",
      fullName: "",
      email: "",
      phone: "",
      occasion: "",
      notes: "",
      smsOptIn: false,
      marketingOptIn: false,
    },
    mode: "onTouched",
  });

  const selectedDate = watch("date");
  const selectedTime = watch("time");

  // Which half-hour slots are offered depends on the selected date's actual
  // weekday hours (e.g. Fri/Sat run later than Tue-Thu), so it's recomputed
  // whenever the date or the fetched schedule changes.
  const timeOptions = useMemo(() => {
    if (!selectedDate) return [];
    const weekday = parseLocalDate(selectedDate).getDay();
    return getTimeSlotsForDay(weekdaySchedule[weekday]);
  }, [selectedDate, weekdaySchedule]);

  // If the date changes to a day whose hours no longer include the
  // previously picked time (e.g. switching from a Friday 11pm slot to a
  // Tuesday, which closes at 10pm), clear it instead of silently submitting
  // a time that was never actually offered for that day.
  useEffect(() => {
    if (selectedTime && !timeOptions.includes(selectedTime)) {
      setValue("time", "", { shouldValidate: true, shouldDirty: true });
    }
  }, [timeOptions, selectedTime, setValue]);

  // Close the calendar popover on an outside click or Escape.
  useEffect(() => {
    if (!datePickerOpen) return;
    function handlePointerDown(e: MouseEvent) {
      if (dateFieldRef.current && !dateFieldRef.current.contains(e.target as Node)) {
        setDatePickerOpen(false);
      }
    }
    function handleKeyDown(e: KeyboardEvent) {
      if (e.key === "Escape") setDatePickerOpen(false);
    }
    document.addEventListener("mousedown", handlePointerDown);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handlePointerDown);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [datePickerOpen]);

  const onSubmit = async (data: FormData) => {
    setSubmitError(null);
    try {
      const res = await fetch(BOOKING_API, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          guest_name: data.fullName,
          email: data.email,
          phone: data.phone.replace(/\D/g, ""),
          party_size: Number(data.partySize),
          reservation_at: `${data.date}T${to24Hour(data.time)}`,
          occasion: data.occasion && data.occasion !== "None" ? data.occasion : undefined,
          notes: data.notes || undefined,
          sms_opt_in: !!data.smsOptIn,
          marketing_opt_in: !!data.marketingOptIn,
        }),
      });

      const json = await res.json();

      if (!res.ok || !json.ok) {
        setSubmitError(json.error || "That time is no longer available. Please try another time.");
        return;
      }

      setConfirmation(json);
    } catch {
      setSubmitError("Something went wrong sending your reservation. Please try again, or call us.");
    }
  };

  return (
    <main>
      {/* HERO */}
      <section className="relative w-full h-[400px] md:h-[45vh] overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        >
          <Image
            src="/assets/gallery16.webp"
            alt="Reservations at Siena"
            fill
            priority
            sizes="100vw"
            className="object-cover object-[50%_30%]"
          />
        </motion.div>
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(3,3,2,0.6)_0%,rgba(3,3,2,0.28)_45%,rgba(3,3,2,0.72)_100%)]" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 pt-14 md:pt-16">
          <motion.div
            className="flex items-center gap-4 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="w-12 md:w-24 h-px bg-gradient-to-r from-transparent to-[#deae21]/80" />
            <span className="text-[#deae21] text-[11px] tracking-[0.4em]">✦</span>
            <div className="w-12 md:w-24 h-px bg-gradient-to-l from-transparent to-[#deae21]/80" />
          </motion.div>
          <motion.h1
            className="text-[#f5efdd] text-[52px] md:text-[82px] lg:text-[104px] leading-none tracking-[0.06em] uppercase"
            style={{ fontFamily: "'Palmore-Light', serif" }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            RESERVATIONS
          </motion.h1>
          <motion.div
            className="flex items-center gap-4 mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          >
            <div className="w-12 md:w-24 h-px bg-gradient-to-r from-transparent to-[#deae21]/80" />
            <span className="text-[#deae21] text-[11px] tracking-[0.4em]">✦</span>
            <div className="w-12 md:w-24 h-px bg-gradient-to-l from-transparent to-[#deae21]/80" />
          </motion.div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="w-full bg-[#030302] py-5 overflow-hidden">
        <style>{`
          @keyframes mq-res { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
          .mq-res { display:flex; width:max-content; animation:mq-res 22s linear infinite; }
        `}</style>
        <div className="mq-res">
          {[0, 1, 2, 3].map((r) => (
            <div key={r} className="flex items-center">
              <span className="text-white text-[15px] font-semibold tracking-[0.2em] uppercase px-8 whitespace-nowrap">RESERVE YOUR TABLE</span>
              <img src="/assets/star.svg" alt="" className="w-5 h-5 flex-shrink-0" />
              <span className="text-white text-[15px] font-semibold tracking-[0.2em] uppercase px-8 whitespace-nowrap">MEDITERRANEAN DINING</span>
              <img src="/assets/star.svg" alt="" className="w-5 h-5 flex-shrink-0" />
              <span className="text-white text-[15px] font-semibold tracking-[0.2em] uppercase px-8 whitespace-nowrap">ALPHARETTA, GEORGIA</span>
              <img src="/assets/star.svg" alt="" className="w-5 h-5 flex-shrink-0" />
              <span className="text-white text-[15px] font-semibold tracking-[0.2em] uppercase px-8 whitespace-nowrap">UNFORGETTABLE EVENINGS</span>
              <img src="/assets/star.svg" alt="" className="w-5 h-5 flex-shrink-0" />
            </div>
          ))}
        </div>
      </section>

      {/* BOOKING SECTION */}
      <section className="w-full py-[80px] px-4" style={{ backgroundImage: "url('/assets/fondo_findus.webp')", backgroundSize: "cover", backgroundPosition: "center" }}>
        <div className="w-full max-w-[1180px] mx-auto">

          {/* Section header */}
          <div className="flex flex-col items-center text-center mb-[60px] md:mb-[80px]">
            <motion.img
              src="/assets/icono_123.svg"
              alt=""
              className="w-[60px] md:w-[75px] mb-2"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
            <div className="relative inline-block">
              <motion.h2
                className="text-[#58021f] text-[60px] md:text-[80px] lg:text-[95px] leading-[0.9] tracking-[0.06em] uppercase"
                style={{ fontFamily: "'Palmore-Light', serif" }}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
              >
                Book a Table
              </motion.h2>
              <motion.span
                className="pointer-events-none absolute left-1/2 top-full -translate-x-1/2 -translate-y-[20%] md:-translate-y-[35%] text-[#deae21] text-[28px] md:text-[60px] lg:text-[85px] leading-none whitespace-nowrap"
                style={{
                  fontFamily: "'AguafinaScript-Regular', cursive",
                  textShadow: "2px 2px 0 #f5efdd,-2px -2px 0 #f5efdd,2px -2px 0 #f5efdd,-2px 2px 0 #f5efdd",
                }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
              >
                at Siena
              </motion.span>
            </div>
            <motion.p
              className="text-[#030302]/80 text-lg md:text-xl leading-[140%] max-w-[600px] mt-12 md:mt-24"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
            >
              Secure your seat at Siena. Whether it&apos;s a weeknight dinner or a special occasion, we look forward to welcoming you.
            </motion.p>
          </div>

          {/* Booking form */}
          <motion.div
            className="w-full max-w-[820px] mx-auto"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="bg-white shadow-2xl px-6 md:px-10 py-10 text-left">
              <AnimatePresence mode="wait">
                {confirmation ? (
                  <motion.div
                    key="success"
                    className="flex flex-col items-center text-center gap-6 py-4"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.4 }}
                  >
                    <motion.div
                      className="w-16 h-16 rounded-full bg-[#deae21]/15 flex items-center justify-center"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
                    >
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                        <path d="M5 13l4 4L19 7" stroke="#58021f" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </motion.div>

                    <div className="flex flex-col items-center gap-2">
                      <span className="text-[12px] font-semibold tracking-[0.2em] uppercase text-[#58021f]">
                        Reservation Confirmed
                      </span>
                      <h3
                        className="text-[26px] md:text-[30px] text-[#030302] leading-tight"
                        style={{ fontFamily: "'Palmore-Light', serif" }}
                      >
                        We look forward to serving you.
                      </h3>
                    </div>

                    <div className="w-full border border-[#58021f]/15 text-left">
                      <div className="grid grid-cols-2">
                        <div className="p-4 border-r border-b border-[#58021f]/15">
                          <p className="text-[11px] uppercase tracking-wide text-[#999]">Name</p>
                          <p className="text-[15px] font-semibold text-[#222] mt-1">
                            {confirmation.reservation.guest_name}
                          </p>
                        </div>
                        <div className="p-4 border-b border-[#58021f]/15">
                          <p className="text-[11px] uppercase tracking-wide text-[#999]">Date &amp; Time</p>
                          <p className="text-[15px] font-semibold text-[#222] mt-1">
                            {confirmation.reservation.reservation_at.replace("T", " ")}
                          </p>
                        </div>
                        <div className="p-4 border-r border-[#58021f]/15">
                          <p className="text-[11px] uppercase tracking-wide text-[#999]">Party</p>
                          <p className="text-[15px] font-semibold text-[#222] mt-1">
                            {confirmation.reservation.party_size}{" "}
                            {confirmation.reservation.party_size === 1 ? "guest" : "guests"}
                          </p>
                        </div>
                        <div className="p-4">
                          <p className="text-[11px] uppercase tracking-wide text-[#999]">Confirmation</p>
                          <p className="text-[15px] font-semibold text-[#222] mt-1">{confirmation.reservation.id}</p>
                        </div>
                      </div>
                    </div>

                    {confirmation.email_sent && (
                      <div className="w-full bg-[#f5efdd] border border-[#deae21]/30 px-5 py-4 text-[13px] text-[#5c4a1f] leading-relaxed">
                        A confirmation email with your private modification link has been sent to{" "}
                        <span className="font-semibold">{confirmation.reservation.email}</span>.
                      </div>
                    )}

                    <a
                      href={confirmation.manage_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full bg-[#58021f] text-[#f5efdd] text-[14px] font-semibold py-4 hover:bg-[#430118] transition"
                    >
                      Manage Reservation
                    </a>
                  </motion.div>
                ) : (
                  <motion.form
                    key="form"
                    onSubmit={handleSubmit(onSubmit)}
                    noValidate
                    className="flex flex-col gap-8"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                  >
                    {/* STEP 1 */}
                    <div>
                      <StepHeader num="1" title="Find a Table" desc="Select your party size and preferred date." />
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                        <Field label="Party Size" required error={errors.partySize?.message}>
                          <div className="relative">
                            <select {...register("partySize")} className={`${inputClass} appearance-none cursor-pointer pr-9`}>
                              {PARTY_SIZES.map((n) => (
                                <option key={n} value={n}>
                                  {n} {n === 1 ? "guest" : "guests"}
                                </option>
                              ))}
                            </select>
                            <SelectChevron />
                          </div>
                        </Field>
                        <Field
                          label="Date"
                          required
                          error={errors.date?.message}
                          hint={formatClosedDaysHint(closedWeekdays)}
                        >
                          <div className="relative" ref={dateFieldRef}>
                            <input type="hidden" {...register("date")} />
                            <button
                              type="button"
                              onClick={() => setDatePickerOpen((o) => !o)}
                              className={`${inputClass} flex items-center justify-between text-left cursor-pointer`}
                            >
                              <span className={selectedDate ? "text-[#333]" : "text-[#bbb]"}>
                                {selectedDate ? formatDisplayDate(selectedDate) : "Select a date"}
                              </span>
                              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#58021f" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="flex-shrink-0">
                                <rect x="3" y="4" width="18" height="18" rx="2" />
                                <path d="M16 2v4M8 2v4M3 10h18" />
                              </svg>
                            </button>

                            {datePickerOpen && (
                              <div className="absolute z-30 mt-2 bg-white border border-[#58021f]/15 shadow-xl p-3">
                                <DayPicker
                                  mode="single"
                                  selected={selectedDate ? parseLocalDate(selectedDate) : undefined}
                                  defaultMonth={selectedDate ? parseLocalDate(selectedDate) : new Date()}
                                  // The calendar's own disabled matchers are the actual fix here —
                                  // past days and closed weekdays (from the live hours API, with
                                  // Monday as a fallback if that API is unreachable) are unclickable
                                  // in the grid itself, not just corrected after the fact the way a
                                  // native <input type="date"> would need to be.
                                  disabled={[{ before: startOfToday() }, { dayOfWeek: closedWeekdays }]}
                                  onSelect={(d) => {
                                    if (!d) return;
                                    setValue("date", dateToISO(d), { shouldValidate: true, shouldDirty: true, shouldTouch: true });
                                    setDatePickerOpen(false);
                                  }}
                                  components={{ DayButton: CalendarDayButton }}
                                  // "around" puts the prev/next buttons as normal in-flow
                                  // siblings of the caption (flex-wrapped below), instead of the
                                  // default single <nav> absolutely positioned over the caption —
                                  // that overlap was swallowing clicks on the next-month button.
                                  navLayout="around"
                                  classNames={{
                                    months: "flex flex-col",
                                    month: "flex flex-wrap items-center gap-y-1",
                                    month_caption: "flex-1 flex justify-center items-center h-9 text-[14px] font-semibold text-[#222] order-2",
                                    button_previous: "order-1 p-1.5 hover:bg-[#58021f]/10 rounded-full transition cursor-pointer flex-shrink-0",
                                    button_next: "order-3 p-1.5 hover:bg-[#58021f]/10 rounded-full transition cursor-pointer flex-shrink-0",
                                    chevron: "fill-[#58021f] w-4 h-4",
                                    month_grid: "w-full basis-full border-collapse mt-1 order-4",
                                    weekdays: "flex",
                                    weekday: "text-[11px] font-semibold text-[#999] uppercase w-9 h-9 flex items-center justify-center",
                                    week: "flex w-full mt-1",
                                    // Fixed width/height so empty cells for days outside the
                                    // month (before the 1st, after the last) still reserve their
                                    // column's space in the flex row — without this they collapse
                                    // to zero width and every later cell shifts left, breaking the
                                    // Sun-Sat alignment with the weekday header.
                                    day: "w-9 h-9 p-0 flex items-center justify-center flex-shrink-0",
                                  }}
                                />
                              </div>
                            )}
                          </div>
                        </Field>
                        <Field label="Time" required error={errors.time?.message}>
                          <div className="relative">
                            <select
                              {...register("time")}
                              disabled={!selectedDate}
                              className={`${inputClass} appearance-none cursor-pointer pr-9 disabled:cursor-not-allowed disabled:opacity-60`}
                            >
                              <option value="">{selectedDate ? "Select one" : "Select a date first"}</option>
                              {timeOptions.map((t) => (
                                <option key={t} value={t}>
                                  {t}
                                </option>
                              ))}
                            </select>
                            <SelectChevron />
                          </div>
                        </Field>
                      </div>
                      <p className="text-[11.67px] text-[#999] mt-2 leading-relaxed">
                        <span className="block font-semibold text-[#777]">Party of 14 or more?</span>
                        Please call us directly to arrange your reservation, or complete our{" "}
                        <Link href="/event-inquiry" className="text-[#58021f] underline underline-offset-2 hover:text-[#430118]">
                          Private &amp; Group Dining Inquiry Form
                        </Link>
                        , and a member of our team will be happy to assist you.
                      </p>
                    </div>

                    <div className="h-px bg-[#58021f]/10" />

                    {/* STEP 2 */}
                    <div>
                      <StepHeader num="2" title="Guest Details" desc="We will use this information for your reservation." />
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                        <Field label="Full Name" required error={errors.fullName?.message}>
                          <input {...register("fullName")} placeholder="Your name" className={inputClass} />
                        </Field>
                        <Field label="Email" required error={errors.email?.message}>
                          <input {...register("email")} type="email" placeholder="you@example.com" className={inputClass} />
                        </Field>
                        <Field label="Phone" required error={errors.phone?.message}>
                          <input {...register("phone")} type="tel" placeholder="(404) 555-0123" className={inputClass} />
                        </Field>
                        <Field label="Occasion" error={errors.occasion?.message}>
                          <div className="relative">
                            <select {...register("occasion")} className={`${inputClass} appearance-none cursor-pointer pr-9`}>
                              {OCCASIONS.map((o) => (
                                <option key={o} value={o}>
                                  {o}
                                </option>
                              ))}
                            </select>
                            <SelectChevron />
                          </div>
                        </Field>
                      </div>

                      <div className="mt-4">
                        <Field label="Special Requests" error={errors.notes?.message}>
                          <textarea
                            {...register("notes")}
                            rows={3}
                            placeholder="Allergies, accessibility needs, seating requests…"
                            className={`${inputClass} resize-none`}
                          />
                        </Field>
                      </div>

                      <div className="mt-7 border-t border-[#58021f]/15 pt-6">
                        <h4 className="text-[#58021f] text-[22px] md:text-[24px] leading-tight mb-5">
                          Reservation Form Consent
                        </h4>
                        <div className="grid grid-cols-1 gap-5">
                          <label className="flex items-start gap-3 cursor-pointer select-none">
                            <input
                              {...register("smsOptIn")}
                              type="checkbox"
                              className="w-4 h-4 mt-1 accent-[#58021f] cursor-pointer flex-shrink-0"
                            />
                            <span className="text-[13px] text-[#333] leading-[1.65]">
                              I agree to receive SMS messages from Siena Restaurant regarding my reservation,
                              including confirmations, modifications, cancellations, reminders, waitlist updates, and
                              table-ready notifications. Message frequency varies. Message and data rates may apply.
                              Reply STOP to opt out or HELP for help. Consent is not a condition of purchase. See our{" "}
                              <Link href="/privacy-policy" className="text-[#58021f] underline underline-offset-2 hover:text-[#430118]">
                                Privacy Notice
                              </Link>{" "}
                              and{" "}
                              <Link href="/terms-of-service" className="text-[#58021f] underline underline-offset-2 hover:text-[#430118]">
                                Terms &amp; Conditions
                              </Link>
                              .
                            </span>
                          </label>
                          <label className="flex items-start gap-3 cursor-pointer select-none">
                            <input
                              {...register("marketingOptIn")}
                              type="checkbox"
                              className="w-4 h-4 mt-1 accent-[#58021f] cursor-pointer flex-shrink-0"
                            />
                            <span className="text-[13px] text-[#333] leading-[1.65]">
                              I agree to receive recurring promotional SMS messages from Siena Restaurant about
                              events, offers, specials, and restaurant updates. Message frequency varies. Message and
                              data rates may apply. Reply STOP to opt out or HELP for help. Consent is not a condition
                              of purchase. See our{" "}
                              <Link href="/privacy-policy" className="text-[#58021f] underline underline-offset-2 hover:text-[#430118]">
                                Privacy Notice
                              </Link>{" "}
                              and{" "}
                              <Link href="/terms-of-service" className="text-[#58021f] underline underline-offset-2 hover:text-[#430118]">
                                Terms &amp; Conditions
                              </Link>
                              .
                            </span>
                          </label>
                        </div>
                      </div>
                    </div>

                    {submitError && (
                      <p className="text-[13px] text-[#58021f] border border-[#58021f]/30 bg-[#58021f]/5 px-4 py-3">
                        {submitError}
                      </p>
                    )}

                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full bg-[#58021f] text-[#f5efdd] text-[13px] tracking-[0.25em] uppercase py-4 transition hover:bg-[#430118] disabled:opacity-60 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? "Sending..." : "Complete Reservation"}
                    </button>

                    <p className="text-[12px] text-[#999] text-center leading-relaxed">
                      Reservations are held for 15 minutes. Seating requests are not guaranteed.
                    </p>
                  </motion.form>
                )}
              </AnimatePresence>
            </div>
          </motion.div>

        </div>
      </section>

    </main>
  );
}
