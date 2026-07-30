"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "motion/react";
import { getRestaurantInfo, RESTAURANT_FALLBACK, type RestaurantInfo } from "@/lib/restaurant";

declare global {
  interface Window {
    grecaptcha: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, opts: { action: string }) => Promise<string>;
    };
  }
}

// Events are handled on a separate line from the main restaurant number in site-data.json.
const EVENTS_PHONE = "(404) 488-3399";

const phoneRegex = /^\+?[\d\s\-(). ]{7,20}$/;

const schema = z
  .object({
    firstName: z
      .string()
      .min(2, "First name must be at least 2 characters")
      .max(50, "First name is too long")
      .refine((v) => /^[A-Za-zÀ-ÿ\s'-]+$/.test(v), "First name contains invalid characters"),
    lastName: z
      .string()
      .min(2, "Last name must be at least 2 characters")
      .max(50, "Last name is too long")
      .refine((v) => /^[A-Za-zÀ-ÿ\s'-]+$/.test(v), "Last name contains invalid characters"),
    phone: z.string().refine((v) => phoneRegex.test(v), "Please enter a valid phone number"),
    email: z.string().email("Please enter a valid email address").max(100, "Email is too long"),
    date: z.string().optional().or(z.literal("")),
    endDate: z.string().optional().or(z.literal("")),
    startTime: z.string().optional().or(z.literal("")),
    endTime: z.string().optional().or(z.literal("")),
    dateFlexible: z.boolean().optional(),
    eventSpace: z.string().max(100, "Event space is too long").optional().or(z.literal("")),
    guestCount: z
      .string()
      .refine((v) => !v || (/^\d+$/.test(v) && +v > 0 && +v <= 1000), "Enter a number between 1 and 1000")
      .optional()
      .or(z.literal("")),
    occasion: z.string().max(100, "Occasion is too long").optional().or(z.literal("")),
    notes: z.string().max(1000, "Notes cannot exceed 1000 characters").optional().or(z.literal("")),
    howHeard: z.string().max(60, "Please pick one of the options").optional().or(z.literal("")),
  })
  .superRefine((data, ctx) => {
    if (data.endDate && data.date && data.endDate < data.date) {
      ctx.addIssue({ code: "custom", message: "End date cannot be before the start date", path: ["endDate"] });
    }
    if (!data.date && !data.dateFlexible) {
      ctx.addIssue({
        code: "custom",
        message: "Pick a date, or tick “My date is flexible”",
        path: ["date"],
      });
    }
  });

type FormData = z.infer<typeof schema>;

const inputClass =
  "w-full border border-[#58021f]/20 px-4 py-[11px] text-[14px] text-[#333] placeholder-[#bbb] focus:outline-none focus:border-[#58021f] focus:ring-1 focus:ring-[#58021f]/20 bg-white/80 transition";

const HOW_HEARD_OPTIONS = [
  "Google search",
  "Instagram",
  "Facebook",
  "TikTok",
  "Recommended by a friend",
  "I've eaten here before",
  "OpenTable",
  "Walked or drove past",
  "Other",
];

// 10:00 AM through 11:30 PM in half hours.
const TIME_OPTIONS = Array.from({ length: 28 }, (_, i) => {
  const mins = 10 * 60 + i * 30;
  const h24 = Math.floor(mins / 60);
  const m = mins % 60;
  const h12 = h24 % 12 === 0 ? 12 : h24 % 12;
  return `${h12}:${String(m).padStart(2, "0")} ${h24 < 12 ? "AM" : "PM"}`;
});

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

export default function EventInquiry() {
  const router = useRouter();
  const [info, setInfo] = useState<RestaurantInfo>(RESTAURANT_FALLBACK);
  const [sendError, setSendError] = useState<string | null>(null);

  useEffect(() => {
    getRestaurantInfo().then(setInfo);
  }, []);

  useEffect(() => {
    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
    if (!siteKey) return;
    const id = "recaptcha-script";
    if (document.getElementById(id)) return;
    const s = document.createElement("script");
    s.id = id;
    s.src = `https://www.google.com/recaptcha/api.js?render=${siteKey}`;
    document.head.appendChild(s);
  }, []);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      phone: "",
      email: "",
      date: "",
      endDate: "",
      startTime: "",
      endTime: "",
      dateFlexible: false,
      eventSpace: "",
      guestCount: "",
      occasion: "",
      notes: "",
      howHeard: "",
    },
    mode: "onTouched",
  });

  const notesLength = watch("notes")?.length ?? 0;
  const today = new Date().toISOString().split("T")[0];

  const onSubmit = async (data: FormData) => {
    setSendError(null);

    const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY;
    let recaptchaToken = "";
    if (siteKey && typeof window !== "undefined" && window.grecaptcha) {
      recaptchaToken = await new Promise<string>((resolve) => {
        window.grecaptcha.ready(async () => {
          resolve(await window.grecaptcha.execute(siteKey, { action: "event_inquiry" }));
        });
      });
    }

    try {
      const res = await fetch("/api/event-inquiry", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...data, recaptchaToken }),
      });
      if (!res.ok) throw new Error("Failed to send");
      router.push("/event-inquiry/thank-you");
    } catch {
      setSendError("Something went wrong sending your inquiry. Please try again, or call us on " + EVENTS_PHONE + ".");
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
            src="/assets/Siena_20.03.26-A-01.webp"
            alt="Private events at Siena Restaurant & Bar in Alpharetta"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 pt-14 md:pt-16">
          <motion.div
            className="flex items-center gap-3 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="w-10 md:w-16 h-px bg-gradient-to-r from-transparent to-[#deae21]/80" />
            <span className="text-[#deae21] text-[11px] tracking-[0.4em]">✦</span>
            <div className="w-10 md:w-16 h-px bg-gradient-to-l from-transparent to-[#deae21]/80" />
          </motion.div>
          <motion.h1
            className="text-[#f5efdd] text-[46px] md:text-[64px] lg:text-[80px] leading-none tracking-[0.06em] uppercase"
            style={{ fontFamily: "'Palmore-Light', serif" }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Event Inquiry
          </motion.h1>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="w-full bg-[#030302] py-5 overflow-hidden">
        <style>{`
          @keyframes mq-ei { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
          .mq-ei { display:flex; width:max-content; animation:mq-ei 22s linear infinite; }
        `}</style>
        <div className="mq-ei">
          {[0, 1, 2, 3].map((r) => (
            <div key={r} className="flex items-center">
              <span className="text-white text-[15px] font-semibold tracking-[0.2em] uppercase px-8 whitespace-nowrap">BIRTHDAYS &amp; ANNIVERSARIES</span>
              <img src="/assets/star.svg" alt="" className="w-5 h-5 flex-shrink-0" />
              <span className="text-white text-[15px] font-semibold tracking-[0.2em] uppercase px-8 whitespace-nowrap">CORPORATE DINNERS</span>
              <img src="/assets/star.svg" alt="" className="w-5 h-5 flex-shrink-0" />
              <span className="text-white text-[15px] font-semibold tracking-[0.2em] uppercase px-8 whitespace-nowrap">SHOWERS &amp; CELEBRATIONS</span>
              <img src="/assets/star.svg" alt="" className="w-5 h-5 flex-shrink-0" />
              <span className="text-white text-[15px] font-semibold tracking-[0.2em] uppercase px-8 whitespace-nowrap">124 DEVORE RD</span>
              <img src="/assets/star.svg" alt="" className="w-5 h-5 flex-shrink-0" />
            </div>
          ))}
        </div>
      </section>

      {/* FORM */}
      <section className="relative w-full py-[80px] md:py-[100px] overflow-hidden" style={{ backgroundColor: "#f5efdd" }}>
        <div className="w-full max-w-[720px] mx-auto px-4 flex flex-col items-center text-center">
          <motion.img
            src="/assets/icono_123.svg"
            alt=""
            className="w-[58px] md:w-[70px] mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />

          <div className="relative inline-block mb-4">
            <motion.h2
              className="text-[#58021f] text-[58px] md:text-[78px] lg:text-[95px] leading-[0.9] tracking-[0.06em] uppercase"
              style={{ fontFamily: "'Palmore-Light', serif" }}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            >
              Plan Your Event
            </motion.h2>
            <motion.span
              className="pointer-events-none absolute left-1/2 top-full -translate-x-1/2 -translate-y-[20%] md:-translate-y-[35%] text-[#deae21] text-[28px] md:text-[58px] lg:text-[82px] leading-none whitespace-nowrap"
              style={{
                fontFamily: "'AguafinaScript-Regular', cursive",
                textShadow: `2px 2px 0 #f5efdd,-2px -2px 0 #f5efdd,2px -2px 0 #f5efdd,-2px 2px 0 #f5efdd`,
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
            >
              let&apos;s celebrate
            </motion.span>
          </div>

          <motion.p
            className="text-[#030302]/70 text-[16px] md:text-[17px] leading-[1.75] max-w-[520px] mt-16 md:mt-20 mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          >
            Tell us about your event and our team will be in touch to arrange the details.
            Prefer to talk it through? Call us on{" "}
            <a href={`tel:${EVENTS_PHONE.replace(/\D/g, "")}`} className="text-[#58021f] underline underline-offset-4">
              {EVENTS_PHONE}
            </a>
            .
          </motion.p>

          <motion.div
            className="w-full"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          >
            <div className="bg-white shadow-2xl px-6 md:px-10 py-10 text-left">
              <form onSubmit={handleSubmit(onSubmit)} noValidate className="flex flex-col gap-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Field label="First Name" required error={errors.firstName?.message}>
                    <input {...register("firstName")} placeholder="First name" className={inputClass} />
                  </Field>
                  <Field label="Last Name" required error={errors.lastName?.message}>
                    <input {...register("lastName")} placeholder="Last name" className={inputClass} />
                  </Field>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Field label="Phone" required error={errors.phone?.message}>
                    <input {...register("phone")} type="tel" placeholder="(404) 555-0123" className={inputClass} />
                  </Field>
                  <Field label="Email" required error={errors.email?.message}>
                    <input {...register("email")} type="email" placeholder="example@mail.com" className={inputClass} />
                  </Field>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Field label="Date" error={errors.date?.message}>
                    <input {...register("date")} type="date" min={today} className={inputClass} />
                  </Field>
                  <Field label="End Date" hint="Only if your event runs over more than one day" error={errors.endDate?.message}>
                    <input {...register("endDate")} type="date" min={today} className={inputClass} />
                  </Field>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Field label="Start Time" error={errors.startTime?.message}>
                    <select {...register("startTime")} className={inputClass}>
                      <option value="">Select one</option>
                      {TIME_OPTIONS.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </Field>
                  <Field label="End Time" error={errors.endTime?.message}>
                    <select {...register("endTime")} className={inputClass}>
                      <option value="">Select one</option>
                      {TIME_OPTIONS.map((t) => (
                        <option key={t} value={t}>{t}</option>
                      ))}
                    </select>
                  </Field>
                </div>

                <label className="flex items-center gap-3 cursor-pointer select-none">
                  <input
                    {...register("dateFlexible")}
                    type="checkbox"
                    className="w-4 h-4 accent-[#58021f] cursor-pointer"
                  />
                  <span className="text-[14px] text-[#333]">My date is flexible</span>
                </label>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <Field label="Guest Count" error={errors.guestCount?.message}>
                    <input {...register("guestCount")} inputMode="numeric" placeholder="e.g. 24" className={inputClass} />
                  </Field>
                  <Field label="Occasion" error={errors.occasion?.message}>
                    <input {...register("occasion")} placeholder="Birthday, anniversary, corporate dinner" className={inputClass} />
                  </Field>
                </div>

                <Field label="Event Space" hint="Leave blank if you'd like us to suggest one" error={errors.eventSpace?.message}>
                  <input {...register("eventSpace")} placeholder="Any preference?" className={inputClass} />
                </Field>

                <Field label="Notes" error={errors.notes?.message}>
                  <textarea
                    {...register("notes")}
                    rows={5}
                    placeholder="Anything else we should know?"
                    className={`${inputClass} resize-none`}
                  />
                  <p className="text-[11px] text-[#999] text-right">{notesLength}/1000</p>
                </Field>

                <Field label="How did you hear about us?" error={errors.howHeard?.message}>
                  <select {...register("howHeard")} className={inputClass}>
                    <option value="">Select one</option>
                    {HOW_HEARD_OPTIONS.map((o) => (
                      <option key={o} value={o}>{o}</option>
                    ))}
                  </select>
                </Field>

                {sendError && (
                  <p className="text-[13px] text-[#58021f] border border-[#58021f]/30 bg-[#58021f]/5 px-4 py-3">
                    {sendError}
                  </p>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="mt-2 w-full bg-[#58021f] text-[#f5efdd] text-[13px] tracking-[0.25em] uppercase py-4 transition hover:bg-[#430118] disabled:opacity-60 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Submit Inquiry"}
                </button>

                <p className="text-[12px] text-[#999] text-center leading-relaxed">
                  We&apos;ll only use these details to reply about your event.
                </p>
              </form>
            </div>
          </motion.div>

          <p className="text-[14px] text-[#030302]/60 mt-10">
            {info.address}
          </p>
        </div>
      </section>
    </main>
  );
}
