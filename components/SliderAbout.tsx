"use client";
import { useState } from "react";

const slides = [
  "/assets/slider_about1.webp",
  "/assets/slider_about2.webp",
];

export default function SliderAbout() {
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? slides.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === slides.length - 1 ? 0 : c + 1));

  return (
    <div className="siena-view-2">

      {/* Imagen */}
      <div className="siena-view-3">
        {slides.map((src, i) => (
          <img
            key={i}
            src={src}
            alt={`Slide ${i + 1}`}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-700 ${
              i === current ? "opacity-100" : "opacity-0"
            }`}
          />
        ))}
      </div>

      {/* Controles debajo */}
      <div className="flex items-center gap-4">
        <button
          onClick={prev}
          className="siena-view-4"
        >
          ‹
        </button>

        <div className="flex">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              className="siena-view-5"
            >
              <span className={`w-2.5 h-2.5 transition-all ${i === current ? "bg-[#e0b265] scale-125" : "bg-[#e0b265]/30"}`} />
            </button>
          ))}
        </div>

        <button
          onClick={next}
          className="siena-view-4"
        >
          ›
        </button>
      </div>
    </div>
  );
}