import type { Metadata, Viewport } from "next";
import Script from "next/script";
import "./globals.css";
import Header from "../components/header";
import Footer from "../components/footer";
import ScrollToTop from "../components/ScrollToTop";
import LocalSeoLinks from "../components/LocalSeoLinks";
import { GoogleTagManager } from "@next/third-parties/google";
import { getRestaurantInfo } from "@/lib/restaurant";

// TikTok Pixel — loaded on every route via the root layout, same as GTM below.
const TIKTOK_PIXEL_ID = "DA8D6C3C77UES9745N50";
const tiktokPixelScript = `
!function (w, d, t) {
  w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(
  var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement("script")
  ;n.type="text/javascript",n.async=!0,n.src=r+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};

  ttq.load('${TIKTOK_PIXEL_ID}');
  ttq.page();
}(window, document, 'ttq');
`;

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
    "Experience Siena, a Mediterranean and Italian restaurant in Alpharetta, GA, serving chef-driven dishes, cocktails, date nights, private dining and special occasions.",
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
      "Chef-driven Mediterranean and Italian-inspired dishes, handcrafted cocktails and memorable dining in Alpharetta, Georgia.",
    images: [{ url: "/assets/Siena_20.03.26-A-02.webp", width: 1200, height: 630, alt: "Siena Restaurant in Alpharetta, Georgia" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Mediterranean & Italian Restaurant in Alpharetta | Siena",
    description: "Chef-driven Mediterranean and Italian-inspired dining in Alpharetta, Georgia.",
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
    name: "Siena Restaurant",
    alternateName: "Siena ATL",
    description:
      "A chef-driven Mediterranean and Italian restaurant in Alpharetta, Georgia, serving handmade pasta, fresh seafood, shared plates and handcrafted cocktails for dinner, date nights and special occasions.",
    image: "https://sienaatl.com/assets/Siena_20.03.26-A-02.webp",
    logo: "https://sienaatl.com/assets/logo_beige.png",
    "@id": "https://sienaatl.com/#restaurant",
    url: "https://sienaatl.com/",
    telephone: info.phone || "+1 (404) 999-0373",
    priceRange: "$$",
    menu: "https://sienaatl.com/menus",
    hasMenu: "https://sienaatl.com/menus",
    servesCuisine: ["Italian", "Mediterranean"],
    acceptsReservations: "https://sienaatl.com/reservations",
    hasMap: "https://maps.app.goo.gl/qAEv8rdegv8rYr1c8",
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
    openingHoursSpecification: [
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Tuesday", "Wednesday", "Thursday"], opens: "16:00", closes: "22:00" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: ["Friday", "Saturday"], opens: "16:00", closes: "23:59" },
      { "@type": "OpeningHoursSpecification", dayOfWeek: "Sunday", opens: "16:00", closes: "22:00" },
    ],
    currenciesAccepted: "USD",
    paymentAccepted: "Cash, Credit Card",
    sameAs: [
      "https://www.facebook.com/sienaatl/",
      "https://www.instagram.com/sienaatl/",
      "https://www.tiktok.com/@sienaatl",
      "https://www.threads.net/@sienaatl",
      "https://maps.app.goo.gl/qAEv8rdegv8rYr1c8",
      "https://www.opentable.com/r/siena-restaurant-alpharetta",
      "https://www.tripadvisor.com/Restaurant_Review-g29196-d34075603-Reviews-Siena_Restaurant-Alpharetta_Georgia.html",
    ],
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
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(jsonLd),
          }}
        />
        <Script id="tiktok-pixel" strategy="afterInteractive" dangerouslySetInnerHTML={{ __html: tiktokPixelScript }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      </head>
      <body>
        <GoogleTagManager gtmId="GTM-N593KQGJ" />
        <Header />
        {children}
        <LocalSeoLinks />
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
