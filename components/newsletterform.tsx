"use client";
import { useState } from "react";

// This form sits in the footer, so it renders on every route. It used to pull in
// react-hook-form + zod + resolvers for a single email field, which put ~100KB of
// form machinery in every page's initial bundle. One field doesn't need any of
// that, so validation is inline and the markup below is unchanged.
const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function validate(email: string): string | null {
    if (!email.trim()) return "Email is required";
    if (!EMAIL_RE.test(email)) return "Please enter a valid email address";
    return null;
}

export default function NewsletterForm() {
    const [submitted, setSubmitted] = useState(false);
    const [email, setEmail] = useState("");
    const [error, setError] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const onSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const problem = validate(email);
        if (problem) {
            setError(problem);
            return;
        }

        setError(null);
        setIsSubmitting(true);
        try {
            const res = await fetch("/api/newsletter", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify({ email }),
            });
            if (!res.ok) throw new Error("Failed to subscribe");
            setSubmitted(true);
            setEmail("");
        } catch {
            // Previously this rejection escaped into react-hook-form and the user
            // saw nothing at all; now a failed request actually says so.
            setError("Something went wrong. Please try again.");
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <div
            className="relative w-full py-12 md:py-16 px-6 flex flex-col items-center text-center gap-5"
            data-bg="/assets/fondo_negro.webp"
            style={{
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
                        ✓ You&apos;re on the list! We&apos;ll be in touch soon.
                    </div>
                ) : (
                    <form
                        onSubmit={onSubmit}
                        noValidate
                        className="w-full flex flex-col gap-2"
                    >
                        <div className="flex flex-col md:flex-row gap-3 w-full">
                            <div className="flex-1 flex flex-col gap-1">
                                <input
                                    name="email"
                                    value={email}
                                    onChange={(e) => {
                                        setEmail(e.target.value);
                                        if (error) setError(null);
                                    }}
                                    type="email"
                                    placeholder="example@mail.com"
                                    className={`w-full bg-white/10 border ${error ? "border-red-400" : "border-white/30"
                                        } text-white placeholder-white/50 px-5 py-3 text-[16px] outline-none focus:border-[#e0b265] transition`}
                                />
                                {error && (
                                    <span className="text-red-400 text-[13px] text-left pl-1">
                                        {error}
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
