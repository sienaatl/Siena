import type { Metadata } from "next";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { FAQS } from "./content";

export const metadata: Metadata = {
  title: "Happy Hour in Alpharetta",
  description:
    "Happy hour in Alpharetta at Siena, 4 to 7pm. Classic cocktails nine dollars, hummus and fries from eight, calamari twelve. Five minutes from Avalon.",
  alternates: { canonical: "/happy-hour-alpharetta" },
  openGraph: {
    title: "Happy Hour in Alpharetta | Siena Restaurant & Bar",
    description:
      "Four to seven, its own menu. Classic cocktails nine dollars, small plates from eight, in downtown Alpharetta.",
    url: "https://sienaatl.com/happy-hour-alpharetta",
    type: "website",
    images: [{ url: "https://sienaatl.com/assets/Siena_20.03.26-PS-05.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Happy Hour in Alpharetta | Siena Restaurant & Bar",
    description: "Four to seven. Classic cocktails nine dollars, small plates from eight.",
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
      <BreadcrumbSchema trail={[{ name: "Happy Hour in Alpharetta", path: "/happy-hour-alpharetta" }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
