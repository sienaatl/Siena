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
  // Without this the page inherits the root layout's canonical, which points at the
  // home page and tells Google to index that instead of the blog index.
  alternates: { canonical: "/blogs" },
};

export default function BlogsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}