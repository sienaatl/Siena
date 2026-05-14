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
      text: "Wow! This restaurant is awesome. Great ambience! Jay the bartender was great, gave us samples of the wine so we could pick which we wanted.",
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
            className="relative flex-shrink-0 w-[280px] mx-3 bg-white p-8 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow cursor-pointer"
          >
            <img src="/assets/iconoestrellas.svg" alt="5 stars" className="w-[120px] h-auto" />
            <p className="text-[#2b0a0a] text-[16px] leading-[1.8] flex-1">
              {t.text}
            </p>
            <span className="text-[#deae21] text-[15px] font-semibold">{t.name}</span>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" className="absolute bottom-3 right-3 w-[18px] h-[18px] opacity-70">
              <path d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" fill="#4285F4"/>
              <path d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" fill="#34A853"/>
              <path d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" fill="#FBBC05"/>
              <path d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" fill="#EA4335"/>
            </svg>
          </a>
        ))}
      </div>
    </div>
  );
}