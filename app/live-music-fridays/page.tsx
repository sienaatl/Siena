"use client";
import Image from "next/image";
import { motion } from "motion/react";
import { getRestaurantInfo, RESTAURANT_FALLBACK, type RestaurantInfo } from "@/lib/restaurant";
import { useEffect, useState } from "react";

const marqueePhrases = [
  "LIVE MUSIC EVERY FRIDAY",
  "NEW ARTIST EVERY WEEK",
  "MEDITERRANEAN-ITALIAN DINING",
  "HANDCRAFTED COCKTAILS",
  "7–10 PM · ALPHARETTA, GA",
];

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
      <section className="relative w-full py-[80px] md:py-[100px] overflow-hidden" style={{ backgroundColor: "#1b312e" }}>
        <div className="w-full max-w-[1180px] mx-auto px-4">
          <div className="flex flex-col lg:flex-row items-center gap-14 lg:gap-20">
            <motion.div
              className="flex-1 flex flex-col"
              initial={{ opacity: 0, x: -60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.85, ease: "easeOut" }}
            >
              <motion.img
                src="/assets/icono_123.svg"
                alt=""
                className="w-[55px] md:w-[65px] mb-4"
                animate={{ y: [0, -6, 0] }}
                transition={{ repeat: Infinity, duration: 3, ease: "easeInOut" }}
              />
              <h2
                className="text-[#e0b265] text-[34px] md:text-[46px] lg:text-[54px] leading-[1.1] tracking-[0.03em] uppercase mb-2"
                style={{ fontFamily: "'Palmore-Light', serif" }}
              >
                Dinner Deserves
                <br />a Soundtrack
              </h2>
              <span
                className="text-[#e0b265] text-[30px] md:text-[38px] leading-none block mb-8"
                style={{ fontFamily: "'AguafinaScript-Regular', cursive" }}
              >
                every friday night
              </span>

              <p className="text-white/70 text-[15px] md:text-[17px] leading-[1.8] max-w-[520px]">
                From date night to cocktails with friends, Friday evenings at Siena bring together soulful live
                performances, memorable plates and warm hospitality — just minutes from downtown Alpharetta, Johns
                Creek and Milton.
              </p>
            </motion.div>

            <motion.div
              className="flex-1 w-full"
              initial={{ opacity: 0, x: 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.85, ease: "easeOut" }}
            >
              <div className="relative overflow-hidden group h-[360px] md:h-[480px]">
                <Image
                  src="/assets/hero3.webp"
                  alt="Live music evenings at Siena Restaurant & Bar"
                  fill
                  sizes="(max-width: 1023px) 100vw, 50vw"
                  className="object-cover shadow-xl transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-4 border border-[#e0b265]/50 pointer-events-none" />
                <div className="absolute bottom-6 left-6 right-6 bg-[#1b312e]/90 p-4 md:p-6 backdrop-blur-sm">
                  <p className="text-white text-[22px] md:text-[28px] leading-none" style={{ fontFamily: "'Palmore-Light', serif" }}>
                    Live Every Friday
                  </p>
                  <span className="text-[#e0b265] text-[18px] md:text-[24px]" style={{ fontFamily: "'AguafinaScript-Regular', cursive" }}>
                    an evening to remember
                  </span>
                </div>
              </div>
            </motion.div>
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
                  className="text-white text-[38px] md:text-[52px] leading-[1.02] uppercase mb-2"
                  style={{ fontFamily: "'Palmore-Light', serif" }}
                >
                  Friday, elevated.
                </h2>
                <span
                  className="text-[#e0b265] text-[22px] md:text-[28px] leading-none block mb-7"
                  style={{ fontFamily: "'AguafinaScript-Regular', cursive" }}
                >
                  book your night
                </span>
                <a
                  href="/reservations"
                  className="group bg-[#e0b265] text-[#1b312e] px-4 md:px-9 py-3 font-normal text-[13px] md:text-[14px] tracking-[0.1em] uppercase inline-flex items-center gap-2 border border-transparent hover:bg-white hover:text-[#1b312e] transition w-fit"
                >
                  Reserve a Table
                </a>
              </div>
              <div className="grid grid-cols-2 gap-8 md:gap-10">
                <div>
                  <h4 className="text-[#e0b265] text-[12px] font-semibold tracking-[0.3em] uppercase mb-3">When</h4>
                  <div className="w-8 h-[2px] bg-[#e0b265]/40 mb-3" />
                  <p className="text-white text-[16px] leading-[1.7]" style={{ fontFamily: "'Palmore-Light', serif" }}>Every Friday<br />7:00 PM – 10:00 PM</p>
                </div>
                <div>
                  <h4 className="text-[#e0b265] text-[12px] font-semibold tracking-[0.3em] uppercase mb-3">Where</h4>
                  <div className="w-8 h-[2px] bg-[#e0b265]/40 mb-3" />
                  <p className="text-white text-[16px] leading-[1.7]" style={{ fontFamily: "'Palmore-Light', serif" }}>{info.address}</p>
                </div>
                <div>
                  <h4 className="text-[#e0b265] text-[12px] font-semibold tracking-[0.3em] uppercase mb-3">Dining</h4>
                  <div className="w-8 h-[2px] bg-[#e0b265]/40 mb-3" />
                  <p className="text-white text-[16px] leading-[1.7]" style={{ fontFamily: "'Palmore-Light', serif" }}>Mediterranean-Italian cuisine and handcrafted cocktails.</p>
                </div>
                <div>
                  <h4 className="text-[#e0b265] text-[12px] font-semibold tracking-[0.3em] uppercase mb-3">Reservations</h4>
                  <div className="w-8 h-[2px] bg-[#e0b265]/40 mb-3" />
                  <p className="text-white text-[16px] leading-[1.7]" style={{ fontFamily: "'Palmore-Light', serif" }}>Recommended. Walk-ins welcomed based on availability.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
