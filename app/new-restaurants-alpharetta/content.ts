import type { Block, Faq, Reviews } from "@/components/LandingPage";

/**
 * Copy and layout for /new-restaurants-alpharetta.
 *
 * The strongest opening in the Search Console data: 28 query variations, 804
 * impressions and 60 clicks in three months, already ranking positions 3.6 to 5.9
 * with no page pointed at it. More clicks than all five of the original money-page
 * keywords put together.
 *
 * The angle has a shelf life. Siena opened in December 2025, so calling it new is
 * honest for now. Revisit this page in 2027 and retarget it if the claim has aged out.
 */

export const H1 = "One of the New Restaurants in Alpharetta";
export const H1_SCRIPT = "opened december 2025";

export const MARQUEE = [
  "Opened December 2025",
  "Medi-Talian Kitchen",
  "Women-Led Team",
  "Alpharetta, Georgia",
];

export const INTRO = {
  icon: "/assets/icono_123.svg",
  heading: "Worth Being First To",
  script: "still finding its regulars",
  paras: [
    "Alpharetta gets new restaurants often, and most of them are a version of something already here. Siena Restaurant &amp; Bar opened in December 2025 at 124 Devore Rd, a few minutes from Avalon, and it is not.",
    "The kitchen puts Italian and Mediterranean cooking on one menu and calls it Medi-talian. House-made pasta next to warm hummus. Lamb chops next to rigatoni. All of it tapas-style, so a table orders a spread and passes it around.",
  ],
  cta: { label: "SEE THE MENU", href: "/menus" },
};

export const BLOCKS: Block[] = [
  {
    kind: "split",
    bg: "green",
    heading: "What Opened Here",
    script: "the short version",
    image: "/assets/hero7.webp",
    alt: "The dining room at Siena Restaurant & Bar, a new restaurant in Alpharetta, Georgia",
    paras: [
      "Siena is a women-led restaurant. Co-owner and manager Aida Lemma runs the floor and executive chef Baba Estavillo runs the kitchen. That is not a detail on a wall somewhere, it shows up in how the room feels and how the food arrives.",
      "The space is warm and a little dramatic. Bold lighting, room to talk, upscale without anyone being stiff about it. Nice jeans or your best outfit, both work.",
      "It opened in December 2025 and filled up faster than most new rooms do, which is usually a sign the food is doing the work rather than the marketing. <a href=\"/about-us\">More about how it started</a>.",
    ],
  },
  {
    kind: "gallery",
    bg: "black",
    icon: "/assets/icon_menu.svg",
    heading: "What to Order First",
    script: "if it is your first visit",
    intro:
      "Because everything is built for sharing, a first visit works best as a spread rather than one plate each. Order four or five things between two and you will have tasted most of what Siena does. <a href=\"/menus\">See the full menu</a>.",
    items: [
      {
        image: "/assets/Siena_20.03.26-D-MeatBalls-01.webp",
        alt: "House-made pasta and meatballs at a new restaurant in Alpharetta",
        title: "THE PASTA",
        sub: "Made in house, worth the visit alone",
        href: "/italian-restaurant-alpharetta",
      },
      {
        image: "/assets/Siena_20.03.26-D-Feta.webp",
        alt: "Hummus and whipped feta mezze at Siena in Alpharetta",
        title: "THE MEZZE",
        sub: "Hummus, whipped feta, charred cauliflower",
        href: "/mediterranean-restaurant-alpharetta",
      },
      {
        image: "/assets/Siena_20.03.26-D-LambChop-01.webp",
        alt: "Grilled lamb chops at Siena Restaurant & Bar in Alpharetta",
        title: "LAMB CHOPS",
        sub: "The one people come back for",
        href: "/menus?tab=main-menu",
      },
    ],
  },
  {
    kind: "split",
    bg: "green",
    flip: true,
    heading: "Not the Usual New Opening",
    script: "two kitchens, one menu",
    image: "/assets/Siena_20.03.26-D-ShirimpFranceseArancini.webp",
    alt: "Shrimp francese arancini, an Italian starter at a new Alpharetta restaurant",
    paras: [
      "Most places pick a lane. Italian or Mediterranean, one or the other. Siena runs both on the same menu and lets you order across them in one sitting.",
      "So a table can have house-made rigatoni and shrimp francese arancini sitting next to Siena hummus, chicken tawook and a watermelon and feta salad. Two food cultures that already share a coastline, an olive oil habit and a fondness for long meals.",
      "It sounds like it should not work. It does, and it is the reason first visits turn into second ones.",
    ],
  },
  {
    kind: "cards",
    bg: "black",
    icon: "/assets/iconoestrellas.svg",
    heading: "Before You Come",
    script: "three useful things",
    cards: [
      {
        title: "Book Friday for Music",
        desc: "A saxophonist plays live on Friday nights and those tables go first. <a href=\"/live-music-fridays\">See what Friday looks like</a>.",
      },
      {
        title: "It Is Evenings",
        desc: "The kitchen opens at 4pm and runs to midnight on Friday and Saturday. Closed Monday. Saturday morning has a separate <a href=\"/brunch-alpharetta\">brunch menu</a>.",
      },
      {
        title: "Come Hungry",
        desc: "Sharing plates means ordering more things than feels sensible. That is the correct amount. <a href=\"/reservations\">Book a table</a>.",
      },
    ],
  },
  {
    kind: "split",
    bg: "green",
    heading: "Where It Sits",
    script: "downtown, near avalon",
    image: "/assets/hero11.webp",
    alt: "Siena Restaurant & Bar on Devore Rd in downtown Alpharetta, Georgia",
    paras: [
      "124 Devore Rd puts Siena in <a href=\"/downtown-alpharetta-restaurants\">downtown Alpharetta</a>, minutes from Avalon and the Ameris Bank Amphitheatre. It works as a stop before a show or after an afternoon out.",
      "It is a short drive from Roswell, Johns Creek, Milton and Cumming, which is part of why people from across North Atlanta have it on their list already.",
      "Parking is straightforward and the entrance is step-free.",
    ],
  },
];

