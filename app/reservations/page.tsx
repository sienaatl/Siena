import ReservationsPageClient from "@/components/ReservationsPageClient";
import { todayISO } from "@/lib/hours";

type SearchParams = Promise<{ date?: string; time?: string; partySize?: string }>;

export default async function Reservations({ searchParams }: { searchParams: SearchParams }) {
  // Prefill from the homepage's inline booking widget (?date=&time=&partySize=),
  // e.g. /reservations?date=2026-08-22&time=7:00%20PM&partySize=2. Anything
  // missing or invalid just falls back to an empty/default field like normal.
  // Read via the Page's `searchParams` prop (Server Component) rather than
  // the `useSearchParams` client hook, so no Suspense boundary is needed and
  // the rest of the page renders as real server HTML instead of being
  // excluded behind a client-only fallback.
  const params = await searchParams;

  const today = todayISO();
  const rawDate = params.date ?? "";
  const prefillDate = /^\d{4}-\d{2}-\d{2}$/.test(rawDate) && rawDate >= today ? rawDate : "";
  const rawPartySize = params.partySize ?? "";
  const prefillPartySize = /^(1[0-4]|[1-9])$/.test(rawPartySize) ? rawPartySize : "2";
  // Only carry the time over if the date came through too — a time with no
  // date attached isn't meaningful to prefill.
  const prefillTime = prefillDate ? params.time ?? "" : "";

  return (
    <ReservationsPageClient
      prefillDate={prefillDate}
      prefillTime={prefillTime}
      prefillPartySize={prefillPartySize}
    >
      <section className="bg-[#030302] px-5 py-16 text-white" aria-labelledby="plan-your-visit">
        <div className="mx-auto max-w-3xl space-y-6 text-base leading-relaxed text-white/80">
          <h2 id="plan-your-visit" className="text-3xl text-[#e0b265]">Plan your evening at Siena</h2>
          <p>Reserve a table at Siena Restaurant and Bar for Mediterranean and Italian dining in downtown Alpharetta. Find us at 124 Devore Rd, Alpharetta, GA 30009. Whether you are planning a date night, catching up with friends or celebrating with family, choose your date, time and party size in the form above.</p>
          <h3 className="text-xl text-white">Dinner, drinks and Friday live music</h3>
          <p>Explore handmade pasta, seafood and shareable plates, with cocktails and wine to accompany dinner. Live music takes place on Fridays from 7–10 PM. Browse our <a href="/menus" className="text-[#e0b265] underline">menus</a> before your visit, or plan a relaxed evening around dinner and music.</p>
          <h3 className="text-xl text-white">Group reservations and private dining</h3>
          <p>The online booking form welcomes parties of up to thirteen. For fourteen or more guests, use our <a href="/event-inquiry" className="text-[#e0b265] underline">private and group dining inquiry form</a> to discuss your plans. Share the date, guest count and occasion so our team can help you explore group dining packages for rehearsal dinners, celebrations or corporate gatherings.</p>
          <h3 className="text-xl text-white">Questions before you book?</h3>
          <p>Call <a href="tel:+14049990373" className="text-[#e0b265] underline">(404) 999-0373</a> for help with a reservation or questions about your visit. Please tell our team about allergies or dietary restrictions when discussing your meal. We are open Tuesday through Sunday and closed Mondays, with Friday and Saturday hours until midnight.</p>
        </div>
      </section>
    </ReservationsPageClient>
  );
}
