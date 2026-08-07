"use client";
import Link from "next/link";
import { useState, useEffect } from "react";
import { motion } from "motion/react";
import { getRestaurantInfo, RESTAURANT_FALLBACK, type RestaurantInfo } from "@/lib/restaurant";

// Events are handled on a separate line from the main restaurant number in site-data.json.
const EVENTS_PHONE = "(404) 488-3399";

export default function ThankYou() {
  const [info, setInfo] = useState<RestaurantInfo>(RESTAURANT_FALLBACK);
  useEffect(() => {
    getRestaurantInfo().then(setInfo);
  }, []);

  return (
    <main>
      <section
        className="relative w-full min-h-[80vh] flex items-center justify-center py-[100px] px-4"
        style={{ backgroundColor: "#1b312e" }}
      >
        <div className="w-full max-w-[620px] mx-auto flex flex-col items-center text-center">
          <motion.div
            className="w-16 h-16 bg-[#e0b265] flex items-center justify-center mb-8"
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300, delay: 0.1 }}
          >
            <svg width="30" height="30" viewBox="0 0 48 48" fill="none">
              <path d="M12 24L21 33L36 16" stroke="#1b312e" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </motion.div>

          <motion.div
            className="flex items-center gap-3 mb-5"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div className="w-10 md:w-16 h-px bg-gradient-to-r from-transparent to-[#e0b265]" />
            <span className="text-[#e0b265] text-[11px] tracking-[0.4em]">✦</span>
            <div className="w-10 md:w-16 h-px bg-gradient-to-l from-transparent to-[#e0b265]" />
          </motion.div>

          <motion.h1
            className="text-[#e0b265] text-[52px] md:text-[72px] leading-[0.9] tracking-[0.06em] uppercase"
            style={{ fontFamily: "'Palmore-Light', serif" }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.25, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Thank You
          </motion.h1>

          <motion.p
            className="text-white/70 text-[16px] md:text-[17px] leading-[1.75] max-w-[480px] mt-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            We&apos;ve got your event inquiry. Our team will be in touch shortly to talk through
            the details and get your date in the calendar.
          </motion.p>

          <motion.p
            className="text-white/70 text-[15px] leading-[1.75] mt-5"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.55 }}
          >
            Need us sooner? Call{" "}
            <a href={`tel:${EVENTS_PHONE.replace(/\D/g, "")}`} className="text-[#e0b265] underline underline-offset-4">
              {EVENTS_PHONE}
            </a>
            .
          </motion.p>

          <motion.div
            className="flex flex-col sm:flex-row gap-4 mt-12 w-full sm:w-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.65 }}
          >
            <Link
              href="/menus"
              className="bg-[#e0b265] text-[#1b312e] text-[13px] tracking-[0.25em] uppercase px-10 py-4 transition hover:bg-white hover:text-[#1b312e]"
            >
              View the Menus
            </Link>
            <Link
              href="/"
              className="border border-[#e0b265] text-[#e0b265] text-[13px] tracking-[0.25em] uppercase px-10 py-4 transition hover:bg-[#e0b265] hover:text-[#1b312e]"
            >
              Back to Home
            </Link>
          </motion.div>

          <motion.p
            className="text-[14px] text-white/50 mt-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            {info.address}
          </motion.p>
        </div>
      </section>
    </main>
  );
}
