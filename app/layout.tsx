import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "../components/header";
import Footer from "../components/footer";
import ScrollToTop from "../components/ScrollToTop";
import LocalSeoLinks from "../components/LocalSeoLinks";
import { GoogleTagManager } from "@next/third-parties/google";
import { getRestaurantInfo } from "@/lib/restaurant";

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
    name: "Siena Restaurant & Bar",
    image: "https://sienaatl.com/assets/Siena_20.03.26-A-02.webp",
    logo: "https://sienaatl.com/assets/logo_beige.png",
    "@id": "https://sienaatl.com/#restaurant",
    url: "https://sienaatl.com/",
    telephone: info.phone || "+1 (404) 999-0373",
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
      "https://www.opentable.com/r/siena-restaurant-alpharetta",
      "https://www.tripadvisor.com/Restaurant_Review-g29196-d34075603-Reviews-Siena_Restaurant-Alpharetta_Georgia.html",
    ],
  };

  return (
    <html lang="en">
      <head>
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
