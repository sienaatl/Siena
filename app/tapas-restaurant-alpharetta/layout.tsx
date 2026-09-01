import type { Metadata } from "next";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { FAQS } from "./content";

export const metadata: Metadata = {
  title: "Tapas Restaurant in Alpharetta",
  description:
    "Siena is a tapas-style restaurant in Alpharetta where every plate is shared. Italian and Mediterranean on one menu. Book a table for the whole group.",
  alternates: { canonical: "/tapas-restaurant-alpharetta" },
  openGraph: {
    title: "Tapas Restaurant in Alpharetta | Siena Restaurant & Bar",
    description:
      "Tapas-style sharing plates, Italian and Mediterranean on one menu, in downtown Alpharetta.",
    url: "https://sienaatl.com/tapas-restaurant-alpharetta",
    type: "website",
    images: [{ url: "https://sienaatl.com/assets/Siena_20.03.26-A-04.webp" }],
  },
  twitter: { card: "summary_large_image", title: "Tapas Restaurant in Alpharetta | Siena Restaurant & Bar", description: "Tapas-style sharing plates, Italian and Mediterranean on one menu, in downtown Alpharetta." },
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
      <BreadcrumbSchema trail={[{ name: "Tapas Restaurant in Alpharetta", path: "/tapas-restaurant-alpharetta" }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
