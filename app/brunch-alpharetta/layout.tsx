import { diningMetadata } from "@/lib/page-metadata";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { FAQS } from "./content";

export const metadata = diningMetadata("brunch-alpharetta", "Brunch in Alpharetta", "Explore Siena’s Mediterranean and Italian-inspired brunch menu in Alpharetta. Call to confirm current brunch service and arrange your visit.");

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
      <BreadcrumbSchema trail={[{ name: "Brunch in Alpharetta", path: "/brunch-alpharetta" }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
