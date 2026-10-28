import type { Metadata } from "next";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: { absolute: "Siena Restaurant Photos | Alpharetta Gallery" },
  description:
    "Explore Siena Restaurant & Bar photos in Alpharetta: dining room, Mediterranean and Italian dishes, cocktails and private gatherings. Plan your visit.",
  openGraph: {
    title: "Siena Gallery | Mediterranean Restaurant Photos Alpharetta",
    description:
      "Explore Siena Restaurant & Bar photos in Alpharetta: dining room, Mediterranean and Italian dishes, cocktails and private gatherings. Plan your visit.",
    url: "https://sienaatl.com/gallery",
    images: [{ url: "/assets/Siena_20.03.26-A-02.webp", alt: "Siena Restaurant gallery" }],
  },
  alternates: { canonical: "https://sienaatl.com/gallery" },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema trail={[{ name: "Gallery", path: "/gallery" }]} />
      {children}
    </>
  );
}