export const FAQS: Faq[] = [
  {
    q: "When did Siena open?",
    a: "December 2025, at 124 Devore Rd in downtown Alpharetta.",
  },
  {
    q: "What kind of food is it?",
    a: "Italian and Mediterranean on one menu, which the team calls Medi-talian. House-made pasta, mezze, grilled skewers and sharing plates. Popular first orders are the house-made rigatoni, Siena hummus, shrimp francese arancini and the lamb chops.",
  },
  {
    q: "Do I need to book?",
    a: "For Friday and Saturday evenings, yes. Those fill quickly, especially on live music nights. Midweek is easier and there is usually room at the bar. <a href=\"/reservations\">Book a table here</a>.",
  },
  {
    q: "What are the opening hours?",
    a: "Closed Monday. Tuesday to Thursday 4pm to 10pm, Friday and Saturday 4pm to midnight, Sunday 4pm to 10pm. Saturday morning runs a separate brunch menu from 10am.",
  },
  {
    q: "Is it expensive?",
    a: "It is upscale but built for sharing, so a table of four ordering a spread usually works out better value than four separate mains. There is also a happy hour menu earlier in the evening.",
  },
  {
    q: "What is there to do nearby?",
    a: "Avalon and the Ameris Bank Amphitheatre are both minutes away, so Siena works either side of a show or a day out.",
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
    {
      text: "My favorite was the lollipop chicken with a yogurt sauce. Their Mac and cheese with brisket was also really good.",
      author: "Grace M.",
    },
    { text: "The lamb chops is very flavorful as well as humus n pita bread.", author: "Big O." },
  ],
};

export const PRACTICAL = [
  "Opened December 2025, women-led kitchen and team",
  "Step-free entrance and accessible parking near the door",
  "Minutes from Avalon and the Ameris Bank Amphitheatre",
];

export const CLOSING = {
  heading: "Come and Try It",
  script: "before everyone else does",
  paras: [
    "New restaurants in Alpharetta come and go. This one is worth getting to early, while you can still get a Friday table without planning a fortnight ahead.",
    "<a href=\"/reservations\">Book your table</a> and order more than you think you need.",
  ],
};
