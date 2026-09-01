"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { RESTAURANT_FALLBACK as info } from "@/lib/restaurant";
import { REVIEW_STATS } from "@/lib/reviews";

/**
 * Shared layout for the commercial landing pages.
 *
 * Everything here is built from the design language the site already uses: the
 * Palmore display heading with an Aguafina script word tucked underneath, images
 * framed by an inset gold rule that fills in on hover, the ✦ feature cards, and the
 * divider bands between sections. Nothing new was invented, because a new page should look
 * like it was always part of the site.
 *
 * Pages supply an ordered list of blocks, so each one can mix splits, card grids and
 * image grids rather than running as one column of text.
 */

const GOLD = "#e0b265";
const GREEN = "#1b312e";
const BLACK = "#030302";
const TEXTURE = "/assets/dark-green-wall-backdrop-grunge-background-texture.jpg";

export type Faq = { q: string; a: string };
/** Figures come from lib/reviews.ts. Pages supply only the quotes. */
export type Reviews = {
  quotes: { text: string; author: string }[];
};

export type Block =
  /** Image one side, copy the other. Alternate `flip` down the page. */
  | {
      kind: "split";
      heading: string;
      script?: string;
      paras: string[];
      image: string;
      alt: string;
      flip?: boolean;
      bg?: "green" | "black" | "texture";
    }
  /** Centred heading over a grid of photo tiles that link somewhere useful. */
  | {
      kind: "gallery";
      heading: string;
      script?: string;
      intro?: string;
      icon?: string;
      items: { image: string; alt: string; title: string; sub: string; href: string }[];
      bg?: "green" | "black" | "texture";
    }
  /** Three ✦ cards, same treatment as the About page. */
  | {
      kind: "cards";
      heading: string;
      script?: string;
      intro?: string;
      icon?: string;
      cards: { title: string; desc: string }[];
      bg?: "green" | "black" | "texture";
    };

export type LandingPageProps = {
  h1: string;
  h1Script?: string;
  heroImage: string;
  heroAlt: string;
  marquee: string[];
  intro: { icon?: string; heading: string; script?: string; paras: string[]; cta?: { label: string; href: string } };
  blocks: Block[];
  faqs: Faq[];
  closing: { heading: string; script?: string; paras: string[] };
  slug: string;
  reviews?: Reviews;
  practical?: string[];
};

const bgStyle = (bg?: "green" | "black" | "texture") =>
  bg === "texture"
    ? { backgroundImage: `url('${TEXTURE}')`, backgroundSize: "cover", backgroundPosition: "center" }
    : { backgroundColor: bg === "black" ? BLACK : GREEN };

/** Outline colour behind the script word has to match the section it sits on. */
const shadowFor = (bg?: "green" | "black" | "texture") => {
  const c = bg === "black" ? BLACK : GREEN;
  return `2px 2px 0 ${c},-2px -2px 0 ${c},2px -2px 0 ${c},-2px 2px 0 ${c}`;
};

function Arrow({ fill = GREEN }: { fill?: string }) {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
      <path
        d="M15.3025 11.0285L2 11.0285L2 8.97146L15.3025 8.97146L11.1214 4.45436L12.4872 3L19 10L12.4872 17L11.1214 15.5456L15.3025 11.0285Z"
        fill={fill}
      />
    </svg>
  );
}

function GoldButton({ href, label }: { href: string; label: string }) {
  return (
    <Link
      href={href}
      className="group bg-[#e0b265] text-[#1b312e] px-6 md:px-9 py-2.5 text-[14px] md:text-[15px] leading-[24px] inline-flex items-center gap-2 border border-transparent hover:bg-white hover:border-white transition"
    >
      <span>{label}</span>
      <Arrow />
    </Link>
  );
}

