import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Siena | Mediterranean Restaurant Alpharetta GA",
  description:
    "Contact Siena in Alpharetta to reserve a table, ask questions, or plan your next dining experience. We're here to help with your visit.",
  openGraph: {
    title: "Contact Siena | Mediterranean Restaurant Alpharetta GA",
    description:
      "Contact Siena in Alpharetta to reserve a table, ask questions, or plan your next dining experience. We're here to help with your visit.",
    url: "https://sienaatl.com/contact-us",
    images: [{ url: "/assets/Siena_20.03.26-A-01.webp", alt: "Siena Restaurant exterior" }],
  },
  alternates: { canonical: "https://sienaatl.com/contact-us" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
