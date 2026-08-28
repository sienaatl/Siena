import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Happy Hour & Cocktails in Alpharetta, GA | Siena",
  description: "Meet for cocktails, wine and Mediterranean-inspired dining at Siena in Alpharetta. Check current menus and events for the latest offerings.",
  alternates: { canonical: "https://sienaatl.com/happy-hour-alpharetta" },
  openGraph: { title: "Happy Hour & Cocktails in Alpharetta | Siena", description: "Cocktails, wine and Mediterranean-inspired dining at Siena in Alpharetta.", url: "https://sienaatl.com/happy-hour-alpharetta" },
};

export default function HappyHourAlpharettaPage() {
  return (
    <main className="bg-[#1b312e] text-white pt-28 pb-20 px-5">
      <BreadcrumbSchema trail={[{ name: "Happy Hour Alpharetta", path: "/happy-hour-alpharetta" }]} />
      <section className="max-w-4xl mx-auto text-center">
        <p className="text-[#e0b265] uppercase tracking-[0.3em] text-sm mb-4">Cocktails & Wine</p>
        <h1 className="text-5xl md:text-7xl uppercase leading-none mb-8">Happy Hour & Cocktails in Alpharetta</h1>
        <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8">Siena is an inviting Alpharetta destination for cocktails, wine, shareable plates and Mediterranean-inspired dining before dinner, after work or ahead of a night out.</p>
        <p className="text-white/80 leading-relaxed mb-10">Offers and service times can change, so view our current menus and events for the latest Siena experience.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link className="bg-[#e0b265] text-[#1b312e] px-6 py-3 uppercase" href="/menus">View Menus</Link>
          <Link className="border border-[#e0b265] px-6 py-3 uppercase" href="/events">Events</Link>
          <Link className="border border-[#e0b265] px-6 py-3 uppercase" href="/reservations">Reservations</Link>
        </div>
      </section>
    </main>
  );
}
