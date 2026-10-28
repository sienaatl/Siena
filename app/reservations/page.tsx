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
          <h2 className="text-3xl text-[#e0b265]">Reservation questions</h2>
          <h3 className="text-xl text-white">How do I book a table online?</h3>
          <p>Start with the number of guests and your preferred date in the form above. Choose an available time, then enter your name, email address and phone number. You can also select an occasion and add special requests. Review your details before selecting Complete Reservation. A successful booking displays a Reservation Confirmed message with your date, time, party size and confirmation number.</p>
          <h3 className="text-xl text-white">What if my preferred time is unavailable?</h3>
          <p>The time selector becomes available after you choose a date. If the time you want is not offered, try another date or call the restaurant to discuss your plans. Siena is closed on Mondays. Reservations are recommended for Friday and Saturday dinner, particularly when you are planning an evening with live music. Walk-ins are welcome subject to availability; arriving without a booking does not guarantee a table.</p>
          <h3 className="text-xl text-white">Can I request a particular table or mention a celebration?</h3>
          <p>Use the Occasion field for a birthday, anniversary, date night, business meal or other celebration. The Special Requests box is also the place to tell us about seating preferences and accessibility needs. Seating requests are not guaranteed. If a particular arrangement is essential to your visit, speak with the team before booking so you can discuss what is possible for your party.</p>
          <h3 className="text-xl text-white">How should I share allergies or dietary restrictions?</h3>
          <p>Include relevant allergies and dietary restrictions in your reservation notes, and discuss them with your server when you arrive. Our menu includes Mediterranean and Italian dishes, so reviewing the current menu can help you plan your meal. Contact the restaurant with questions about a particular dish before your visit; a reservation note alone does not confirm that a dish can be prepared to meet your needs.</p>
          <h3 className="text-xl text-white">What happens if I am running late or my plans change?</h3>
          <p>Reservations are held for fifteen minutes. Please call (404) 999-0373 if you are delayed or need help changing your plans. Have your booking name, date, time and party size ready so the team can locate your reservation. If you receive a confirmation email containing a private modification link, keep that message for reference and use the link to manage your booking.</p>
          <h3 className="text-xl text-white">Where should I go, and is parking available?</h3>
          <p>Siena is at 124 Devore Rd, Alpharetta, GA 30009. Free parking is available, with accessible parking near the door and a step-free entrance. Check the address before starting your journey, and allow time to park before your reservation. Our contact page includes directions and contact details if you need help finding the restaurant.</p>
          <h3 className="text-xl text-white">What should I know before a Friday evening visit?</h3>
          <p>Friday live music runs from 7–10 PM. Choose a reservation time that suits your plans for dinner and music, and browse the food and drinks menus in advance if you are coordinating with friends. Siena has an upscale but relaxed atmosphere with no formal dress code. For larger celebrations or private dining, contact the events team through the group inquiry form before making separate table bookings.</p>
        </div>
      </section>
    </ReservationsPageClient>
  );
}
