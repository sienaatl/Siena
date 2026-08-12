import type { Metadata } from "next";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Restaurant Jobs in Alpharetta GA",
  description:
    "Join the Siena team in Alpharetta. Explore restaurant career opportunities in hospitality, culinary, and guest services. Apply today.",
  openGraph: {
    title: "Careers at Siena | Restaurant Jobs in Alpharetta GA",
    description:
      "Join the Siena team in Alpharetta. Explore restaurant career opportunities in hospitality, culinary, and guest services. Apply today.",
    url: "https://sienaatl.com/careers",
    images: [{ url: "/assets/Siena_20.03.26-P-01.webp", alt: "Siena Restaurant team" }],
  },
  alternates: { canonical: "https://sienaatl.com/careers" },
};

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema trail={[{ name: "Careers", path: "/careers" }]} />
      {children}
    </>
  );
}
