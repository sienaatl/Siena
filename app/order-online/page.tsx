"use client";
import Image from "next/image";
import { motion } from "motion/react";

const TOAST_URL =
  "https://www.toasttab.com/invoice/lead?rx=399f3374-7dde-4df3-9c3a-c49fed50b565&ot=675642f1-f873-4b8f-afcd-cca9b93a185c";

const steps = [
  {
    num: "01",
    title: "Browse the Menu",
    desc: "Explore our full Mediterranean menu online: starters, mains, drinks, and more.",
  },
  {
    num: "02",
    title: "Place Your Order",
    desc: "Choose pickup or delivery at checkout. Fast, easy, and secure through Toast.",
  },
  {
    num: "03",
    title: "Enjoy",
    desc: "Your food arrives fresh, just like dining in. The Siena experience, at your door.",
  },
];

const categories = [
  {
    image: "/assets/menu1.webp",
    label: "Dinner",
    sub: "Chef-crafted Mediterranean plates",
    tab: "main-menu",
  },
  {
    image: "/assets/about1.webp",
    label: "Brunch",
    sub: "Weekend mornings done right",
    tab: "weekend-brunch",
  },
  {
    image: "/assets/menu4.webp",
    label: "Beverages",
    sub: "Cocktails, wines and craft drinks",
    tab: "libations",
  },
];

const ArrowRight = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path
      d="M15.3025 11.0285L2 11.0285L2 8.97146L15.3025 8.97146L11.1214 4.45436L12.4872 3L19 10L12.4872 17L11.1214 15.5456L15.3025 11.0285Z"
      fill="#f5efdd"
    />
  </svg>
);


