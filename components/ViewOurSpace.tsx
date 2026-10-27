"use client";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "motion/react";

// Real interior/exterior shots of the space (no food, no people as the main
// subject). Every frame renders at the same fixed width (object-cover crops
// to fit), so portrait and landscape sources look consistent side by side.
const spaceImages = [
  { src: "/assets/view-our-space/exterior-daytime-1.webp" },
  { src: "/assets/view-our-space/entrance-hostess-stand.webp" },
  { src: "/assets/view-our-space/dining-room-wide-1.webp" },
  { src: "/assets/view-our-space/bar-wide-1.webp" },
  { src: "/assets/view-our-space/dining-room-neon-sign-1.webp" },
  { src: "/assets/view-our-space/exterior-dusk-2.webp" },
  { src: "/assets/view-our-space/dining-room-artwork.webp" },
  { src: "/assets/view-our-space/bar-stool-detail.webp" },
  { src: "/assets/view-our-space/dining-room-wide-2.webp" },
  { src: "/assets/view-our-space/exterior-sign-closeup.webp" },
  { src: "/assets/view-our-space/dining-room-wide-3.webp" },
  { src: "/assets/view-our-space/bar-wide-2.webp" },
  { src: "/assets/view-our-space/dining-room-neon-sign-2.webp" },
  { src: "/assets/view-our-space/exterior-daytime-2.webp" },
  { src: "/assets/view-our-space/dining-room-wide-4.webp" },
  { src: "/assets/view-our-space/neon-sign-closeup.webp" },
  { src: "/assets/view-our-space/bar-wide-3.webp" },
  { src: "/assets/view-our-space/dining-room-daytime.webp" },
  { src: "/assets/view-our-space/exterior-dusk-1.webp" },
  { src: "/assets/view-our-space/exterior-aerial-dusk.webp" },
  { src: "/assets/view-our-space/exterior-aerial-wide.webp" },
];

const CloseIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="26" height="26" fill="none" stroke="currentColor" strokeWidth="2">
    <path d="M18 6L6 18M6 6l12 12" />
  </svg>
);

const ChevronIcon = ({ flip }: { flip?: boolean }) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none" className={flip ? "rotate-180" : ""}>
    <path d="M15.3025 11.0285L2 11.0285L2 8.97146L15.3025 8.97146L11.1214 4.45436L12.4872 3L19 10L12.4872 17L11.1214 15.5456L15.3025 11.0285Z" fill="#1b312e" />
  </svg>
);

export default function ViewOurSpace() {
  const [lightbox, setLightbox] = useState<number | null>(null);
  const [zoomed, setZoomed] = useState(false);

  const openAt = (i: number) => {
    setZoomed(false);
    setLightbox(i);
  };
  const prev = () => setLightbox((l) => (l !== null ? (l - 1 + spaceImages.length) % spaceImages.length : null));
  const next = () => setLightbox((l) => (l !== null ? (l + 1) % spaceImages.length : null));

  useEffect(() => {
    if (lightbox === null) return;
    document.body.style.overflow = "hidden";
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setLightbox(null);
      if (e.key === "ArrowLeft") { setZoomed(false); prev(); }
      if (e.key === "ArrowRight") { setZoomed(false); next(); }
    };
    window.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKey);
    };
  }, [lightbox]);

  return (
    <section className="siena-view-70" style={{ backgroundColor: "#1b312e" }}>
      <div className="w-full max-w-[1180px] mx-auto px-4">
        <div className="siena-view-71">
          <motion.img
            src="/assets/icono_123.svg"
            alt=""
            className="w-[60px] md:w-[75px]"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          />
          <div className="relative inline-block">
            <motion.h2
              className="siena-view-72"
              style={{ fontFamily: "'Palmore-Light', serif" }}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
            >
              View Our Space
            </motion.h2>
            <motion.span
              className="siena-view-73"
              style={{ fontFamily: "'AguafinaScript-Regular', cursive" }}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.7, delay: 0.35, ease: "easeOut" }}
            >
              step inside
            </motion.span>
          </div>
        </div>
      </div>

      {/* Full-bleed auto-scrolling filmstrip — CSS animation, no JS per frame */}
      <div className="w-full overflow-hidden mt-16 md:mt-20">
        <style>{`
          @keyframes vos-scroll {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .vos-track {
            display: flex;
            width: max-content;
            animation: vos-scroll 55s linear infinite;
          }
          .vos-track:hover { animation-play-state: paused; }
          @media (prefers-reduced-motion: reduce) {
            .vos-track { animation-play-state: paused; }
          }
        `}</style>
        <div className="vos-track gap-4 md:gap-5 px-4">
          {/* Duplicate images once so the seamless loop works */}
          {[...spaceImages, ...spaceImages].map((img, i) => (
            <button
              key={i}
              onClick={() => openAt(i % spaceImages.length)}
              aria-label="Open photo"
              className="siena-view-74 group"
            >
              <img
                src={img.src}
                alt="Inside Siena Restaurant"
                loading="lazy"
                className="siena-view-75"
              />
              <div className="siena-view-76">
                <div className="siena-view-77">
                  <svg xmlns="http://www.w3.org/2000/svg" width="17" height="17" fill="none" viewBox="0 0 24 24" stroke="#f4eedd" strokeWidth="2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M17 11A6 6 0 115 11a6 6 0 0112 0zm-6-3.5v7m-3.5-3.5h7" />
                  </svg>
                </div>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* LIGHTBOX */}
      <AnimatePresence>
        {lightbox !== null && (
          <motion.div
            className="siena-view-78"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => setLightbox(null)}
          >
            <button
              className="siena-view-79"
              onClick={() => setLightbox(null)}
              aria-label="Close"
            >
              <CloseIcon />
            </button>

            <button
              className="siena-view-80"
              onClick={(e) => { e.stopPropagation(); setZoomed(false); prev(); }}
              aria-label="Previous"
            >
              <ChevronIcon flip />
            </button>

            <div className="siena-view-81">
              <motion.img
                key={lightbox}
                src={spaceImages[lightbox].src}
                alt="Inside Siena Restaurant"
                className={`max-w-[92vw] max-h-[85vh] object-contain shadow-2xl transition-transform duration-300 ${
                  zoomed ? "scale-[1.9] cursor-zoom-out" : "cursor-zoom-in"
                }`}
                initial={{ opacity: 0, scale: 0.96 }}
                animate={{ opacity: 1, scale: zoomed ? 1.9 : 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
                onClick={(e) => { e.stopPropagation(); setZoomed((z) => !z); }}
              />
            </div>

            <button
              className="siena-view-82"
              onClick={(e) => { e.stopPropagation(); setZoomed(false); next(); }}
              aria-label="Next"
            >
              <ChevronIcon />
            </button>

            <span className="siena-view-83">
              {lightbox + 1} / {spaceImages.length} · click photo to {zoomed ? "zoom out" : "zoom in"}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
