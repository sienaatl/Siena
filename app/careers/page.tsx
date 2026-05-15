"use client";
import Image from "next/image";
import { useForm, useFieldArray } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { motion, AnimatePresence } from "motion/react";

const workEntrySchema = z.object({
  employer: z.string().min(2, "Employer name is required"),
  role: z.string().min(2, "Role is required"),
  duration: z.string().min(1, "Duration is required"),
});

const KITCHEN_POSITIONS = ["Line Cook", "Prep Cook", "Dishwasher"];
const DAYS = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const schema = z
  .object({
    firstName: z
      .string()
      .min(2, "First name must be at least 2 characters")
      .max(50, "First name is too long"),
    lastName: z
      .string()
      .min(2, "Last name must be at least 2 characters")
      .max(50, "Last name is too long"),
    email: z.string().email("Please enter a valid email address"),
    phone: z
      .string()
      .refine(
        (v) => /^(\+?1[-.\s]?)?(\(?\d{3}\)?[-.\s]?)?\d{3}[-.\s]?\d{4}$/.test(v),
        "Please enter a valid phone number"
      ),
    residence: z.string().min(2, "Please tell us where you live").max(100),
    position: z.string().min(1, "Please select a position"),
    availability: z.array(z.string()).min(1, "Please select at least one available day"),
    experience: z
      .string()
      .min(5, "Please describe your experience")
      .max(300, "Too long — keep it under 300 characters"),
    previousWork: z.array(workEntrySchema).optional(),
    coverLetter: z
      .string()
      .max(1000, "Cover letter cannot exceed 1000 characters")
      .optional()
      .or(z.literal("")),
    resume: z
      .any()
      .refine(
        (f) => !f || f.length === 0 || f[0]?.size <= 5 * 1024 * 1024,
        "File must be under 5MB"
      )
      .refine(
        (f) =>
          !f ||
          f.length === 0 ||
          ["application/pdf", "application/msword", "application/vnd.openxmlformats-officedocument.wordprocessingml.document"].includes(f[0]?.type),
        "Only PDF or Word documents are accepted"
      )
      .optional(),
  })
  .superRefine((data, ctx) => {
    if (KITCHEN_POSITIONS.includes(data.position) && data.experience.length < 30) {
      ctx.addIssue({
        code: "custom",
        message: "Kitchen roles require a more detailed experience description (at least 30 characters)",
        path: ["experience"],
      });
    }
    if (data.position === "Bartender" && !data.coverLetter) {
      ctx.addIssue({
        code: "custom",
        message: "A cover letter is required for bartender applications",
        path: ["coverLetter"],
      });
    }
  });

type FormData = z.infer<typeof schema>;

const inputClass =
  "w-full border border-[#58021f]/20 px-4 py-[11px] text-[14px] text-[#333] placeholder-[#bbb] focus:outline-none focus:border-[#58021f] focus:ring-1 focus:ring-[#58021f]/20 bg-white transition";

const positions = [
  "Server / Food Runner",
  "Bartender",
  "Line Cook",
  "Prep Cook",
  "Dishwasher",
  "Host / Hostess",
  "Event Coordinator",
  "Other",
];

