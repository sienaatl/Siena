import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "../components/header";
import Footer from "../components/footer";
import ScrollToTop from "../components/ScrollToTop";
import LazyBackgrounds from "../components/LazyBackgrounds";
import LocalSeoLinks from "../components/LocalSeoLinks";
import { getRestaurantInfo } from "@/lib/restaurant";
import { FALLBACK_WEEKDAY_SCHEDULE } from "@/lib/hours";

const GTM_ID = "GTM-N593KQGJ";
// GTM in turn loads Facebook Pixel, Google Ads, Doubleclick, etc. — none of
// it is needed before the user does anything, and Lighthouse's TBT window
// covers the trace all the way to network-quiet, so even a lazyOnload script
// (fires on window 'load') was still landing inside the measured window and
// tanking desktop TBT. Instead we only insert the real GTM/TikTok script
// tags on the user's first interaction, with a 5s idle fallback so page-view
// tracking still fires for visitors who never interact. loadGTM preserves any
// confirmation events queued before the tag manager is ready.


export const viewport: Viewport = {
  themeColor: "#1B312E",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://sienaatl.com"),
  title: {
    default: "Mediterranean & Italian Restaurant in Alpharetta | Siena",
    template: "%s | Siena",
  },
  description:
    "Looking for restaurants in Alpharetta? Siena serves Mediterranean and Italian dinner, handmade pasta, seafood and cocktails. Free parking. Reserve a table.",
  keywords: [
    "Siena Restaurant",
    "Italian Restaurant Alpharetta",
    "Mediterranean Restaurant Alpharetta",
    "Mediterranean Italian Restaurant",
    "Restaurants in Alpharetta GA",
    "Mediterranean Food Alpharetta",
    "Date Night Alpharetta",
    "Private Dining Alpharetta",
  ],
  authors: [{ name: "Siena Restaurant" }],
  creator: "Siena Restaurant",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sienaatl.com",
    siteName: "Siena Restaurant",
    title: "Mediterranean & Italian Restaurant in Alpharetta | Siena",
    description:
      "Looking for restaurants in Alpharetta? Siena serves Mediterranean and Italian dinner, handmade pasta, seafood and cocktails. Free parking. Reserve a table.",
    images: [{ url: "/assets/Siena_20.03.26-A-02.webp", width: 1200, height: 630, alt: "Siena Restaurant in Alpharetta, Georgia" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mediterranean & Italian Restaurant in Alpharetta | Siena",
    description: "Looking for restaurants in Alpharetta? Siena serves Mediterranean and Italian dinner, handmade pasta, seafood and cocktails. Free parking. Reserve a table.",
    images: ["/assets/Siena_20.03.26-A-02.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: { canonical: "https://sienaatl.com" },
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const info = await getRestaurantInfo();
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Siena Restaurant & Bar",
    alternateName: ["Siena Restaurant", "Siena ATL"],
    description:
      "A chef-driven Mediterranean and Italian restaurant at 124 Devore Rd in downtown Alpharetta, serving handmade pasta, seafood, shareable plates and signature cocktails. Friday live music runs 7–10 PM; happy hour is Tuesday–Thursday, 4–6 PM. Reservations and walk-ins welcome.",
    image: "https://sienaatl.com/assets/Siena_20.03.26-A-02.webp",
    logo: "https://sienaatl.com/assets/logo_beige.png",
    "@id": "https://sienaatl.com/#restaurant",
    url: "https://sienaatl.com/",
    telephone: info.phone.replace(/[^\d+]/g, ""),
    email: info.email,
    priceRange: "$$",
    menu: "https://sienaatl.com/menus",
    hasMenu: { "@type": "Menu", "@id": "https://sienaatl.com/menus#menu", url: "https://sienaatl.com/menus" },
    servesCuisine: ["Italian", "Mediterranean"],
    acceptsReservations: "https://sienaatl.com/reservations",
    hasMap: info.maps_url,
    areaServed: {
      "@type": "City",
      name: "Alpharetta",
      containedInPlace: { "@type": "State", name: "Georgia" },
    },
    address: {
      "@type": "PostalAddress",
      streetAddress: "124 Devore Rd",
      addressLocality: "Alpharetta",
      addressRegion: "GA",
      postalCode: "30009",
      addressCountry: "US",
    },
    geo: { "@type": "GeoCoordinates", latitude: 34.0681987, longitude: -84.2991968 },
    openingHoursSpecification: Object.entries(FALLBACK_WEEKDAY_SCHEDULE)
      .filter(([, hours]) => !hours.closed)
      .map(([day, hours]) => ({
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"][Number(day)],
        opens: hours.openTime,
        closes: hours.closeTime,
      })),
    currenciesAccepted: "USD",
    paymentAccepted: "Cash, Credit Card",
    sameAs: [
      "https://www.facebook.com/sienaatl/",
      "https://www.instagram.com/sienaatl/",
      "https://www.tiktok.com/@sienaatl",
      "https://www.threads.net/@sienaatl",
      info.maps_url,
      "https://www.opentable.com/r/siena-restaurant-alpharetta",
      "https://www.tripadvisor.com/Restaurant_Review-g29196-d34075603-Reviews-Siena_Restaurant-Alpharetta_Georgia.html",
    ],
    // Restaurant is the most specific LocalBusiness type. Reviews remain visible
    // on the site, but self-serving aggregate ratings do not belong in this node.
    potentialAction: {
      "@type": "ReserveAction",
      target: {
        "@type": "EntryPoint",
        urlTemplate: "https://sienaatl.com/reservations",
        actionPlatform: [
          "https://schema.org/DesktopWebPlatform",
          "https://schema.org/MobileWebPlatform",
        ],
      },
      result: { "@type": "FoodEstablishmentReservation", name: "Reserve a table at Siena" },
    },
  };

  return (
    <html lang="en">
      <head>
        {/* The @font-face rules live in globals.css, so these are only discovered
            after the stylesheet parses. Preloading the two fonts used above the
            fold pulls that forward and cuts the swap flash. */}
        <link rel="preload" href="/fonts/Urbanist-Variable.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/Fraunces-Variable.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
        {/* Microsoft Clarity tracking code */}
        <Script
          id="clarity-script"
          strategy="afterInteractive"
          src="/scripts/siena-clarity.js"
        />
      </head>
      <body>
        {/* Attaches interaction listeners (cheap) that don't themselves fetch
            anything; the actual GTM/TikTok script tags load on first
            interaction or a 5s fallback — see /scripts/siena-analytics.js. */}
        <Script id="deferred-analytics" strategy="afterInteractive" src="/scripts/siena-analytics.js" />
        <noscript>
          <iframe
            src={`https://www.googletagmanager.com/ns.html?id=${GTM_ID}`}
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>

        <Header />
        {children}
        <LocalSeoLinks />
        <Footer />
        <ScrollToTop />

        <LazyBackgrounds />
      </body>
    </html>
  );
}
