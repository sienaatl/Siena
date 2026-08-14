"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { getRestaurantInfo, RESTAURANT_FALLBACK, type RestaurantInfo } from "@/lib/restaurant";
import { useEffect, useState } from "react";

const RESERVE_URL = "https://www.opentable.com/r/siena-restaurant-alpharetta";

const performers = [
  {
    name: "Nicole Marie Quinn",
    role: "Vocals & Piano",
    blurb: "Soulful live music for an unforgettable Friday night.",
  },
  {
    name: "Kandice Cherelle",
    role: "Featured Vocalist",
    blurb: "Powerful vocals, great energy and a night to remember.",
  },
];

const marqueePhrases = [
  "LIVE MUSIC EVERY FRIDAY",
  "MEDITERRANEAN-ITALIAN DINING",
  "HANDCRAFTED COCKTAILS",
  "7–10 PM · ALPHARETTA, GA",
];

function MusicIcon({ className }: { className?: string }) {
  return (
    <svg className={className} xmlns="http://www.w3.org/2000/svg" width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round" strokeLinejoin="round">
      <path d="M9 18V5l12-2v13" />
      <circle cx="6" cy="18" r="3" />
      <circle cx="18" cy="16" r="3" />
    </svg>
  );
}

export default function LiveMusicFridays() {
  const [info, setInfo] = useState<RestaurantInfo>(RESTAURANT_FALLBACK);
  useEffect(() => {
    getRestaurantInfo().then(setInfo);
  }, []);

  return (
    <main>
      {/* HERO */}
      <section className="relative w-full h-[560px] md:h-[86vh] overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        >
          <Image
            src="/assets/Siena_20.03.26-A-05.webp"
            alt="Live music evenings at Siena Restaurant & Bar in Alpharetta"
            fill
            className="object-cover object-center"
            priority
            sizes="100vw"
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/60" />
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

          <motion.div
            className="text-[#e0b265] text-[11px] font-semibold tracking-[0.35em] uppercase mb-3"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1, ease: "easeOut" }}
          >
            Great Food · Crafted Cocktails · Live Music
          </motion.div>

          <motion.h1
            className="text-[#e0b265] text-[54px] md:text-[80px] lg:text-[104px] leading-none tracking-[0.04em] uppercase"
            style={{ fontFamily: "'Palmore-Light', serif" }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Live Music Fridays
          </motion.h1>

          <motion.p
            className="text-white/80 text-[16px] md:text-[19px] leading-[1.7] max-w-[640px] mt-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2, ease: "easeOut" }}
          >
            Set the tone for your weekend with an elevated night of live music, Mediterranean-Italian flavors and
            handcrafted cocktails at Siena.
          </motion.p>

          <motion.div
            className="flex flex-wrap justify-center gap-x-8 gap-y-2 mt-7 text-white/70 text-[12px] tracking-[0.2em] uppercase"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3, ease: "easeOut" }}
          >
            <span className="border-l-2 border-[#e0b265] pl-3">Every Friday</span>
            <span className="border-l-2 border-[#e0b265] pl-3">7 PM – 10 PM</span>
            <span className="border-l-2 border-[#e0b265] pl-3">Alpharetta, Georgia</span>
          </motion.div>

          <motion.div
            className="flex flex-wrap justify-center gap-4 mt-8"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4, ease: "easeOut" }}
          >
            <a
              href={RESERVE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group bg-[#e0b265] text-[#1b312e] px-4 md:px-9 py-3 font-normal text-[13px] md:text-[14px] tracking-[0.1em] uppercase flex items-center gap-2 border border-[#e0b265] hover:bg-[#1b312e] hover:text-white transition"
            >
              Reserve Your Table
            </a>
            <a
              href={`tel:${info.phone.replace(/\D/g, "")}`}
              className="group bg-transparent text-white px-4 md:px-9 py-3 font-normal text-[13px] md:text-[14px] tracking-[0.1em] uppercase flex items-center gap-2 border border-white/50 hover:border-[#e0b265] hover:text-[#e0b265] transition"
            >
              Call {info.phone}
            </a>
          </motion.div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="w-full bg-[#030302] py-5 overflow-hidden">
        <style>{`
          @keyframes mq-lmf { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
          .mq-lmf { display:flex; width:max-content; animation:mq-lmf 24s linear infinite; }
        `}</style>
        <div className="mq-lmf">
          {[0, 1, 2, 3].map((r) => (
            <div key={r} className="flex items-center">
              {marqueePhrases.map((phrase) => (
                <div key={phrase} className="flex items-center">
                  <span className="text-white text-[15px] font-semibold tracking-[0.2em] uppercase px-8 whitespace-nowrap">
                    {phrase}
                  </span>
                  <img src="/assets/star.svg" alt="" className="w-5 h-5 flex-shrink-0" />
                </div>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* INTRO */}
      <section
        className="relative w-full overflow-hidden"
        style={{
          backgroundImage: "url('/assets/dark-green-wall-backdrop-grunge-background-texture.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full max-w-[1100px] mx-auto px-4 py-[70px] md:py-[110px] grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16 items-center">
          <div>
            <div className="text-[#e0b265] text-[11px] font-semibold tracking-[0.3em] uppercase mb-3">
              Live Music in Alpharetta
            </div>
            <h2
              className="text-white text-[38px] md:text-[52px] leading-[1.02] uppercase mb-5"
              style={{ fontFamily: "'Palmore-Light', serif" }}
            >
              Dinner deserves a soundtrack.
            </h2>
            <p className="text-white/75 text-[15px] md:text-[17px] leading-[1.8]">
              From date night to cocktails with friends, Friday evenings at Siena bring together soulful live
              performances, memorable plates and warm hospitality — just minutes from downtown Alpharetta, Johns
              Creek and Milton.
            </p>
          </div>
          <div className="border-l border-[#e0b265] pl-6 md:pl-10">
            <p
              className="text-[#e0b265] text-[26px] md:text-[36px] leading-[1.25]"
              style={{ fontFamily: "'Palmore-Light', serif" }}
            >
              &ldquo;The perfect way to kick off your weekend.&rdquo;
            </p>
          </div>
        </div>
      </section>

      {/* FEATURED PERFORMERS */}
      <section className="w-full py-[70px] md:py-[110px] px-4" style={{ backgroundColor: "#0d1815" }}>
        <div className="w-full max-w-[1180px] mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
            <div>
              <div className="text-[#e0b265] text-[11px] font-semibold tracking-[0.3em] uppercase mb-3">
                The Siena Stage
              </div>
              <h2
                className="text-white text-[38px] md:text-[52px] leading-[1.02] uppercase"
                style={{ fontFamily: "'Palmore-Light', serif" }}
              >
                Featured Performers
              </h2>
            </div>
            <p className="text-white/60 text-[15px] leading-[1.7] max-w-[420px]">
              Enjoy a rotating lineup of talented local vocalists and musicians. Follow Siena for weekly artist
              announcements and special performances.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {performers.map((p) => (
              <motion.div
                key={p.name}
                className="border border-[#e0b265]/30 p-8 md:p-10"
                style={{ backgroundColor: "#152C29", backgroundImage: "url('/assets/pattern-dark.png')", backgroundSize: "160px", backgroundRepeat: "repeat" }}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.4, ease: "easeOut" }}
              >
                <MusicIcon className="text-[#e0b265] mb-5" />
                <div className="text-[#e0b265] text-[11px] font-semibold tracking-[0.25em] uppercase mb-1">
                  {p.role}
                </div>
                <h3
                  className="text-white text-[28px] md:text-[32px] leading-tight mb-2"
                  style={{ fontFamily: "'Palmore-Light', serif" }}
                >
                  {p.name}
                </h3>
                <p className="text-white/70 text-[15px] leading-[1.7]">{p.blurb}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* PLAN YOUR EVENING */}
      <section
        className="relative w-full overflow-hidden"
        style={{
          backgroundImage: "url('/assets/dark-green-wall-backdrop-grunge-background-texture.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="w-full max-w-[1180px] mx-auto px-4 py-[70px] md:py-[110px]">
          <div
            className="relative overflow-hidden p-8 md:p-14"
            style={{ backgroundColor: "#1e3833", backgroundImage: "url('/assets/pattern-dark.png')", backgroundSize: "160px", backgroundRepeat: "repeat" }}
          >
            <div className="absolute inset-3 border border-[#e0b265]/20 pointer-events-none" />
            <div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-10 md:gap-16">
              <div>
                <div className="text-[#e0b265] text-[11px] font-semibold tracking-[0.3em] uppercase mb-3">
                  Plan Your Evening
                </div>
                <h2
                  className="text-white text-[38px] md:text-[52px] leading-[1.02] uppercase mb-7"
                  style={{ fontFamily: "'Palmore-Light', serif" }}
                >
                  Friday, elevated.
                </h2>
                <a
                  href={RESERVE_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group bg-[#e0b265] text-[#1b312e] px-4 md:px-9 py-3 font-normal text-[13px] md:text-[14px] tracking-[0.1em] uppercase inline-flex items-center gap-2 border border-transparent hover:bg-white hover:text-[#1b312e] transition w-fit"
                >
                  Book on OpenTable
                </a>
              </div>
              <div className="grid grid-cols-2 gap-6 md:gap-8">
                <div>
                  <h4 className="text-[#e0b265] text-[11px] font-semibold tracking-[0.25em] uppercase mb-2">When</h4>
                  <p className="text-white/85 text-[15px] leading-[1.7]">Every Friday<br />7:00 PM – 10:00 PM</p>
                </div>
                <div>
                  <h4 className="text-[#e0b265] text-[11px] font-semibold tracking-[0.25em] uppercase mb-2">Where</h4>
                  <p className="text-white/85 text-[15px] leading-[1.7]">{info.address}</p>
                </div>
                <div>
                  <h4 className="text-[#e0b265] text-[11px] font-semibold tracking-[0.25em] uppercase mb-2">Dining</h4>
                  <p className="text-white/85 text-[15px] leading-[1.7]">Mediterranean-Italian cuisine and handcrafted cocktails.</p>
                </div>
                <div>
                  <h4 className="text-[#e0b265] text-[11px] font-semibold tracking-[0.25em] uppercase mb-2">Reservations</h4>
                  <p className="text-white/85 text-[15px] leading-[1.7]">Recommended. Walk-ins welcomed based on availability.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CLOSING CTA */}
      <section
        className="relative w-full overflow-hidden"
        style={{ backgroundImage: "url('/assets/Siena_20.03.26-A-06.webp')", backgroundSize: "cover", backgroundPosition: "center" }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="relative z-10 w-full max-w-[900px] mx-auto px-4 py-[90px] md:py-[150px] text-center">
          <div className="text-[#e0b265] text-[11px] font-semibold tracking-[0.35em] uppercase mb-5">
            Your Table Is Waiting
          </div>
          <h2
            className="text-white text-[40px] md:text-[68px] leading-[0.95] uppercase mb-9"
            style={{ fontFamily: "'Palmore-Light', serif" }}
          >
            Make Siena your Friday night tradition.
          </h2>
          <a
            href={RESERVE_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#e0b265] text-[#1b312e] px-4 md:px-9 py-3 font-normal text-[13px] md:text-[14px] tracking-[0.1em] uppercase inline-flex items-center gap-2 border border-[#e0b265] hover:bg-[#1b312e] hover:text-white transition"
          >
            Reserve Now
          </a>
        </div>
      </section>
    </main>
  );
}
