import type { Metadata } from "next";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata: Metadata = {
  // The root layout appends " | Siena", so the brand is deliberately absent here.
  title: "Friday Live Music in Alpharetta",
  description:
    "Live music every Friday from 7 to 10pm at Siena in Alpharetta. Mediterranean and Italian sharing plates, cocktails, and a different act each week.",
  openGraph: {
    title: "Live Music Fridays at Siena",
    description: "Great food, crafted cocktails and live music every Friday from 7 to 10 PM in Alpharetta.",
    url: "https://sienaatl.com/live-music-fridays",
    images: [{ url: "/assets/Siena_20.03.26-A-05.webp", alt: "Live Music Fridays at Siena Restaurant & Bar" }],
  },
  keywords: ["Live Music Alpharetta", "Friday Night Live Music", "Siena Restaurant Live Music", "Nightlife Alpharetta"],
  alternates: { canonical: "https://sienaatl.com/live-music-fridays" },
};

/** Rebuilt daily so the date in the markup below never falls behind. */
export const revalidate = 86400;

/**
 * Google requires a start date on an Event, so the next Friday is worked out here
 * rather than written in by hand. The times carry no offset, which Google reads as
 * local to the venue.
 */
function nextFriday(): string {
  // Shift to Eastern so the date does not roll forward early on a UTC server.
  const now = new Date(Date.now() - 5 * 60 * 60 * 1000);
  const day = new Date(Date.UTC(now.getUTCFullYear(), now.getUTCMonth(), now.getUTCDate()));
  day.setUTCDate(day.getUTCDate() + ((5 - day.getUTCDay() + 7) % 7));
  return day.toISOString().slice(0, 10);
}

export default function LiveMusicFridaysLayout({ children }: { children: React.ReactNode }) {
  const friday = nextFriday();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Event",
    name: "Live Music Fridays at Siena",
    description:
      "Make Siena your Friday night destination for a rotating lineup of talented live musicians, Mediterranean-Italian dining and handcrafted cocktails. Join us every Friday from 7 to 10 PM in Alpharetta, minutes from Johns Creek and Milton. The performer changes weekly, giving every Friday a fresh soundtrack. Reservations are recommended.",
    startDate: `${friday}T19:00`,
    endDate: `${friday}T22:00`,
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
      url: "https://sienaatl.com/reservations",
      availability: "https://schema.org/InStock",
    },
    image: "https://sienaatl.com/assets/Siena_20.03.26-A-05.webp",
  };

  return (
    <>
      <BreadcrumbSchema trail={[{ name: "Live Music Fridays", path: "/live-music-fridays" }]} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      {children}
    </>
  );
}
