import { NextResponse } from "next/server";
import { parseClosureDates } from "@/lib/hours";

const CLOSURES_API = "https://reservations.sienaatl.com/api/closures";

/**
 * GET /api/closures → { dates: ["2026-12-25", ...] }
 *
 * The reservations backend's closures endpoint needs the admin PIN, which must
 * never reach the browser. This route calls it server-side with the PIN from
 * RESERVATIONS_ADMIN_PIN and returns only the closure dates (no reasons), which
 * the booking calendars use to make those days unselectable.
 */
export async function GET() {
  const pin = process.env.RESERVATIONS_ADMIN_PIN;
  if (!pin) {
    console.error("[closures] RESERVATIONS_ADMIN_PIN is not set");
    return NextResponse.json({ dates: [], error: "Closures are not configured" }, { status: 503 });
  }

  try {
    const res = await fetch(`${CLOSURES_API}?pin=${encodeURIComponent(pin)}`, { cache: "no-store" });
    if (!res.ok) {
      console.error(`[closures] upstream returned ${res.status}`);
      return NextResponse.json({ dates: [], error: "Could not load closures" }, { status: 502 });
    }
    const dates = parseClosureDates(await res.json());
    return NextResponse.json(
      { dates },
      // Short CDN cache so every page view doesn't hit the backend, while a
      // newly added closure still shows up within a minute.
      { headers: { "Cache-Control": "public, s-maxage=60, stale-while-revalidate=300" } },
    );
  } catch (err) {
    console.error("[closures] fetch failed:", err);
    return NextResponse.json({ dates: [], error: "Could not load closures" }, { status: 502 });
  }
}
