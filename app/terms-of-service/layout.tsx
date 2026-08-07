import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Siena Restaurant",
  description:
    "Read the terms and conditions governing Siena Restaurant's website, reservations, event inquiries, email communications, and SMS messaging.",
  openGraph: {
    title: "Terms & Conditions | Siena Restaurant",
    description:
      "Read the terms and conditions governing Siena Restaurant's website, reservations, event inquiries, email communications, and SMS messaging.",
    url: "https://sienaatl.com/terms-of-service",
  },
  alternates: { canonical: "https://sienaatl.com/terms-of-service" },
};

export default function TermsOfServiceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
