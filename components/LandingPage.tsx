"use client";
import Image from "next/image";
import Link from "next/link";
import { motion } from "motion/react";
import { RESTAURANT_FALLBACK as info } from "@/lib/restaurant";
import { REVIEW_STATS } from "@/lib/reviews";
import { VISIT_PLANS } from "@/lib/visit-planning";

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
      data-booking-cta={href === "/reservations" || href === "/event-inquiry" || href.startsWith("tel:") ? "true" : undefined}
      className="siena-ui-35 group"
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
      ? "text-[30px] sm:text-[42px] md:text-[62px] lg:text-[76px]"
      : "text-[24px] sm:text-[32px] md:text-[40px] lg:text-[50px]";
  const scriptClass =
    size === "lg"
      ? "text-[20px] sm:text-[26px] md:text-[48px] lg:text-[62px]"
      : "text-[16px] sm:text-[20px] md:text-[28px] lg:text-[36px]";
  const gap = script
    ? size === "lg"
      ? "mb-[46px] md:mb-[66px]"
      : "mb-[34px] md:mb-[44px]"
    : "mb-7";

  return (
    <div className={`flex flex-col ${align === "center" ? "items-center text-center" : "items-start text-left"}`}>
      {icon && (
        <motion.span
          aria-hidden="true"
          data-decoration={icon}
          className="siena-decoration w-[52px] md:w-[75px] mb-5"
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
        className="siena-view-25"
      />
      <div className="siena-ui-36" />
      <div className="siena-view-26" />
    </div>
  );
}

function Divider({ src = "/assets/divisor_beige.svg", bg = GOLD }: { src?: string; bg?: string }) {
  return (
    <section className="siena-view-27" style={{ backgroundColor: bg }}>
      <span aria-hidden="true" data-decoration={src} className="siena-decoration siena-divider absolute inset-0 w-full h-full" />
    </section>
  );
}

export default function LandingPage({
  h1, h1Script, heroImage, heroAlt, marquee, intro, blocks, faqs, closing, slug, reviews, practical,
}: LandingPageProps) {
  const mq = `mq-${slug}`;
  const plan = VISIT_PLANS[slug];
  const isGroup = ["private-dining-alpharetta", "holiday-parties-alpharetta"].includes(slug);
  const isBrunch = slug === "brunch-alpharetta";
  const primaryHref = isGroup ? "/event-inquiry" : isBrunch ? `tel:${info.phone.replace(/[^\d+]/g, "")}` : "/reservations";
  const primaryLabel = isGroup ? "PLAN YOUR EVENT" : isBrunch ? "CALL ABOUT BRUNCH" : "RESERVE A TABLE";

  return (
    <main>
      {/* ── HERO ─────────────────────────────────────────────── */}
      {/* min-h keeps the hero usable on short landscape phones, where 86vh collapses. */}
      <section className="siena-view-29">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.6, ease: "easeOut" }}
        >
          <Image src={heroImage} alt={heroAlt} fill priority sizes="100vw" className="object-cover object-center" />
        </motion.div>
        <div className="siena-ui-37" />

        {/* Padded for the fixed header (72px, 80px from md) so the h1 never sits under it. */}
        <div className="siena-ui-38">
          <motion.span
            aria-hidden="true"
            data-decoration="/assets/icono_123.svg"
            className="siena-decoration w-[54px] md:w-[68px] mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
          <div className={`relative inline-block ${h1Script ? "mb-[60px] md:mb-[80px]" : "mb-8"}`}>
            <motion.h1
              className="siena-ui-39"
              style={{ fontFamily: "'Palmore-Light', serif" }}
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.1, ease: [0.25, 0.46, 0.45, 0.94] }}
            >
              {h1}
            </motion.h1>
            {h1Script && (
              <motion.span
                className="siena-ui-40"
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
            className="siena-view-30"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
          >
            <GoldButton href={primaryHref} label={primaryLabel} />
            <a
              href={`tel:${info.phone.replace(/[^\d+]/g, "")}`}
              className="siena-ui-41 group"
            >
              <span>{info.phone}</span>
            </a>
          </motion.div>
        </div>

        {/* Address + phone bar, same as the homepage hero */}
        <div className="siena-ui-42">
          <a
            href={info.maps_url}
            target="_blank"
            rel="noopener noreferrer"
            className="siena-ui-43 group"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="siena-view-31">
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span>{info.address}</span>
          </a>
          <Link href="/menus" className="siena-ui-43">
            <span>VIEW THE MENUS</span>
            <Arrow fill="currentColor" />
          </Link>
        </div>
      </section>

      {/* ── MARQUEE ──────────────────────────────────────────── */}
      <section className="siena-view-32">
        <style>{`
          @keyframes ${mq}-kf { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
          .${mq} { display:flex; width:max-content; animation:${mq}-kf 22s linear infinite; }
        `}</style>
        <div className={mq}>
          {[0, 1, 2, 3].map((r) => (
            <div key={r} className="flex items-center">
              {marquee.map((m, i) => (
                <span key={i} className="flex items-center">
                  <span className="siena-ui-44">{m}</span>
                  <span aria-hidden="true" data-decoration="/assets/star.svg" className="siena-decoration w-5 h-5 flex-shrink-0" />
                </span>
              ))}
            </div>
          ))}
        </div>
      </section>

      {plan && (
        <section aria-labelledby="visit-planning" className="siena-view-33">
          <div className="max-w-[900px] mx-auto text-center">
            <h2 id="visit-planning" className="siena-view-34">{plan.heading}</h2>
            <p className="siena-view-35">{plan.text}</p>
            <div className="mt-6"><GoldButton href={primaryHref} label={primaryLabel} /></div>
            <nav aria-label="Plan your visit" className="siena-view-36">
              {plan.links.map(link => <Link key={link.href} href={link.href} className="siena-view-37">{link.label}</Link>)}
            </nav>
          </div>
        </section>
      )}

      {/* ── INTRO ────────────────────────────────────────────── */}
      <section className="relative w-full overflow-hidden" style={bgStyle("texture")}>
        <div className="siena-view-38">
          <SectionTitle heading={intro.heading} script={intro.script} icon={intro.icon} bg="green" color="#ffffff" />
          <div className="flex flex-col gap-5 text-center">
            {intro.paras.map((p, i) => (
              <motion.p
                key={i}
                className="siena-view-39"
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
              <div className="siena-view-40">
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
                          className="siena-ui-45"
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
              <div className="siena-view-40">
                <SectionTitle heading={b.heading} script={b.script} icon={b.icon} bg={b.bg} />
                {b.intro && (
                  <p
                    className="siena-ui-46"
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
                        className="siena-view-41"
                      />
                      <div className="siena-ui-47" />
                      <div className="siena-view-42">
                        <div className="siena-view-43">
                          <div className="flex items-end justify-between gap-3">
                            <div className="min-w-0 flex-1">
                              <h3 className="siena-view-44">{it.title}</h3>
                              <p className="siena-view-45">{it.sub}</p>
                            </div>
                            <div className="siena-ui-48">
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
            <div className="siena-view-40">
              <SectionTitle heading={b.heading} script={b.script} icon={b.icon} bg={b.bg} />
              {b.intro && (
                <p
                  className="siena-ui-46"
                  dangerouslySetInnerHTML={{ __html: b.intro }}
                />
              )}
              <div className="siena-view-46">
                {b.cards.map((c, j) => (
                  <motion.div
                    key={j}
                    className="siena-view-47"
                    initial={{ opacity: 0, y: 45 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, delay: j * 0.15, ease: "easeOut" }}
                    whileHover={{ y: -6, transition: { duration: 0.25 } }}
                  >
                    <span className="siena-view-48">✦</span>
                    <h3
                      className="siena-ui-49"
                      style={{ fontFamily: "'Palmore-Light', serif" }}
                    >
                      {c.title}
                    </h3>
                    <p
                      className="siena-ui-50"
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
            <div className="siena-view-40">
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
                        <span aria-hidden="true" data-decoration="/assets/star.svg" className="siena-decoration w-full h-full opacity-20" />
                        <span className="absolute inset-0 overflow-hidden" style={{ width: `${fill * 100}%` }}>
                          <span aria-hidden="true" data-decoration="/assets/star.svg" className="siena-decoration h-full max-w-none w-8 md:w-9" />
                        </span>
                      </span>
                    );
                  })}
                </div>
                <a
                  href={REVIEW_STATS.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="siena-ui-51"
                >
                  Read our {REVIEW_STATS.countFloor}+ Google reviews
                </a>
              </motion.div>

              <div className="siena-view-46">
                {reviews.quotes.map((q, i) => (
                  <motion.figure
                    key={i}
                    className="siena-view-47"
                    initial={{ opacity: 0, y: 45 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, amount: 0.2 }}
                    transition={{ duration: 0.7, delay: i * 0.15, ease: "easeOut" }}
                    whileHover={{ y: -6, transition: { duration: 0.25 } }}
                  >
                    <span className="siena-view-48">✦</span>
                    <blockquote className="siena-view-49">“{q.text}”</blockquote>
                    <figcaption className="siena-view-50">{q.author}</figcaption>
                  </motion.figure>
                ))}
              </div>
            </div>
          </section>
        </>
      )}

      {/* ── FAQ ──────────────────────────────────────────────── */}
      <section className="relative w-full overflow-hidden" style={bgStyle("texture")}>
        <div className="siena-view-51">
          <SectionTitle heading="Good to Know" script="before you come" bg="green" />
          <div className="flex flex-col">
            {faqs.map((f, i) => (
              <motion.div
                key={i}
                className="siena-view-52"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: i * 0.05, ease: "easeOut" }}
              >
                <h3 className="siena-view-53">{f.q}</h3>
                <p
                  className="siena-ui-52"
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
        <div className="siena-view-40">
          <SectionTitle heading={closing.heading} script={closing.script} icon="/assets/icono_findus.svg" bg="black" />

          <div className="siena-view-54">
            {closing.paras.map((p, i) => (
              <p
                key={i}
                className="siena-ui-53"
                dangerouslySetInnerHTML={{ __html: p }}
              />
            ))}
          </div>

          <div className="siena-view-55">
            {/* NAP, matching the Google Business Profile character for character */}
            <motion.div
              className="border border-white/10 bg-white/5 p-8"
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
            >
              <p className="siena-view-56">Find Us</p>
              <address className="not-italic flex flex-col gap-1">
                <span className="text-white/85 text-[16px] leading-[1.7]">Siena Restaurant &amp; Bar</span>
                <span className="text-white/85 text-[16px] leading-[1.7]">{info.address}</span>
                <a
                  href={`tel:${info.phone.replace(/[^\d+]/g, "")}`}
                  className="siena-ui-54"
                >
                  {info.phone}
                </a>
              </address>
              <a
                href={info.maps_url}
                target="_blank"
                rel="noopener noreferrer"
                className="siena-ui-55"
              >
                Get Directions <Arrow fill="currentColor" />
              </a>
              {practical && practical.length > 0 && (
                <ul className="siena-view-57">
                  {practical.map((p, i) => (
                    <li key={i} className="siena-view-58">
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
              <p className="siena-view-56">Opening Hours</p>
              {info.hours.map((h) => (
                <p key={h.label} className="siena-ui-56">
                  <span>{h.label}</span>
                  <span className="text-white/85 whitespace-nowrap">{h.value}</span>
                </p>
              ))}
              <div className="flex flex-col sm:flex-row gap-3 mt-7">
                <GoldButton href={primaryHref} label={primaryLabel} />
                <Link
                  href="/menus"
                  className="siena-ui-57"
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
