"use client";
import Image from "next/image";
import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { motion } from "motion/react";
import { supabase, supabaseClientId } from "@/lib/supabase";

type EventItem = {
  id: string;
  title: string;
  description: string;
  image_url: string | null;
  ideal: string[];
  sort_order: number;
};

const FALLBACK_EVENTS: EventItem[] = [
  {
    id: "1",
    title: "Private Dinners",
    description: "An intimate dinner with warm lighting, thoughtful service, and a menu curated just for your table.",
    image_url: null,
    ideal: ["Birthday dinners", "Anniversaries", "Small group celebrations"],
    sort_order: 0,
  },
  {
    id: "2",
    title: "Corporate & Events",
    description: "A refined setting for professional gatherings: seamless service, chef-driven menus, and an atmosphere that impresses.",
    image_url: null,
    ideal: ["Team dinners", "Client entertaining", "Company celebrations"],
    sort_order: 1,
  },
  {
    id: "3",
    title: "Cocktail Receptions",
    description: "Golden-hour cocktails, small plates designed for mingling, and a vibrant atmosphere that encourages connection.",
    image_url: null,
    ideal: ["Networking events", "Brand gatherings", "Engagement parties"],
    sort_order: 2,
  },
  {
    id: "4",
    title: "Celebrations & Milestones",
    description: "From graduations to rehearsal dinners, Siena offers flexible spaces and menus that feel celebratory without being overdone.",
    image_url: null,
    ideal: ["Rehearsal dinners", "Graduation celebrations", "Family milestones"],
    sort_order: 3,
  },
  {
    id: "5",
    title: "Customized Experiences",
    description: "Every event thoughtfully tailored: menus, pacing, and flow crafted so your gathering feels effortless, elevated, and entirely your own.",
    image_url: null,
    ideal: ["Bespoke menus", "Custom pacing", "Your vision, our execution"],
    sort_order: 4,
  },
];

export default function EventsSlider() {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    containScroll: "trimSnaps",
    slidesToScroll: 1,
  });

  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);
  const [isDesktop, setIsDesktop] = useState(false);
  const [events, setEvents] = useState<EventItem[]>(FALLBACK_EVENTS);

  useEffect(() => {
    const checkDesktop = () => setIsDesktop(window.innerWidth >= 768);
    checkDesktop();
    window.addEventListener("resize", checkDesktop);
    return () => window.removeEventListener("resize", checkDesktop);
  }, []);

  useEffect(() => {
    supabase
      .from("location_events")
      .select("id, title, description, banner_url, tags, sort_order")
      .eq("restaurant_id", supabaseClientId)
      .eq("status", "published")
      .order("sort_order")
      .then(({ data, error }) => {
        if (error || !data || data.length === 0) return;
        setEvents(
          data.map((row) => {
            const rawDesc = row.description ?? "";
            let description = rawDesc;
            let ideal: string[] =
              Array.isArray(row.tags) && row.tags.length > 0 ? row.tags : [];

            // Parse "description text. - item1 - item2" format when tags are empty
            if (ideal.length === 0 && rawDesc.includes(" - ")) {
              const parts = rawDesc.split(" - ");
              description = parts[0].trim();
              ideal = parts.slice(1).map((s: string) => s.trim()).filter(Boolean);
            }

            return {
              id: row.id,
              title: row.title,
              description,
              image_url: row.banner_url ?? null,
              ideal,
              sort_order: row.sort_order ?? 0,
            };
          })
        );
      });
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
