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
    <div className="flex flex-col items-center gap-4 w-full max-w-[480px]">

      {/* Imagen */}
      <div className="relative w-full aspect-[4/3] overflow-hidden shadow-2xl">
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
          className="cursor-pointer bg-[#58021f] text-[#f5efdd] w-9 h-9 flex items-center justify-center text-xl hover:bg-[#3a0114] transition"
        >
          ‹
        </button>

        <div className="flex gap-2">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              className={`cursor-pointer w-2.5 h-2.5 transition-all ${
                i === current ? "bg-[#58021f] scale-125" : "bg-[#58021f]/30"
              }`}
            />
          ))}
        </div>

        <button
          onClick={next}
          className="cursor-pointer bg-[#58021f] text-[#f5efdd] w-9 h-9 flex items-center justify-center text-xl hover:bg-[#3a0114] transition"
        >
          ›
        </button>
      </div>
    </div>
  );
}