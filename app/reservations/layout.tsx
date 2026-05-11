import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Reservations",
  description:
    "Reserve your table at Siena Restaurant in Alpharetta, GA. Whether it's a weeknight dinner or a special occasion, we look forward to welcoming you.",
  openGraph: {
    title: "Reservations | Siena Restaurant",
    description:
      "Book your table at Siena — Mediterranean dining in Alpharetta, Georgia. Reserve now for weeknight dinners or special occasions.",
    url: "https://siena-q6nc.vercel.app/reservations",
    images: [{ url: "/assets/Siena_20.03.26-P-02.webp", alt: "Dining at Siena Restaurant" }],
  },
  alternates: { canonical: "https://siena-q6nc.vercel.app/reservations" },
};

export default function ReservationsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
