import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Menu",
  description:
    "Explore Siena's full menu — chef-crafted Mediterranean plates, weekend brunch, happy hour, craft cocktails, wines, and spirits. Located in Alpharetta, Georgia.",
  openGraph: {
    title: "Menu | Siena Restaurant",
    description:
      "Chef-crafted Mediterranean dishes, brunch, happy hour, cocktails and wines at Siena in Alpharetta, GA.",
    url: "https://siena-q6nc.vercel.app/menu",
    images: [{ url: "/assets/Siena_20.03.26-PS-NarissaChickenLolipapas.webp", alt: "Siena menu dishes" }],
  },
  alternates: { canonical: "https://siena-q6nc.vercel.app/menu" },
};

export default function MenuLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
