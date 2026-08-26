import type { MetadataRoute } from "next";
import { blogs } from "@/lib/blog-data";

const SITE_URL = "https://sienaatl.com";

const PAGES: { path: string; priority: number }[] = [
  { path: "", priority: 1.0 },
  { path: "/mediterranean-restaurant-alpharetta", priority: 0.95 },
  { path: "/menus", priority: 0.9 },
  { path: "/reservations", priority: 0.9 },
  { path: "/private-dining-alpharetta", priority: 0.85 },
  { path: "/date-night-alpharetta", priority: 0.8 },
  { path: "/birthday-dinner-alpharetta", priority: 0.8 },
  { path: "/brunch-alpharetta", priority: 0.8 },
  { path: "/happy-hour-alpharetta", priority: 0.8 },
  { path: "/mediterranean-restaurant-near-roswell-ga", priority: 0.8 },
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
  const pages = PAGES.map(({ path, priority }) => ({ url: `${SITE_URL}${path}`, priority }));
  const posts = blogs.map((blog) => ({
    url: `${SITE_URL}/blogs/${blog.slug}`,
    lastModified: new Date(blog.updatedAt || blog.publishedAt),
    priority: 0.5,
  }));
  return [...pages, ...posts];
}
