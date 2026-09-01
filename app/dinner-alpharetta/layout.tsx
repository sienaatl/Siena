import type { Metadata } from "next";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { FAQS } from "./content";

export const metadata: Metadata = {
  title: "Dinner in Alpharetta",
  description:
    "Dinner in Alpharetta from 4pm, later on Friday and Saturday. Italian and Mediterranean sharing plates at Siena on Devore Rd. Book your table.",
  alternates: { canonical: "/dinner-alpharetta" },
  openGraph: {
    title: "Dinner in Alpharetta | Siena Restaurant & Bar",
    description:
      "Dinner and bar service from 4pm, to midnight on Friday and Saturday. Sharing plates in downtown Alpharetta.",
    url: "https://sienaatl.com/dinner-alpharetta",
    type: "website",
    images: [{ url: "https://sienaatl.com/assets/hero12.webp" }],
  },
  twitter: { card: "summary_large_image", title: "Dinner in Alpharetta | Siena Restaurant & Bar", description: "Dinner and bar service from 4pm, to midnight on Friday and Saturday. Sharing plates in downtown Alpharetta." },
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
      <BreadcrumbSchema trail={[{ name: "Dinner in Alpharetta", path: "/dinner-alpharetta" }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
