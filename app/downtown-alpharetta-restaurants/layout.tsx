import type { Metadata } from "next";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { FAQS } from "./content";

export const metadata: Metadata = {
  title: "Downtown Alpharetta Restaurants",
  description:
    "Siena is a downtown Alpharetta restaurant at 124 Devore Rd, minutes from Avalon. Sharing plates, cocktails and Friday live music. Book your table.",
  alternates: { canonical: "/downtown-alpharetta-restaurants" },
  openGraph: {
    title: "Downtown Alpharetta Restaurants | Siena Restaurant & Bar",
    description:
      "On Devore Rd in downtown Alpharetta, minutes from Avalon and the Ameris Bank Amphitheatre.",
    url: "https://sienaatl.com/downtown-alpharetta-restaurants",
    type: "website",
    images: [{ url: "https://sienaatl.com/assets/hero11.webp" }],
  },
  twitter: { card: "summary_large_image", title: "Downtown Alpharetta Restaurants | Siena Restaurant & Bar", description: "On Devore Rd in downtown Alpharetta, minutes from Avalon and the Ameris Bank Amphitheatre." },
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
      <BreadcrumbSchema trail={[{ name: "Downtown Alpharetta Restaurants", path: "/downtown-alpharetta-restaurants" }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
