import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Book a Table | Restaurant in Alpharetta",
  description:
    "Book your Italian Restaurant Reservations Alpharetta at Siena today. Reserve a table online & enjoy authentic Italian cuisine, handcrafted dishes",
  openGraph: {
    title: "Italian Restaurant Reservations Alpharetta | Reserve Table now",
    description:
      "Book your Italian Restaurant Reservations Alpharetta at Siena today. Reserve a table online & enjoy authentic Italian cuisine, handcrafted dishes",
    url: "https://sienaatl.com/reservations",
    images: [{ url: "/assets/Siena_20.03.26-P-02.webp", alt: "Dining at Siena Restaurant" }],
  },

    keywords: [
    "Italian Restaurant Reservations Alpharetta",
    "Book Restaurant Reservation Alpharetta",
    "Reserve Table Italian Restaurant",
    "Alpharetta Restaurants with Reservations",
    "Romantic Restaurant Alpharetta GA",
    "Restaurant Reservation near Alpharetta",
  ],


  alternates: { canonical: "https://sienaatl.com/reservations" },
};

export default function ReservationsLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
