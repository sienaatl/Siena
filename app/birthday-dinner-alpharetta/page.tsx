import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Birthday Dinner in Alpharetta, GA | Siena Restaurant",
  description: "Celebrate a birthday dinner at Siena in Alpharetta with Mediterranean-inspired cuisine, cocktails, wine and an elevated atmosphere.",
  alternates: { canonical: "https://sienaatl.com/birthday-dinner-alpharetta" },
  openGraph: { title: "Birthday Dinner in Alpharetta | Siena", description: "Celebrate birthdays and special occasions at Siena in Alpharetta, Georgia.", url: "https://sienaatl.com/birthday-dinner-alpharetta" },
};

export default function BirthdayDinnerPage() {
  return (
    <main className="bg-[#1b312e] text-white pt-28 pb-20 px-5">
      <BreadcrumbSchema trail={[{ name: "Birthday Dinner Alpharetta", path: "/birthday-dinner-alpharetta" }]} />
      <section className="max-w-4xl mx-auto text-center">
        <p className="text-[#e0b265] uppercase tracking-[0.3em] text-sm mb-4">Celebrate at Siena</p>
        <h1 className="text-5xl md:text-7xl uppercase leading-none mb-8">Birthday Dinner in Alpharetta</h1>
        <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8">Make your next birthday dinner feel like an occasion. Siena pairs chef-driven Mediterranean and Italian-inspired dishes with cocktails, wine and a stylish Alpharetta dining room.</p>
        <h2 className="text-3xl text-[#e0b265] mb-4">Dinner for Two or a Group Celebration</h2>
        <p className="text-white/80 leading-relaxed mb-10">Reserve a table for an intimate celebration, or contact our private events team when your birthday calls for a larger gathering or dedicated event space.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link className="bg-[#e0b265] text-[#1b312e] px-6 py-3 uppercase" href="/reservations">Reserve a Table</Link>
          <Link className="border border-[#e0b265] px-6 py-3 uppercase" href="/private-dining-alpharetta">Private Dining</Link>
          <Link className="border border-[#e0b265] px-6 py-3 uppercase" href="/menus">View Menu</Link>
        </div>
      </section>
    </main>
  );
}
