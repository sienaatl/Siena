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
      <section className="siena-view-86">
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
        <div className="siena-view-88">
          <motion.div
            className="flex items-center gap-3 mb-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <div className="siena-view-134" />
            <span className="siena-view-90">✦</span>
            <div className="siena-view-135" />
          </motion.div>
          <motion.h1
            className="siena-view-136"
            style={{ fontFamily: "'Palmore-Light', serif" }}
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9, ease: [0.25, 0.46, 0.45, 0.94] }}
          >
            Siena Restaurant News
          </motion.h1>
          <motion.div
            className="flex items-center gap-3 mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.5, ease: "easeOut" }}
          >
            <div className="siena-view-134" />
            <span className="siena-view-90">✦</span>
            <div className="siena-view-135" />
          </motion.div>
        </div>
      </section>

      {/* MARQUEE */}
      <section className="siena-view-32">
        <style>{`
          @keyframes mq-ev { 0%{transform:translateX(0)} 100%{transform:translateX(-50%)} }
          .mq-ev { display:flex; width:max-content; animation:mq-ev 22s linear infinite; }
        `}</style>
        <div className="mq-ev">
          {[0, 1, 2, 3].map((r) => (
            <div key={r} className="flex items-center">
              <span className="siena-view-93">PRIVATE DINNERS</span>
              <img src="/assets/star.svg" alt="decorative star" className="w-5 h-5 flex-shrink-0" />
              <span className="siena-view-93">CORPORATE GATHERINGS</span>
              <img src="/assets/star.svg" alt="decorative star" className="w-5 h-5 flex-shrink-0" />
              <span className="siena-view-93">COCKTAIL RECEPTIONS</span>
              <img src="/assets/star.svg" alt="decorative star" className="w-5 h-5 flex-shrink-0" />
              <span className="siena-view-93">MILESTONE CELEBRATIONS</span>
              <img src="/assets/star.svg" alt="decorative star" className="w-5 h-5 flex-shrink-0" />
            </div>
          ))}
        </div>
      </section>

      <section className="w-full py-16" style={{ backgroundColor: "#1b312e" }}>
        <div className="container mx-auto px-5">
          {/* A section label, not the page title — the hero above already carries the h1. */}
          <h2 className="siena-view-137 font-semi-bold">
            Stories from Siena
          </h2>

          <div className="siena-view-138">
            <p>
              Read Siena Restaurant news and dining stories from Alpharetta.
              Explore Mediterranean and Italian food, small plates and dinner ideas.
              Start with our <Link className="text-[#e0b265] underline" href="/blogs/hidden-gems-among-alpharetta">Alpharetta dining story</Link>,
              then browse the current menu to plan your visit.
              The <Link className="text-[#e0b265] underline" href="/alpharetta-restaurant-week">2026 Restaurant Week archive</Link> covers
              a past event.
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
          <nav aria-label="Find your dining guide" className="siena-view-138">
            <h3 className="text-[#e0b265] text-xl">Find the right guide for your visit</h3>
            <p>For your first visit, read <Link className="text-[#e0b265] underline" href="/about-us">about Siena</Link> and browse our <Link className="text-[#e0b265] underline" href="/gallery">restaurant photos</Link>. If you are choosing a cuisine, explore our <Link className="text-[#e0b265] underline" href="/mediterranean-restaurant-alpharetta">Mediterranean dining guide</Link> or <Link className="text-[#e0b265] underline" href="/italian-restaurant-alpharetta">Italian dinner ideas</Link>.</p>
            <p>For a night out, start with <Link className="text-[#e0b265] underline" href="/cocktail-bar-alpharetta">cocktails</Link> and check the music schedule. For a group, read about <Link className="text-[#e0b265] underline" href="/private-dining-alpharetta">private dining</Link> before sending your date and guest count. Articles offer ideas; our current menu, hours and reservation availability are the best places to confirm your plans.</p>
          </nav>
          <div className="flex justify-center">
            <div className="siena-view-139">
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
