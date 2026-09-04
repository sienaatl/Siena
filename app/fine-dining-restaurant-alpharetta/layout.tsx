import type { Metadata } from "next";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { FAQS } from "./content";

export const metadata: Metadata = {
  title: "Fine Dining Restaurant in Alpharetta",
  description:
    "Siena is a fine dining restaurant in Alpharetta with a chef-driven kitchen, a thirty-bottle wine list and Friday live music. Upscale without the formality.",
  alternates: { canonical: "/fine-dining-restaurant-alpharetta" },
  openGraph: {
    title: "Fine Dining Restaurant in Alpharetta | Siena Restaurant & Bar",
    description:
      "Chef-driven cooking and premium ingredients in an upscale room, served as sharing plates. Minutes from Avalon.",
    url: "https://sienaatl.com/fine-dining-restaurant-alpharetta",
    type: "website",
    images: [{ url: "https://sienaatl.com/assets/hero4.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Fine Dining Restaurant in Alpharetta | Siena Restaurant & Bar",
    description:
      "Chef-driven cooking and premium ingredients in an upscale room, served as sharing plates.",
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
      <BreadcrumbSchema trail={[{ name: "Fine Dining Restaurant in Alpharetta", path: "/fine-dining-restaurant-alpharetta" }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
