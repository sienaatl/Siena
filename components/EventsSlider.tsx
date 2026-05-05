"use client";
import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "motion/react";

export default function EventsSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    slidesToScroll: 1,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [isDesktop, setIsDesktop] = useState(false);

  // Detectar si es desktop (md: en Tailwind = 768px)
  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 768);
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  const events = [
    {
      number: "01",
      title: "Private Dinners",
      description: "An intimate dinner with warm lighting, thoughtful service, and a menu curated just for your table.",
      ideal: ["Birthday dinners", "Anniversaries", "Small group celebrations"],
    },
    {
      number: "02",
      title: "Corporate & Events",
      description: "A refined setting for professional gatherings — seamless service, chef-driven menus, and an atmosphere that impresses.",
      ideal: ["Team dinners", "Client entertaining", "Company celebrations"],
    },
    {
      number: "03",
      title: "Cocktail Receptions",
      description: "Golden-hour cocktails, small plates designed for mingling, and a vibrant atmosphere that encourages connection.",
      ideal: ["Networking events", "Brand gatherings", "Engagement parties"],
    },
    {
      number: "04",
      title: "Celebrations & Milestones",
      description: "From graduations to rehearsal dinners, Siena offers flexible spaces and menus that feel celebratory without being overdone.",
      ideal: ["Rehearsal dinners", "Graduation celebrations", "Family milestones"],
    },
    {
      number: "05",
      title: "Customized Experiences",
      description: "Every event thoughtfully tailored — menus, pacing, and flow — so your gathering feels effortless, elevated, and entirely your own.",
      ideal: ["Bespoke menus", "Custom pacing", "Your vision, our execution"],
    },
  ];

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);
  const scrollTo = useCallback((index: number) => emblaApi?.scrollTo(index), [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    setScrollSnaps(emblaApi.scrollSnapList());
    emblaApi.on("select", onSelect);
    emblaApi.on("reInit", onSelect);
    onSelect();
  }, [emblaApi, onSelect]);

  return (
    <div className="relative w-full px-4 md:px-0">
      <div className="relative w-full max-w-[1180px] mx-auto">

        <button
          onClick={scrollPrev}
          aria-label="Previous"
          className="hidden md:flex absolute cursor-pointer -left-16 top-1/2 -translate-y-1/2 z-10 bg-[#030302] text-[#f5efdd] w-11 h-11 items-center justify-center text-2xl hover:bg-[#deae21] hover:text-[#030302] hover:scale-110 transition-all duration-300 shadow-md"
        >
          ‹
        </button>

        <div className="overflow-hidden" ref={emblaRef}>
          <div className="flex gap-3">
            {events.map((event, i) => (
              <motion.div
                key={i}
                initial={isDesktop ? { opacity: 0, y: 60 } : false}
                whileInView={isDesktop ? { opacity: 1, y: 0 } : undefined}
                viewport={{ once: true, amount: 0.2 }}
                transition={{
                  duration: 0.7,
                  delay: i * 0.15,
                  ease: "easeOut",
                }}
                className="bg-[#030302] overflow-hidden flex flex-col hover:shadow-2xl transition-all duration-500 basis-full md:basis-[calc((100%-24px)/3)] shrink-0 grow-0 min-w-0"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img
                    src={`/assets/pic${i + 1}.webp`}
                    alt={event.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="p-5 md:p-6 flex flex-col gap-3 flex-1">
                  <div className="flex items-center gap-3">
                    <span className="text-[#deae21] text-[13px] tracking-widest">/ {event.number}</span>
                    <div className="h-[1px] flex-1 bg-[#deae21]/30" />
                  </div>
                  <h3
                    className="text-[#f5efdd] text-[32px] md:text-[42px] leading-tight"
                    style={{ fontFamily: "'Palmore-Light', serif", fontWeight: 300 }}
                  >
                    {event.title}
                  </h3>
                  <div className="w-8 h-[2px] bg-[#deae21]" />
                  <p className="text-[#f5efdd]/80 text-[15px] md:text-[16px] leading-[1.7]">
                    {event.description}
                  </p>
                  <div className="mt-auto pt-3 flex flex-col gap-1">
                    {event.ideal.map((item, j) => (
                      <span key={j} className="text-[#f5efdd]/80 text-[14px]">— {item}</span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <button
          onClick={scrollNext}
          aria-label="Next"
          className="hidden md:flex absolute cursor-pointer -right-16 top-1/2 -translate-y-1/2 z-10 bg-[#030302] text-[#f5efdd] w-11 h-11 items-center justify-center text-2xl hover:bg-[#deae21] hover:text-[#030302] hover:scale-110 transition-all duration-300 shadow-md"
        >
          ›
        </button>

      </div>

      <div className="flex justify-center gap-2 mt-6 md:mt-8">
        {scrollSnaps.map((_, i) => (
          <button
            key={i}
            onClick={() => scrollTo(i)}
            aria-label={`Go to slide ${i + 1}`}
            className={`h-2.5 transition-all duration-300 border border-[#030302] ${i === selectedIndex ? "bg-[#030302] w-6" : "bg-[#030302]/30 w-2.5 hover:bg-[#030302]/60"
              }`}
          />
        ))}
      </div>
    </div>
  );
}