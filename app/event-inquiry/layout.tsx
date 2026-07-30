import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Event Inquiry | Private Events at Siena Restaurant Alpharetta",
  description:
    "Plan a private event at Siena in Alpharetta. Tell us your date, guest count and occasion, and our team will get back to you to arrange the details.",
  openGraph: {
    title: "Event Inquiry | Private Events at Siena Restaurant Alpharetta",
    description:
      "Plan a private event at Siena in Alpharetta. Tell us your date, guest count and occasion, and our team will get back to you to arrange the details.",
    url: "https://sienaatl.com/event-inquiry",
    images: [{ url: "/assets/Siena_20.03.26-A-01.webp", alt: "Private events at Siena Restaurant" }],
  },
  alternates: { canonical: "https://sienaatl.com/event-inquiry" },
};

export default function EventInquiryLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
