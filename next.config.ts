import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      {
        source: "/about",
        destination: "/about-us",
        permanent: true,
      },
      {
        source: "/contact",
        destination: "/contact-us",
        permanent: true,
      },
      {
        source: "/menu",
        destination: "/menus",
        permanent: true,
      },
      {
        source: "/menus/:path+",
        destination: "/menus",
        permanent: true,
      },
      {
        source: "/dishes/:path*",
        destination: "/menus",
        permanent: true,
      },
      {
        source: "/news/:path*",
        destination: "/blogs",
        permanent: true,
      },

      // Blog posts pointed at the landing page that covers the same search.
      //
      // Checked against Search Console, last 3 months to 27 Aug 2026: these nine
      // posts returned 0 clicks between them. Only hidden-gems-among-alpharetta
      // earns anything (10 clicks), so it stays, and so does the fine dining post
      // because no landing page competes with it.
      //
      // Redirecting rather than deleting means whatever authority they hold moves
      // to the page that can actually take a booking. best-italian-restaurants
      // is the valuable one: it sits at position 4 with 682 impressions and no
      // clicks, so the ranking transfers to a page worth clicking.
      {
        source: "/blogs/italian-restaurant-alpharetta",
        destination: "/italian-restaurant-alpharetta",
        permanent: true,
      },
      {
        source: "/blogs/best-italian-restaurants-in-alpharetta",
        destination: "/italian-restaurant-alpharetta",
        permanent: true,
      },
      {
        source: "/blogs/best-restaurants-alpharetta-ga-locals",
        destination: "/best-restaurants-alpharetta",
        permanent: true,
      },
      {
        source: "/blogs/mediterranean-cuisine-in-alpharetta",
        destination: "/mediterranean-restaurant-alpharetta",
        permanent: true,
      },
      {
        source: "/blogs/mediterranean-italian-restaurant",
        destination: "/mediterranean-restaurant-alpharetta",
        permanent: true,
      },
      {
        source: "/blogs/healthy-and-flavorful-mediterranean",
        destination: "/mediterranean-restaurant-alpharetta",
        permanent: true,
      },
      {
        source: "/blogs/rise-of-mediterranean-italian-restaurants",
        destination: "/mediterranean-restaurant-alpharetta",
        permanent: true,
      },
      {
        source: "/blogs/from-business-dinners-to-date-nights",
        destination: "/date-night-alpharetta",
        permanent: true,
      },
      {
        source: "/blogs/from-pasta-to-seafood",
        destination: "/menus",
        permanent: true,
      },
    ];
  },
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30,
    deviceSizes: [390, 640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256],
    // 65 is used on the homepage grid thumbnails (decorative, cropped —
    // imperceptible below full quality); 75 stays the default elsewhere.
    qualities: [65, 75],
  },
  async headers() {
    return [
      {
        source: "/assets/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/fonts/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        // Blog imagery is content-addressed by filename like /assets, so it gets
        // the same immutable lifetime rather than being revalidated every visit.
        source: "/blogs/(.*)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

export default nextConfig;
