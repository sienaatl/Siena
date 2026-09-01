import type { Metadata } from "next";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import { FAQS } from "./content";

export const metadata: Metadata = {
  title: "Italian Restaurant in Alpharetta",
  description:
    "Siena is an Italian restaurant in Alpharetta with house-made pasta and a Mediterranean twist. Book a table for dinner, cocktails and Friday live music.",
  alternates: { canonical: "/italian-restaurant-alpharetta" },
  openGraph: {
    title: "Italian Restaurant in Alpharetta | Siena Restaurant & Bar",
    description:
      "House-made pasta, Italian classics and Mediterranean plates on one menu, a few minutes from Avalon. Book a table at Siena Restaurant & Bar.",
    url: "https://sienaatl.com/italian-restaurant-alpharetta",
    type: "website",
    images: [{ url: "https://sienaatl.com/assets/Siena_20.03.26-A-01.webp" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Italian Restaurant in Alpharetta | Siena Restaurant & Bar",
    description:
      "House-made pasta, Italian classics and Mediterranean plates on one menu, a few minutes from Avalon.",
  },
};

/**
 * The title above is deliberately short. The root layout appends " | Siena" through
 * its title template, so writing the brand here would double it up.
 *
 * On structured data: this page carries BreadcrumbList and FAQPage only. The
 * Restaurant entity lives in the root layout and stays there, because emitting a second
 * Restaurant node on a landing page muddies which URL Google treats as the business.
 * There is deliberately no aggregateRating either. Google does not allow self-serving
 * review markup for a business on its own site, so the 4.5 rating is shown as plain
 * text and left out of the schema.
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
      <BreadcrumbSchema
        trail={[{ name: "Italian Restaurant in Alpharetta", path: "/italian-restaurant-alpharetta" }]}
      />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      {children}
    </>
  );
}
