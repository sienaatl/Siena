import { diningMetadata } from "@/lib/page-metadata";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { FAQS } from "./content";

export const metadata = diningMetadata("happy-hour-alpharetta", "Happy Hour in Alpharetta", "Explore happy hour at Siena in Alpharetta with cocktails and Mediterranean small plates. View the happy-hour menu and contact us for current specials.");

/**
 * The root layout appends " | Siena" through its title template, so the title here
 * leaves the brand off. Structured data is BreadcrumbList and FAQPage; the Restaurant
 * entity stays in the root layout.
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
      <BreadcrumbSchema trail={[{ name: "Happy Hour in Alpharetta", path: "/happy-hour-alpharetta" }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
