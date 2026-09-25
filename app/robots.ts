import type { MetadataRoute } from "next";

const SITE_URL = "https://sienaatl.com";

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        // Form handlers, not pages. Nothing to crawl and nothing to index.
        disallow: ["/api/"],
      },
      // Explicitly allow the crawler OpenAI uses to surface pages in
      // ChatGPT Search results and the agent used for user-requested visits.
      { userAgent: "OAI-SearchBot", allow: "/", disallow: ["/api/"] },
      { userAgent: "ChatGPT-User", allow: "/", disallow: ["/api/"] },
    ],
    sitemap: `${SITE_URL}/sitemap.xml`,
    host: SITE_URL,
  };
}
