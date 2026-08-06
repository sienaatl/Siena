import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy | Siena Restaurant",
  description:
    "Learn how Siena Restaurant collects, uses, and protects your personal information across reservations, events, careers, and newsletter forms.",
  openGraph: {
    title: "Privacy Policy | Siena Restaurant",
    description:
      "Learn how Siena Restaurant collects, uses, and protects your personal information across reservations, events, careers, and newsletter forms.",
    url: "https://sienaatl.com/privacy-policy",
  },
  alternates: { canonical: "https://sienaatl.com/privacy-policy" },
};

export default function PrivacyPolicyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
