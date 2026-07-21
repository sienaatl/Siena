import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Special Event Restaurant Alpharetta | Restaurant Event Venue",
  description:
    "Looking for a Special Event Restaurant Alpharetta? Siena provides a stylish event venue with chef-driven cuisine & memorable dining experience",
  openGraph: {
    title: "Special Event Restaurant Alpharetta | Restaurant Event Venue",
    description:
      "Looking for a Special Event Restaurant Alpharetta? Siena provides a stylish event venue with chef-driven cuisine & memorable dining experience",
    url: "https://sienaatl.com/events",
    images: [{ url: "/assets/RXP-Siena-Pre-6.webp", alt: "Events at Siena Restaurant" }],
  },

    keywords: [
    "Special Event Restaurant Alpharetta",
    "Restaurant Event Venue Atlanta",
    "Corporate Dinner Venue Atlanta",
    "Restaurant for Events in Alpharetta",
    "Mediterranean Restaurant for Events",
    "Alpharetta Restaurants for Special Occasions",
  ],

  alternates: { canonical: "https://sienaatl.com/events" },
};

export default function EventsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
