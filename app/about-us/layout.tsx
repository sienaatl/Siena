import type { Metadata } from "next";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "About Us | Mediterranean Dining in Alpharetta",
  description:
    "Discover Siena’s story, chef-driven philosophy, seasonal ingredients, and warm Mediterranean dining experience in the heart of Alpharetta, Georgia.",
  openGraph: {
    title: "About Siena Restaurant | Mediterranean Dining Alpharetta",
    description:
      "Discover Siena’s story, chef-driven philosophy, seasonal ingredients, and warm Mediterranean dining experience in the heart of Alpharetta, Georgia.",
    url: "https://sienaatl.com/about-us",
    images: [{ url: "/assets/Siena_20.03.26-A-03.webp", alt: "Siena Restaurant interior" }],
  },
  alternates: { canonical: "https://sienaatl.com/about-us" },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema trail={[{ name: "About Us", path: "/about-us" }]} />
      {children}
    </>
  );
}
