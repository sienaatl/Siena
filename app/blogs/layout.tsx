import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    // No brand here — the root layout template appends " | Siena".
    default: "Blog | Restaurant News in Alpharetta",
    template: "%s | Siena",
  },
  description:
    "Read the latest Italian food, dining tips, restaurant news, and event updates from Siena Restaurant.",
  keywords: [
    "Italian Restaurant",
    "Siena Restaurant",
    "Italian Food",
    "Restaurant Blog",
    "Alpharetta Restaurant",
  ],
};

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}