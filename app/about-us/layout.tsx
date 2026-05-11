import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Discover the story behind Siena Restaurant — born from a passion for Mediterranean flavors, honest ingredients, and the timeless tradition of gathering around a beautiful table in Alpharetta, Georgia.",
  openGraph: {
    title: "About Us | Siena Restaurant",
    description:
      "The story behind Siena — Mediterranean passion, honest ingredients, and the art of gathering in Alpharetta, GA.",
    url: "https://siena-q6nc.vercel.app/about-us",
    images: [{ url: "/assets/Siena_20.03.26-A-03.webp", alt: "Siena Restaurant interior" }],
  },
  alternates: { canonical: "https://siena-q6nc.vercel.app/about-us" },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