/** Icon → display heading → script word. The site's signature title block. */
function SectionTitle({
  heading, script, icon, bg, color = GOLD, align = "center", size = "lg",
}: {
  heading: string; script?: string; icon?: string;
  bg?: "green" | "black" | "texture"; color?: string;
  align?: "center" | "left"; size?: "lg" | "md";
}) {
  // A full-width centred title can carry the homepage's display size. Inside a split
  // column it cannot. At 78px the heading wraps badly and the script word, which is
  // absolutely positioned and must not wrap, runs outside the column.
  const headClass =
    size === "lg"
      ? "text-[38px] sm:text-[46px] md:text-[62px] lg:text-[76px]"
      : "text-[30px] sm:text-[36px] md:text-[40px] lg:text-[50px]";
  const scriptClass =
    size === "lg"
      ? "text-[24px] sm:text-[28px] md:text-[48px] lg:text-[62px]"
      : "text-[20px] sm:text-[24px] md:text-[28px] lg:text-[36px]";
  const gap = script
    ? size === "lg"
      ? "mb-[46px] md:mb-[66px]"
      : "mb-[34px] md:mb-[44px]"
    : "mb-7";

  return (
    <div className={`flex flex-col ${align === "center" ? "items-center text-center" : "items-start text-left"}`}>
      {icon && (
        <motion.img
          src={icon}
          alt=""
          className="w-[52px] md:w-[75px] mb-5"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
          animate={{ y: [0, -7, 0] }}
        />
      )}
      <div className={`relative inline-block max-w-full ${gap}`}>
        <motion.h2
          className={`${headClass} leading-[0.95] tracking-[0.04em] uppercase break-words`}
          style={{ fontFamily: "'Palmore-Light', serif", color }}
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.1, ease: "easeOut" }}
        >
          {heading}
        </motion.h2>
        {script && (
          <motion.span
            className={`pointer-events-none absolute ${align === "center" ? "left-1/2 -translate-x-1/2" : "left-0"} top-full -translate-y-[15%] md:-translate-y-[30%] text-[#e0b265] ${scriptClass} leading-none whitespace-nowrap`}
            style={{ fontFamily: "'AguafinaScript-Regular', cursive", textShadow: shadowFor(bg) }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
          >
            {script}
          </motion.span>
        )}
      </div>
    </div>
  );
}

/**
 * The site's image treatment: zoom on hover, dim overlay, inset gold rule.
 *
 * Uses next/image rather than a bare <img> so a phone gets a resized file instead of
 * the full-resolution original. hero5.webp alone is 858 KB at source.
 */
function ImageFrame({ src, alt, className = "" }: { src: string; alt: string; className?: string }) {
  return (
    <div className={`group relative w-full overflow-hidden shadow-lg ${className}`}>
      <Image
        src={src}
        alt={alt}
        fill
        sizes="(max-width: 639px) 100vw, (max-width: 1023px) 50vw, 560px"
        loading="lazy"
        className="object-cover transition-transform duration-700 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-colors duration-500 pointer-events-none" />
      <div className="absolute inset-4 border border-[#e0b265] pointer-events-none" />
    </div>
  );
}

function Divider({ src = "/assets/divisor_beige.svg", bg = GOLD }: { src?: string; bg?: string }) {
  return (
    <section className="relative w-full h-[40px] md:h-[58px] overflow-hidden" style={{ backgroundColor: bg }}>
      <img src={src} alt="" className="absolute inset-0 w-full h-full object-cover" />
    </section>
  );
}

