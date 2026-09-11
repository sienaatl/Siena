import type { Metadata } from "next";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { FAQS } from "./content";

export const metadata: Metadata = {
  title: "Brunch in Alpharetta",
  description:
    "Saturday brunch in Alpharetta at Siena from 10am. Limoncello ricotta pancakes, truffle frittata, steak and eggs, all built for sharing. Book a table.",
  alternates: { canonical: "/brunch-alpharetta" },
  openGraph: {
    title: "Brunch in Alpharetta | Siena Restaurant & Bar",
    description:
      "A separate Saturday brunch menu from 10am, fifteen plates built for sharing, minutes from Avalon.",
    url: "https://sienaatl.com/brunch-alpharetta",
    type: "website",
    images: [{ url: "https://sienaatl.com/assets/about1.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Brunch in Alpharetta | Siena Restaurant & Bar",
    description: "A separate Saturday brunch menu from 10am, fifteen plates built for sharing.",
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
      <BreadcrumbSchema trail={[{ name: "Brunch in Alpharetta", path: "/brunch-alpharetta" }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
