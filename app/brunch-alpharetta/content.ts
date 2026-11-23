import type { Block, Faq, Reviews } from "@/components/LandingPage";

export const H1 = "Brunch Is Not Currently Available";
export const H1_SCRIPT = "join us for dinner";
export const MARQUEE = ["Dinner from 4 PM", "Tuesday through Sunday", "Mediterranean & Italian", "Alpharetta, Georgia"];
export const INTRO = {
  icon: "/assets/icon_menus.svg",
  heading: "Siena Currently Serves Dinner",
  script: "plan an evening visit",
  paras: [
    "Siena Restaurant &amp; Bar does not currently serve lunch or brunch. Our regular dinner service begins at 4 PM Tuesday through Sunday, and we are closed on Mondays.",
    "Visit us at 124 Devore Rd, Alpharetta, GA 30009 for Mediterranean and Italian dinner, shared starters, pasta and cocktails. We are closed on Thanksgiving Day, November 26, 2026.",
  ],
  cta: { label: "VIEW THE DINNER MENU", href: "/menus" },
};
export const BLOCKS: Block[] = [{
  kind: "cards", bg: "green", heading: "Plan Your Evening", script: "at Siena",
  cards: [
    { title: "Dinner and Date Nights", desc: "Explore our <a href=\"/dinner-alpharetta\">dinner options</a> and <a href=\"/date-night-alpharetta\">date-night dining</a>, then <a href=\"/reservations\">reserve a table</a>." },
    { title: "Friday Live Music", desc: "<a href=\"/live-music-fridays\">Live Music Fridays</a> runs from 7 to 10 PM. Call for the current performer and any schedule changes." },
    { title: "Private Dining", desc: "Planning a celebration or group dinner? <a href=\"/private-dining-alpharetta\">Ask about private dining</a> with your date and guest count." },
  ],
}];
export const FAQS: Faq[] = [
  { q: "Does Siena serve brunch or lunch?", a: "No. Siena Restaurant &amp; Bar does not currently serve lunch or brunch. Regular dinner service starts at 4 PM Tuesday through Sunday." },
  { q: "What are Siena’s dinner hours?", a: "Tuesday, Wednesday, Thursday and Sunday: 4–10 PM. Friday and Saturday: 4 PM–midnight. Closed Monday. Holiday hours may differ; Siena is closed on Thanksgiving Day, November 26, 2026." },
  { q: "How can I reserve dinner?", a: "<a href=\"/reservations\">Reserve online</a> or call <a href=\"tel:+14049990373\">(404) 999-0373</a>. For a group celebration, send an event inquiry." },
  { q: "Where is Siena Restaurant & Bar?", a: "124 Devore Rd, Alpharetta, GA 30009. Siena is outside the Avalon development; check directions before your visit." },
];

/** Quotes taken verbatim from public Yelp reviews, names as the reviewers display them. */
export const REVIEWS: Reviews = {
  quotes: [
    {
      text: "The combination of incredible Mediterranean cuisine, attentive service, and live music creates a unique atmosphere",
      author: "Chelsea G.",
    },
    {
      text: "The lamb chops is very flavorful as well as humus n pita bread.",
      author: "Big O.",
    },
    {
      text: "Food was great I had the Chicken tawook and rice it tasted very fresh and lite",
      author: "Eline P.",
    },
  ],
};

export const PRACTICAL = ["No lunch or brunch currently", "Dinner from 4 PM Tuesday through Sunday", "124 Devore Rd, Alpharetta, GA 30009"];
export const CLOSING = {
  heading: "Make Dinner Plans", script: "reserve your evening",
  paras: ["Explore our current dinner menu and book your preferred date.", "Questions? <a href=\"tel:+14049990373\">Call (404) 999-0373</a>."],
};
