"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion } from "motion/react";
import Link from "next/link";
import { getRestaurantInfo, RESTAURANT_FALLBACK, type RestaurantInfo } from "@/lib/restaurant";

declare global {
  interface Window {
    grecaptcha: {
      ready: (cb: () => void) => void;
      execute: (siteKey: string, opts: { action: string }) => Promise<string>;
    };
  }
}

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
    email: z
      .string()
      .email("Please enter a valid email address")
      .max(100, "Email is too long"),
    phone: z
      .string()
      .refine((v) => !v || phoneRegex.test(v), "Please enter a valid phone number")
      .optional()
      .or(z.literal("")),
    subject: z.string().min(1, "Please select a subject"),
    message: z
      .string()
      .min(15, "Message must be at least 15 characters")
      .max(1000, "Message cannot exceed 1000 characters"),
    marketingOptIn: z.boolean().optional(),
  })
  .superRefine((data, ctx) => {
    if (data.subject === "Private Events" && data.message.length < 40) {
      ctx.addIssue({
        code: "custom",
        message: "For event inquiries, please provide more details (at least 40 characters)",
        path: ["message"],
      });
    }
    if (data.subject === "Reservations" && !data.phone) {
      ctx.addIssue({
        code: "custom",
        message: "A phone number is helpful for reservation inquiries",
        path: ["phone"],
      });
    }
  });

type FormData = z.infer<typeof schema>;

const inputClass =
  "w-full border border-[#1b312e]/20 px-4 py-[11px] text-[14px] text-[#333] placeholder-[#bbb] focus:outline-none focus:border-[#1b312e] focus:ring-1 focus:ring-[#1b312e]/20 bg-white/80 transition";

const subjects = [
  "General Inquiry",
  "Reservations",
  "Private Events",
  "Menu Questions",
  "Gift Cards",
  "Feedback",
  "Other",
];

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
        {label} {required && <span className="text-[#1b312e]">*</span>}
      </label>
      {children}
      {hint && !error && <p className="text-[11px] text-[#999] mt-0.5">{hint}</p>}
      {error && (
        <motion.p
          className="text-[12px] text-[#1b312e] mt-0.5 flex items-center gap-1"
          initial={{ opacity: 0, y: -4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.2 }}
        >
          <span className="w-3 h-3 flex items-center justify-center border border-[#1b312e] text-[9px] flex-shrink-0">!</span>
          {error}
        </motion.p>
      )}
    </div>
  );
}

