import type { Metadata } from "next";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";
import siteData from "@/lib/site-data.json";

export const metadata: Metadata = {
  title: "Menus | Mediterranean & Italian, Alpharetta",
  description:
    "View the Siena Restaurant Alpharetta Menu offering Mediterranean-inspired tapas, chef-driven entrées & curated flavors for a memorable dinner.",
  openGraph: {
    title: "Siena Restaurant Alpharetta Menu | Mediterranean Dinner Menu",
    description:
      "View the Siena Restaurant Alpharetta Menu offering Mediterranean-inspired tapas, chef-driven entrées & curated flavors for a memorable dinner.",
    url: "https://sienaatl.com/menus",
    images: [{ url: "/assets/Siena_20.03.26-PS-NarissaChickenLolipapas.webp", alt: "Siena menu dishes" }],
  },

  keywords: [
    "Siena Restaurant Alpharetta Menu",
    "Best Menu for Mediterranean Food",
    "Alpharetta Restaurants Menu",
    "Best Mediterranean Restaurants Menu",
    "Mediterranean Tapas Dishes",
    "Mediterranean Dinner Menu",
  ],


  alternates: { canonical: "https://sienaatl.com/menus" },
};

// Fields in site-data.json are frequently null rather than absent, so the types
// have to allow it or the cast below fails.
type RawItem = {
  name?: string | null;
  description?: string | null;
  price?: number | string | null;
  is_vegan?: boolean | null;
  is_gluten_free?: boolean | null;
};
type RawSection = { title?: string | null; subtitle?: string | null; items?: RawItem[] };
type RawTab = {
  id?: string | null;
  label?: string | null;
  description?: string | null;
  subsections?: RawSection[];
};

// The item records carry currency "ARS", which is wrong for a restaurant in
// Georgia. The site's own Restaurant schema declares USD, so that is used here.
const CURRENCY = "USD";

function buildMenuSchema() {
  const tabs = (siteData.menuTabs ?? []) as RawTab[];

  const sections = tabs.flatMap((tab) =>
    (tab.subsections ?? []).map((sec) => ({
      "@type": "MenuSection",
      name: [tab.label, sec.title].filter(Boolean).join(" — ") || sec.title,
      ...(sec.subtitle ? { description: sec.subtitle } : {}),
      hasMenuItem: (sec.items ?? [])
        .filter((i) => i.name)
        .map((i) => ({
          "@type": "MenuItem",
          name: i.name,
          ...(i.description ? { description: i.description } : {}),
          ...(i.price !== null && i.price !== undefined && i.price !== ""
            ? {
                offers: {
                  "@type": "Offer",
                  price: String(i.price),
                  priceCurrency: CURRENCY,
                },
              }
            : {}),
          ...(i.is_vegan ? { suitableForDiet: "https://schema.org/VeganDiet" } : {}),
          ...(i.is_gluten_free
            ? { suitableForDiet: "https://schema.org/GlutenFreeDiet" }
            : {}),
        })),
    }))
  );

  return {
    "@context": "https://schema.org",
    "@type": "Menu",
    "@id": "https://sienaatl.com/menus#menu",
    name: "Siena Restaurant & Bar Menus",
    url: "https://sienaatl.com/menus",
    inLanguage: "en-US",
    // Ties the menu back to the Restaurant declared in the root layout.
    isPartOf: { "@id": "https://sienaatl.com/#restaurant" },
    hasMenuSection: sections,
  };
}

export default function MenuLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema trail={[{ name: "Menus", path: "/menus" }]} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(buildMenuSchema()) }}
      />
      {children}
    </>
  );
}
