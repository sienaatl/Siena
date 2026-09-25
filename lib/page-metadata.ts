import type { Metadata } from "next";

export function diningMetadata(path: string, title: string, description: string): Metadata {
  const url = `https://sienaatl.com/${path}`;
  const images = [{ url: "/assets/Siena_20.03.26-A-02.webp", alt: "Siena Restaurant & Bar in Alpharetta" }];
  return {
    title, description,
    alternates: { canonical: url },
    openGraph: { type: "website", title: `${title} | Siena`, description, url, images },
    twitter: { card: "summary_large_image", title: `${title} | Siena`, description, images: images.map(image => image.url) },
  };
}
