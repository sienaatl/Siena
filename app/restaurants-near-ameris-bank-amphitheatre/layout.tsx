import type { Metadata } from "next";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { FAQS } from "./content";

export const metadata: Metadata = {
  title: "Restaurants Near Ameris Bank Amphitheatre",
  description:
    "Looking for restaurants near Ameris Bank Amphitheatre? Siena is minutes away in downtown Alpharetta, open from 4pm and until midnight Friday and Saturday.",
  alternates: { canonical: "/restaurants-near-ameris-bank-amphitheatre" },
  openGraph: {
    title: "Restaurants Near Ameris Bank Amphitheatre | Siena Restaurant & Bar",
    description:
      "Minutes from the venue, kitchen open from 4pm and until midnight on Friday and Saturday. Book before the show.",
    url: "https://sienaatl.com/restaurants-near-ameris-bank-amphitheatre",
    type: "website",
    images: [{ url: "https://sienaatl.com/assets/Siena_20.03.26-A-02.webp" }],
  },
  twitter: { card: "summary_large_image", title: "Restaurants Near Ameris Bank Amphitheatre | Siena Restaurant & Bar", description: "Minutes from the venue, kitchen open from 4pm and until midnight on Friday and Saturday. Book before the show." },
};

/**
 * Short title on purpose. The root layout appends " | Siena" through its title
 * template, so writing the brand here would double it up.
 *
 * Structured data: BreadcrumbList and FAQPage only. The Restaurant entity stays in
 * the root layout, and there is no aggregateRating because Google does not allow
 * self-serving review markup on your own site.
 */

const plain = (html: string) => html.replace(/<[^>]+>/g, "").replace(/\s+/g, " ").trim();

export default function Layout({ children }: { children: React.ReactNode }) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: FAQS.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: plain(f.a) },
    })),
  };
  return (
    <>
      <BreadcrumbSchema trail={[{ name: "Restaurants Near Ameris Bank Amphitheatre", path: "/restaurants-near-ameris-bank-amphitheatre" }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
