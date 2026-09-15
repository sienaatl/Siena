import type { Block, Faq, Reviews } from "@/components/LandingPage";

/**
 * Copy and layout for /mediterranean-restaurant-alpharetta.
 *
 * Dishes, drinks and hours follow lib/site-data.json.
 */

export const H1 = "A Mediterranean Restaurant in Alpharetta";
export const H1_SCRIPT = "built for sharing";

export const MARQUEE = [
  "Mezze and Sharing Plates",
  "Grilled Skewers",
  "Vegetarian Friendly",
  "Alpharetta, Georgia",
];

export const INTRO = {
  icon: "/assets/icono_about1.svg",
  heading: "Fresh, Warm, Passed Around",
  script: "medi-talian",
  paras: [
    "Looking for a Mediterranean restaurant in Alpharetta that feels fresh and a little special? Siena Restaurant &amp; Bar sits at 124 Devore Rd in downtown Alpharetta, minutes from Avalon and the Ameris Bank Amphitheatre.",
    "Siena blends Mediterranean and <a href=\"/italian-restaurant-alpharetta\">Italian</a> cooking into one menu the team calls Medi-talian. Mezze, hummus, grilled skewers, fresh salads and house-made pasta, all meant to be passed around the table.",
  ],
  cta: { label: "SEE THE MENU", href: "/menus" },
};

export const BLOCKS: Block[] = [
  {
    kind: "split",
    bg: "green",
    heading: "Ingredients That Taste Like Themselves",
    script: "how the kitchen works",
    image: "/assets/menu/hummus-della-casa.webp",
    alt: "Hummus della Casa with chickpeas and grilled pita at Siena, a Mediterranean restaurant in Alpharetta",
    paras: [
      "Mediterranean food is built on fresh, simple things: olive oil, lemon, herbs, grilled meat and a lot of vegetables. The kitchen at Siena takes that idea and runs with it.",
      "Executive chef Baba Estavillo builds plates around bold, clean flavour, and co-owner and manager Aida Lemma keeps the room warm. Together they lead a women-led team that opened Siena in December 2025.",
      "You get the best of two food cultures that already share a coastline, a love of olive oil and a habit of long, happy meals with good company. <a href=\"/about-us\">More about how Siena started</a>.",
    ],
  },
  {
    kind: "split",
    bg: "black",
    flip: true,
    heading: "Mezze Is Where It Starts",
    script: "put it in the middle",
    image: "/assets/Siena_20.03.26-D-Feta.webp",
    alt: "Whipped feta with edible flowers and char-grilled bread at a Mediterranean restaurant in Alpharetta",
    paras: [
      "Mezze is the heart of any good Mediterranean meal. A run of small plates you order together and share, and at Siena it is where the table comes alive.",
      "Start with Hummus della Casa, chickpea purée with tahini and lemon, finished with crispy chickpeas. Add the Lavender Whipped Feta, whipped with honey and lavender and served with char-grilled focaccia, for sweet and salty at once. Then the Cavolfiore Croccante, house-battered crispy cauliflower with sweet chili aioli.",
      "Order a few, set them in the middle, and let everyone reach in. Nobody is stuck with one choice, and you taste a little of everything.",
    ],
  },
  {
    kind: "gallery",
    bg: "green",
    icon: "/assets/icon_menu.svg",
    heading: "Dishes Worth Ordering",
    script: "on a first visit",
    intro:
      "Some plates keep people coming back. Order one pasta for the table alongside your mezze and you get both halves of the menu in one meal. <a href=\"/menus\">See the full menu</a>.",
    items: [
      {
        image: "/assets/menu/chicken-tawook.webp",
        alt: "Chicken tawook with basmati rice pilaf at Siena, a Mediterranean restaurant in Alpharetta",
        title: "CHICKEN TAWOOK",
        sub: "48-hour marinade, open flame",
        href: "/menus?tab=main-menu",
      },
      {
        image: "/assets/Siena_20.03.26-D-LambChop-01.webp",
        alt: "Lamb chops on the Mediterranean menu at Siena in Alpharetta",
        title: "LAMB CHOPS",
        sub: "Tender, meaty, cooked with care",
        href: "/menus?tab=main-menu",
      },
      {
        image: "/assets/menu/braised-lamb-shank.webp",
        alt: "Braised lamb shank with crispy onions at Siena Restaurant & Bar, Alpharetta",
        title: "LAMB SHANK",
        sub: "Braised four hours, potato purée",
        href: "/menus?tab=main-menu",
      },
    ],
  },
  {
    kind: "split",
    bg: "black",
    heading: "Eating Lighter, Without Losing Flavour",
    script: "and plenty meat-free",
    image: "/assets/menu/watermelon-feta-salad.webp",
    alt: "Watermelon and feta salad with arugula and pistachios at Siena in Alpharetta",
    paras: [
      "Mediterranean food has a reputation for being good for you, and there is truth in it. Vegetables, olive oil, grilled proteins, fresh herbs.",
      "The watermelon and feta salad is arugula, watermelon, feta and pistachios with a balsamic glaze, light and bright. The Mediterranean garden salad brings cucumber, cherry tomatoes, Kalamata olives and feta. Baba ghanoush, fire-roasted eggplant with tahini and lemon, is the other dip worth ordering.",
      "Between the dips, the whipped feta, the cauliflower, the salads and the two pastas, you can build a full meal without touching the meat menu. And because everything is shareable, mixed tables eat side by side with no fuss.",
    ],
  },
  {
    kind: "split",
    bg: "green",
    flip: true,
    heading: "The Room, the Bar, Friday Music",
    script: "upscale, not stiff",
    image: "/assets/Siena_20.03.26-A-04.webp",
    alt: "The bar at Siena Restaurant & Bar in Alpharetta, with orange leather stools and a stocked back bar",
    paras: [
      "Siena is upscale but comfortable. The room is warm, with bold lighting that makes it feel special without being stiff. Nice shirt or date-night outfit, you fit either way.",
      "The bar is a real draw. Try the Italian Job or the espresso martini. There is a happy hour menu from 4 to 7pm for starting the evening. On Friday live music plays from 7 to 10pm, so dinner comes with a soundtrack. <a href=\"/live-music-fridays\">See what Friday looks like</a>.",
      "The kitchen opens at 4pm through the week and runs to midnight on Friday and Saturday, which makes it work for both an early dinner and a late one. Saturday morning has its own <a href=\"/brunch-alpharetta\">brunch menu</a>, and there is <a href=\"/happy-hour-alpharetta\">happy hour</a> earlier in the evening.",
      "Coming from further out? Siena is also the nearest <a href=\"/mediterranean-restaurant-near-roswell-ga\">Mediterranean restaurant near Roswell</a>, a short drive down the road.",
    ],
  },
  {
    kind: "cards",
    bg: "black",
    icon: "/assets/iconoestrellas.svg",
    heading: "Who It Suits",
    script: "find your night",
    cards: [
      {
        title: "Date Night",
        desc: "The lighting, the music and the shareable plates make it easy to relax and talk. <a href=\"/date-night-alpharetta\">More on date night</a>.",
      },
      {
        title: "Groups",
        desc: "Sharing plates were made for a full table. Order a spread and let everyone reach in. Near Avalon, so it works before or after a show.",
      },
      {
        title: "Celebrations",
        desc: "Birthdays, anniversaries and good news all fit. Siena also hosts <a href=\"/private-dining-alpharetta\">private dining</a>, and there is a <a href=\"/birthday-dinner-alpharetta\">birthday dinner</a> page if that is the occasion.",
      },
    ],
  },
];

