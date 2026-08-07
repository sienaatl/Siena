"use client";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { useState } from "react";

const newsletterSchema = z.object({
    email: z
        .string()
        .min(1, "Email is required")
        .email("Please enter a valid email address"),
});

type NewsletterForm = z.infer<typeof newsletterSchema>;

export default function NewsletterForm() {
    const [submitted, setSubmitted] = useState(false);

    const {
        register,
        handleSubmit,
        reset,
        formState: { errors, isSubmitting },
    } = useForm<NewsletterForm>({
        resolver: zodResolver(newsletterSchema),
        defaultValues: { email: "" },
    });

    const onSubmit = async (data: NewsletterForm) => {
        const res = await fetch("/api/newsletter", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(data),
        });
        if (!res.ok) throw new Error("Failed to subscribe");
        setSubmitted(true);
        reset();
    };

    return (
        <div
            className="relative w-full py-12 md:py-16 px-6 flex flex-col items-center text-center gap-5"
            style={{
                backgroundImage: "url('/assets/fondo_negro.webp')",
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Overlay oscuro */}
            <div className="absolute inset-0 bg-[black]/80 pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center gap-4 md:gap-5 w-full max-w-[600px]">

                <h2
                    className="text-[#e0b265] text-[62px] md:text-[85px] leading-[1.1] whitespace-nowrap"
                    style={{ fontFamily: "'Palmore-Light', serif" }}
                >
                    Join our newsletter
                </h2>

                <p className="text-white/80 text-lg md:text-lg leading-[1.6]">
                    Be the first to know about events, menus, and specials
                </p>

                {submitted ? (
                    <div className="bg-white/10 border border-[#e0b265] px-8 py-5 text-white text-[16px]">
                        ✓ You're on the list! We'll be in touch soon.
                    </div>
                ) : (
                    <form
                        onSubmit={handleSubmit(onSubmit)}
                        className="w-full flex flex-col gap-2"
                    >
                        <div className="flex flex-col md:flex-row gap-3 w-full">
                            <div className="flex-1 flex flex-col gap-1">
                                <input
                                    {...register("email")}
                                    type="email"
                                    placeholder="example@mail.com"
                                    className={`w-full bg-white/10 border ${errors.email ? "border-red-400" : "border-white/30"
                                        } text-white placeholder-white/50 px-5 py-3 text-[16px] outline-none focus:border-[#e0b265] transition`}
                                />
                                {errors.email && (
                                    <span className="text-red-400 text-[13px] text-left pl-1">
                                        {errors.email.message}
                                    </span>
                                )}
                            </div>

                            <button
                                type="submit"
                                disabled={isSubmitting}
                                className="bg-[#e0b265] text-[#1b312e] px-4 md:px-9 py-2 font-normal text-[14px] md:text-[15px] leading-[20px] md:leading-[24px] border border-transparent hover:bg-[#1b312e] hover:text-[#e0b265] hover:border-[#e0b265] transition disabled:opacity-60 whitespace-nowrap w-full md:w-auto"
                            >
                                {isSubmitting ? "Subscribing..." : "SUBSCRIBE"}
                            </button>
                        </div>
                    </form>
                )}

            </div>
        </div>
    );
}