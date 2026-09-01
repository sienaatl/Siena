import type { Block, Faq, Reviews } from "@/components/LandingPage";

/**
 * Copy and layout for /dinner-alpharetta.
 *
 * 67 impressions across 23 query variations, ranking 23 to 40. The weakest of the
 * five by the numbers and the most generic term, so this page earns its place by
 * being the practical one: hours, timing, how long to allow, what a dinner here
 * actually looks like. That keeps it distinct from /best-restaurants-alpharetta,
 * which makes the case, and from the cuisine pages, which cover the food.
 */

export const H1 = "Dinner in Alpharetta";
export const H1_SCRIPT = "from four until late";

export const MARQUEE = [
  "Dinner From 4pm",
  "Late on Friday and Saturday",
  "Sharing Plates",
  "Alpharetta, Georgia",
];

export const INTRO = {
  icon: "/assets/icon6.svg",
  heading: "An Evening, Not a Meal",
  script: "plan to stay a while",
  paras: [
    "Siena Restaurant &amp; Bar is dinner and bar service, which means the whole room is built around the evening rather than turning tables at lunchtime. Doors open at 4pm and Friday and Saturday run to midnight.",
    "It is at 124 Devore Rd in downtown Alpharetta, minutes from Avalon. The food is Italian and Mediterranean on one menu, served as sharing plates, so dinner tends to stretch out rather than arrive and finish.",
  ],
  cta: { label: "BOOK A TABLE", href: "/reservations" },
};

export const BLOCKS: Block[] = [
  {
    kind: "split",
    bg: "green",
    heading: "When to Come",
    script: "picking a night",
    image: "/assets/hero12.webp",
    alt: "An evening dinner service at a restaurant in Alpharetta, Georgia",
    paras: [
      "Tuesday to Thursday is the calm version. Easier to get a table, quieter room, better if you actually want to talk. The kitchen runs 4pm to 10pm.",
      "Friday and Saturday go to midnight and the room is fuller. Friday also has a live saxophonist, which is the busiest night and the one worth booking ahead for. <a href=\"/live-music-fridays\">See what Friday looks like</a>.",
      "Sunday is 4pm to 10pm again. Monday is closed. Saturday morning runs a separate <a href=\"/brunch-alpharetta\">brunch menu</a> from 10am, which is a different thing entirely.",
    ],
  },
  {
    kind: "gallery",
    bg: "black",
    icon: "/assets/icon_menu.svg",
    heading: "What Dinner Looks Like",
    script: "in rounds",
    intro:
      "Plates are shared and arrive as they are ready, so dinner comes in waves rather than courses. Order a few things, then a few more when the table has caught up. <a href=\"/menus\">See the full menu</a>.",
    items: [
      {
        image: "/assets/Siena_20.03.26-D-Feta.webp",
        alt: "Mezze starters at dinner in Alpharetta",
        title: "FIRST",
        sub: "Hummus, whipped feta, warm pita",
        href: "/tapas-restaurant-alpharetta",
      },
      {
        image: "/assets/Siena_20.03.26-D-MeatBalls-01.webp",
        alt: "House-made pasta served at dinner in Alpharetta",
        title: "THEN",
        sub: "House-made pasta for the table",
        href: "/italian-restaurant-alpharetta",
      },
      {
        image: "/assets/Siena_20.03.26-PS-TheFlameSteak.webp",
        alt: "Grilled main dishes at dinner in Alpharetta",
        title: "AND",
        sub: "Lamb chops, skewers, the grill",
        href: "/menus?tab=main-menu",
      },
    ],
  },
  {
    kind: "split",
    bg: "green",
    flip: true,
    heading: "How Long to Allow",
    script: "longer than you think",
    image: "/assets/hero6.webp",
    alt: "The warm dining room at Siena during evening service in Alpharetta",
    paras: [
      "Two hours is a comfortable dinner here. Three is common, especially on a Friday when the music is on and nobody is in a hurry to leave.",
      "If you are heading to a show at the Ameris Bank Amphitheatre, book early in the evening and say so when you arrive, and the kitchen will pace it accordingly.",
      "If you only want a drink and a couple of small plates, the bar takes walk-ins when there is room, and there is a <a href=\"/happy-hour-alpharetta\">happy hour menu</a> earlier on.",
    ],
  },
  {
    kind: "cards",
    bg: "black",
    icon: "/assets/iconoestrellas.svg",
    heading: "Which Kind of Dinner",
    script: "pick your night",
    cards: [
      {
        title: "Dinner for Two",
        desc: "Low lighting, sharing plates and the Friday sax do most of the work. <a href=\"/date-night-alpharetta\">More on date night</a>.",
      },
      {
        title: "Dinner With a Group",
        desc: "The sharing format suits a full table. For bigger numbers there is <a href=\"/private-dining-alpharetta\">private dining</a>.",
      },
      {
        title: "Dinner Before a Show",
        desc: "Minutes from the Ameris Bank Amphitheatre. Book early, tell the team, and the timing works.",
      },
    ],
  },
  {
    kind: "split",
    bg: "green",
    heading: "No Lunch, and Why",
    script: "evenings only",
    image: "/assets/hero11.webp",
    alt: "Siena Restaurant & Bar on Devore Road, open for dinner in Alpharetta",
    paras: [
      "Siena does not serve lunch. The kitchen opens at 4pm through the week, and the only daytime service is Saturday brunch from 10am.",
      "That is worth knowing before you drive over, and it is also why the evening room feels the way it does. One service, done properly, rather than two rushed ones.",
      "It is one of the <a href=\"/new-restaurants-alpharetta\">newer rooms in town</a>, open since December 2025.",
    ],
  },
];

export const FAQS: Faq[] = [
  {
    q: "What time does dinner start?",
    a: "The kitchen opens at 4pm Tuesday to Sunday. Closed Monday.",
  },
  {
    q: "How late are you open?",
    a: "Tuesday to Thursday and Sunday until 10pm. Friday and Saturday until midnight.",
  },
  {
    q: "Do you serve lunch?",
    a: "No. Dinner and bar service only, plus a separate brunch menu on Saturday morning from 10am.",
  },
  {
    q: "How long should we allow?",
    a: "Two hours is comfortable, three is common on a Friday. Plates are shared and arrive in waves, so dinner runs longer than a standard three-course meal.",
  },
  {
    q: "Can we eat before a show at the Amphitheatre?",
    a: "Yes, it is minutes away. Book earlier in the evening and mention it when you arrive so the kitchen can pace your table.",
  },
  {
    q: "Do we need a reservation?",
    a: "For Friday and Saturday, yes. Midweek is easier and the bar takes walk-ins when there is room. <a href=\"/reservations\">Book a table here</a>.",
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
      text: "Food was great I had the Chicken tawook and rice it tasted very fresh and lite",
      author: "Eline P.",
    },
    {
      text: "My favorite was the lollipop chicken with a yogurt sauce. Their Mac and cheese with brisket was also really good.",
      author: "Grace M.",
    },
  ],
};

export const PRACTICAL = [
  "Dinner and bar service from 4pm, closed Monday",
  "Step-free entrance and accessible parking near the door",
  "Minutes from Avalon and the Ameris Bank Amphitheatre",
];

export const CLOSING = {
  heading: "Book Dinner",
  script: "four until late",
  paras: [
    "Dinner in Alpharetta that runs long, arrives in waves and gets better the more of you there are.",
    "<a href=\"/reservations\">Book your table</a>, and allow more time than you think you need.",
  ],
};
