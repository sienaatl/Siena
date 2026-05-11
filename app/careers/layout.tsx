import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Careers",
  description:
    "Join the Siena Restaurant team in Alpharetta, GA. We're looking for passionate individuals in front-of-house, kitchen, and bar roles. Apply today.",
  openGraph: {
    title: "Careers | Siena Restaurant",
    description:
      "Join the Siena team — we're hiring passionate people for front-of-house, kitchen, and bar roles in Alpharetta, GA.",
    url: "https://siena-q6nc.vercel.app/careers",
    images: [{ url: "/assets/Siena_20.03.26-P-01.webp", alt: "Siena Restaurant team" }],
  },
  alternates: { canonical: "https://siena-q6nc.vercel.app/careers" },
};

export default function CareersLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
