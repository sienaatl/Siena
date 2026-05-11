import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Contact Siena Restaurant in Alpharetta, GA. Find us at 124 Devore Rd, Alpharetta, GA 30009. Open Tuesday–Sunday from 4:00 PM.",
  openGraph: {
    title: "Contact Us | Siena Restaurant",
    description:
      "Find Siena Restaurant at 124 Devore Rd, Alpharetta, GA 30009. Open Tue–Thu & Sun 4–10 PM, Fri–Sat 4 PM–12 AM.",
    url: "https://siena-q6nc.vercel.app/contact-us",
    images: [{ url: "/assets/Siena_20.03.26-A-01.webp", alt: "Siena Restaurant exterior" }],
  },
  alternates: { canonical: "https://siena-q6nc.vercel.app/contact-us" },
};

export default function ContactLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