export default function ContactUs() {
  const [info, setInfo] = useState<RestaurantInfo>(RESTAURANT_FALLBACK);
  useEffect(() => { getRestaurantInfo().then(setInfo); }, []);

  useEffect(() => {
    const id = "recaptcha-script";
    if (document.getElementById(id)) return;
    const s = document.createElement("script");
    s.id = id;
    s.src = `https://www.google.com/recaptcha/api.js?render=${process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY}`;
    document.head.appendChild(s);
  }, []);

  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
      marketingOptIn: false,
    },
    mode: "onTouched",
  });

  const messageLength = watch("message")?.length ?? 0;
  const selectedSubject = watch("subject");

  const onSubmit = async (data: FormData) => {
    const recaptchaToken = await new Promise<string>((resolve) => {
      window.grecaptcha.ready(async () => {
        const token = await window.grecaptcha.execute(
          process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!,
          { action: "contact" }
        );
        resolve(token);
      });
    });

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...data, recaptchaToken }),
    });
    if (!res.ok) throw new Error("Failed to send");
    reset();
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
          <Image src="/assets/Siena_20.03.26-A-04.webp" alt="Contact Siena" fill className="object-cover object-center" priority sizes="100vw" />
        </motion.div>
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 pt-14 md:pt-16">
          <motion.div
            className="flex items-center gap-3 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="w-10 md:w-16 h-px bg-gradient-to-r from-transparent to-[#e0b265]/80" />
            <span className="text-[#e0b265] text-[11px] tracking-[0.4em]">✦</span>
            <div className="w-10 md:w-16 h-px bg-gradient-to-l from-transparent to-[#e0b265]/80" />
          </motion.div>
          <motion.h1
            className="text-[#e0b265] text-[54px] md:text-[72px] lg:text-[90px] leading-none tracking-[0.06em] uppercase"
            style={{ fontFamily: "'Palmore-Light', serif" }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            CONTACT US
          </motion.h1>
          <motion.div
            className="flex items-center gap-3 mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          >
            <div className="w-10 md:w-16 h-px bg-gradient-to-r from-transparent to-[#e0b265]/80" />
            <span className="text-[#e0b265] text-[11px] tracking-[0.4em]">✦</span>
            <div className="w-10 md:w-16 h-px bg-gradient-to-l from-transparent to-[#e0b265]/80" />
          </motion.div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="w-full bg-[#030302] py-5 overflow-hidden">
        <style>{`
          @keyframes mq-ct { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
          .mq-ct { display:flex; width:max-content; animation:mq-ct 22s linear infinite; }
        `}</style>
        <div className="mq-ct">
          {[0, 1, 2, 3].map((r) => (
            <div key={r} className="flex items-center">
              <span className="text-white text-[15px] font-semibold tracking-[0.2em] uppercase px-8 whitespace-nowrap">WE&apos;D LOVE TO HEAR FROM YOU</span>
              <img src="/assets/star.svg" alt="" className="w-5 h-5 flex-shrink-0" />
              <span className="text-white text-[15px] font-semibold tracking-[0.2em] uppercase px-8 whitespace-nowrap">RESERVATIONS &amp; EVENTS</span>
              <img src="/assets/star.svg" alt="" className="w-5 h-5 flex-shrink-0" />
              <span className="text-white text-[15px] font-semibold tracking-[0.2em] uppercase px-8 whitespace-nowrap">ALPHARETTA, GEORGIA</span>
              <img src="/assets/star.svg" alt="" className="w-5 h-5 flex-shrink-0" />
              <span className="text-white text-[15px] font-semibold tracking-[0.2em] uppercase px-8 whitespace-nowrap">124 DEVORE RD</span>
              <img src="/assets/star.svg" alt="" className="w-5 h-5 flex-shrink-0" />
            </div>
          ))}
        </div>
      </section>

      {/* CENTERED FORM SECTION */}
      <section className="relative w-full py-[80px] md:py-[100px] overflow-hidden" style={{ backgroundColor: "#1b312e" }}>
        <div className="w-full max-w-[720px] mx-auto px-4 flex flex-col items-center text-center">

          <motion.img
            src="/assets/icono_123.svg"
            alt=""
            className="w-[58px] md:w-[70px] mb-4"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            animate={{ y: [0, -6, 0] }}
          />

          <div className="relative inline-block mb-4">
            <motion.h2
              className="text-[#e0b265] text-[58px] md:text-[78px] lg:text-[95px] leading-[0.9] tracking-[0.06em] uppercase"
              style={{ fontFamily: "'Palmore-Light', serif" }}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            >
              Let&apos;s Talk
            </motion.h2>
            <motion.span
              className="pointer-events-none absolute left-1/2 top-full -translate-x-1/2 -translate-y-[20%] md:-translate-y-[35%] text-[#e0b265] text-[28px] md:text-[58px] lg:text-[82px] leading-none whitespace-nowrap"
              style={{
                fontFamily: "'AguafinaScript-Regular', cursive",
                textShadow: `2px 2px 0 #1b312e,-2px -2px 0 #1b312e,2px -2px 0 #1b312e,-2px 2px 0 #1b312e`,
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
            >
              we&apos;re listening
            </motion.span>
          </div>

          <motion.p
            className="text-white/70 text-[16px] md:text-[17px] leading-[1.75] max-w-[520px] mt-16 md:mt-20 mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          >
            Have a question, a special request, or want to plan a private event?
            Send us a message and our team will respond within 24 hours.
          </motion.p>

          <motion.div
            className="w-full"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          >
            <div className="bg-white shadow-2xl px-6 md:px-10 py-10 text-left">
              {isSubmitSuccessful ? (
                <motion.div
                  className="flex flex-col items-center text-center gap-5 py-14"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.div
                    className="w-14 h-14 bg-[#1b312e] flex items-center justify-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
                  >
                    <svg width="26" height="26" viewBox="0 0 48 48" fill="none">
                      <path d="M12 24L21 33L36 16" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </motion.div>
                  <h3
                    className="text-[30px] text-[#1b312e]"
                    style={{ fontFamily: "'Palmore-Light', serif" }}
                  >
                    Message Sent!
                  </h3>
                  <p className="text-[14px] text-[#666] leading-relaxed max-w-[380px]">
                    Thank you for reaching out. Our team will get back to you within 24 hours.
                  </p>
                </motion.div>
              ) : (
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
                    <Field label="Email" required error={errors.email?.message}>
                      <input {...register("email")} type="email" placeholder="example@mail.com" className={inputClass} />
                    </Field>
                    <Field
                      label="Phone Number"
                      error={errors.phone?.message}
                      hint={selectedSubject === "Reservations" ? "Recommended for reservation inquiries" : undefined}
                    >
                      <input {...register("phone")} placeholder="(000) 000-0000" className={inputClass} />
                    </Field>
                  </div>

                  <Field label="Subject" required error={errors.subject?.message}>
                    <select {...register("subject")} className={`${inputClass} appearance-none cursor-pointer`}>
                      <option value="">Select a topic</option>
                      {subjects.map((s) => (
                        <option key={s} value={s}>{s}</option>
                      ))}
                    </select>
                  </Field>

                  <Field label="Message" required error={errors.message?.message}>
                    <div className="relative">
                      <textarea
                        {...register("message")}
                        placeholder={
                          selectedSubject === "Private Events"
                            ? "Tell us about your event: date, size, occasion..."
                            : "How can we help you?"
                        }
                        rows={5}
                        className={`${inputClass} resize-none`}
                      />
                      <span
                        className={`absolute bottom-2 right-3 text-[11px] ${
                          messageLength > 950 ? "text-[#1b312e]" : "text-[#ccc]"
                        }`}
                      >
                        {messageLength}/1000
                      </span>
                    </div>
                  </Field>

                  <div className="mt-1 border-t border-[#1b312e]/15 pt-5">
                    <h4 className="text-[#1b312e] text-[22px] md:text-[24px] leading-tight mb-5">
                      Contact Form Consent
                    </h4>
                    <label className="flex items-start gap-3 cursor-pointer select-none">
                      <input
                        {...register("marketingOptIn")}
                        type="checkbox"
                        className="w-4 h-4 mt-1 accent-[#1b312e] cursor-pointer flex-shrink-0"
                      />
                      <span className="text-[13px] text-[#333] leading-[1.65]">
                        I agree to receive recurring promotional SMS messages from Siena Restaurant about events,
                        offers, specials, and restaurant updates. Message frequency varies. Message and data rates may
                        apply. Reply STOP to opt out or HELP for help. Consent is not a condition of purchase. See our{" "}
                        <Link href="/privacy-policy" className="text-[#1b312e] underline underline-offset-2 hover:text-[#e0b265]">
                          Privacy Notice
                        </Link>{" "}
                        and{" "}
                        <Link href="/terms-of-service" className="text-[#1b312e] underline underline-offset-2 hover:text-[#e0b265]">
                          Terms &amp; Conditions
                        </Link>
                        .
                      </span>
                    </label>
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group bg-[#e0b265] text-[#1b312e] w-full px-4 py-3 font-normal text-[14px] md:text-[15px] flex items-center justify-center gap-2 hover:bg-[#1b312e] hover:text-[#e0b265] transition disabled:opacity-60 mt-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-[#1b312e]/40 border-t-[#1b312e] rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        SEND MESSAGE
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 20" fill="none">
                          <path d="M15.3025 11.0285L2 11.0285L2 8.97146L15.3025 8.97146L11.1214 4.45436L12.4872 3L19 10L12.4872 17L11.1214 15.5456L15.3025 11.0285Z" fill="#1b312e" />
                        </svg>
                      </>
                    )}
                  </button>
                </form>
              )}
            </div>
          </motion.div>
        </div>
      </section>

      {/* DIVIDER */}
      <section className="relative w-full h-[40px] md:h-[58px] overflow-hidden bg-[#f4eedd]">
        <img src="/assets/divisor_beige.svg" alt="" className="absolute inset-0 w-full h-full object-cover" />
      </section>

      {/* FIND US */}
      <section
        className="relative w-full py-12 md:py-20 overflow-hidden"
        style={{
          backgroundImage: "url('/assets/contact_bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full max-w-[1180px] mx-auto px-4 md:px-0">
        <motion.div
          className="relative overflow-hidden p-8 md:p-12 flex flex-col md:flex-row items-stretch gap-8 md:gap-12 bg-[#1e3833]"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.38, ease: "easeOut" }}
        >
          <div className="absolute inset-3 border border-[#e0b265]/20 pointer-events-none" />

          <div className="flex-1 flex flex-col gap-4 md:gap-5 relative z-10 w-full">
            <img src="/assets/icono_findus.svg" alt="" className="w-[55px] md:w-[68px] h-auto" />
            <h2
              className="text-[#e0b265] text-[52px] md:text-[72px] font-bold tracking-wide leading-none"
              style={{ fontFamily: "'Palmore-Light', serif" }}
            >
              FIND US
            </h2>

            <a
              href={info.maps_url}
              target="_blank"
              rel="noopener noreferrer"
              className="group flex items-start gap-2 text-white/85 text-[16px] md:text-[18px] leading-[1.5] hover:text-[#e0b265] transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" className="mt-0.5 flex-shrink-0">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"
                  className="fill-[#e0b265] group-hover:fill-white transition-colors duration-300" />
              </svg>
              {info.address}
            </a>

            <a
              href={`tel:${info.phone.replace(/\D/g, '')}`}
              className="group flex items-center gap-2 text-white/85 text-[16px] md:text-[18px] hover:text-[#e0b265] transition"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none">
                <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
                  className="fill-[#e0b265] group-hover:fill-white transition-colors duration-300" />
              </svg>
              {info.phone}
            </a>

            <div className="flex flex-col gap-2 mt-2">
              <p
                className="text-white text-[30px] md:text-[38px] tracking-wide uppercase leading-none"
                style={{ fontFamily: "'Palmore-Light', serif" }}
              >
                Opening Hours
              </p>
              <div className="w-8 h-[2px] bg-[#e0b265]/40 mb-1" />
              {info.hours.map(({ label, value }) => (
                <p key={label} className="text-white/80 text-[16px] md:text-[18px]">
                  <span className="font-semibold">{label}</span>: {value}
                </p>
              ))}
            </div>

            <a
              href={info.maps_url}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#e0b265] text-[#1b312e] px-4 md:px-9 py-2 font-normal text-[14px] md:text-[15px] leading-[24px] flex items-center gap-2 w-fit border border-transparent hover:bg-white hover:text-[#1b312e] hover:border-white transition mt-1 md:mt-2"
            >
              OPEN IN MAP
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 20" fill="none">
                <path d="M15.3025 11.0285L2 11.0285L2 8.97146L15.3025 8.97146L11.1214 4.45436L12.4872 3L19 10L12.4872 17L11.1214 15.5456L15.3025 11.0285Z" fill="#1b312e" />
              </svg>
            </a>
          </div>

          <div className="flex-1 overflow-hidden shadow-lg relative z-10 w-full min-h-[240px] md:min-h-[420px]">
            <iframe
              title="Siena Restaurant location on Google Maps"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3305.051868613463!2d-84.2991249!3d34.06818459999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88f575f4dbde006b%3A0x8a505a045593f782!2sSiena%20Restaurant!5e0!3m2!1ses-419!2scr!4v1777903381535!5m2!1ses-419!2scr"
              className="w-full h-full absolute inset-0"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </motion.div>
        </div>
      </section>

      <section className="relative w-full h-[28px] overflow-hidden bg-[#030302]">
        <img src="/assets/divisor_estrella3.svg" alt="" className="absolute inset-0 w-full h-full object-cover scale-y-125" />
      </section>
    </main>
  );
}