const benefits = [
  {
    title: "Vibrant Culture",
    desc: "Join a passionate team that takes pride in hospitality, creativity, and Mediterranean-inspired excellence.",
  },
  {
    title: "Grow With Us",
    desc: "Whether you're starting out or advancing your career, Siena supports your professional growth every step of the way.",
  },
  {
    title: "Make It Special",
    desc: "Every shift is an opportunity to create memorable experiences for guests who come to celebrate life at our table.",
  },
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

export default function Careers() {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    control,
    setValue,
    getValues,
    formState: { errors, isSubmitting, isSubmitSuccessful },
  } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      residence: "",
      position: "",
      availability: [],
      experience: "",
      previousWork: [],
      coverLetter: "",
    },
    mode: "onTouched",
  });

  const { fields: workFields, append: appendWork, remove: removeWork } = useFieldArray({
    control,
    name: "previousWork",
  });

  const resumeFile = watch("resume");
  const coverLetterLength = watch("coverLetter")?.length ?? 0;
  const selectedPosition = watch("position");
  const availability = watch("availability") ?? [];
  const fileName = resumeFile?.[0]?.name;

  const toggleDay = (day: string) => {
    const current = getValues("availability") ?? [];
    setValue(
      "availability",
      current.includes(day) ? current.filter((d: string) => d !== day) : [...current, day],
      { shouldValidate: true }
    );
  };

  const onSubmit = async (_data: FormData) => {
    await new Promise((r) => setTimeout(r, 900));
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
          <Image src="/assets/hero_careers.jpg" alt="Careers at Siena" fill className="object-cover object-center" priority sizes="100vw" />
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
            className="text-[#f5efdd] text-[62px] md:text-[82px] lg:text-[104px] leading-none tracking-[0.06em] uppercase"
            style={{ fontFamily: "'Palmore-Light', serif" }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            CAREERS
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
          @keyframes mq-car { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
          .mq-car { display:flex; width:max-content; animation:mq-car 22s linear infinite; }
        `}</style>
        <div className="mq-car">
          {[0, 1, 2, 3].map((r) => (
            <div key={r} className="flex items-center">
              <span className="text-white text-[15px] font-semibold tracking-[0.2em] uppercase px-8 whitespace-nowrap">CHEF-DRIVEN KITCHEN</span>
              <img src="/assets/star.svg" alt="" className="w-5 h-5 flex-shrink-0" />
              <span className="text-white text-[15px] font-semibold tracking-[0.2em] uppercase px-8 whitespace-nowrap">PASSIONATE TEAM</span>
              <img src="/assets/star.svg" alt="" className="w-5 h-5 flex-shrink-0" />
              <span className="text-white text-[15px] font-semibold tracking-[0.2em] uppercase px-8 whitespace-nowrap">GROW WITH SIENA</span>
              <img src="/assets/star.svg" alt="" className="w-5 h-5 flex-shrink-0" />
              <span className="text-white text-[15px] font-semibold tracking-[0.2em] uppercase px-8 whitespace-nowrap">MEDITERRANEAN EXCELLENCE</span>
              <img src="/assets/star.svg" alt="" className="w-5 h-5 flex-shrink-0" />
            </div>
          ))}
        </div>
      </section>

      {/* WHY JOIN US */}
      <section className="relative w-full py-[80px] overflow-hidden" style={{ backgroundColor: "#f5efdd" }}>
        <div className="w-full max-w-[1180px] mx-auto px-4">
          <div className="flex flex-col items-center text-center mb-14">
            <motion.img
              src="/assets/icono_123.svg"
              alt=""
              className="w-[60px] md:w-[75px] mb-4"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              animate={{ y: [0, -6, 0] }}
            />
            <div className="relative inline-block">
              <motion.h2
                className="text-[#58021f] text-[58px] md:text-[78px] lg:text-[95px] leading-[0.9] tracking-[0.06em] uppercase"
                style={{ fontFamily: "'Palmore-Light', serif" }}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
              >
                Be Part of the Story
              </motion.h2>
              <motion.span
                className="pointer-events-none absolute left-1/2 top-full -translate-x-1/2 -translate-y-[20%] md:-translate-y-[35%] text-[#deae21] text-[26px] md:text-[58px] lg:text-[82px] leading-none whitespace-nowrap"
                style={{
                  fontFamily: "'AguafinaScript-Regular', cursive",
                  textShadow: `2px 2px 0 #f5efdd,-2px -2px 0 #f5efdd,2px -2px 0 #f5efdd,-2px 2px 0 #f5efdd`,
                }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
              >
                together
              </motion.span>
            </div>
            <motion.p
              className="text-[#030302]/80 text-lg md:text-xl leading-[140%] max-w-[680px] mt-12 md:mt-24"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
            >
              At Siena, we believe that exceptional dining starts with an exceptional team. We&apos;re always looking for
              passionate individuals who love hospitality and great food.
            </motion.p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-6">
            {benefits.map((b, i) => (
              <motion.div
                key={i}
                className="bg-[#030302] p-8 flex flex-col gap-4 cursor-default"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: i * 0.15, ease: "easeOut" }}
                whileHover={{ y: -6, transition: { duration: 0.25 } }}
              >
                <span className="text-[#deae21] text-[28px]">✦</span>
                <div className="w-8 h-[2px] bg-[#deae21]" />
                <h3 className="text-[#f5efdd] text-[28px] leading-tight" style={{ fontFamily: "'Palmore-Light', serif" }}>
                  {b.title}
                </h3>
                <p className="text-[#f5efdd]/70 text-[15px] leading-[1.7]">{b.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* DIVIDER */}
      <section className="relative w-full h-[40px] md:h-[58px] overflow-hidden bg-[#f4eedd]">
        <img src="/assets/divisor_beige.svg" alt="" className="absolute inset-0 w-full h-full object-cover" />
      </section>

      {/* APPLICATION FORM */}
      <section
        className="relative w-full py-[80px] overflow-hidden"
        style={{ backgroundImage: "url('/assets/fondo_findus.webp')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="w-full max-w-[1180px] mx-auto px-4">
          <div className="flex flex-col items-center text-center mb-10">
            <motion.img
              src="/assets/icon_careers2.svg"
              alt=""
              className="w-[75px] md:w-[95px]"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
            <div className="relative inline-block">
              <motion.h2
                className="text-[#58021f] text-[55px] md:text-[75px] lg:text-[90px] leading-[0.9] tracking-[0.06em] uppercase"
                style={{ fontFamily: "'Palmore-Light', serif" }}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
              >
                Apply Now
              </motion.h2>
              <motion.span
                className="pointer-events-none absolute left-1/2 top-full -translate-x-1/2 -translate-y-[20%] md:-translate-y-[35%] text-[#deae21] text-[28px] md:text-[55px] lg:text-[78px] leading-none whitespace-nowrap"
                style={{
                  fontFamily: "'AguafinaScript-Regular', cursive",
                  textShadow: `2px 2px 0 #f5efdd,-2px -2px 0 #f5efdd,2px -2px 0 #f5efdd,-2px 2px 0 #f5efdd`,
                }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
              >
                let&apos;s meet
              </motion.span>
            </div>
          </div>

          <motion.div
            className="bg-white/96 shadow-2xl w-full max-w-[740px] mx-auto px-6 md:px-10 py-10 mt-16 md:mt-20"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.05 }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <AnimatePresence mode="wait">
              {isSubmitSuccessful ? (
                <motion.div
                  key="success"
                  className="flex flex-col items-center text-center gap-5 py-14"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <motion.div
                    className="w-14 h-14 bg-[#58021f] flex items-center justify-center"
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
                  >
                    <svg width="26" height="26" viewBox="0 0 48 48" fill="none">
                      <path d="M12 24L21 33L36 16" stroke="#f4eedd" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </motion.div>
                  <h3 className="text-[28px] text-[#58021f]" style={{ fontFamily: "'Palmore-Light', serif" }}>
                    Application Sent!
                  </h3>
                  <p className="text-[14px] text-[#666] leading-relaxed max-w-[380px]">
                    Thank you for your interest in joining the Siena team. We&apos;ll review your application and be in touch soon.
                  </p>
                </motion.div>
              ) : (
                <motion.form
                  key="form"
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                  className="flex flex-col gap-5"
                  initial={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                >
                  {/* Personal Info */}
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
                    <Field label="Phone Number" required error={errors.phone?.message}>
                      <input {...register("phone")} placeholder="(000) 000-0000" className={inputClass} />
                    </Field>
                  </div>
                  <Field label="Place of Residence" required error={errors.residence?.message}>
                    <input {...register("residence")} placeholder="Where do you currently live?" className={inputClass} />
                  </Field>

                  {/* Position */}
                  <Field label="Applying For" required error={errors.position?.message}>
                    <select {...register("position")} className={`${inputClass} appearance-none cursor-pointer`}>
                      <option value="">Select a position</option>
                      {positions.map((p) => (
                        <option key={p} value={p}>{p}</option>
                      ))}
                    </select>
                  </Field>

                  {/* Availability (day toggles) */}
                  <Field label="Availability" required error={errors.availability?.message}>
                    <div className="flex flex-wrap gap-2 pt-1">
                      {DAYS.map((day) => {
                        const active = availability.includes(day);
                        return (
                          <button
                            key={day}
                            type="button"
                            onClick={() => toggleDay(day)}
                            className={`px-4 py-2 text-[13px] font-semibold tracking-wide border transition cursor-pointer ${
                              active
                                ? "bg-[#58021f] text-[#f5efdd] border-[#58021f]"
                                : "bg-white text-[#555] border-[#58021f]/20 hover:border-[#58021f]"
                            }`}
                          >
                            {day}
                          </button>
                        );
                      })}
                    </div>
                  </Field>

                  {/* Experience */}
                  <Field
                    label="Service Industry Experience"
                    required
                    error={errors.experience?.message}
                    hint={
                      KITCHEN_POSITIONS.includes(selectedPosition)
                        ? "Kitchen roles require detailed description of your experience"
                        : undefined
                    }
                  >
                    <input {...register("experience")} placeholder="e.g. 3 years as a server at fine dining establishments" className={inputClass} />
                  </Field>

                  {/* Previous Work — field array */}
                  <div className="flex flex-col gap-3">
                    <div className="flex items-center justify-between">
                      <label className="text-[12px] font-semibold text-[#222] tracking-wider uppercase">
                        Previous Experience <span className="text-[#999] normal-case font-normal">(optional)</span>
                      </label>
                      <button
                        type="button"
                        onClick={() => appendWork({ employer: "", role: "", duration: "" })}
                        className="text-[12px] text-[#58021f] border border-[#58021f]/30 px-3 py-1 hover:bg-[#58021f] hover:text-[#f5efdd] transition flex items-center gap-1 cursor-pointer"
                      >
                        <span className="text-[16px] leading-none">+</span> Add Entry
                      </button>
                    </div>

                    <AnimatePresence>
                      {workFields.map((field, i) => (
                        <motion.div
                          key={field.id}
                          className="border border-[#58021f]/15 p-4 bg-[#fdf9f2] flex flex-col gap-3 relative"
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.25 }}
                        >
                          <button
                            type="button"
                            onClick={() => removeWork(i)}
                            className="absolute top-3 right-3 text-[#aaa] hover:text-[#58021f] transition text-[18px] leading-none cursor-pointer"
                          >
                            ×
                          </button>
                          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                            <Field label="Employer" error={errors.previousWork?.[i]?.employer?.message}>
                              <input {...register(`previousWork.${i}.employer`)} placeholder="Restaurant name" className={inputClass} />
                            </Field>
                            <Field label="Role" error={errors.previousWork?.[i]?.role?.message}>
                              <input {...register(`previousWork.${i}.role`)} placeholder="e.g. Server" className={inputClass} />
                            </Field>
                            <Field label="Duration" error={errors.previousWork?.[i]?.duration?.message}>
                              <input {...register(`previousWork.${i}.duration`)} placeholder="e.g. 2 years" className={inputClass} />
                            </Field>
                          </div>
                        </motion.div>
                      ))}
                    </AnimatePresence>
                  </div>

                  {/* Cover Letter */}
                  <Field
                    label="Cover Letter"
                    error={errors.coverLetter?.message}
                    hint={selectedPosition === "Bartender" ? "Required for bartender applications" : undefined}
                  >
                    <div className="relative">
                      <textarea
                        {...register("coverLetter")}
                        placeholder="Why would you like to join the Siena team?"
                        rows={4}
                        className={`${inputClass} resize-none`}
                      />
                      <span className={`absolute bottom-2 right-3 text-[11px] ${coverLetterLength > 950 ? "text-[#58021f]" : "text-[#ccc]"}`}>
                        {coverLetterLength}/1000
                      </span>
                    </div>
                  </Field>

                  {/* Resume Upload */}
                  <Field label="Resume" error={errors.resume?.message as string}>
                    <label className="flex flex-col items-center justify-center gap-2 border border-dashed border-[#58021f]/30 px-4 py-6 cursor-pointer hover:border-[#58021f] transition text-center group">
                      <svg width="28" height="28" viewBox="0 0 24 24" fill="none" className="group-hover:scale-110 transition-transform">
                        <path d="M12 16V8M12 8L9 11M12 8L15 11" stroke="#aaa" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                        <path d="M3 15V17C3 18.1046 3.89543 19 5 19H19C20.1046 19 21 18.1046 21 17V15" stroke="#aaa" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                      <span className="text-[13px] text-[#aaa]">
                        {fileName ? fileName : "Click or drag your resume here (PDF or Word, max 5MB)"}
                      </span>
                      <input {...register("resume")} type="file" accept=".pdf,.doc,.docx" className="hidden" />
                    </label>
                  </Field>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group bg-[#58021f] text-[#f5efdd] w-full px-4 py-3 font-normal text-[14px] md:text-[15px] flex items-center justify-center gap-2 hover:bg-[#030302] transition disabled:opacity-60 mt-2 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <>
                        <span className="w-4 h-4 border-2 border-[#f5efdd]/40 border-t-[#f5efdd] rounded-full animate-spin" />
                        Sending...
                      </>
                    ) : (
                      <>
                        SUBMIT APPLICATION
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 20 20" fill="none">
                          <path d="M15.3025 11.0285L2 11.0285L2 8.97146L15.3025 8.97146L11.1214 4.45436L12.4872 3L19 10L12.4872 17L11.1214 15.5456L15.3025 11.0285Z" fill="#f5efdd" />
                        </svg>
                      </>
                    )}
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </motion.div>
        </div>
      </section>

      {/* PHOTO STRIP */}
      <section className="w-full overflow-hidden">
        <style>{`
          @keyframes strip-car { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
          .strip-car { display:flex; width:max-content; animation:strip-car 35s linear infinite; }
        `}</style>
        <div className="strip-car">
          {[0, 1, 2, 3].map((r) => (
            <div key={r} className="flex">
              {[2, 5, 9, 13, 17, 23].map((n) => (
                <div key={n} className="flex-shrink-0 h-[220px] md:h-[300px] w-[220px] md:w-[300px] overflow-hidden group">
                  <img
                    src={`/assets/gallery${n}.webp`}
                    alt=""
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
