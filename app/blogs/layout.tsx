import { Metadata } from "next";

export const metadata: Metadata = {
  title: {
    default: "Siena Restaurant Blog",
    template: "%s | Siena Restaurant",
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