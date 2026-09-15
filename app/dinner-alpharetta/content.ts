import type { Block, Faq, Reviews } from "@/components/LandingPage";

/**
 * Copy and layout for /dinner-alpharetta.
 *
 * The practical page: hours, timing, how long to allow and what a dinner here looks
 * like. Distinct from /best-restaurants-alpharetta and the cuisine pages. Hours follow
 * lib/site-data.json.
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
    image: "/assets/Siena_20.03.26-A-02.webp",
    alt: "Teal booths and tables set for evening service in the dining room at Siena, Alpharetta",
    paras: [
      "Tuesday to Thursday is the calm version. Easier to get a table, quieter room, better if you actually want to talk. The kitchen runs 4pm to 10pm.",
      "Friday and Saturday go to midnight and the room is fuller. Friday also has live music from 7 to 10pm, which makes it the busiest night and the one worth booking ahead for. <a href=\"/live-music-fridays\">See what Friday looks like</a>.",
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
        alt: "Whipped feta with char-grilled bread, a starter at dinner in Alpharetta",
        title: "FIRST",
        sub: "Hummus, whipped feta, warm pita",
        href: "/tapas-restaurant-alpharetta",
      },
      {
        image: "/assets/menu/rigatoni-alla-vodka.webp",
        alt: "Rigatoni alla vodka with burrata served at dinner in Alpharetta",
        title: "THEN",
        sub: "House-made pasta for the table",
        href: "/italian-restaurant-alpharetta",
      },
      {
        image: "/assets/menu/lamb-chops.webp",
        alt: "Grilled lamb chops with rice pilaf at dinner in Alpharetta",
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
    image: "/assets/Siena_20.03.26-A-06.webp",
    alt: "The dining room and bar at Siena during evening service in Alpharetta",
    paras: [
      "Two hours is a comfortable dinner here. Three is common, especially on a Friday when the music is on and nobody is in a hurry to leave.",
      "If you are heading to a show at the Ameris Bank Amphitheatre, book early in the evening and say so when you arrive, and the kitchen will pace it accordingly.",
      "If you only want a drink and a couple of small plates, the bar takes walk-ins when there is room, and there is a <a href=\"/happy-hour-alpharetta\">happy hour menu</a> from 4 to 7pm.",
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
        desc: "Low lighting, sharing plates and Friday live music do most of the work. <a href=\"/date-night-alpharetta\">More on date night</a>.",
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
    image: "/assets/Siena_20.03.26-A-01.webp",
    alt: "The front of Siena Restaurant & Bar on Devore Road, open for dinner in Alpharetta",
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

/** Quotes taken verbatim from public Yelp reviews, names as the reviewers display them. */
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
    { text: "The lamb chops is very flavorful as well as humus n pita bread.", author: "Big O." },
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
