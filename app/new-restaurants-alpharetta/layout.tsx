import type { Metadata } from "next";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { FAQS } from "./content";

export const metadata: Metadata = {
  title: "New Restaurants in Alpharetta",
  description:
    "Siena is one of the new restaurants in Alpharetta, open since December 2025. House-made pasta, Mediterranean mezze and sharing plates. Book a table.",
  alternates: { canonical: "/new-restaurants-alpharetta" },
  openGraph: {
    title: "New Restaurants in Alpharetta | Siena Restaurant & Bar",
    description:
      "Opened December 2025 on Devore Rd. Italian and Mediterranean on one menu, built for sharing.",
    url: "https://sienaatl.com/new-restaurants-alpharetta",
    type: "website",
    images: [{ url: "https://sienaatl.com/assets/hero1.webp" }],
  },
  twitter: { card: "summary_large_image", title: "New Restaurants in Alpharetta | Siena Restaurant & Bar", description: "Opened December 2025 on Devore Rd. Italian and Mediterranean on one menu, built for sharing." },
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
      <BreadcrumbSchema trail={[{ name: "New Restaurants in Alpharetta", path: "/new-restaurants-alpharetta" }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
