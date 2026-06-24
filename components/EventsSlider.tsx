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
          className="hidden md:flex absolute cursor-pointer -left-16 top-1/2 -translate-y-1/2 z-10 bg-[#58021f] text-[#f5efdd] w-11 h-11 items-center justify-center text-2xl hover:bg-[#deae21] hover:text-[#030302] hover:scale-110 transition-all duration-300 shadow-md"
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
                className="bg-[#f5efdd] overflow-hidden flex flex-col hover:shadow-2xl transition-all duration-500 basis-full md:basis-[calc((100%-24px)/3)] shrink-0 grow-0 min-w-0"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={event.image_url ?? `/assets/pic${i + 1}.webp`}
                    alt={event.title}
                    fill
                    sizes="(max-width: 767px) 100vw, 390px"
                    className="object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-5 md:p-6 flex flex-col gap-3 flex-1">
                  <div className="flex items-center gap-3">
                    <span className="text-[#58021f] text-[13px] tracking-widest">/ {String(i + 1).padStart(2, "0")}</span>
                    <div className="h-[1px] flex-1 bg-[#deae21]/30" />
                  </div>
                  <h3
                    className="text-[#58021f] text-[32px] md:text-[42px] leading-tight"
                    style={{ fontFamily: "'Palmore-Light', serif", fontWeight: 300 }}
                  >
                    {event.title}
                  </h3>
                  <div className="w-8 h-[2px] bg-[#deae21]" />
                  <p className="text-[#030302]/75 text-[15px] md:text-[16px] leading-[1.7]">
                    {event.description}
                  </p>
                  {event.ideal.length > 0 && (
                    <div className="mt-auto pt-3 flex flex-col gap-1">
                      {event.ideal.map((item, j) => (
                        <span key={j} className="text-[#030302]/70 text-[14px] flex items-center gap-2">
                          <span className="w-1 h-1 rounded-full bg-[#deae21] flex-shrink-0 inline-block" />
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
          className="hidden md:flex absolute cursor-pointer -right-16 top-1/2 -translate-y-1/2 z-10 bg-[#58021f] text-[#f5efdd] w-11 h-11 items-center justify-center text-2xl hover:bg-[#deae21] hover:text-[#030302] hover:scale-110 transition-all duration-300 shadow-md"
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
            className="flex items-center justify-center w-[44px] h-[44px] cursor-pointer"
          >
            <span className={`h-2.5 transition-all duration-300 border border-[#58021f] ${i === selectedIndex ? "bg-[#58021f] w-6" : "bg-[#58021f]/30 w-2.5 hover:bg-[#58021f]/60"}`} />
          </button>
        ))}
      </div>
    </div>
  );
}
