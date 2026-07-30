import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Thank You | Siena Restaurant & Bar Alpharetta",
  description: "Thanks for your event inquiry. The Siena team will be in touch shortly.",
  // A post-submission page has no business in search results.
  robots: { index: false, follow: true },
  alternates: { canonical: "https://sienaatl.com/event-inquiry/thank-you" },
};

export default function ThankYouLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
