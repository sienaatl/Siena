import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Take a visual tour of Siena Restaurant — our stunning interior, bar, plated dishes, and memorable moments from Alpharetta's premier Mediterranean dining destination.",
  openGraph: {
    title: "Gallery | Siena Restaurant",
    description:
      "A visual journey through Siena Restaurant — interior, bar, dishes, and unforgettable moments in Alpharetta, GA.",
    url: "https://siena-q6nc.vercel.app/gallery",
    images: [{ url: "/assets/Siena_20.03.26-A-02.webp", alt: "Siena Restaurant gallery" }],
  },
  alternates: { canonical: "https://siena-q6nc.vercel.app/gallery" },
};

export default function GalleryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
