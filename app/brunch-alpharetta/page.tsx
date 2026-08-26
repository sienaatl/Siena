import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Brunch in Alpharetta, GA | Siena Restaurant",
  description: "Discover brunch at Siena in Alpharetta, GA. Explore Mediterranean-inspired dishes, cocktails and a stylish setting for weekend dining.",
  alternates: { canonical: "https://sienaatl.com/brunch-alpharetta" },
  openGraph: { title: "Brunch in Alpharetta, GA | Siena", description: "Explore Siena for an elevated brunch experience in Alpharetta.", url: "https://sienaatl.com/brunch-alpharetta" },
};

export default function BrunchAlpharettaPage() {
  return (
    <main className="bg-[#1b312e] text-white pt-28 pb-20 px-5">
      <BreadcrumbSchema trail={[{ name: "Brunch Alpharetta", path: "/brunch-alpharetta" }]} />
      <section className="max-w-4xl mx-auto text-center">
        <p className="text-[#e0b265] uppercase tracking-[0.3em] text-sm mb-4">Weekend Dining</p>
        <h1 className="text-5xl md:text-7xl uppercase leading-none mb-8">Brunch in Alpharetta, GA</h1>
        <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-8">Gather at Siena for an elevated Alpharetta dining experience with Mediterranean-inspired flavors, cocktails and a warm atmosphere designed for lingering over a weekend meal.</p>
        <p className="text-white/80 leading-relaxed mb-10">Check our current menus and reservations for the latest brunch availability, dishes and service times.</p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link className="bg-[#e0b265] text-[#1b312e] px-6 py-3 uppercase" href="/menus">View Current Menus</Link>
          <Link className="border border-[#e0b265] px-6 py-3 uppercase" href="/reservations">Reservations</Link>
          <Link className="border border-[#e0b265] px-6 py-3 uppercase" href="/date-night-alpharetta">Date Night</Link>
        </div>
      </section>
    </main>
  );
}
