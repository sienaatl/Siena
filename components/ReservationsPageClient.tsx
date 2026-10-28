"use client";
import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import ReservationsFormClient from "@/components/ReservationsFormClient";
import { RESTAURANT_FALLBACK } from "@/lib/restaurant";

function ReservationDetails() {
  const { phone } = RESTAURANT_FALLBACK;
  const telHref = `tel:${phone.replace(/[^\d+]/g, "")}`;

  return (
    <p className="siena-view-84">
      Open Tuesday–Sunday, closed Mondays, with Friday and Saturday hours until midnight. Book online below
      for parties up to thirteen, or call{" "}
      <a href={telHref} className="siena-view-85">
        {phone}
      </a>
      . Parties of fourteen or more, see our{" "}
      <Link href="/event-inquiry" className="siena-view-85">
        Private &amp; Group Dining Inquiry Form
      </Link>
      .
    </p>
  );
}

export default function ReservationsPageClient({
  prefillDate,
  prefillTime,
  prefillPartySize,
  children,
}: {
  prefillDate: string;
  prefillTime: string;
  prefillPartySize: string;
  children?: React.ReactNode;
}) {
  return (
    <main>
      {/* HERO */}
      <section className="siena-view-86">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        >
          <Image
            src="/assets/gallery16.webp"
            alt="Reservations at Siena"
            fill
            preload
            sizes="100vw"
            className="object-cover object-[50%_30%]"
          />
        </motion.div>
        <div className="siena-view-87" />
        <div className="siena-view-88">
          <motion.div
            className="flex items-center gap-4 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="siena-view-89" />
            <span className="siena-view-90">✦</span>
            <div className="siena-view-91" />
          </motion.div>
          <motion.h1
            className="siena-view-92"
            style={{ fontFamily: "'Palmore-Light', serif" }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            RESERVATIONS
          </motion.h1>
          <motion.div
            className="flex items-center gap-4 mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          >
            <div className="siena-view-89" />
            <span className="siena-view-90">✦</span>
            <div className="siena-view-91" />
          </motion.div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="siena-view-32">
        <style>{`
          @keyframes mq-res { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
          .mq-res { display:flex; width:max-content; animation:mq-res 22s linear infinite; }
        `}</style>
        <div className="mq-res">
          {[0, 1, 2, 3].map((r) => (
            <div key={r} className="flex items-center">
              <span className="siena-view-93">RESERVE YOUR TABLE</span>
              <img src="/assets/star.svg" alt="decorative star" className="w-5 h-5 flex-shrink-0" />
              <span className="siena-view-93">MEDITERRANEAN DINING</span>
              <img src="/assets/star.svg" alt="decorative star" className="w-5 h-5 flex-shrink-0" />
              <span className="siena-view-93">ALPHARETTA, GEORGIA</span>
              <img src="/assets/star.svg" alt="decorative star" className="w-5 h-5 flex-shrink-0" />
              <span className="siena-view-93">UNFORGETTABLE EVENINGS</span>
              <img src="/assets/star.svg" alt="decorative star" className="w-5 h-5 flex-shrink-0" />
            </div>
          ))}
        </div>
      </section>

      {/* BOOKING SECTION */}
      <section className="w-full py-[80px] px-4" style={{ backgroundColor: "#1b312e" }}>
        <div className="w-full max-w-[1180px] mx-auto">

          {/* Section header */}
          <div className="siena-view-94">
            <motion.img
              src="/assets/icono_123.svg"
              alt=""
              className="w-[60px] md:w-[75px] mb-2"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            />
            <div className="relative inline-block">
              <motion.h2
                className="siena-view-95"
                style={{ fontFamily: "'Palmore-Light', serif" }}
                initial={{ opacity: 0, y: 60 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
              >
                Book a Table
              </motion.h2>
              <motion.span
                className="siena-view-96"
                style={{
                  fontFamily: "'AguafinaScript-Regular', cursive",
                  textShadow: "3px 3px 0 #1b312e,-3px -3px 0 #1b312e,3px -3px 0 #1b312e,-3px 3px 0 #1b312e,0 3px 0 #1b312e,0 -3px 0 #1b312e,3px 0 0 #1b312e,-3px 0 0 #1b312e",
                }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
              >
                at Siena
              </motion.span>
            </div>
            <motion.p
              className="siena-view-97"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
            >
              Secure your seat at Siena. Whether it&apos;s a weeknight dinner or a special occasion, we look forward to welcoming you.
            </motion.p>
          </div>

          <ReservationDetails />

          <ReservationsFormClient
            prefillDate={prefillDate}
            prefillTime={prefillTime}
            prefillPartySize={prefillPartySize}
          />

        </div>
      </section>

      {children}
    </main>
  );
}
