import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "../components/header";
import Footer from "../components/footer";
import ScrollToTop from "../components/ScrollToTop";
import { GoogleTagManager } from "@next/third-parties/google";
import { getRestaurantInfo } from "@/lib/restaurant";

export const viewport: Viewport = {
  themeColor: "#58021f",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://sienaatl.com"),

  title: {
    default: "Siena Restaurant | Best Mediterranean Italian Restaurant",
    template: "%s | Siena Restaurant",
  },

  description:
    "Visit Siena Restaurant, the Best Mediterranean Italian Restaurant offering authentic Mediterranean & Italian flavors, seasonal menus & warm dining.",

  keywords: [
    "Siena Restaurant",
    "Italian Restaurant Alpharetta",
    "Mediterranean Restaurant Alpharetta",
    "Mediterranean Italian Restaurant",
    "Best Italian Restaurant Alpharetta",
    "Restaurants in Alpharetta GA",
    "Mediterranean Food Alpharetta",
    "Fine Dining Restaurant Alpharetta",
  ],

  authors: [{ name: "Siena Restaurant" }],
  creator: "Siena Restaurant",

  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://sienaatl.com",
    siteName: "Siena Restaurant",
    title: "Siena Restaurant | Best Mediterranean Italian Restaurant",
    description:
      "Chef-driven Mediterranean plates, handcrafted cocktails, and an unforgettable dining experience in Alpharetta, Georgia.",
    images: [
      {
        url: "/assets/Siena_20.03.26-A-02.webp",
        width: 1200,
        height: 630,
        alt: "Siena Restaurant",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Siena Restaurant | Best Mediterranean Italian Restaurant",
    description:
      "Chef-driven Mediterranean plates, handcrafted cocktails, and an unforgettable dining experience in Alpharetta, Georgia.",
    images: ["/assets/Siena_20.03.26-A-02.webp"],
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },

  alternates: {
    canonical: "https://sienaatl.com",
  },
};

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const info = await getRestaurantInfo();

  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Restaurant",
    name: "Siena Restaurant & Bar",
    // image should be a photo of the place, not the logo — the logo has its own field.
    image: "https://sienaatl.com/assets/Siena_20.03.26-A-02.webp",
    logo: "https://sienaatl.com/assets/logo_beige.png",
    "@id": "https://sienaatl.com/#restaurant",
    url: "https://sienaatl.com/",
    telephone: info.phone || "+1 (404) 999-7303",
    priceRange: "$$",

    menu: "https://sienaatl.com/menus",
    hasMenu: "https://sienaatl.com/menus",

    servesCuisine: ["Italian", "Mediterranean"],

    acceptsReservations: true,

    address: {
      "@type": "PostalAddress",
      streetAddress: "124 Devore Rd",
      addressLocality: "Alpharetta",
      addressRegion: "GA",
      postalCode: "30009",
      addressCountry: "US",
    },

    geo: {
      "@type": "GeoCoordinates",
      latitude: 34.0681987,
      longitude: -84.2991968,
    },

    openingHoursSpecification: [
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Tuesday", "Wednesday", "Thursday"],
        opens: "16:00",
        closes: "22:00",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Friday", "Saturday"],
        opens: "16:00",
        // 23:59 rather than 00:00 — midnight as a closing time is ambiguous and
        // can be read as closing the moment the day starts.
        closes: "23:59",
      },
      {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: "Sunday",
        opens: "16:00",
        closes: "22:00",
      },
    ],

    currenciesAccepted: "USD",
    paymentAccepted: "Cash, Credit Card",

    sameAs: [
      "https://www.facebook.com/sienaatl/",
      "https://www.instagram.com/sienaatl/",
      "https://www.tiktok.com/@sienaatl",
      "https://www.threads.net/@sienaatl",
    ],
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
      </head>

      <body>
        <GoogleTagManager gtmId="GTM-N593KQGJ" />

        <Header />

        {children}

        <Footer />

        <ScrollToTop />
      </body>
    </html>
  );
}