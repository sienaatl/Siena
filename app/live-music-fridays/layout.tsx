import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Friday Live Music in Alpharetta | Siena Restaurant & Bar",
  description:
    "Join Siena Restaurant & Bar every Friday from 7–10 PM for live music, Mediterranean-Italian dining and handcrafted cocktails in Alpharetta, near Johns Creek and Milton.",
  openGraph: {
    title: "Live Music Fridays at Siena",
    description: "Great food, crafted cocktails and live music every Friday from 7–10 PM in Alpharetta.",
    url: "https://sienaatl.com/live-music-fridays",
    images: [{ url: "/assets/Siena_20.03.26-A-05.webp", alt: "Live Music Fridays at Siena Restaurant & Bar" }],
  },
  keywords: ["Live Music Alpharetta", "Friday Night Live Music", "Siena Restaurant Live Music", "Nightlife Alpharetta"],
  alternates: { canonical: "https://sienaatl.com/live-music-fridays" },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Live Music Fridays at Siena",
  description:
    "Make Siena your Friday night destination for a rotating lineup of talented live musicians, Mediterranean-Italian dining and handcrafted cocktails. Join us every Friday from 7–10 PM in Alpharetta, minutes from Johns Creek and Milton. The performer changes weekly, giving every Friday a fresh soundtrack. Reservations are recommended.",
  eventSchedule: {
    "@type": "Schedule",
    repeatFrequency: "P1W",
    byDay: "https://schema.org/Friday",
    startTime: "19:00",
    endTime: "22:00",
  },
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
  eventStatus: "https://schema.org/EventScheduled",
  location: {
    "@type": "Restaurant",
    name: "Siena Restaurant & Bar",
    address: {
      "@type": "PostalAddress",
      streetAddress: "124 Devore Rd",
      addressLocality: "Alpharetta",
      addressRegion: "GA",
      postalCode: "30009",
      addressCountry: "US",
    },
    telephone: "+1-404-999-0373",
    url: "https://sienaatl.com/",
  },
  offers: {
    "@type": "Offer",
    url: "https://www.opentable.com/r/siena-restaurant-alpharetta",
    availability: "https://schema.org/InStock",
  },
  image: "https://sienaatl.com/assets/Siena_20.03.26-A-05.webp",
};

export default function LiveMusicFridaysLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  );
}
