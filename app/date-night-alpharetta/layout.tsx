import type { Metadata } from "next";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { FAQS } from "./content";

export const metadata: Metadata = {
  title: "Date Night Restaurant in Alpharetta",
  description:
    "Looking for a date night restaurant in Alpharetta? Siena has warm lighting, cocktails, Friday live sax and sharing plates for two. Reserve your table.",
  alternates: { canonical: "/date-night-alpharetta" },
  openGraph: {
    title: "Date Night Restaurant in Alpharetta | Siena Restaurant & Bar",
    description:
      "Warm lighting, cocktails worth talking about, sharing plates for two and live saxophone on Friday nights.",
    url: "https://sienaatl.com/date-night-alpharetta",
    type: "website",
    images: [{ url: "https://sienaatl.com/assets/hero8.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Date Night Restaurant in Alpharetta | Siena Restaurant & Bar",
    description: "Warm lighting, cocktails worth talking about, sharing plates for two and live saxophone on Friday nights.",
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
      <BreadcrumbSchema trail={[{ name: "Date Night Restaurant in Alpharetta", path: "/date-night-alpharetta" }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
