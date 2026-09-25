import { diningMetadata } from "@/lib/page-metadata";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata = diningMetadata("live-music-fridays", "Friday Live Music & Dinner in Alpharetta", "Plan Friday dinner and live music at Siena in Alpharetta. Explore Mediterranean and Italian dishes, check performance details and reserve a table.");

// This is an evergreen series, not confirmation of any individual performance.
// Add MusicEvent markup only to a dated page with confirmed, visible event details.
export default function LiveMusicFridaysLayout({ children }: { children: React.ReactNode }) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "EventSeries",
    "@id": "https://sienaatl.com/live-music-fridays#series",
    url: "https://sienaatl.com/live-music-fridays",
    name: "Live Music Fridays at Siena",
    description:
      "Make Siena your Friday night destination for a rotating lineup of talented live musicians, Mediterranean-Italian dining and handcrafted cocktails. Join us every Friday from 7 to 10 PM in Alpharetta, minutes from Johns Creek and Milton. The performer changes weekly, giving every Friday a fresh soundtrack. Reservations are recommended.",
    eventSchedule: {
      "@type": "Schedule",
      repeatFrequency: "P1W",
      scheduleTimezone: "America/New_York",
      byDay: "https://schema.org/Friday",
      startTime: "19:00",
      endTime: "22:00",
    },
    eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
    location: {
      "@type": "Restaurant",
      "@id": "https://sienaatl.com/#restaurant",
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
