import type { Block, Faq, Reviews } from "@/components/LandingPage";

/**
 * Copy and layout for /restaurants-near-avalon-alpharetta.
 *
 * Page 19 in the original plan, and the last of the twenty.
 *
 * Deliberately built on a different axis from the Amphitheatre page so the two are
 * not twins. That one is about timing around a show. This one is about the fact that
 * Siena does not open until 4pm, which is the single most useful thing an Avalon
 * shopper needs to know, and about being a short drive off the Avalon strip rather
 * than in it.
 *
 * No precise distance or walking time is claimed. Both are Alpharetta 30009, so
 * "a short drive" is safe; anything more exact would be invented.
 */

export const H1 = "Restaurants Near Avalon in Alpharetta";
export const H1_SCRIPT = "just off the strip";

export const MARQUEE = [
  "Minutes From Avalon",
  "Dinner From 4pm",
  "Sharing Plates",
  "Alpharetta, Georgia",
];

export const INTRO = {
  icon: "/assets/icono_findus.svg",
  heading: "Off the Strip, Worth the Drive",
  script: "five minutes away",
  paras: [
    "Avalon has plenty to eat, and on a Saturday evening all of it has a wait. Siena Restaurant &amp; Bar is a short drive away at 124 Devore Rd in downtown Alpharetta, which is far enough to be calmer and close enough to be easy.",
    "One thing to know before you set off: the kitchen opens at 4pm. There is no lunch service, so this is an evening plan rather than a mid-shopping one.",
  ],
  cta: { label: "BOOK A TABLE", href: "/reservations" },
};

export const BLOCKS: Block[] = [
  {
    kind: "split",
    bg: "green",
    heading: "Evenings Only, and Why",
    script: "no lunch here",
    image: "/assets/hero11.webp",
    alt: "Siena Restaurant & Bar on Devore Road, a short drive from Avalon in Alpharetta",
    paras: [
      "Siena is a dinner and bar room. The kitchen opens at 4pm Tuesday to Sunday and closes Monday. The only daytime service is Saturday brunch from 10am.",
      "That is worth knowing before you drive over after an afternoon at Avalon. If it is 2pm and you are hungry, this is not the answer. If it is 4pm and you have finished shopping, it is a good one.",
      "One service done properly rather than two rushed ones is also why the evening room feels the way it does.",
    ],
  },
  {
    kind: "split",
    bg: "black",
    flip: true,
    heading: "Quieter Than the Strip",
    script: "on purpose",
    image: "/assets/hero6.webp",
    alt: "The warm dining room at a restaurant near Avalon in Alpharetta",
    paras: [
      "Avalon on a weekend evening is busy, loud and full of people who did not book. Downtown Alpharetta a few minutes away is a different pace.",
      "The room here is warm and low-lit with space between tables, so you can hear the person opposite you. Parking is straightforward rather than circling a deck, and the entrance is step-free with accessible parking near the door.",
      "Friday and Saturday run to midnight, so there is no rush once you are in.",
    ],
  },
  {
    kind: "gallery",
    bg: "green",
    icon: "/assets/icon_menus.svg",
    heading: "What You Are Coming For",
    script: "medi-talian",
    intro:
      "Italian and Mediterranean on one menu, all tapas-style, so a group orders a spread instead of arguing about cuisine. That is the bit Avalon does not really do. <a href=\"/menus\">See the full menu</a>.",
    items: [
      {
        image: "/assets/Siena_20.03.26-D-Feta.webp",
        alt: "Mezze sharing plates at a restaurant near Avalon, Alpharetta",
        title: "MEZZE",
        sub: "Hummus, whipped feta, cauliflower",
        href: "/mediterranean-restaurant-alpharetta",
      },
      {
        image: "/assets/Siena_20.03.26-D-MeatBalls-02.webp",
        alt: "House-made pasta at a restaurant near Avalon in Alpharetta",
        title: "PASTA",
        sub: "Made in house, rigatoni and bucatini",
        href: "/italian-restaurant-alpharetta",
      },
      {
        image: "/assets/Siena_20.03.26-PS-SienaMargarita-01.webp",
        alt: "Cocktails at a bar near Avalon in Alpharetta",
        title: "THE BAR",
        sub: "Twenty cocktails, thirty wines",
        href: "/cocktail-bar-alpharetta",
      },
    ],
  },
  {
    kind: "cards",
    bg: "black",
    icon: "/assets/iconoestrellas.svg",
    heading: "Which Evening",
    script: "pick your night",
    cards: [
      {
        title: "After Shopping",
        desc: "Finish at Avalon, drive over for 5pm or 6pm and take your time. Earlier in the evening is the quietest it gets.",
      },
      {
        title: "Before a Show",
        desc: "The Ameris Bank Amphitheatre is close too. <a href=\"/restaurants-near-ameris-bank-amphitheatre\">Timing advice here</a> if you have tickets.",
      },
      {
        title: "Friday for Music",
        desc: "A saxophonist plays live on Friday nights and the room lifts. <a href=\"/live-music-fridays\">See what Friday looks like</a>.",
      },
    ],
  },
  {
    kind: "split",
    bg: "green",
    heading: "Saturday Mornings Are Different",
    script: "brunch, from 10am",
    image: "/assets/Siena_20.03.26-LS-LimoncelloRicottaPancakes-01.webp",
    alt: "Saturday brunch near Avalon in Alpharetta, Georgia",
    paras: [
      "The one time Siena is open during the day is Saturday morning, on a separate brunch menu from 10am. Limoncello ricotta pancakes, a truffle and pecorino frittata, baked eggs in San Marzano.",
      "If you are heading to Avalon for the day, brunch first and shop after works rather better than the other way around. <a href=\"/brunch-alpharetta\">More on brunch</a>.",
    ],
  },
];

export const FAQS: Faq[] = [
  {
    q: "How far is Siena from Avalon?",
    a: "A short drive. Siena is at 124 Devore Rd in downtown Alpharetta and Avalon is on Avalon Boulevard, both in Alpharetta 30009.",
  },
  {
    q: "Can we come for lunch after shopping?",
    a: "No. The kitchen opens at 4pm Tuesday to Sunday and there is no lunch service. The only daytime service is Saturday brunch from 10am.",
  },
  {
    q: "Is it easier to park than Avalon?",
    a: "Yes. Parking is straightforward rather than circling a deck, and there is accessible parking near the door with a step-free entrance.",
  },
  {
    q: "Do we need to book?",
    a: "Friday and Saturday evenings fill up, so booking ahead is sensible. Midweek is easier and the bar takes walk-ins when there is room. <a href=\"/reservations\">Book here</a>.",
  },
  {
    q: "What kind of food is it?",
    a: "Italian and Mediterranean on one menu, served tapas-style so everything is shared. House-made pasta, mezze, grilled skewers and lamb chops.",
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
    {
      text: "My favorite was the lollipop chicken with a yogurt sauce. Their Mac and cheese with brisket was also really good.",
      author: "Grace M.",
    },
    { text: "The lamb chops is very flavorful as well as humus n pita bread.", author: "Big O." },
  ],
};

export const PRACTICAL = [
  "A short drive from Avalon, in downtown Alpharetta",
  "Kitchen opens at 4pm, no lunch service, closed Monday",
  "Step-free entrance and accessible parking near the door",
];

export const CLOSING = {
  heading: "Come Over After",
  script: "from four onwards",
  paras: [
    "A few minutes from Avalon, quieter than the strip, and open until midnight on Friday and Saturday.",
    "<a href=\"/reservations\">Book your table</a>, or take a seat at the bar if there is room.",
  ],
};