export default function LandingPage({
  h1, h1Script, heroImage, heroAlt, marquee, intro, blocks, faqs, closing, slug, reviews, practical,
}: LandingPageProps) {
  const mq = `mq-${slug}`;

  return (
    <main>
      {/* ── HERO ─────────────────────────────────────────────── */}
      {/* min-h keeps the hero usable on short landscape phones, where 86vh collapses. */}
      <section className="relative w-full h-[86vh] min-h-[560px] max-h-[900px] overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
        >
          <Image src={heroImage} alt={heroAlt} fill priority sizes="100vw" className="object-cover object-center" />
        </motion.div>
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,rgba(3,3,2,0.65)_0%,rgba(3,3,2,0.25)_45%,rgba(3,3,2,0.85)_100%)]" />

        {/* Padded for the fixed header (72px, 80px from md) so the h1 never sits under it. */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-5 pt-[72px] md:pt-[80px] pb-16 md:pb-20">
          <motion.img
            src="/assets/icono_123.svg"
            alt=""
            className="w-[54px] md:w-[68px] mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
          <div className={`relative inline-block ${h1Script ? "mb-[60px] md:mb-[80px]" : "mb-8"}`}>
            <motion.h1
              className="text-white text-[32px] sm:text-[42px] md:text-[62px] lg:text-[80px] leading-[0.95] tracking-[0.04em] uppercase max-w-[1100px] break-words"
              style={{ fontFamily: "'Palmore-Light', serif" }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {h1}
            </motion.h1>
            {h1Script && (
              <motion.span
                className="pointer-events-none absolute left-1/2 top-full -translate-x-1/2 -translate-y-[22%] text-[#e0b265] text-[21px] sm:text-[30px] md:text-[52px] lg:text-[70px] leading-none whitespace-nowrap"
                style={{
                  fontFamily: "'AguafinaScript-Regular', cursive",
                  textShadow: "3px 3px 0 #030302,-3px -3px 0 #030302,3px -3px 0 #030302,-3px 3px 0 #030302",
                }}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.9, delay: 0.35, ease: "easeOut" }}
              >
                {h1Script}
              </motion.span>
            )}
          </div>

          <motion.div
            className="flex flex-col sm:flex-row items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
          >
            <GoldButton href="/reservations" label="BOOK A TABLE" />
            <a
              href={`tel:${info.phone.replace(/[^\d+]/g, "")}`}
              className="group border border-white/70 text-white px-6 md:px-9 py-2.5 text-[14px] md:text-[15px] leading-[24px] inline-flex items-center gap-2 hover:bg-white hover:text-[#1b312e] transition"
            >
              <span>{info.phone}</span>
            </a>
          </motion.div>
        </div>

        {/* Address + phone bar, same as the homepage hero */}
        <div className="w-full max-w-[1180px] absolute bottom-0 left-1/2 -translate-x-1/2 z-10 py-4 hidden md:flex items-center justify-between px-4">
          <a
            href={info.maps_url}
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-white/80 text-[15px] tracking-wide hover:text-[#E0B265] transition"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-70 group-hover:opacity-100 flex-shrink-0">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>{info.address}</span>
          </a>
          <Link href="/menus" className="flex items-center gap-2 text-white/80 text-[15px] tracking-wide hover:text-[#E0B265] transition">
            <span>VIEW THE MENUS</span>
            <Arrow fill="currentColor" />
          </Link>
        </div>
      </section>

      {/* ── MARQUEE ──────────────────────────────────────────── */}
      <section className="w-full bg-[#030302] py-5 overflow-hidden">
        <style>{`
          @keyframes ${mq}-kf { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
          .${mq} { display:flex; width:max-content; animation:${mq}-kf 22s linear infinite; }
        `}</style>
        <div className={mq}>
          {[0, 1, 2, 3].map((r) => (
            <div key={r} className="flex items-center">
              {marquee.map((m, i) => (
                <span key={i} className="flex items-center">
                  <span className="text-white text-[15px] font-semibold tracking-[0.2em] uppercase px-8 whitespace-nowrap">{m}</span>
                  <img src="/assets/star.svg" alt="" className="w-5 h-5 flex-shrink-0" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {/* ── INTRO ────────────────────────────────────────────── */}
      <section className="relative w-full overflow-hidden" style={bgStyle("texture")}>
        <div className="w-full max-w-[1000px] mx-auto px-4 py-[70px] md:py-[100px]">
          <SectionTitle heading={intro.heading} script={intro.script} icon={intro.icon} bg="green" color="#ffffff" />
          <div className="flex flex-col gap-5 text-center">
            {intro.paras.map((p, i) => (
              <motion.p
                key={i}
                className="text-white/85 text-[17px] md:text-[19px] leading-[1.8]"
                initial={{ opacity: 0, y: 25 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.6, delay: i * 0.08, ease: "easeOut" }}
                dangerouslySetInnerHTML={{ __html: p }}
              />
            ))}
          </div>
          {intro.cta && (
            <motion.div
              className="flex justify-center mt-9"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <GoldButton href={intro.cta.href} label={intro.cta.label} />
            </motion.div>
          )}
        </div>
      </section>

      <Divider />

      {/* ── BLOCKS ───────────────────────────────────────────── */}
      {blocks.map((b, i) => {
        if (b.kind === "split") {
          return (
            <section key={i} className="relative w-full overflow-hidden" style={bgStyle(b.bg)}>
              <div className="w-full max-w-[1180px] mx-auto px-4 py-[70px] md:py-[100px]">
                <div className={`flex flex-col ${b.flip ? "md:flex-row-reverse" : "md:flex-row"} gap-10 md:gap-16 items-center`}>
                  <motion.div
                    className="flex-1 w-full"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.9, ease: "easeOut" }}
                  >
                    <ImageFrame src={b.image} alt={b.alt} className="h-[340px] md:h-[500px]" />
                  </motion.div>
                  <motion.div
                    className="flex-1"
                    initial={{ opacity: 0, x: b.flip ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                  >
                    <SectionTitle heading={b.heading} script={b.script} bg={b.bg} align="left" size="md" />
                    <div className="flex flex-col gap-4">
                      {b.paras.map((p, j) => (
                        <p
                          key={j}
                          className="text-white/75 text-[16px] md:text-[17px] leading-[1.8] [&_a]:text-[#e0b265] [&_a]:underline [&_a]:underline-offset-4 hover:[&_a]:text-white"
                          dangerouslySetInnerHTML={{ __html: p }}
                        />
                      ))}
                    </div>
                  </motion.div>
                </div>
              </div>
            </section>
          );
        }

        if (b.kind === "gallery") {
          // The homepage's tall-first-tile grid needs five tiles to fill 3 columns x 2
          // rows. With fewer it leaves an empty hole on the right, so anything under
          // five falls back to a plain equal-height row.
          const feature = b.items.length >= 5;
          const gridClass = feature
            ? "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 md:[grid-template-rows:280px_280px]"
            : "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4";
          return (
            <section key={i} className="relative w-full overflow-hidden" style={bgStyle(b.bg)}>
              <div className="w-full max-w-[1180px] mx-auto px-4 py-[70px] md:py-[100px]">
                <SectionTitle heading={b.heading} script={b.script} icon={b.icon} bg={b.bg} />
                {b.intro && (
                  <p
                    className="text-white/75 text-[16px] md:text-[18px] leading-[1.8] max-w-[820px] mx-auto text-center mb-12 [&_a]:text-[#e0b265] [&_a]:underline [&_a]:underline-offset-4"
                    dangerouslySetInnerHTML={{ __html: b.intro }}
                  />
                )}
                <div className={gridClass}>
                  {b.items.map((it, j) => (
                    <motion.a
                      key={j}
                      href={it.href}
                      className={`group relative overflow-hidden shadow-lg ${
                        feature
                          ? `h-[260px] sm:h-[300px] md:h-auto ${j === 0 ? "md:row-span-2" : ""}`
                          : "h-[260px] sm:h-[300px] md:h-[380px]"
                      } ${!feature && b.items.length % 2 === 1 && j === b.items.length - 1 ? "sm:col-span-2 md:col-span-1" : ""}`}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true, amount: 0.15 }}
                      transition={{ duration: 0.5, delay: j * 0.08, ease: "easeOut" }}
                      whileHover={{ y: -6, transition: { duration: 0.22 } }}
                    >
                      <Image
                        src={it.image}
                        alt={it.alt}
                        fill
                        sizes="(max-width: 767px) 100vw, 390px"
                        loading="lazy"
                        className="object-cover transition-transform duration-500 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/50 group-hover:bg-black/30 transition-colors duration-500" />
                      <div className="absolute inset-4 border border-[#e0b265]">
                        <div className="flex flex-col justify-end h-full p-4 md:p-6">
                          <div className="flex items-end justify-between gap-3">
                            <div className="min-w-0 flex-1">
                              <h3 className="text-white text-[24px] md:text-[30px] font-semibold leading-tight">{it.title}</h3>
                              <p className="text-white/80 text-[14px] md:text-[17px] mt-1">{it.sub}</p>
                            </div>
                            <div className="w-9 h-9 border border-white flex items-center justify-center transition-transform duration-300 group-hover:rotate-45 flex-shrink-0">
                              <Arrow fill="white" />
                            </div>
                          </div>
                        </div>
                      </div>
                    </motion.a>
                  ))}
                </div>
              </div>
            </section>
          );
        }

        // cards
        return (
          <section key={i} className="relative w-full overflow-hidden" style={bgStyle(b.bg)}>
            <div className="w-full max-w-[1180px] mx-auto px-4 py-[70px] md:py-[100px]">
              <SectionTitle heading={b.heading} script={b.script} icon={b.icon} bg={b.bg} />
              {b.intro && (
                <p
                  className="text-white/75 text-[16px] md:text-[18px] leading-[1.8] max-w-[820px] mx-auto text-center mb-12 [&_a]:text-[#e0b265] [&_a]:underline [&_a]:underline-offset-4"
                  dangerouslySetInnerHTML={{ __html: b.intro }}
                />
              )}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {b.cards.map((c, j) => (
                  <motion.div
                    key={j}
                    className="border border-white/10 bg-white/5 p-8 flex flex-col gap-4"
                    initial={{ opacity: 0, y: 45 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, delay: j * 0.15, ease: "easeOut" }}
                    whileHover={{ y: -6, transition: { duration: 0.25 } }}
                  >
                    <span className="text-[#e0b265] text-[32px] leading-none select-none">✦</span>
                    <h3
                      className="text-[#e0b265] text-[22px] md:text-[24px] leading-tight tracking-wide uppercase"
                      style={{ fontFamily: "'Palmore-Light', serif" }}
                    >
                      {c.title}
                    </h3>
                    <p
                      className="text-white/60 text-[15px] md:text-[16px] leading-[1.75] [&_a]:text-[#e0b265] [&_a]:underline [&_a]:underline-offset-4"
                      dangerouslySetInnerHTML={{ __html: c.desc }}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </section>
        );
      })}

      {/* ── REVIEWS ──────────────────────────────────────────── */}
      {reviews && (
        <>
          <Divider src="/assets/divisor_negro.svg" bg={BLACK} />
          <section className="relative w-full overflow-hidden" style={{ backgroundColor: BLACK }}>
            <div className="w-full max-w-[1180px] mx-auto px-4 py-[70px] md:py-[100px]">
              <SectionTitle heading="What Guests Say" script="in their words" icon="/assets/icono_testimonios.svg" bg="black" />
              <motion.div
                className="flex flex-col items-center -mt-4 mb-12"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              >
                {/* No printed rating. The stars carry it instead: a written "4.5" is
                    false the moment one 1-star review lands, whereas a half-filled star
                    reads as "about four and a half" and stays true through small drifts.
                    Fill comes from lib/reviews.ts so every page moves together. */}
                <div
                  className="flex gap-2 mb-4"
                  role="img"
                  aria-label={`Rated ${REVIEW_STATS.rating} out of 5 on Google`}
                >
                  {[0, 1, 2, 3, 4].map((i) => {
                    const fill = Math.max(0, Math.min(1, REVIEW_STATS.rating - i));
                    return (
                      <span key={i} className="relative block w-8 h-8 md:w-9 md:h-9">
                        <img src="/assets/star.svg" alt="" className="w-full h-full opacity-20" />
                        <span className="absolute inset-0 overflow-hidden" style={{ width: `${fill * 100}%` }}>
                          <img
                            src="/assets/star.svg"
                            alt=""
                            className="h-full max-w-none w-8 md:w-9"
                          />
                        </span>
                      </span>
                    );
                  })}
                </div>
                <a
                  href={REVIEW_STATS.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white/70 text-[14px] tracking-[0.15em] uppercase border-b border-white/30 pb-0.5 hover:text-[#e0b265] hover:border-[#e0b265] transition"
                >
                  Read our {REVIEW_STATS.countFloor}+ Google reviews
                </a>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8">
                {reviews.quotes.map((q, i) => (
                  <motion.figure
                    key={i}
                    className="border border-white/10 bg-white/5 p-8 flex flex-col gap-4"
                    initial={{ opacity: 0, y: 45 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, delay: i * 0.15, ease: "easeOut" }}
                    whileHover={{ y: -6, transition: { duration: 0.25 } }}
                  >
                    <span className="text-[#e0b265] text-[32px] leading-none select-none">✦</span>
                    <blockquote className="text-white/75 text-[15px] md:text-[16px] leading-[1.8]">“{q.text}”</blockquote>
                    <figcaption className="text-[#e0b265] text-[13px] tracking-[0.18em] uppercase mt-auto">{q.author}</figcaption>
                  </motion.figure>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="relative w-full overflow-hidden" style={bgStyle("texture")}>
        <div className="w-full max-w-[900px] mx-auto px-4 py-[70px] md:py-[100px]">
          <SectionTitle heading="Good to Know" script="before you come" bg="green" />
          <div className="flex flex-col">
            {faqs.map((f, i) => (
              <motion.div
                key={i}
                className="border-l-2 border-[#e0b265]/50 pl-6 py-1 mb-8 last:mb-0"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: i * 0.05, ease: "easeOut" }}
              >
                <h3 className="text-white text-[18px] md:text-[19px] font-semibold mb-2">{f.q}</h3>
                <p
                  className="text-white/70 text-[16px] leading-[1.8] [&_a]:text-[#e0b265] [&_a]:underline [&_a]:underline-offset-4"
                  dangerouslySetInnerHTML={{ __html: f.a }}
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <Divider src="/assets/divisor_estrella3.svg" />

      {/* ── FIND US ──────────────────────────────────────────── */}
      <section className="relative w-full overflow-hidden" style={{ backgroundColor: BLACK }}>
        <div className="w-full max-w-[1180px] mx-auto px-4 py-[70px] md:py-[100px]">
          <SectionTitle heading={closing.heading} script={closing.script} icon="/assets/icono_findus.svg" bg="black" />

          <div className="max-w-[820px] mx-auto text-center flex flex-col gap-4 mb-14">
            {closing.paras.map((p, i) => (
              <p
                key={i}
                className="text-white/75 text-[16px] md:text-[17px] leading-[1.8] [&_a]:text-[#e0b265] [&_a]:underline [&_a]:underline-offset-4"
                dangerouslySetInnerHTML={{ __html: p }}
              />
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8 max-w-[900px] mx-auto">
            {/* NAP, matching the Google Business Profile character for character */}
            <motion.div
              className="border border-white/10 bg-white/5 p-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <p className="text-[#e0b265] text-[13px] tracking-[0.2em] uppercase mb-4">Find Us</p>
              <address className="not-italic flex flex-col gap-1">
                <span className="text-white/85 text-[16px] leading-[1.7]">Siena Restaurant &amp; Bar</span>
                <span className="text-white/85 text-[16px] leading-[1.7]">{info.address}</span>
                <a
                  href={`tel:${info.phone.replace(/[^\d+]/g, "")}`}
                  className="text-white/85 text-[16px] leading-[1.7] hover:text-[#e0b265] transition w-fit"
                >
                  {info.phone}
                </a>
              </address>
              <a
                href={info.maps_url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 mt-5 text-[#e0b265] text-[13px] tracking-[0.15em] uppercase border-b border-[#e0b265]/50 pb-0.5 hover:text-white hover:border-white transition"
              >
                Get Directions <Arrow fill="currentColor" />
              </a>
              {practical && practical.length > 0 && (
                <ul className="mt-6 pt-5 border-t border-white/10 flex flex-col gap-2">
                  {practical.map((p, i) => (
                    <li key={i} className="text-white/55 text-[15px] leading-[1.6] flex gap-2">
                      <span className="text-[#e0b265]">✦</span>
                      <span>{p}</span>
                    </li>
                  ))}
                </ul>
              )}
            </motion.div>

            <motion.div
              className="border border-white/10 bg-white/5 p-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            >
              <p className="text-[#e0b265] text-[13px] tracking-[0.2em] uppercase mb-4">Opening Hours</p>
              {info.hours.map((h) => (
                <p key={h.label} className="text-white/60 text-[15px] leading-[2] flex justify-between gap-6 border-b border-white/5 last:border-0">
                  <span>{h.label}</span>
                  <span className="text-white/85 whitespace-nowrap">{h.value}</span>
                </p>
              ))}
              <div className="flex flex-col sm:flex-row gap-3 mt-7">
                <GoldButton href="/reservations" label="BOOK A TABLE" />
                <Link
                  href="/menus"
                  className="border border-[#e0b265] text-[#e0b265] px-6 py-2.5 text-[14px] leading-[24px] inline-flex items-center gap-2 hover:bg-[#e0b265] hover:text-[#1b312e] transition"
                >
                  <span>MENUS</span>
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
