import { diningMetadata } from "@/lib/page-metadata";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { FAQS } from "./content";

export const metadata = diningMetadata("downtown-alpharetta-restaurants", "Dining Near Downtown Alpharetta", "Plan dinner near downtown Alpharetta at Siena, 124 Devore Road. Mediterranean and Italian plates, cocktails and celebrations. Reserve a table.");

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
      <BreadcrumbSchema trail={[{ name: "Downtown Alpharetta Restaurants", path: "/downtown-alpharetta-restaurants" }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
