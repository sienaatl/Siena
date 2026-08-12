import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Notice | Siena Restaurant",
  description:
    "Learn how Siena Restaurant collects, uses, and protects personal information across reservations, events, guest communications, SMS messaging, and newsletter sign-ups.",
  openGraph: {
    title: "Privacy Notice | Siena Restaurant",
    description:
      "Learn how Siena Restaurant collects, uses, and protects personal information across reservations, events, guest communications, SMS messaging, and newsletter sign-ups.",
    url: "https://sienaatl.com/privacy-policy",
  },
  alternates: { canonical: "https://sienaatl.com/privacy-policy" },
};

export default function PrivacyPolicyLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
