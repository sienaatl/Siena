const SITE_URL = "https://sienaatl.com";

type Crumb = { name: string; path: string };

/**
 * Emits BreadcrumbList structured data so Google can show a navigation trail in
 * the search result instead of a bare URL, and understands how pages relate.
 *
 * Home is added automatically — pass only the trail below it. For a normal page
 * that is one crumb; for a blog post it is two.
 *
 *   <BreadcrumbSchema trail={[{ name: "Menus", path: "/menus" }]} />
 */
export default function BreadcrumbSchema({ trail }: { trail: Crumb[] }) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: `${SITE_URL}/` },
      ...trail.map((c, i) => ({
        "@type": "ListItem",
        position: i + 2,
        name: c.name,
        item: `${SITE_URL}${c.path}`,
      })),
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
    />
  );
}
