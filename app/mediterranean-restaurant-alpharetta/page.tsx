import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Mediterranean Restaurant in Alpharetta, GA | Siena",
  description: "Experience Siena, a Mediterranean and Italian restaurant in Alpharetta, GA serving chef-driven dishes, pasta, seafood, cocktails, brunch and private dining.",
  alternates: { canonical: "https://sienaatl.com/mediterranean-restaurant-alpharetta" },
  openGraph: {
    title: "Mediterranean Restaurant in Alpharetta, GA | Siena",
    description: "Discover Mediterranean warmth and Italian soul at Siena in Alpharetta, Georgia.",
    url: "https://sienaatl.com/mediterranean-restaurant-alpharetta",
    images: [{ url: "/assets/Siena_20.03.26-A-03.webp", alt: "Siena Mediterranean restaurant in Alpharetta" }],
  },
};

const linkClass = "inline-block border border-[#e0b265] px-7 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#e0b265] transition hover:bg-[#e0b265] hover:text-[#1b312e]";

export default function MediterraneanAlpharettaPage() {
  return (
    <main className="bg-[#1b312e] text-white">
      <BreadcrumbSchema trail={[{ name: "Mediterranean Restaurant Alpharetta", path: "/mediterranean-restaurant-alpharetta" }]} />
      <section className="mx-auto max-w-5xl px-6 pb-16 pt-36 text-center md:pb-24 md:pt-44">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-[#e0b265]">Alpharetta, Georgia</p>
        <h1 className="text-5xl uppercase leading-none text-[#e0b265] md:text-7xl" style={{ fontFamily: "'Palmore-Light', serif" }}>Mediterranean &amp; Italian Restaurant in Alpharetta</h1>
        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/85">Siena brings Mediterranean warmth and Italian soul to Alpharetta with chef-driven plates, handcrafted pasta, seafood, grilled dishes and signature cocktails in an elevated, welcoming setting.</p>
        <div className="mt-10 flex flex-wrap justify-center gap-4"><Link href="/reservations" className={linkClass}>Reserve a Table</Link><Link href="/menus" className={linkClass}>Explore the Menu</Link></div>
      </section>
      <section className="bg-[#f4efe5] text-[#1b312e]"><div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-2 md:py-24"><div><h2 className="text-4xl uppercase text-[#7d2333] md:text-5xl" style={{ fontFamily: "'Palmore-Light', serif" }}>Mediterranean Dining, Siena Style</h2><p className="mt-6 leading-8">Share Mediterranean-inspired starters, then explore seafood, grilled meats and Italian-influenced pasta. Siena is designed for guests who want a full dining experience, whether dinner is spontaneous or a celebration.</p></div><div><h2 className="text-4xl uppercase text-[#7d2333] md:text-5xl" style={{ fontFamily: "'Palmore-Light', serif" }}>Dinner, Brunch &amp; Cocktails</h2><p className="mt-6 leading-8">Join us for dinner, weekend brunch, happy hour and cocktails. Planning something special? Siena also welcomes date nights, birthdays, anniversaries, business dinners and private events.</p></div></div></section>
      <section className="mx-auto max-w-4xl px-6 py-16 md:py-24"><h2 className="text-center text-4xl uppercase text-[#e0b265] md:text-5xl" style={{ fontFamily: "'Palmore-Light', serif" }}>Plan Your Visit</h2><div className="mt-10 space-y-6 text-center leading-8 text-white/85"><p>Siena is located at 124 Devore Rd, Alpharetta, GA 30009, convenient to Downtown Alpharetta and communities across North Atlanta.</p><p>Looking for an evening for two? Explore our <Link className="text-[#e0b265] underline" href="/date-night-alpharetta">date night experience in Alpharetta</Link>. Coming from Roswell? See why Siena is a <Link className="text-[#e0b265] underline" href="/mediterranean-restaurant-near-roswell-ga">Mediterranean dining destination near Roswell</Link>.</p></div><div className="mt-10 text-center"><Link href="/reservations" className={linkClass}>Reserve at Siena</Link></div></section>
    </main>
  );
}
