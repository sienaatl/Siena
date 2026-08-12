import type { Metadata } from "next";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  title: "Menus | Mediterranean & Italian, Alpharetta",
  description:
    "View the Siena Restaurant Alpharetta Menu offering Mediterranean-inspired tapas, chef-driven entrées & curated flavors for a memorable dinner.",
  openGraph: {
    title: "Siena Restaurant Alpharetta Menu | Mediterranean Dinner Menu",
    description:
      "View the Siena Restaurant Alpharetta Menu offering Mediterranean-inspired tapas, chef-driven entrées & curated flavors for a memorable dinner.",
    url: "https://sienaatl.com/menus",
    images: [{ url: "/assets/Siena_20.03.26-PS-NarissaChickenLolipapas.webp", alt: "Siena menu dishes" }],
  },

  keywords: [
    "Siena Restaurant Alpharetta Menu",
    "Best Menu for Mediterranean Food",
    "Alpharetta Restaurants Menu",
    "Best Mediterranean Restaurants Menu",
    "Mediterranean Tapas Dishes",
    "Mediterranean Dinner Menu",
  ],


  alternates: { canonical: "https://sienaatl.com/menus" },
};

export default function MenuLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema trail={[{ name: "Menus", path: "/menus" }]} />
      {children}
    </>
  );
}
