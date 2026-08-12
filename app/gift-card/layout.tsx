import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gift Cards | Restaurant in Alpharetta",
  description:
    "Give an unforgettable Mediterranean dining experience with a Siena gift card. Choose an amount, personalize it, and send it instantly online today.",
  openGraph: {
    title: "Siena Gift Cards | Mediterranean Dining in Alpharetta",
    description:
      "Give an unforgettable Mediterranean dining experience with a Siena gift card. Choose an amount, personalize it, and send it instantly online today.",
    url: "https://sienaatl.com/gift-card",
    images: [{ url: "/assets/Siena_20.03.26-PS-05.webp", alt: "Siena Restaurant gift cards" }],
  },
  alternates: { canonical: "https://sienaatl.com/gift-card" },
};

export default function GiftCardLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
