import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "2026 Restaurant Week Archive",
  description:
    "Archive of Siena’s October 10–17, 2026 Restaurant Week page. The event has ended; see our current menu and dinner reservations.",
  alternates: { canonical: "https://sienaatl.com/alpharetta-restaurant-week" },
  openGraph: {
    title: "2026 Restaurant Week Archive",
    description:
      "Visit Siena Restaurant & Bar during Alpharetta Restaurant Week, October 10–17, 2026, in Alpharetta, Georgia.",
    url: "https://sienaatl.com/alpharetta-restaurant-week",
    type: "website",
  },
};

const eventSchema = {
  "@context": "https://schema.org",
  "@type": "Event",
  name: "Alpharetta Restaurant Week at Siena Restaurant & Bar",
  startDate: "2026-10-10",
  endDate: "2026-10-17",
  eventStatus: "https://schema.org/EventScheduled",
  eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
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
  },
  organizer: {
    "@type": "Organization",
    name: "Siena Restaurant & Bar",
    url: "https://sienaatl.com",
  },
  url: "https://sienaatl.com/alpharetta-restaurant-week",
  description:
    "Siena Restaurant & Bar welcomes guests during Alpharetta Restaurant Week, October 10–17, 2026. The event dates have passed; visit the current menu for dishes and prices.",
};

export default function AlpharettaRestaurantWeekPage() {
  return (
    <main className="bg-[#f4eedd] text-[#1b312e]">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventSchema) }} />

      <section className="bg-[#1b312e] px-5 pb-20 pt-36 text-center text-white md:pb-28 md:pt-44">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-[#e0b265]">October 10–17, 2026</p>
        <h1 className="mx-auto max-w-5xl text-5xl uppercase leading-none text-[#e0b265] md:text-7xl">
          Alpharetta Restaurant Week at Siena
        </h1>
        <p className="mx-auto mt-7 max-w-2xl text-lg leading-8 text-white/85">
          This page records Restaurant Week, October 10–17, 2026. Those dates have passed and this is not a current offer. For your next visit, explore Siena’s current Mediterranean and Italian menu, cocktails and dinner reservations.
        </p>
        <div className="mt-9 flex flex-wrap justify-center gap-4">
          <Link href="/reservations" className="bg-[#e0b265] px-7 py-3 font-semibold uppercase tracking-wider text-[#1b312e]">
            Reserve a Table
          </Link>
          <Link href="/menus" className="border border-[#e0b265] px-7 py-3 font-semibold uppercase tracking-wider text-[#e0b265]">
            View Menus
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-5 py-16 md:py-24">
        <div className="grid gap-12 md:grid-cols-2">
          <div>
            <p className="text-sm uppercase tracking-[0.25em] text-[#9a7410]">Dine Local</p>
            <h2 className="mt-3 text-4xl leading-tight md:text-5xl">Mediterranean dining in Alpharetta</h2>
            <p className="mt-6 text-lg leading-8">
              Siena brings together Mediterranean inspiration and Italian favorites at 124 Devore Rd in Alpharetta. Restaurant Week has ended, but you can still plan dinner, a date night or a celebration using the current menu and reservation calendar.
            </p>
          </div>
          <div className="border border-[#1b312e]/20 p-7">
            <h2 className="text-3xl">Restaurant Week Details</h2>
            <p className="mt-5 leading-7"><strong>Dates:</strong> October 10–17, 2026</p>
            <p className="mt-2 leading-7"><strong>Location:</strong> Siena Restaurant &amp; Bar, 124 Devore Rd, Alpharetta, GA 30009</p>
            <p className="mt-2 leading-7"><strong>Reservations:</strong> Recommended</p>
            <p className="mt-5 leading-7 text-[#1b312e]/75">
              The October 2026 Restaurant Week dates have ended. No future Restaurant Week offer is announced on this page. Please use the current menu for dishes and prices.
            </p>
          </div>
        </div>

        <div className="mt-16 border-t border-[#1b312e]/20 pt-12">
          <h2 className="text-4xl">More ways to experience Siena</h2>
          <div className="mt-7 flex flex-wrap gap-x-6 gap-y-3 underline underline-offset-4">
            <Link href="/mediterranean-restaurant-alpharetta">Mediterranean Restaurant Alpharetta</Link>
            <Link href="/date-night-alpharetta">Date Night Alpharetta</Link>
            <Link href="/private-dining-alpharetta">Private Dining Alpharetta</Link>
            <Link href="/brunch-alpharetta">Brunch Alpharetta</Link>
            <Link href="/happy-hour-alpharetta">Happy Hour Alpharetta</Link>
            <Link href="/birthday-dinner-alpharetta">Birthday Dinner Alpharetta</Link>
          </div>
        </div>
      </section>
    </main>
  );
}
