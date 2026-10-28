import type { Metadata } from "next";
import BlogIndexClient from "@/components/BlogIndexClient";
import { blogs } from "@/lib/blog-data";

export const metadata: Metadata = {
  title: { absolute: "Siena Restaurant News | Alpharetta Dining Blog" },
  description: "Read Siena Restaurant news from Alpharetta: Mediterranean and Italian dining, dinner ideas, Friday live music and tips for planning your visit.",
};

export default function BlogPage() {
  // Send only card fields across the client boundary, not full article bodies.
  const summaries = blogs
    .filter((blog) => blog.live !== false)
    .map(({ slug, title, description, image }) => ({ slug, title, description, image }));
  return <BlogIndexClient blogs={summaries} />;
}
