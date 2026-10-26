"use client";

import BlogCard from "@/components/BlogCard";
import Link from "next/link";
import type { Blog } from "@/lib/blog-data";
import Image from "next/image";
import { motion } from "motion/react";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

type BlogSummary = Pick<Blog, "slug" | "title" | "description" | "image">;

export default function BlogIndexClient({ blogs }: { blogs: BlogSummary[] }) {
  return (
    <main>
      <BreadcrumbSchema trail={[{ name: "Blog", path: "/blogs" }]} />
      {/* HERO */}
      <section className="relative w-full h-[400px] md:h-[45vh] overflow-hidden">
        <motion.div
          className="absolute inset-0"
          initial={{ scale: 1.08 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.4, ease: "easeOut" }}
        >
          <Image 
            src="/blogs/blog5.jpeg" 
            alt="Events at Siena" 
            fill 
            className="object-cover object-[50%_40%]" 
            preload 
            sizes="100vw" 
          />
        </motion.div>
        <div className="absolute inset-0 bg-black/55" />
        <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4 pt-14 md:pt-16">
          <motion.div
            className="flex items-center gap-3 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="w-10 md:w-16 h-px bg-gradient-to-r from-transparent to-[#e0b265]/80" />
            <span className="text-[#e0b265] text-[11px] tracking-[0.4em]">✦</span>
            <div className="w-10 md:w-16 h-px bg-gradient-to-l from-transparent to-[#e0b265]/80" />
          </motion.div>
          <motion.h1
            className="text-[#e0b265] text-[38px] sm:text-[50px] md:text-[82px] lg:text-[104px] leading-none tracking-[0.06em] uppercase"
            style={{ fontFamily: "'Palmore-Light', serif" }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Blogs
          </motion.h1>
          <motion.div
            className="flex items-center gap-3 mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          >
            <div className="w-10 md:w-16 h-px bg-gradient-to-r from-transparent to-[#e0b265]/80" />
            <span className="text-[#e0b265] text-[11px] tracking-[0.4em]">✦</span>
            <div className="w-10 md:w-16 h-px bg-gradient-to-l from-transparent to-[#e0b265]/80" />
          </motion.div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="w-full bg-[#030302] py-5 overflow-hidden">
        <style>{`
          @keyframes mq-ev { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
          .mq-ev { display:flex; width:max-content; animation:mq-ev 22s linear infinite; }
        `}</style>
        <div className="mq-ev">
          {[0, 1, 2, 3].map((r) => (
            <div key={r} className="flex items-center">
              <span className="text-white text-[15px] font-semibold tracking-[0.2em] uppercase px-8 whitespace-nowrap">PRIVATE DINNERS</span>
              <img src="/assets/star.svg" alt="decorative star" className="w-5 h-5 flex-shrink-0" />
              <span className="text-white text-[15px] font-semibold tracking-[0.2em] uppercase px-8 whitespace-nowrap">CORPORATE GATHERINGS</span>
              <img src="/assets/star.svg" alt="decorative star" className="w-5 h-5 flex-shrink-0" />
              <span className="text-white text-[15px] font-semibold tracking-[0.2em] uppercase px-8 whitespace-nowrap">COCKTAIL RECEPTIONS</span>
              <img src="/assets/star.svg" alt="decorative star" className="w-5 h-5 flex-shrink-0" />
              <span className="text-white text-[15px] font-semibold tracking-[0.2em] uppercase px-8 whitespace-nowrap">MILESTONE CELEBRATIONS</span>
              <img src="/assets/star.svg" alt="decorative star" className="w-5 h-5 flex-shrink-0" />
            </div>
          ))}
        </div>
      </section>

      <section className="w-full py-16" style={{ backgroundColor: "#1b312e" }}>
        <div className="container mx-auto px-5">
          {/* A section label, not the page title — the hero above already carries the h1. */}
          <h2 className="text-3xl font-semi-bold mb-6 text-center text-white">
            Stories from Siena
          </h2>

          <div className="max-w-3xl mx-auto mb-12 text-white/80 text-base leading-relaxed space-y-4">
            <p>
              Explore Mediterranean and Italian dining at Siena Restaurant &amp; Bar in
              Alpharetta. Our stories introduce the food and ideas behind an evening
              around the table, from sharing plates to planning a dinner with friends.
              Start with an article below, then use the current menu to choose what
              you would like to try on your next visit. Our <Link className="text-[#e0b265] underline" href="/blogs/hidden-gems-among-alpharetta">Alpharetta dining story</Link> is
              a starting point for exploring Siena, and the <Link className="text-[#e0b265] underline" href="/alpharetta-restaurant-week">2026 Restaurant Week archive</Link> records
              a past seasonal event.
            </p>
            <p>
              Planning your evening? Browse <Link className="text-[#e0b265] underline" href="/menus">dinner and drinks</Link>,
              check <Link className="text-[#e0b265] underline" href="/live-music-fridays">Friday live music from 7–10 p.m.</Link>,
              or <Link className="text-[#e0b265] underline" href="/reservations">reserve a table</Link>.
              For a celebration or business gathering, our <Link className="text-[#e0b265] underline" href="/event-inquiry">event inquiry form</Link> connects
              you with the team to discuss your date and group. Siena is at 124 Devore Road;
              free parking is available and walk-ins are welcome, subject to availability.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogs
                .map((blog) => (
                  <BlogCard key={blog.slug} blog={blog} />
                ))}
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
