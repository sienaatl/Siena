import type { Metadata } from "next";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Photo Gallery | Restaurant in Alpharetta",
  description:
    "Explore Siena's gallery featuring chef-crafted dishes, elegant interiors, private events, and memorable Mediterranean dining in Alpharetta.",
  openGraph: {
    title: "Siena Gallery | Mediterranean Restaurant Photos Alpharetta",
    description:
      "Explore Siena's gallery featuring chef-crafted dishes, elegant interiors, private events, and memorable Mediterranean dining in Alpharetta.",
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