export default function OrderOnline() {
  return (
    <main>
      {/* ─── HERO ─── */}
      <section className="relative w-full h-[400px] md:h-[45vh] overflow-hidden">
        <Image
          src="/assets/Siena_20.03.26-PS-GoldenOxtail.webp"
          alt="Order Online at Siena"
          fill
          className="object-cover object-center"
          priority
          sizes="100vw"
        />
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
            className="text-[#f5efdd] text-[50px] md:text-[70px] lg:text-[88px] leading-none tracking-tight uppercase"
            style={{ fontFamily: "'Palmore-Light', serif" }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            ORDER ONLINE
          </motion.h1>
          <motion.div
            className="flex items-center gap-3 mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          >
            <div className="w-10 md:w-16 h-px bg-gradient-to-r from-transparent to-[#deae21]/80" />
            <span className="text-[#deae21] text-[11px] tracking-[0.4em]">✦</span>
            <div className="w-10 md:w-16 h-px bg-gradient-to-l from-transparent to-[#deae21]/80" />
          </motion.div>
        </div>
      </section>

      {/* ─── MARQUEE ─── */}
      <section className="w-full bg-[#030302] py-5 overflow-hidden">
        <style>{`
          @keyframes mq-oo { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
          .mq-oo { display:flex; width:max-content; animation:mq-oo 24s linear infinite; }
        `}</style>
        <div className="mq-oo">
          {[0, 1, 2, 3].map((r) => (
            <div key={r} className="flex items-center">
              <span className="text-white text-[15px] font-semibold tracking-[0.2em] uppercase px-8 whitespace-nowrap">
                MEDITERRANEAN FLAVORS
              </span>
              <img src="/assets/star.svg" alt="" className="w-5 h-5 flex-shrink-0" />
              <span className="text-white text-[15px] font-semibold tracking-[0.2em] uppercase px-8 whitespace-nowrap">
                FRESH DAILY
              </span>
              <img src="/assets/star.svg" alt="" className="w-5 h-5 flex-shrink-0" />
              <span className="text-white text-[15px] font-semibold tracking-[0.2em] uppercase px-8 whitespace-nowrap">
                PICKUP &amp; DELIVERY
              </span>
              <img src="/assets/star.svg" alt="" className="w-5 h-5 flex-shrink-0" />
              <span className="text-white text-[15px] font-semibold tracking-[0.2em] uppercase px-8 whitespace-nowrap">
                ORDER WITH TOAST
              </span>
              <img src="/assets/star.svg" alt="" className="w-5 h-5 flex-shrink-0" />
            </div>
          ))}
        </div>
      </section>

      {/* ─── ORDER CTA ─── */}
      <section className="w-full py-[80px] overflow-hidden" style={{ backgroundColor: "#f5efdd" }}>
        <div className="w-full max-w-[1180px] mx-auto px-4 flex flex-col items-center text-center">
          <motion.img
            src="/assets/icono_123.svg"
            alt=""
            className="w-[58px] md:w-[70px] mb-5"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />

          <div className="relative inline-block mb-16 md:mb-20">
            <motion.h2
              className="text-[#58021f] text-[58px] md:text-[78px] lg:text-[92px] leading-[0.9] tracking-tight uppercase"
              style={{ fontFamily: "'Palmore-Light', serif" }}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            >
              Order From Home
            </motion.h2>
            <motion.span
              className="pointer-events-none absolute left-1/2 top-full -translate-x-1/2 -translate-y-[20%] md:-translate-y-[35%] text-[#deae21] text-[28px] md:text-[58px] lg:text-[82px] leading-none whitespace-nowrap"
              style={{
                fontFamily: "'AguafinaScript-Regular', cursive",
                textShadow:
                  "2px 2px 0 #f5efdd,-2px -2px 0 #f5efdd,2px -2px 0 #f5efdd,-2px 2px 0 #f5efdd",
              }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
            >
              taste siena anywhere
            </motion.span>
          </div>

          <motion.p
            className="text-[#030302]/70 text-[15px] md:text-[17px] leading-[1.8] max-w-[600px] mb-10"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.45, ease: "easeOut" }}
          >
            Our full menu is available for pickup and delivery through Toast. From our wood-fired
            Mediterranean plates to our house cocktails, the Siena experience delivered to your door.
          </motion.p>

          <motion.a
            href={TOAST_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-[#58021f] text-[#f5efdd] px-10 py-4 text-[15px] font-normal flex items-center gap-3 hover:bg-[#030302] transition"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.55, ease: "easeOut" }}
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
          >
            ORDER NOW
            <ArrowRight />
          </motion.a>
        </div>
      </section>

      {/* ─── HOW IT WORKS ─── */}
      <section className="w-full py-[80px] overflow-hidden" style={{ backgroundColor: "#030302" }}>
        <div className="w-full max-w-[1180px] mx-auto px-4">
          <div className="flex flex-col items-center text-center mb-14">
            <motion.img
              src="/assets/icono_123.svg"
              alt=""
              className="w-[58px] md:w-[70px] mb-5"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />

            <div className="relative inline-block">
              <motion.h2
                className="text-[#f5efdd] text-[58px] md:text-[78px] lg:text-[92px] leading-[0.9] tracking-tight uppercase"
                style={{ fontFamily: "'Palmore-Light', serif" }}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
              >
                How It Works
              </motion.h2>
              <motion.span
                className="pointer-events-none absolute left-1/2 top-full -translate-x-1/2 -translate-y-[20%] md:-translate-y-[35%] text-[#deae21] text-[28px] md:text-[58px] lg:text-[82px] leading-none whitespace-nowrap"
                style={{ fontFamily: "'AguafinaScript-Regular', cursive" }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
              >
                simple as that
              </motion.span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-0 mt-16 md:mt-20">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center md:items-start text-center md:text-left p-6 md:p-8 border-t border-[#deae21]/20 md:border-t-0 md:border-l first:border-t-0 first:border-l-0"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: i * 0.12, ease: "easeOut" }}
              >
                <span
                  className="text-[#deae21] text-[52px] md:text-[68px] leading-none mb-3"
                  style={{ fontFamily: "'Palmore-Light', serif" }}
                >
                  {step.num}
                </span>
                <div className="w-8 h-[2px] bg-[#deae21] mb-4" />
                <h3
                  className="text-[#f5efdd] text-[26px] md:text-[30px] leading-tight mb-3"
                  style={{ fontFamily: "'Palmore-Light', serif" }}
                >
                  {step.title}
                </h3>
                <p className="text-[#f5efdd]/65 text-[15px] md:text-[16px] leading-[1.7]">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CATEGORY HIGHLIGHTS ─── */}
      <section className="w-full py-[80px] overflow-hidden" style={{ backgroundColor: "#f5efdd" }}>
        <div className="w-full max-w-[1180px] mx-auto px-4">
          <div className="flex flex-col items-center text-center mb-16 md:mb-20">
            <div className="relative inline-block">
              <motion.h2
                className="text-[#58021f] text-[58px] md:text-[78px] lg:text-[92px] leading-[0.9] tracking-tight uppercase"
                style={{ fontFamily: "'Palmore-Light', serif" }}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
              >
                What We&apos;re Known For
              </motion.h2>
              <motion.span
                className="pointer-events-none absolute left-1/2 top-full -translate-x-1/2 -translate-y-[20%] md:-translate-y-[35%] text-[#deae21] text-[28px] md:text-[58px] lg:text-[82px] leading-none whitespace-nowrap"
                style={{
                  fontFamily: "'AguafinaScript-Regular', cursive",
                  textShadow:
                    "2px 2px 0 #f5efdd,-2px -2px 0 #f5efdd,2px -2px 0 #f5efdd,-2px 2px 0 #f5efdd",
                }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
              >
                crowd favorites
              </motion.span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6">
            {categories.map((cat, i) => (
              <motion.a
                key={i}
                href={`/menu?tab=${cat.tab}`}
                className="group relative block overflow-hidden cursor-pointer"
                initial={{ opacity: 0, x: i % 2 === 0 ? -40 : 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.7, delay: i * 0.12, ease: "easeOut" }}
                whileHover={{ y: -4, transition: { duration: 0.2 } }}
              >
                <div className="overflow-hidden">
                  <img
                    src={cat.image}
                    alt={cat.label}
                    className="w-full h-[280px] md:h-[360px] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
                {/* Default overlay */}
                <div className="absolute inset-0 bg-black/25 transition-opacity duration-300 group-hover:opacity-0" />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-[#58021f]/80 opacity-0 transition-opacity duration-300 group-hover:opacity-100 flex items-end p-5">
                  <div className="flex items-end justify-between gap-3 w-full">
                    <div className="min-w-0 flex-1">
                      <h3
                        className="text-[#f5efdd] text-[26px] md:text-[30px] leading-tight uppercase tracking-tight"
                        style={{ fontFamily: "'Palmore-Light', serif" }}
                      >
                        {cat.label}
                      </h3>
                      <p className="text-[#f5efdd]/80 text-[13px] md:text-[15px] mt-1">{cat.sub}</p>
                    </div>
                    <div className="w-9 h-9 border border-[#f5efdd]/60 flex items-center justify-center flex-shrink-0">
                      <ArrowRight />
                    </div>
                  </div>
                </div>
                {/* Always-visible label at bottom */}
                <div className="absolute bottom-0 left-0 right-0 p-5 group-hover:opacity-0 transition-opacity duration-300">
                  <h3
                    className="text-[#f5efdd] text-[24px] md:text-[28px] leading-tight uppercase tracking-tight drop-shadow-lg"
                    style={{ fontFamily: "'Palmore-Light', serif" }}
                  >
                    {cat.label}
                  </h3>
                  <p className="text-[#f5efdd]/75 text-[13px] md:text-[14px] mt-0.5 drop-shadow-lg">{cat.sub}</p>
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── DIVIDER ─── */}
      <section className="relative w-full h-[28px] overflow-hidden" style={{ backgroundColor: "#58021f" }}>
        <img
          src="/assets/divisor_estrella3.svg"
          alt=""
          className="absolute inset-0 w-full h-full object-cover"
        />
      </section>

     
    </main>
  );
}
