"use client";
import { useState, useEffect, useCallback } from "react";
import useEmblaCarousel from "embla-carousel-react";

export default function VideosSection() {
    const [emblaRef, emblaApi] = useEmblaCarousel({
        align: "center",
        containScroll: "trimSnaps",
        slidesToScroll: 1,
    });

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [scrollSnaps, setScrollSnaps] = useState<number[]>([]);

    const videos = [
        { src: "/assets/video1.mp4", aspect: "aspect-[4/5]", marginTop: "mt-8" },
        { src: "/assets/video_2.mp4", aspect: "aspect-[3.5/5]", marginTop: "" },
        { src: "/assets/video_3.mp4", aspect: "aspect-[4/5]", marginTop: "mt-8" },
    ];

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
        <div className="relative z-10 w-full max-w-[1180px] mx-auto pt-5 pb-20">
            <div className="hidden md:grid grid-cols-3 gap-3 items-center">
                {videos.map((video, i) => (
                    <div key={i} className={`overflow-hidden shadow-xl ${video.aspect} ${video.marginTop}`}>
                        <video autoPlay loop muted playsInline preload="none" className="w-full h-full object-cover">
                            <source src={video.src} type="video/mp4" />
                        </video>
                    </div>
                ))}
            </div>

            {/* Mobile: slider 1 a la vez */}
            <div className="md:hidden px-4">
                <div className="overflow-hidden" ref={emblaRef}>
                    <div className="flex gap-4">
                        {videos.map((video, i) => (
                            <div
                                key={i}
                                className="basis-full shrink-0 grow-0 min-w-0"
                            >
                                <div className="overflow-hidden shadow-xl aspect-[4/5]">
                                    <video autoPlay loop muted playsInline preload="none" className="w-full h-full object-cover">
                                        <source src={video.src} type="video/mp4" />
                                    </video>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Dots */}
                <div className="flex justify-center mt-6">
                    {scrollSnaps.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => scrollTo(i)}
                            aria-label={`Go to video ${i + 1}`}
                            className="flex items-center justify-center w-[44px] h-[44px] cursor-pointer"
                        >
                            <span className={`h-2.5 transition-all duration-300 border border-[#030302] ${i === selectedIndex ? "bg-[#030302] w-6" : "bg-[#030302]/30 w-2.5 hover:bg-[#030302]/60"}`} />
                        </button>
                    ))}
                </div>
            </div>
        </div>
    );
}