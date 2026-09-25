import { diningMetadata } from "@/lib/page-metadata";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { FAQS } from "./content";

export const metadata = diningMetadata("restaurants-near-ameris-bank-amphitheatre", "Dinner Near Ameris Bank Amphitheatre", "Plan dinner at Siena near Ameris Bank Amphitheatre in Alpharetta. View the Mediterranean and Italian menu and reserve ahead of your concert.");

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
