import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Private Dining & Events in Alpharetta, GA | Siena",
  description:
    "Host private dining, birthdays, rehearsal dinners, corporate events and celebrations at Siena in Alpharetta, GA.",
  alternates: { canonical: "https://sienaatl.com/private-dining-alpharetta" },
  openGraph: {
    title: "Private Dining & Events in Alpharetta, GA | Siena",
    description:
      "Plan an elevated private dining experience at Siena for celebrations, business dinners and special events in Alpharetta.",
    url: "https://sienaatl.com/private-dining-alpharetta",
  },
};

export default function PrivateDiningAlpharettaPage() {
  return (
    <main className="bg-[#1b312e] text-white pt-28 pb-20 px-5">
      <BreadcrumbSchema trail={[{ name: "Private Dining Alpharetta", path: "/private-dining-alpharetta" }]} />
      <section className="max-w-4xl mx-auto text-center">
        <p className="text-[#e0b265] uppercase tracking-[0.3em] text-sm mb-4">Private Dining in Alpharetta</p>
        <h1 className="text-5xl md:text-7xl uppercase leading-none mb-8">Private Dining & Events in Alpharetta, GA</h1>
        <p className="text-lg md:text-xl text-white/80 leading-relaxed mb-10">
          Siena offers private and semi-private dining for birthdays, anniversaries, rehearsal dinners, corporate dinners, cocktail receptions and milestone celebrations in Alpharetta.
        </p>
        <div className="grid md:grid-cols-2 gap-6 text-left mb-12">
          <div className="border border-[#e0b265]/30 p-6">
            <h2 className="text-2xl text-[#e0b265] mb-3">Celebrations</h2>
            <p className="text-white/75">Create a memorable setting for birthdays, engagements, graduations, anniversaries and family gatherings.</p>
          </div>
          <div className="border border-[#e0b265]/30 p-6">
            <h2 className="text-2xl text-[#e0b265] mb-3">Corporate Events</h2>
            <p className="text-white/75">Host client dinners, team events, networking gatherings and executive dinners with a polished restaurant experience.</p>
          </div>
        </div>
        <p className="text-white/80 leading-relaxed mb-10">
          Our event team can help coordinate menus, cocktails, wine and service around your group. Explore Siena’s Mediterranean and Italian-inspired cuisine before planning your event.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <Link className="bg-[#e0b265] text-[#1b312e] px-6 py-3 uppercase" href="/event-inquiry">Plan Your Event</Link>
          <Link className="border border-[#e0b265] px-6 py-3 uppercase" href="/menus">View Menu</Link>
          <Link className="border border-[#e0b265] px-6 py-3 uppercase" href="/mediterranean-restaurant-alpharetta">Mediterranean Dining</Link>
        </div>
      </section>
    </main>
  );
}
