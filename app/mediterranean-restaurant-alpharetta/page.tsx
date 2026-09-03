import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Mediterranean Restaurant in Alpharetta, GA | Siena",
  description:
    "Experience Siena, a Mediterranean and Italian restaurant in Alpharetta, GA serving chef-driven dishes, pasta, seafood, cocktails, brunch and private dining.",
  alternates: { canonical: "https://sienaatl.com/mediterranean-restaurant-alpharetta" },
  openGraph: {
    title: "Mediterranean Restaurant in Alpharetta, GA | Siena",
    description: "Discover Mediterranean warmth and Italian soul at Siena in Alpharetta, Georgia.",
    url: "https://sienaatl.com/mediterranean-restaurant-alpharetta",
    images: [{ url: "/assets/Siena_20.03.26-A-03.webp", alt: "Siena Mediterranean restaurant in Alpharetta" }],
  },
};

const linkClass =
  "inline-block border border-[#e0b265] px-7 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#e0b265] transition hover:bg-[#e0b265] hover:text-[#1b312e]";

const faqs = [
  {
    question: "What type of food does Siena serve?",
    answer:
      "Siena serves Mediterranean-inspired cuisine with Italian influences, including shareable starters, seafood, grilled dishes, pasta, desserts and cocktails.",
  },
  {
    question: "Where is Siena located in Alpharetta?",
    answer: "Siena is located at 124 Devore Rd, Alpharetta, GA 30009.",
  },
  {
    question: "Is Siena a good restaurant for date night in Alpharetta?",
    answer:
      "Yes. Siena offers an elevated dining room, cocktails and a chef-driven menu suited to date nights, anniversaries and other special evenings.",
  },
  {
    question: "Does Siena offer private dining in Alpharetta?",
    answer:
      "Yes. Siena offers private and semi-private dining options for birthdays, corporate dinners, rehearsal dinners and other celebrations.",
  },
];

export default function MediterraneanAlpharettaPage() {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: { "@type": "Answer", text: faq.answer },
    })),
  };

  return (
    <main className="bg-[#1b312e] text-white">
      <BreadcrumbSchema trail={[{ name: "Mediterranean Restaurant Alpharetta", path: "/mediterranean-restaurant-alpharetta" }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="mx-auto max-w-5xl px-6 pb-16 pt-36 text-center md:pb-24 md:pt-44">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-[#e0b265]">Alpharetta, Georgia</p>
        <h1 className="text-5xl uppercase leading-none text-[#e0b265] md:text-7xl" style={{ fontFamily: "'Palmore-Light', serif" }}>
          Mediterranean &amp; Italian Restaurant in Alpharetta
        </h1>
        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/85">
          Siena brings Mediterranean warmth and Italian soul to Alpharetta with chef-driven plates, pasta, seafood, grilled dishes and signature cocktails in an elevated, welcoming setting.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link href="/reservations" className={linkClass}>Reserve a Table</Link>
          <Link href="/menus" className={linkClass}>Explore the Menu</Link>
        </div>
      </section>

      <section className="bg-[#f4efe5] text-[#1b312e]">
        <div className="mx-auto grid max-w-6xl gap-12 px-6 py-16 md:grid-cols-2 md:py-24">
          <div>
            <h2 className="text-4xl uppercase text-[#7d2333] md:text-5xl" style={{ fontFamily: "'Palmore-Light', serif" }}>Mediterranean Dining, Siena Style</h2>
            <p className="mt-6 leading-8">
              Start with Mediterranean-inspired shareables, then explore seafood, grilled dishes and Italian-influenced pasta. Siena is designed for guests looking for a full-service dining experience rather than a quick meal.
            </p>
            <p className="mt-4 leading-8">
              The combination of Mediterranean flavors, Italian technique and a polished dining room makes Siena a distinctive choice for diners comparing restaurants across Alpharetta and North Atlanta.
            </p>
          </div>
          <div>
            <h2 className="text-4xl uppercase text-[#7d2333] md:text-5xl" style={{ fontFamily: "'Palmore-Light', serif" }}>Dinner, Brunch &amp; Cocktails</h2>
            <p className="mt-6 leading-8">
              Siena is built around more than one dining occasion. Join us for dinner, explore current brunch offerings, meet for cocktails or plan a celebration with friends, family or colleagues.
            </p>
            <p className="mt-4 leading-8">
              Explore <Link className="font-semibold underline" href="/brunch-alpharetta">brunch in Alpharetta</Link>, <Link className="font-semibold underline" href="/happy-hour-alpharetta">happy hour and cocktails</Link>, or our <Link className="font-semibold underline" href="/private-dining-alpharetta">private dining options</Link>.
            </p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <div className="grid gap-10 md:grid-cols-3">
          <div>
            <h2 className="text-3xl uppercase text-[#e0b265]">Date Nights</h2>
            <p className="mt-4 leading-8 text-white/80">Plan an evening for two with dinner, cocktails and an elevated atmosphere. See our <Link className="text-[#e0b265] underline" href="/date-night-alpharetta">date night guide</Link>.</p>
          </div>
          <div>
            <h2 className="text-3xl uppercase text-[#e0b265]">Celebrations</h2>
            <p className="mt-4 leading-8 text-white/80">Siena welcomes birthdays, anniversaries and milestone dinners. Explore our <Link className="text-[#e0b265] underline" href="/birthday-dinner-alpharetta">birthday dinner page</Link>.</p>
          </div>
          <div>
            <h2 className="text-3xl uppercase text-[#e0b265]">Private Events</h2>
            <p className="mt-4 leading-8 text-white/80">For larger groups, Siena offers private and semi-private options for social and corporate occasions.</p>
          </div>
        </div>
      </section>

      <section className="bg-[#f4efe5] text-[#1b312e]">
        <div className="mx-auto max-w-4xl px-6 py-16 md:py-24">
          <h2 className="text-center text-4xl uppercase text-[#7d2333] md:text-5xl" style={{ fontFamily: "'Palmore-Light', serif" }}>Frequently Asked Questions</h2>
          <div className="mt-10 space-y-8">
            {faqs.map((faq) => (
              <div key={faq.question} className="border-b border-[#1b312e]/15 pb-6">
                <h3 className="text-xl font-semibold">{faq.question}</h3>
                <p className="mt-3 leading-7 text-[#1b312e]/80">{faq.answer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-6 py-16 text-center md:py-24">
        <h2 className="text-4xl uppercase text-[#e0b265] md:text-5xl" style={{ fontFamily: "'Palmore-Light', serif" }}>Plan Your Visit</h2>
        <div className="mt-8 space-y-5 leading-8 text-white/85">
          <p>Siena is located at 124 Devore Rd, Alpharetta, GA 30009, convenient to Downtown Alpharetta and communities across North Atlanta.</p>
          <p>Coming from Roswell? See why Siena is a <Link className="text-[#e0b265] underline" href="/mediterranean-restaurant-near-roswell-ga">Mediterranean dining destination near Roswell</Link>.</p>
        </div>
        <div className="mt-10"><Link href="/reservations" className={linkClass}>Reserve at Siena</Link></div>
      </section>
    </main>
  );
}
