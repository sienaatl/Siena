// Google Ads conversion values, read by the GTM tags from the data layer.
const VALUE_PER_GUEST = 45;
const FLAT_RESERVATION_VALUE = 85;
const EVENT_ENQUIRY_VALUE = 600;

function pushToDataLayer(payload: Record<string, unknown>) {
  if (typeof window === "undefined") return;
  try {
    const analyticsWindow = window as Window & { dataLayer?: Record<string, unknown>[] };
    analyticsWindow.dataLayer = analyticsWindow.dataLayer || [];
    analyticsWindow.dataLayer.push(payload);
  } catch {
    // Analytics must never turn a successful submission into an apparent failure.
  }
}

/** Queue a confirmation event only after the booking API accepts a reservation. */
export function trackConfirmedReservation(partySize: number) {
  const hasPartySize = Number.isFinite(partySize) && partySize > 0;
  pushToDataLayer({
    event: "reservation_confirmed",
    booking_method: "siena_website",
    value: hasPartySize ? partySize * VALUE_PER_GUEST : FLAT_RESERVATION_VALUE,
    currency: "USD",
    party_size: hasPartySize ? partySize : undefined,
  });
}

/** Queue an enquiry event only after /api/event-inquiry accepts the form. */
export function trackEventEnquiry(guestCount?: string, eventDate?: string) {
  pushToDataLayer({
    event: "event_enquiry_submitted",
    value: EVENT_ENQUIRY_VALUE,
    currency: "USD",
    guest_count: guestCount ? Number(guestCount) : undefined,
    event_date: eventDate || undefined,
  });
}
