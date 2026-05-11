import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Gift Cards",
  description:
    "Give the gift of Mediterranean dining. Siena Restaurant gift cards are perfect for birthdays, anniversaries, holidays, and special occasions in Alpharetta, GA.",
  openGraph: {
    title: "Gift Cards | Siena Restaurant",
    description:
      "Give the gift of an unforgettable Mediterranean dining experience at Siena in Alpharetta, GA.",
    url: "https://siena-q6nc.vercel.app/gift-card",
    images: [{ url: "/assets/Siena_20.03.26-PS-05.webp", alt: "Siena Restaurant gift cards" }],
  },
  alternates: { canonical: "https://siena-q6nc.vercel.app/gift-card" },
};

export default function GiftCardLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
