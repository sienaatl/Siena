import type { Metadata } from "next";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { FAQS } from "./content";

export const metadata: Metadata = {
  title: "Wine Bar in Alpharetta",
  description:
    "Wine in Alpharetta at Siena: thirty bottles, twenty-four by the glass, from Provence rosé to Moët. Bar open from 4pm in downtown Alpharetta.",
  alternates: { canonical: "/wine-bar-alpharetta" },
  openGraph: {
    title: "Wine Bar in Alpharetta | Siena Restaurant & Bar",
    description:
      "Thirty wines, twenty-four by the glass, Moët by the glass, in downtown Alpharetta.",
    url: "https://sienaatl.com/wine-bar-alpharetta",
    type: "website",
    images: [{ url: "https://sienaatl.com/assets/Siena_20.03.26-A-04.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Wine Bar in Alpharetta | Siena Restaurant & Bar",
    description: "Thirty wines, twenty-four by the glass, in downtown Alpharetta.",
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
      <BreadcrumbSchema trail={[{ name: "Wine Bar in Alpharetta", path: "/wine-bar-alpharetta" }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
