import type { Metadata } from "next";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { FAQS } from "./content";

export const metadata: Metadata = {
  title: "Vegetarian Options in Alpharetta",
  description:
    "Looking for vegetarian food in Alpharetta? Siena serves mezze, salads, house-made pasta and vegetable plates, all built for sharing. Book a table.",
  alternates: { canonical: "/vegetarian-restaurant-alpharetta" },
  openGraph: {
    title: "Vegetarian Options in Alpharetta | Siena Restaurant & Bar",
    description:
      "Mezze, salads, house-made pasta and vegetable plates. A full meal without the meat menu.",
    url: "https://sienaatl.com/vegetarian-restaurant-alpharetta",
    type: "website",
    images: [{ url: "https://sienaatl.com/assets/Siena_20.03.26-A-05.webp" }],
  },
  twitter: { card: "summary_large_image", title: "Vegetarian Options in Alpharetta | Siena Restaurant & Bar", description: "Mezze, salads, house-made pasta and vegetable plates. A full meal without the meat menu." },
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
      <BreadcrumbSchema trail={[{ name: "Vegetarian Options in Alpharetta", path: "/vegetarian-restaurant-alpharetta" }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
