import type { MetadataRoute } from "next";
import { blogs } from "@/lib/blog-data";

const SITE_URL = "https://sienaatl.com";

// Every indexable page. /event-inquiry/thank-you is deliberately absent — it is
// marked noindex, since a post-submission page has no business in search results.
const PAGES: { path: string; priority: number }[] = [
  { path: "", priority: 1.0 },
  { path: "/menus", priority: 0.9 },
  { path: "/reservations", priority: 0.9 },
  { path: "/events", priority: 0.8 },
  { path: "/event-inquiry", priority: 0.8 },
  { path: "/live-music-fridays", priority: 0.7 },
  { path: "/about-us", priority: 0.7 },
  { path: "/contact-us", priority: 0.7 },
  { path: "/gallery", priority: 0.6 },
  { path: "/blogs", priority: 0.6 },
  { path: "/order-online", priority: 0.6 },
  { path: "/gift-card", priority: 0.5 },
  { path: "/careers", priority: 0.4 },
];

export default function sitemap(): MetadataRoute.Sitemap {
  // Static pages carry no lastModified. Stamping them with the build time would
  // tell Google every page changed on every deploy, which is worse than saying nothing.
  const pages = PAGES.map(({ path, priority }) => ({
    url: `${SITE_URL}${path}`,
    priority,
  }));

  // Blog posts come from the post data, so new posts appear here automatically
  // and removed ones drop out.
  const posts = blogs.map((blog) => ({
    url: `${SITE_URL}/blogs/${blog.slug}`,
    lastModified: new Date(blog.updatedAt || blog.publishedAt),
    priority: 0.5,
  }));

  return [...pages, ...posts];
}
