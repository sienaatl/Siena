import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms & Conditions | Siena Restaurant",
  description:
    "Read the terms and conditions governing your use of the Siena Restaurant website and related online services.",
  openGraph: {
    title: "Terms & Conditions | Siena Restaurant",
    description:
      "Read the terms and conditions governing your use of the Siena Restaurant website and related online services.",
    url: "https://sienaatl.com/terms-of-service",
  },
  alternates: { canonical: "https://sienaatl.com/terms-of-service" },
};

export default function TermsOfServiceLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
