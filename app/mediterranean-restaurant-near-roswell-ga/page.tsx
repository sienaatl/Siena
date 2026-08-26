import type { Metadata } from "next";
import Link from "next/link";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Mediterranean Restaurant Near Roswell, GA | Siena",
  description:
    "Looking for Mediterranean dining near Roswell? Visit Siena in neighboring Alpharetta for Mediterranean and Italian cuisine, cocktails, date nights and celebrations.",
  alternates: { canonical: "https://sienaatl.com/mediterranean-restaurant-near-roswell-ga" },
  openGraph: {
    title: "Mediterranean Restaurant Near Roswell, GA | Siena",
    description:
      "A Mediterranean and Italian dining destination in neighboring Alpharetta for guests from Roswell and North Atlanta.",
    url: "https://sienaatl.com/mediterranean-restaurant-near-roswell-ga",
  },
};

const faqs = [
  {
    question: "Is Siena located in Roswell?",
    answer:
      "No. Siena is located at 124 Devore Rd in neighboring Alpharetta, Georgia. This page is intended for Roswell-area diners looking for a nearby Mediterranean and Italian dining option.",
  },
  {
    question: "What kind of dining experience does Siena offer?",
    answer:
      "Siena offers full-service Mediterranean and Italian-inspired dining with seafood, pasta, grilled dishes, cocktails and an elevated atmosphere.",
  },
  {
    question: "Is Siena good for special occasions near Roswell?",
    answer:
      "Yes. Siena is suited to date nights, anniversaries, birthday dinners, business dinners and private events for guests traveling from Roswell and nearby communities.",
  },
];

export default function RoswellPage() {
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
      <BreadcrumbSchema trail={[{ name: "Mediterranean Restaurant Near Roswell", path: "/mediterranean-restaurant-near-roswell-ga" }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />

      <section className="mx-auto max-w-5xl px-6 pb-20 pt-36 text-center md:pt-44">
        <p className="mb-5 text-xs font-semibold uppercase tracking-[0.35em] text-[#e0b265]">Near Roswell, Georgia</p>
        <h1 className="text-5xl uppercase leading-none text-[#e0b265] md:text-7xl" style={{ fontFamily: "'Palmore-Light', serif" }}>
          Mediterranean Restaurant Near Roswell, GA
        </h1>
        <p className="mx-auto mt-8 max-w-3xl text-lg leading-8 text-white/85">
          Searching for an upscale Mediterranean restaurant near Roswell? Siena is located in neighboring Alpharetta and welcomes guests from Roswell and across North Atlanta for Mediterranean-inspired cuisine, Italian influences and signature cocktails.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <Link href="/reservations" className="border border-[#e0b265] px-7 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#e0b265]">Reserve a Table</Link>
          <Link href="/menus" className="border border-[#e0b265] px-7 py-3 text-xs font-semibold uppercase tracking-[0.18em] text-[#e0b265]">View Menu</Link>
        </div>
      </section>

      <section className="bg-[#f4efe5] text-[#1b312e]">
        <div className="mx-auto max-w-5xl px-6 py-16 md:py-24">
          <h2 className="text-4xl uppercase text-[#7d2333] md:text-5xl" style={{ fontFamily: "'Palmore-Light', serif" }}>Why Roswell Diners Choose Siena</h2>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            <div><h3 className="text-2xl font-semibold">Mediterranean + Italian</h3><p className="mt-3 leading-7">Siena combines Mediterranean inspiration with Italian influences across shareable dishes, seafood, grilled plates and pasta.</p></div>
            <div><h3 className="text-2xl font-semibold">Occasion Dining</h3><p className="mt-3 leading-7">The dining room and cocktail program make Siena a natural choice when the meal is part of a date night, birthday, anniversary or business dinner.</p></div>
            <div><h3 className="text-2xl font-semibold">Full-Service Experience</h3><p className="mt-3 leading-7">For diners comparing Mediterranean options around Roswell, Siena offers a polished sit-down experience designed for a complete evening out.</p></div>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-6 py-16 md:py-24">
        <h2 className="text-4xl uppercase text-[#e0b265] md:text-5xl" style={{ fontFamily: "'Palmore-Light', serif" }}>Worth the Trip From Roswell</h2>
        <p className="mt-6 max-w-3xl leading-8 text-white/85">
          Siena offers an elevated setting for date nights, anniversaries, birthday dinners, business dinners and evenings with friends. Our restaurant is at 124 Devore Rd in Alpharetta, not Roswell, so guests can plan their visit with accurate location information.
        </p>
        <p className="mt-6 max-w-3xl leading-8 text-white/85">
          Discover more about <Link href="/mediterranean-restaurant-alpharetta" className="font-semibold text-[#e0b265] underline">Mediterranean dining at Siena in Alpharetta</Link>, plan a <Link href="/date-night-alpharetta" className="font-semibold text-[#e0b265] underline">date night</Link>, or explore <Link href="/private-dining-alpharetta" className="font-semibold text-[#e0b265] underline">private dining and events</Link>.
        </p>
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
    </main>
  );
}
