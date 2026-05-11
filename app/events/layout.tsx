import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Experience live music, special dinners, and curated events at Siena Restaurant in Alpharetta, GA. Check our upcoming happenings and join us for an unforgettable evening.",
  openGraph: {
    title: "Events | Siena Restaurant",
    description:
      "Live music, special dinners and curated events at Siena in Alpharetta, GA. See what's coming up.",
    url: "https://siena-q6nc.vercel.app/events",
    images: [{ url: "/assets/RXP-Siena-Pre-6.webp", alt: "Events at Siena Restaurant" }],
  },
  alternates: { canonical: "https://siena-q6nc.vercel.app/events" },
};

export default function EventsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
