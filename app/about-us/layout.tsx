import type { Metadata } from "next";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: { absolute: "About Siena Restaurant & Bar | Alpharetta, GA" },
  description:
    "Meet Siena Restaurant & Bar in Alpharetta. Explore Mediterranean and Italian dining, sharing plates, Friday live music and happy hour Tuesday–Thursday, 4–6 PM.",
  openGraph: {
    title: "About Siena Restaurant | Mediterranean Dining Alpharetta",
    description:
      "Meet Siena Restaurant & Bar in Alpharetta. Explore Mediterranean and Italian dining, sharing plates, Friday live music and happy hour Tuesday–Thursday, 4–6 PM.",
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
