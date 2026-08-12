import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Order Online | Alpharetta GA",
  description:
    "Order Siena Restaurant's Mediterranean dishes online for pickup or delivery. Chef-crafted mains, starters, desserts, and drinks — Alpharetta, GA.",
  openGraph: {
    title: "Order Online | Siena Restaurant",
    description:
      "Order Mediterranean dishes from Siena Restaurant online — starters, mains, desserts, and drinks in Alpharetta, GA.",
    url: "https://sienaatl.com/order-online",
    images: [{ url: "/assets/Siena_20.03.26-PS-GoldenOxtail.webp", alt: "Siena Restaurant food" }],
  },
  alternates: { canonical: "https://sienaatl.com/order-online" },
};

export default function OrderOnlineLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