export const FAQS: Faq[] = [
  {
    q: "What kind of Mediterranean food does Siena serve?",
    a: "Mezze and sharing plates alongside grilled skewers. Hummus della Casa, baba ghanoush, lavender whipped feta, crispy cauliflower, chicken tawook, lamb chops, braised lamb shank and the watermelon and feta salad. Italian dishes and house-made pasta sit on the same menu.",
  },
  {
    q: "Is there much for vegetarians?",
    a: "Yes. Between the hummus, baba ghanoush, whipped feta, crispy cauliflower, the salads and the pastas you can build a full meal without meat. Because everything is shareable, mixed groups eat together easily.",
  },
  {
    q: "Do I need to book?",
    a: "Booking ahead is sensible, especially Friday and Saturday evenings and for Saturday brunch. Walk-ins are welcome at the bar when there is room. <a href=\"/reservations\">Book a table here</a>.",
  },
  {
    q: "Where is Siena located in Alpharetta?",
    a: "124 Devore Rd, Alpharetta, GA 30009, in downtown Alpharetta near Avalon and the Ameris Bank Amphitheatre. A short drive from Roswell, Johns Creek, Milton and Cumming.",
  },
  {
    q: "What are the opening hours?",
    a: "Closed Monday. Tuesday to Thursday 4pm to 10pm, Friday and Saturday 4pm to midnight, Sunday 4pm to 10pm, plus a separate brunch menu on Saturday morning from 10am.",
  },
  {
    q: "Is there live music?",
    a: "Live music plays on <a href=\"/live-music-fridays\">Friday nights</a> from 7 to 10pm, with a different act each week, alongside the full cocktail, wine and spirits list.",
  },
];

/** Quotes taken verbatim from public Yelp reviews, names as the reviewers display them. */
export const REVIEWS: Reviews = {
  quotes: [
    {
      text: "Food was great I had the Chicken tawook and rice it tasted very fresh and lite",
      author: "Eline P.",
    },
    { text: "The lamb chops is very flavorful as well as humus n pita bread.", author: "Big O." },
    {
      text: "The combination of incredible Mediterranean cuisine, attentive service, and live music creates a unique atmosphere",
      author: "Chelsea G.",
    },
  ],
};

export const PRACTICAL = [
  "Step-free entrance and accessible parking near the door",
  "Minutes from Avalon and the Ameris Bank Amphitheatre",
  "Dinner and bar service, plus Saturday brunch",
];

export const CLOSING = {
  heading: "Come and See Us",
  script: "the table is set",
  paras: [
    "Ready for a Mediterranean restaurant in Alpharetta where the plates go in the middle and the night runs long? Siena is a few minutes from Avalon.",
    "<a href=\"/reservations\">Book your table</a> and come share a spread of mezze, skewers and something from the bar.",
  ],
};
