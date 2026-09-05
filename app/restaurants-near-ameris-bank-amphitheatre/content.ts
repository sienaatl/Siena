import type { Block, Faq, Reviews } from "@/components/LandingPage";

/**
 * Copy and layout for /restaurants-near-ameris-bank-amphitheatre.
 *
 * Page 18 in the original plan. Landmark pages are the easiest kind to make thin, so
 * this one is built around the thing a concert-goer actually needs: timing. Siena
 * opens at 4pm, plates arrive in waves rather than courses, and Friday and Saturday
 * run to midnight. Those facts decide whether someone makes their show, and they are
 * more useful than a mileage figure.
 *
 * No precise drive time or distance is claimed. Siena is at 34.0681987, -84.2991968
 * and the venue is at 2200 Encore Pkwy, both Alpharetta 30009, so "a few minutes"
 * is safe. Anything more exact would be invented.
 */

export const H1 = "Restaurants Near Ameris Bank Amphitheatre";
export const H1_SCRIPT = "eat before the show";

export const MARQUEE = [
  "Minutes From the Venue",
  "Kitchen Opens at 4pm",
  "Open Late Friday and Saturday",
  "Alpharetta, Georgia",
];

export const INTRO = {
  icon: "/assets/icono_findus.svg",
  heading: "Dinner, Then the Show",
  script: "or drinks after",
  paras: [
    "The Ameris Bank Amphitheatre holds twelve thousand people, and most of them are looking for dinner within the same two-hour window. Siena Restaurant &amp; Bar is a few minutes away at 124 Devore Rd in downtown Alpharetta.",
    "The kitchen opens at 4pm, which is the part that matters. Plenty of places nearby do not, and an 8pm show does not wait.",
  ],
  cta: { label: "BOOK A TABLE", href: "/reservations" },
};

export const BLOCKS: Block[] = [
  {
    kind: "split",
    bg: "green",
    heading: "Getting the Timing Right",
    script: "read this bit",
    image: "/assets/hero11.webp",
    alt: "Siena Restaurant & Bar on Devore Road, minutes from Ameris Bank Amphitheatre",
    paras: [
      "Book for 5pm or 5.30pm for a 7.30 or 8pm show. That gives you a comfortable ninety minutes without anyone glancing at their phone.",
      "Say you are going to the show when you book and again when you arrive. Food here arrives in waves rather than as courses, so the kitchen paces your table differently once it knows you have somewhere to be. That one sentence is the difference between relaxed and rushed.",
      "If you do not tell us, allow two hours. It is not a quick dinner by design.",
    ],
  },
  {
    kind: "gallery",
    bg: "black",
    icon: "/assets/icon_menu.svg",
    heading: "What to Order When You Are Short on Time",
    script: "these come out first",
    intro:
      "Everything is tapas-style and shared, which works in your favour on a show night because the first plates land quickly. Start with these and add more only if the clock allows. <a href=\"/menus\">See the full menu</a>.",
    items: [
      {
        image: "/assets/Siena_20.03.26-D-Feta.webp",
        alt: "Hummus and mezze, quick starters before a concert in Alpharetta",
        title: "FASTEST",
        sub: "Hummus, whipped feta, warm pita",
        href: "/mediterranean-restaurant-alpharetta",
      },
      {
        image: "/assets/Siena_20.03.26-D-ShirimpFranceseArancini.webp",
        alt: "Shrimp francese arancini before a show at Ameris Bank Amphitheatre",
        title: "NEXT",
        sub: "Arancini, crispy cauliflower, calamari",
        href: "/menus?tab=main-menu",
      },
      {
        image: "/assets/Siena_20.03.26-D-MeatBalls-01.webp",
        alt: "House-made pasta for an early dinner near Ameris Bank Amphitheatre",
        title: "IF THERE IS TIME",
        sub: "House-made pasta for the table",
        href: "/italian-restaurant-alpharetta",
      },
    ],
  },
  {
    kind: "split",
    bg: "green",
    flip: true,
    heading: "Or Come Afterwards",
    script: "the better option",
    image: "/assets/hero6.webp",
    alt: "The bar at Siena, open late after a concert in Alpharetta",
    paras: [
      "Friday and Saturday the kitchen and bar run to midnight, so coming after the encore is genuinely an option rather than a hopeful one.",
      "Twenty house cocktails, a thirty-bottle wine list and small plates that suit a late table. Walk-ins are welcome at the bar when there is room, which after a show there usually is. <a href=\"/cocktail-bar-alpharetta\">More on the bar</a>.",
      "Midweek and Sunday the kitchen closes at 10pm, so an after-show visit only works on a Friday or Saturday.",
    ],
  },
  {
    kind: "cards",
    bg: "black",
    icon: "/assets/iconoestrellas.svg",
    heading: "Practical Things",
    script: "on a show night",
    cards: [
      {
        title: "Book Ahead",
        desc: "Concert nights fill the whole of downtown Alpharetta. A table at 5pm on a show night goes days in advance. <a href=\"/reservations\">Book here</a>.",
      },
      {
        title: "Parking",
        desc: "Parking at Siena is straightforward and there is accessible parking near the door, which is worth having on a night when the venue lots are full.",
      },
      {
        title: "Closed Monday",
        desc: "Worth checking the day before you drive over. Tuesday to Sunday the kitchen opens at 4pm.",
      },
    ],
  },
  {
    kind: "split",
    bg: "green",
    heading: "What the Food Is",
    script: "in one paragraph",
    image: "/assets/Siena_20.03.26-D-LambChop-01.webp",
    alt: "Lamb chops and Mediterranean plates near Ameris Bank Amphitheatre",
    paras: [
      "Italian and Mediterranean on one menu, which the kitchen calls Medi-talian. House-made pasta, mezze, grilled skewers and lamb chops, all built to share.",
      "It suits a group heading to a show, because nobody has to agree on one cuisine and the plates land in the middle rather than in front of one person.",
      "Siena opened in December 2025 and is women-led. <a href=\"/about-us\">More about it</a>.",
    ],
  },
];

