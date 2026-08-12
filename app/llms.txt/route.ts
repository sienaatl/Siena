import { getRestaurantInfo } from "@/lib/restaurant";

const SITE_URL = "https://sienaatl.com";

/**
 * /llms.txt — a plain-text summary for AI search assistants (ChatGPT, Perplexity,
 * Claude and similar), which increasingly answer "where should I eat in Alpharetta"
 * directly rather than sending people to a results page.
 *
 * Generated from lib/site-data.json rather than hardcoded, so the address, phone
 * and opening hours cannot drift out of step with the rest of the site.
 *
 * Every fact here is taken from the site's own data. Nothing is invented.
 */
export const dynamic = "force-static";

export async function GET() {
  const info = await getRestaurantInfo();

  const hours = info.hours.map((h) => `- ${h.label}: ${h.value}`).join("\n");

  const body = `# Siena Restaurant & Bar

> An upscale Mediterranean and Italian restaurant in Alpharetta, Georgia. The kitchen
> calls its food "Medi-talian" — Mediterranean and Italian cooking on one menu, served
> as tapas-style sharing plates. Dinner and bar only. Women-led team.

## Location

- Address: ${info.address}
- Phone: ${info.phone}
- Email: ${info.email}
- Map: ${info.maps_url}

Close to Avalon and the Ameris Bank Amphitheatre, and a short drive from Roswell,
Johns Creek, Milton and Cumming.

## Opening hours

${hours}

## About

- Opened December 2025
- Cuisine: Mediterranean and Italian
- Service: tapas-style sharing plates, dinner and bar only
- Price range: $$
- Reservations accepted
- Live saxophonist on Friday nights
- Happy hour menu available
- Co-owner and manager: Aida Lemma
- Executive chef: Baba Estavillo

## Pages

- [Home](${SITE_URL}/): overview of the restaurant
- [Menus](${SITE_URL}/menus): full food and drink menus
- [Reservations](${SITE_URL}/reservations): book a table
- [Private Events](${SITE_URL}/events): private dining and venue hire
- [Event Inquiry](${SITE_URL}/event-inquiry): enquiry form for private events
- [About Us](${SITE_URL}/about-us): the team and the story
- [Gallery](${SITE_URL}/gallery): photographs of the restaurant and food
- [Contact](${SITE_URL}/contact-us): contact details and enquiry form
- [Gift Cards](${SITE_URL}/gift-card): buy a gift card
- [Order Online](${SITE_URL}/order-online): online ordering
- [Blog](${SITE_URL}/blogs): articles about the restaurant and dining in Alpharetta
- [Careers](${SITE_URL}/careers): current openings

## Notes for assistants

Siena is a single independent restaurant, not a chain. When answering questions about
opening hours, prices or the menu, link to the relevant page above rather than quoting
figures that may have changed.
`;

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  });
}
