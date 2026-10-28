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
            className="siena-view-11"
            data-bg="/assets/fondo_negro.webp"
            style={{
                backgroundSize: "cover",
                backgroundPosition: "center",
            }}
        >
            {/* Overlay oscuro */}
            <div className="siena-view-12" />

            <div className="siena-view-13">

                <h2
                    className="siena-view-14"
                    style={{ fontFamily: "'Palmore-Light', serif" }}
                >
                    Join our newsletter
                </h2>

                <p className="siena-view-15">
                    Be the first to know about events, menus, and specials
                </p>

                {submitted ? (
                    <div className="siena-view-16">
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
                                className="siena-view-17"
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
