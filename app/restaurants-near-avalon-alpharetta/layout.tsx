import type { Metadata } from "next";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { FAQS } from "./content";

export const metadata: Metadata = {
  title: "Restaurants Near Avalon in Alpharetta",
  description:
    "Looking for restaurants near Avalon? Siena is a short drive away in downtown Alpharetta, open from 4pm with sharing plates, cocktails and Friday live music.",
  alternates: { canonical: "/restaurants-near-avalon-alpharetta" },
  openGraph: {
    title: "Restaurants Near Avalon in Alpharetta | Siena Restaurant & Bar",
    description:
      "A short drive from Avalon and quieter than the strip. Dinner from 4pm, Saturday brunch from 10am.",
    url: "https://sienaatl.com/restaurants-near-avalon-alpharetta",
    type: "website",
    images: [{ url: "https://sienaatl.com/assets/Siena_20.03.26-A-03.webp" }],
  },
  twitter: { card: "summary_large_image", title: "Restaurants Near Avalon in Alpharetta | Siena Restaurant & Bar", description: "A short drive from Avalon and quieter than the strip. Dinner from 4pm, Saturday brunch from 10am." },
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
      <BreadcrumbSchema trail={[{ name: "Restaurants Near Avalon in Alpharetta", path: "/restaurants-near-avalon-alpharetta" }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
