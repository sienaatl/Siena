import type { Metadata } from "next";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Contact Siena Restaurant | Alpharetta GA",
  description:
    "Contact Siena Restaurant at 124 Devore Rd, Alpharetta, GA. Call (404) 999-0373 for dining questions, directions or private events. Book a table online.",
  openGraph: {
    title: "Contact Siena Restaurant | Alpharetta GA",
    description:
      "Contact Siena Restaurant at 124 Devore Rd, Alpharetta, GA. Call (404) 999-0373 for dining questions, directions or private events. Book a table online.",
    url: "https://sienaatl.com/contact-us",
    images: [{ url: "/assets/Siena_20.03.26-A-01.webp", alt: "Siena Restaurant exterior" }],
  },
  alternates: { canonical: "https://sienaatl.com/contact-us" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema trail={[{ name: "Contact", path: "/contact-us" }]} />
      {children}
    </>
  );
}
