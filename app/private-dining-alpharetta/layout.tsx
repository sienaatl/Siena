import { diningMetadata } from "@/lib/page-metadata";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { FAQS } from "./content";

export const metadata = diningMetadata("private-dining-alpharetta", "Private Dining & Celebrations in Alpharetta", "Plan private dining at Siena in Alpharetta for birthdays, anniversaries and corporate dinners. Explore the space and send your date and guest count.");

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
      <BreadcrumbSchema trail={[{ name: "Private Dining and Events in Alpharetta", path: "/private-dining-alpharetta" }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
