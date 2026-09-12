import type { Metadata } from "next";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { FAQS } from "./content";

export const metadata: Metadata = {
  title: "Seafood in Alpharetta",
  description:
    "Seafood in Alpharetta at Siena: Mediterranean branzino, salmon limone, flame-grilled octopus and calamari fritti. Dinner from 4pm, five minutes from Avalon.",
  alternates: { canonical: "/seafood-restaurant-alpharetta" },
  openGraph: {
    title: "Seafood in Alpharetta | Siena Restaurant & Bar",
    description:
      "Branzino, salmon, octopus two ways and calamari, cooked the Mediterranean way in downtown Alpharetta.",
    url: "https://sienaatl.com/seafood-restaurant-alpharetta",
    type: "website",
    images: [{ url: "https://sienaatl.com/assets/hero9.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Seafood in Alpharetta | Siena Restaurant & Bar",
    description: "Branzino, salmon, octopus two ways and calamari in downtown Alpharetta.",
  },
};

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
      <BreadcrumbSchema trail={[{ name: "Seafood in Alpharetta", path: "/seafood-restaurant-alpharetta" }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
