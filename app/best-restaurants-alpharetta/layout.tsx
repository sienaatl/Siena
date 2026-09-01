import type { Metadata } from "next";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { FAQS } from "./content";

export const metadata: Metadata = {
  title: "Best Restaurants in Alpharetta GA",
  description:
    "Siena is one of the best restaurants in Alpharetta GA. Medi-talian sharing plates, house-made pasta, cocktails and Friday live music. Book your table today.",
  alternates: { canonical: "/best-restaurants-alpharetta" },
  openGraph: {
    title: "Best Restaurants in Alpharetta GA | Siena Restaurant & Bar",
    description:
      "Medi-talian sharing plates, house-made pasta, proper cocktails and live saxophone on Fridays, minutes from Avalon.",
    url: "https://sienaatl.com/best-restaurants-alpharetta",
    type: "website",
    images: [{ url: "https://sienaatl.com/assets/Siena_20.03.26-A-02.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Best Restaurants in Alpharetta GA | Siena Restaurant & Bar",
    description: "Medi-talian sharing plates, house-made pasta, proper cocktails and live saxophone on Fridays, minutes from Avalon.",
  },
};

/**
 * The title is deliberately short. The root layout appends " | Siena" through its
 * title template, so writing the brand here would double it up.
 *
 * Structured data: BreadcrumbList and FAQPage only. The Restaurant entity lives in
 * the root layout and stays there, because a second Restaurant node on a landing
 * page muddies which URL Google treats as the business. No aggregateRating either.
 * Google does not allow self-serving review markup on your own site, so the rating
 * is shown as stars and left out of the schema.
 */

// Schema answers must be plain text, so strip the links the on-page copy carries.
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
      <BreadcrumbSchema trail={[{ name: "Best Restaurants in Alpharetta GA", path: "/best-restaurants-alpharetta" }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
