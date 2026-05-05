"use client";
import { useState } from "react";

export default function TestimonialsSlider() {
  const testimonials = [
    {
      name: "Mohammed Al Saadi",
      text: "I drove 50 minutes to get there and it was definitely worth it. The atmosphere and the food were amazing.",
      url: "https://maps.app.goo.gl/Aw1uJoz4yaBqds1RA",
    },
    {
      name: "Charlotte Stobierski",
      text: "Amazing flavors, professional service, and a relaxing, modern decor. This renovated spot will definitely be added to our list of favorites.",
      url: "https://maps.app.goo.gl/kcydWxWxdTZyHAgMA",
    },
    {
      name: "Dawn Armstrong",
      text: "I recently discovered this restaurant and couldn't resist trying it. The atmosphere was fantastic!",
      url: "https://maps.app.goo.gl/pTLQ4VHYE9pB2WhEA",
    },
    {
      name: "Susan Keenan",
      text: "Wow! This restaurant is awesome. Great ambience! Jay the bartender was great — gave us samples of the wine so we could pick which we wanted.",
      url: "https://maps.app.goo.gl/cP27Hk54pmAR6vMd8",
    },
    {
      name: "Sameer Bhanbdari",
      text: "I had a great experience at Siena, and a big part of that was our server, Isabel. She was incredibly friendly and attentive.",
      url: "https://maps.app.goo.gl/1x6wz5PKuo5FJSFQA",
    },
    {
      name: "Helena Nealon",
      text: "I am very finicky when it comes to french fries but oh lord I am in heaven here. The drinks are amazing.",
      url: "https://maps.app.goo.gl/TEzVZZauHYo1NL1Z9",
    },
    {
      name: "Sharon Lee",
      text: "We were a group of 12 ladies. Everyone thought their food was great. Cocktails also very good.",
      url: "https://maps.app.goo.gl/i6o4Tq7G7QdRbgtV6",
    },
    {
      name: "Derek Stark",
      text: "My wife and I came here to celebrate Valentine's Day early. We were both very pleased.",
      url: "https://maps.app.goo.gl/h9mQ1WvucMegZ1UVA",
    },
    {
      name: "Celtic Pride",
      text: "Siena is a new restaurant in downtown Alpharetta. Not only did it meet my expectations, it exceeded them!",
      url: "https://maps.app.goo.gl/gvX98wedwhtd9ZAH8",
    },
  ];

  const [paused, setPaused] = useState(false);
  const doubled = [...testimonials, ...testimonials];

  return (
    <div
      className="w-full overflow-hidden"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <style>{`
        @keyframes scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .testimonials-track {
          display: flex;
          width: max-content;
          animation: scroll 55s linear infinite;
        }
        .testimonials-track.paused {
          animation-play-state: paused;
        }
      `}</style>

      <div className={`testimonials-track ${paused ? "paused" : ""}`}>
        {doubled.map((t, i) => (
          <a
            key={i}
            href={t.url}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 w-[280px] mx-3 bg-white p-8 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
          >
            <img src="/assets/iconoestrellas.svg" alt="5 stars" className="w-[120px] h-auto" />
            <p className="text-[#2b0a0a] text-[16px] leading-[1.8] flex-1">
              {t.text}
            </p>
            <span className="text-[#deae21] text-[15px] font-semibold">{t.name}</span>
          </a>
        ))}
      </div>
    </div>
  );
}