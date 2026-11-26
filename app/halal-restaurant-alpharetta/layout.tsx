import type { Metadata } from "next";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { FAQS } from "./content";

export const metadata: Metadata = {
  title: "Halal Restaurant in Alpharetta | Mediterranean Dining",
  description:
    "Looking for halal food in Alpharetta? Siena serves halal options on its Mediterranean menu, including lamb chops and chicken tawook. View the menu and reserve.",
  alternates: { canonical: "/halal-restaurant-alpharetta" },
  openGraph: {
    title: "Halal Restaurant in Alpharetta | Siena Restaurant & Bar",
    description:
      "Halal options on a Mediterranean and Italian menu in downtown Alpharetta.",
    url: "https://sienaatl.com/halal-restaurant-alpharetta",
    type: "website",
    images: [{ url: "https://sienaatl.com/assets/Siena_20.03.26-D-LambChop-02.webp" }],
  },
  twitter: { card: "summary_large_image", title: "Halal Restaurant in Alpharetta | Siena Restaurant & Bar", description: "Halal options on a Mediterranean and Italian menu in downtown Alpharetta." },
};

/**
 * The root layout appends " | Siena" through its title template.
 * Structured data: BreadcrumbList and FAQPage only.
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
      <BreadcrumbSchema trail={[{ name: "Halal Restaurant in Alpharetta", path: "/halal-restaurant-alpharetta" }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
