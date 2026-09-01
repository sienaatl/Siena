import type { Metadata } from "next";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { FAQS } from "./content";

export const metadata: Metadata = {
  title: "Mediterranean Restaurant in Alpharetta",
  description:
    "Siena is a Mediterranean restaurant in Alpharetta with fresh mezze, hummus, grilled skewers and bowls, all made for sharing. Book your table today.",
  alternates: { canonical: "/mediterranean-restaurant-alpharetta" },
  openGraph: {
    title: "Mediterranean Restaurant in Alpharetta | Siena Restaurant",
    description:
      "Mezze, hummus, grilled skewers and fresh bowls, all built for sharing. Minutes from Avalon in downtown Alpharetta.",
    url: "https://sienaatl.com/mediterranean-restaurant-alpharetta",
    type: "website",
    images: [{ url: "https://sienaatl.com/assets/Siena_20.03.26-A-03.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mediterranean Restaurant in Alpharetta | Siena Restaurant",
    description: "Mezze, hummus, grilled skewers and fresh bowls, all built for sharing. Minutes from Avalon in downtown Alpharetta.",
  },
};

/**
 * The title is deliberately short. The root layout appends " | Siena" through its
 * title template, so writing the brand here would double it up.
 *
 * Structured data: BreadcrumbList and FAQPage only. The Restaurant entity lives in
 * the root layout and stays there, because a second Restaurant node on a landing
 * page muddies which URL Google treats as the business. No aggregateRating either.
 * Google does not allow self-serving review markup on your own site, so the rating
 * is shown as stars and left out of the schema.
 */

// Schema answers must be plain text, so strip the links the on-page copy carries.
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
      <BreadcrumbSchema trail={[{ name: "Mediterranean Restaurant in Alpharetta", path: "/mediterranean-restaurant-alpharetta" }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
