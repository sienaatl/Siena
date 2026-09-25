import { diningMetadata } from "@/lib/page-metadata";
import BreadcrumbSchema from "@/components/BreadcrumbSchema";

export const metadata = diningMetadata("reservations", "Reservations for Dinner in Alpharetta", "Reserve a table at Siena Restaurant & Bar in Alpharetta for Mediterranean and Italian dining. Choose your date and party size, or inquire about a group.");

export default function ReservationsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema trail={[{ name: "Reservations", path: "/reservations" }]} />
      {children}
    </>
  );
}
