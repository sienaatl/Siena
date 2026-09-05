import type { Metadata } from "next";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { FAQS } from "./content";

export const metadata: Metadata = {
  title: "Cocktail Bar in Alpharetta",
  description:
    "Siena is a cocktail bar in Alpharetta with twenty house cocktails, thirty wines and sixty-three spirits. Small plates, live music on Fridays. Walk-ins welcome.",
  alternates: { canonical: "/cocktail-bar-alpharetta" },
  openGraph: {
    title: "Cocktail Bar in Alpharetta | Siena Restaurant & Bar",
    description:
      "Twenty house cocktails, a thirty-bottle wine list and a deep agave shelf, in downtown Alpharetta.",
    url: "https://sienaatl.com/cocktail-bar-alpharetta",
    type: "website",
    images: [{ url: "https://sienaatl.com/assets/Siena_20.03.26-A-06.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Cocktail Bar in Alpharetta | Siena Restaurant & Bar",
    description: "Twenty house cocktails, thirty wines and sixty-three spirits in downtown Alpharetta.",
  },
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
      <BreadcrumbSchema trail={[{ name: "Cocktail Bar in Alpharetta", path: "/cocktail-bar-alpharetta" }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
