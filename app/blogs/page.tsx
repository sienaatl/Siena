import BlogIndexClient from "@/components/BlogIndexClient";
import { blogs } from "@/lib/blog-data";

export default function BlogPage() {
  // Send only card fields across the client boundary, not full article bodies.
  const summaries = blogs
    .filter((blog) => blog.live !== false)
    .map(({ slug, title, description, image }) => ({ slug, title, description, image }));
  return <BlogIndexClient blogs={summaries} />;
}
