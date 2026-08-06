import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service | Siena Restaurant",
  description:
    "Read the terms of service governing your use of sienaatl.com, including reservations, online ordering, gift cards, and job applications.",
  openGraph: {
    title: "Terms of Service | Siena Restaurant",
    description:
      "Read the terms of service governing your use of sienaatl.com, including reservations, online ordering, gift cards, and job applications.",
    url: "https://sienaatl.com/terms-of-service",
  },
  alternates: { canonical: "https://sienaatl.com/terms-of-service" },
};

export default function TermsOfServiceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
