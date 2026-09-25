export type VisitPlan = { heading: string; text: string; links: { label: string; href: string }[] };
const link = (label: string, href: string) => ({ label, href });
const menu = link("View dinner and drinks", "/menus");
const celebration = link("Birthdays and celebrations", "/birthday-dinner-alpharetta");
const music = link("Friday live music", "/live-music-fridays");
const groups = link("Private dining and groups", "/private-dining-alpharetta");
export const VISIT_PLANS: Record<string, VisitPlan> = {
  "mediterranean-restaurant-alpharetta": {
    heading: "Make an evening of it",
    text: "Find us at 124 Devore Road in Alpharetta. Choose dinner for two, a Friday evening with music, or a group celebration, then check the reservation calendar for your date.",
    links: [menu, link("Plan a date night", "/date-night-alpharetta"), music, groups],
  },
  "downtown-alpharetta-restaurants": {
    heading: "Plan your visit from downtown",
    text: "Siena is on Devore Road, a drive from downtown Alpharetta. Check directions before setting out, explore the menu, and choose a reservation time that fits your evening.",
    links: [link("Mediterranean dining", "/mediterranean-restaurant-alpharetta"), link("Dinner at Siena", "/dinner-alpharetta"), celebration],
  },
  "date-night-alpharetta": {
    heading: "A table for two, your way",
    text: "Browse the menu together and choose your date. Planning around Friday music? Check the live-music page and call for the current performer. Add anniversary or other occasion notes when you reserve.",
    links: [menu, music, celebration],
  },
  "dinner-alpharetta": {
    heading: "Choose your evening",
    text: "Start with your date and party size. For dinner before a concert, allow time for service, travel and venue entry; tell the team about your timing when you arrive.",
    links: [menu, link("Dinner near Ameris Bank Amphitheatre", "/restaurants-near-ameris-bank-amphitheatre"), link("Dining near Avalon", "/restaurants-near-avalon-alpharetta")],
  },
  "happy-hour-alpharetta": {
    heading: "Start with the current menu",
    text: "Explore the happy-hour food and drinks menu. Call to confirm eligible days and current specials before planning around an offer, then stay for dinner if you wish.",
    links: [link("Happy-hour menu", "/menus?tab=happy-hour"), link("Dinner at Siena", "/dinner-alpharetta"), music],
  },
  "brunch-alpharetta": {
    heading: "Confirm brunch before you visit",
    text: "Please call to confirm current brunch days, hours and reservations. The online booking calendar currently lists dinner service; contact the team directly for brunch arrangements.",
    links: [link("Explore the brunch menu", "/menus?tab=weekend-brunch"), groups, link("Dining near Avalon", "/restaurants-near-avalon-alpharetta")],
  },
  "private-dining-alpharetta": {
    heading: "Tell us what you are celebrating",
    text: "Send your preferred date, guest count and occasion so our team can discuss the space, menu and arrangements. An inquiry does not confirm a booking; we will follow up on availability and details.",
    links: [celebration, link("Holiday gatherings", "/holiday-parties-alpharetta"), menu],
  },
  "holiday-parties-alpharetta": {
    heading: "Start planning your gathering",
    text: "Share your preferred date, guest count and any dietary or space requirements. Our team will discuss availability and arrangements before your event is confirmed.",
    links: [groups, celebration, menu],
  },
  "restaurants-near-avalon-alpharetta": {
    heading: "From Avalon to your table",
    text: "Siena is at 124 Devore Road, outside the Avalon development. Check current driving directions and allow for traffic before choosing your dinner reservation.",
    links: [link("Dinner at Siena", "/dinner-alpharetta"), link("Date-night dining", "/date-night-alpharetta"), menu],
  },
  "restaurants-near-ameris-bank-amphitheatre": {
    heading: "Plan dinner around your concert",
    text: "Check your ticket for show and gate times, then allow for dinner, traffic, parking and venue entry. For a late meal, call to confirm kitchen service before relying on the restaurant’s closing time.",
    links: [link("Dinner at Siena", "/dinner-alpharetta"), menu, link("Happy hour", "/happy-hour-alpharetta")],
  },
};
