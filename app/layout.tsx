import type { Metadata, Viewport } from "next";
import "./globals.css";
import Header from "../components/header";
import Footer from "../components/footer";
import ScrollToTop from "../components/ScrollToTop";
import { getRestaurantInfo } from "@/lib/restaurant";

export const viewport: Viewport = {
  themeColor: "#58021f",
  width: "device-width",
  initialScale: 1,
};

export const metadata: Metadata = {
  metadataBase: new URL("https://siena-q6nc.vercel.app"),
  title: {
    default: "Siena Restaurant — Mediterranean Dining in Alpharetta, GA",
    template: "%s | Siena Restaurant",
  },
  description:
    "Siena is an upscale Mediterranean restaurant in Alpharetta, Georgia. Chef-driven shared plates, craft cocktails, and an unforgettable atmosphere. Open Tuesday–Sunday.",
  keywords: [
    "Siena Restaurant",
    "Mediterranean restaurant Alpharetta",
    "restaurant Alpharetta GA",
    "Mediterranean dining Georgia",
    "craft cocktails Alpharetta",
    "Mediterranean food Atlanta",
    "upscale dining Alpharetta",
    "date night restaurant Alpharetta",
  ],
  authors: [{ name: "Siena Restaurant" }],
  creator: "Siena Restaurant",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://siena-q6nc.vercel.app",
    siteName: "Siena Restaurant",
    title: "Siena Restaurant — Mediterranean Dining in Alpharetta, GA",
    description:
      "Chef-driven Mediterranean plates, craft cocktails, and an unforgettable atmosphere in the heart of Alpharetta, Georgia.",
    images: [
      {
        url: "/assets/Siena_20.03.26-A-02.webp",
        width: 1200,
        height: 630,
        alt: "Siena Restaurant interior",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Siena Restaurant — Mediterranean Dining in Alpharetta, GA",
    description:
      "Chef-driven Mediterranean plates, craft cocktails, and an unforgettable atmosphere in Alpharetta, GA.",
    images: ["/assets/Siena_20.03.26-A-02.webp"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  alternates: {
    canonical: "https://siena-q6nc.vercel.app",
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
    name: "Siena Restaurant",
    description:
      "Upscale Mediterranean dining in Alpharetta, Georgia. Chef-driven shared plates, craft cocktails, and an unforgettable atmosphere.",
    url: "https://siena-q6nc.vercel.app",
    image: "https://siena-q6nc.vercel.app/assets/Siena_20.03.26-A-02.webp",
    address: {
      "@type": "PostalAddress",
      streetAddress: info.address.split(",")[0]?.trim() ?? "124 Devore Rd",
      addressLocality: "Alpharetta",
      addressRegion: "GA",
      postalCode: "30009",
      addressCountry: "US",
    },
    telephone: info.phone,
    geo: {
      "@type": "GeoCoordinates",
      latitude: 34.0754,
      longitude: -84.2941,
    },
    servesCuisine: "Mediterranean",
    priceRange: "$$$",
    currenciesAccepted: "USD",
    paymentAccepted: "Cash, Credit Card",
    sameAs: [
      "https://www.instagram.com/sienaatl/",
      "https://www.facebook.com/sienaatl/",
      "https://www.tiktok.com/@sienaatl",
    ],
    hasMenu: "https://siena-q6nc.vercel.app/menu",
    acceptsReservations: "True",
  };

  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body>
        <Header />
        {children}
        <Footer />
        <ScrollToTop />
      </body>
    </html>
  );
}