export const FAQS: Faq[] = [
  {
    q: "How far is Siena from Ameris Bank Amphitheatre?",
    a: "A few minutes' drive. Siena is at 124 Devore Rd in downtown Alpharetta and the venue is at 2200 Encore Pkwy, both in Alpharetta 30009.",
  },
  {
    q: "What time should we book before a show?",
    a: "5pm or 5.30pm for a 7.30 or 8pm start. Tell us you are going to the show when you book and again when you arrive, and the kitchen will pace your table for it.",
  },
  {
    q: "How long does dinner take?",
    a: "Allow two hours normally. Less if you tell us you have a show, because plates arrive in waves and the kitchen can bring them faster.",
  },
  {
    q: "Can we come after the concert instead?",
    a: "On Friday and Saturday, yes. The kitchen and bar run to midnight. Midweek and Sunday everything closes at 10pm, so after a show is too late.",
  },
  {
    q: "Do you take walk-ins on a show night?",
    a: "At the bar when there is room, but concert nights fill downtown Alpharetta and tables go days ahead. <a href=\"/reservations\">Booking is the safer plan</a>.",
  },
  {
    q: "What are the hours?",
    a: "Closed Monday. Tuesday to Thursday 4pm to 10pm, Friday and Saturday 4pm to midnight, Sunday 4pm to 10pm, plus Saturday brunch from 10am.",
  },
];

/**
 * Quotes are real, taken verbatim from public Yelp reviews, names as the reviewers
 * display them. Confirm with the client before this goes live.
 */
export const REVIEWS: Reviews = {
  quotes: [
    {
      text: "The combination of incredible Mediterranean cuisine, attentive service, and live music creates a unique atmosphere",
      author: "Chelsea G.",
    },
    { text: "The lamb chops is very flavorful as well as humus n pita bread.", author: "Big O." },
    {
      text: "Food was great I had the Chicken tawook and rice it tasted very fresh and lite",
      author: "Eline P.",
    },
  ],
};

export const PRACTICAL = [
  "A few minutes from the Ameris Bank Amphitheatre",
  "Kitchen opens at 4pm, closed Monday",
  "Step-free entrance and accessible parking near the door",
];

export const CLOSING = {
  heading: "Book Before the Show",
  script: "concert nights fill up",
  paras: [
    "Twelve thousand people are looking for the same table on a show night. Getting in early is the whole trick.",
    "<a href=\"/reservations\">Book yours</a>, and mention the show so we can time it properly.",
  ],
};
