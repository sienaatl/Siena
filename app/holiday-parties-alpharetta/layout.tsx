import type { Metadata } from "next";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { FAQS } from "./content";

export const metadata: Metadata = {
  title: "Holiday Parties in Alpharetta",
  description:
    "Book a holiday party in Alpharetta at Siena. Company dinners, client nights and family gatherings with sharing plates, cocktails and live music. Enquire today.",
  alternates: { canonical: "/holiday-parties-alpharetta" },
  openGraph: {
    title: "Holiday Parties in Alpharetta | Siena Restaurant & Bar",
    description:
      "Company parties, client dinners and family gatherings in a warm room near Avalon. Sharing plates built for a long table.",
    url: "https://sienaatl.com/holiday-parties-alpharetta",
    type: "website",
    images: [{ url: "https://sienaatl.com/assets/events/1779116412260_ckub4v.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Holiday Parties in Alpharetta | Siena Restaurant & Bar",
    description:
      "Company parties, client dinners and family gatherings in a warm room near Avalon.",
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
      <BreadcrumbSchema trail={[{ name: "Holiday Parties in Alpharetta", path: "/holiday-parties-alpharetta" }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
