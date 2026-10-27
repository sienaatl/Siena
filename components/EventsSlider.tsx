"use client";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "motion/react";
import siteData from "@/lib/site-data.json";

type EventItem = {
  id: string;
  title: string;
  description: string;
  image_url: string | null;
  ideal: string[];
  sort_order: number;
};

const EVENTS = siteData.events as EventItem[];

export default function EventsSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    slidesToScroll: 1,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [isDesktop, setIsDesktop] = useState(false);
  const [events] = useState<EventItem[]>(EVENTS);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 768);
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    const frame = requestAnimationFrame(() => {
      setScrollSnaps(emblaApi.scrollSnapList());
      onSelect();
    });
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    return () => cancelAnimationFrame(frame);
  }, [emblaApi, onSelect]);

  return (
    <div className="relative w-full px-4 md:px-0">
      <div className="relative w-full max-w-[1180px] mx-auto">

        <button
          onClick={scrollPrev}
          aria-label="Previous"
          className="siena-view-98"
        >
          ‹
        </button>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-3">
            {events.map((event, i) => (
              <motion.div
                key={event.id}
                initial={isDesktop ? { opacity: 0, y: 30 } : false}
                whileInView={isDesktop ? { opacity: 1, y: 0 } : undefined}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.38,
                  delay: i * 0.08,
                  ease: "easeOut",
                }}
                className="siena-view-99"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={event.image_url ?? `/assets/pic${i + 1}.webp`}
                    alt={event.title}
                    fill
                    sizes="(max-width: 767px) 100vw, 390px"
                    className="siena-view-100"
                  />
                </div>
                <div className="p-5 md:p-6 flex flex-col gap-3 flex-1">
                  <div className="flex items-center gap-3">
                    <span className="siena-view-101">/ {String(i + 1).padStart(2, "0")}</span>
                    <div className="h-[1px] flex-1 bg-[#e0b265]/30" />
                  </div>
                  <h3
                    className="siena-view-102"
                    style={{ fontFamily: "'Palmore-Light', serif", fontWeight: 300 }}
                  >
                    {event.title}
                  </h3>
                  <div className="w-8 h-[2px] bg-[#e0b265]" />
                  <p className="siena-view-103">
                    {event.description}
                  </p>
                  {event.ideal.length > 0 && (
                    <div className="mt-auto pt-3 flex flex-col gap-1">
                      {event.ideal.map((item, j) => (
                        <span key={j} className="siena-view-104">
                          <span className="siena-view-105" />
                          {item}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <button
          onClick={scrollNext}
          aria-label="Next"
          className="siena-view-106"
        >
          ›
        </button>

      </div>

      <div className="flex justify-center mt-6 md:mt-8">
        {scrollSnaps.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className="siena-view-5"
          >
            <span className={`h-2.5 transition-all duration-300 border border-[#e0b265] ${i === selectedIndex ? "bg-[#e0b265] w-6" : "bg-[#e0b265]/30 w-2.5 hover:bg-[#e0b265]/60"}`} />
          </button>
        ))}
      </div>
    </div>
  );
}
