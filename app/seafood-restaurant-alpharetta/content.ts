import type { Block, Faq, Reviews } from "@/components/LandingPage";

/**
 * Copy and layout for /seafood-restaurant-alpharetta.
 *
 * Every dish named here appears in lib/site-data.json: Mediterranean Branzino,
 * Salmon Limone, Polpo alla Griglia and Calamari Fritti Siena on the main menu,
 * Octopus Carpaccio, Shrimp Al Ajillo Skillet and Spanish Shrimp Bruschetta at
 * Saturday brunch, Calamari Fritti and Shrimp Kabob Skewer at happy hour.
 */

export const H1 = "Seafood in Alpharetta";
export const H1_SCRIPT = "the mediterranean side";

export const MARQUEE = [
  "Branzino and Salmon",
  "Octopus Two Ways",
  "Calamari to Start",
  "Alpharetta, Georgia",
];

export const INTRO = {
  icon: "/assets/icon_menus.svg",
  heading: "A Mediterranean Kitchen With a Seafood Side",
  script: "cooked, not chilled",
  paras: [
    "Siena Restaurant &amp; Bar sits at 124 Devore Rd in downtown Alpharetta, five minutes from Avalon, and seafood runs through the menu rather than sitting in one corner of it. Branzino and salmon at dinner, octopus grilled over flame or sliced cold at brunch, calamari to start and shrimp on the shorter lists.",
    "It is worth being straight about what this is. Siena is not a fish house. There is no raw bar, no oysters, no crab legs. What there is: a short run of seafood plates cooked the way the Mediterranean coast cooks them, with lemon, olive oil, herbs and flame, and not much else getting in the way.",
  ],
  cta: { label: "SEE THE MENU", href: "/menus" },
};

export const BLOCKS: Block[] = [
  {
    kind: "gallery",
    bg: "green",
    icon: "/assets/icono_123.svg",
    heading: "What Comes From the Sea",
    script: "three at dinner",
    intro:
      "These three sit on the dinner menu every night the kitchen is open. Two more turn up at Saturday brunch and at happy hour. <a href=\"/menus\">See the full menu</a>.",
    items: [
      {
        image: "/assets/menu/salmon-limone.webp",
        alt: "Salmon Limone, pan-seared salmon with capers and broccolini at Siena in Alpharetta",
        title: "SALMON",
        sub: "Lemon butter, capers, broccolini",
        href: "/menus",
      },
      {
        image: "/assets/menu/polpo-alla-griglia.webp",
        alt: "Polpo alla Griglia, flame-grilled octopus over potato puree with romesco sauce",
        title: "OCTOPUS",
        sub: "Flame-grilled, potato puree, romesco",
        href: "/menus",
      },
      {
        image: "/assets/menu/calamari-fritti-siena.webp",
        alt: "Calamari Fritti Siena, fried calamari with pickled peppers and sweet chili aioli",
        title: "CALAMARI",
        sub: "Garlic butter, pickled peppers, aioli",
        href: "/menus",
      },
    ],
  },
  {
    kind: "split",
    bg: "black",
    heading: "Branzino, Whole Fillet",
    script: "the one to order",
    image: "/assets/menu/mediterranean-branzino-v2.webp",
    alt: "Mediterranean Branzino fillet over roasted red pepper sauce with potatoes and greens",
    paras: [
      "Mediterranean Branzino is a marinated fillet served over roasted red pepper sauce with seasonal potatoes and market greens. Branzino is a European sea bass, mild and clean, and it is the plate to order if you want fish that tastes of fish rather than of sauce.",
      "The other fillet is Salmon Limone: pan-seared, finished with lemon butter, shallots, garlic, mushrooms and capers, served over broccolini. Richer than the branzino, and the one most tables pick when they want something familiar done properly.",
      "Both are cooked to order, so they arrive when they are ready rather than when the rest of the table does. That is usually a good sign.",
    ],
  },
  {
    kind: "split",
    bg: "green",
    flip: true,
    heading: "Octopus, Two Ways",
    script: "hot and cold",
    image: "/assets/Siena_20.03.26-LS-OctopusCarpaccio.webp",
    alt: "Octopus carpaccio sliced thin with olives and herbs on a plate at Siena, Alpharetta",
    paras: [
      "Polpo alla Griglia is slow-braised octopus finished over an open flame, served over potato puree with romesco, charred lemon and seasonal greens. The braise is what makes octopus tender and the flame at the end is what makes it worth ordering.",
      "At Saturday brunch the same ingredient turns up cold. Octopus Carpaccio is sliced thin with fennel slaw, citrus oil, fresh herbs and Castelvetrano olives, and it is the one raw-looking plate on any Siena menu.",
      "Between them they cover most of what anyone wants from octopus. <a href=\"/brunch-alpharetta\">More on Saturday brunch</a>.",
    ],
  },
  {
    kind: "split",
    bg: "black",
    heading: "Calamari, Shrimp and the Shorter Lists",
    script: "before the mains",
    image: "/assets/menu/calamari-fritti-happy-hour.webp",
    alt: "Fried calamari with pickled peppers and dipping sauce, served at happy hour in Alpharetta",
    paras: [
      "Calamari Fritti Siena is rings and tentacles in a house batter, fried, then finished in roasted garlic butter with mixed pickled peppers and served with sweet chili aioli and charred lemon. Most tables order it before they have decided on anything else.",
      "Happy hour carries a shorter calamari with lemon, herbs and a dipping sauce, and a grilled shrimp kabob skewer next to it. <a href=\"/happy-hour-alpharetta\">See what happy hour covers</a>.",
      "Shrimp shows up at Saturday brunch too: a shrimp al ajillo skillet with garlic, white wine and chili flakes served with grilled bread, and Spanish shrimp bruschetta with romesco spread, lemon zest and chili oil.",
    ],
  },
  {
    kind: "split",
    bg: "green",
    flip: true,
    heading: "A Room Worth Sitting In",
    script: "dark and quiet",
    image: "/assets/hero9.webp",
    alt: "Octopus carpaccio and a glass of white wine on a marble table at Siena in Alpharetta",
    paras: [
      "Fish is worth eating somewhere quiet enough to taste it. The dining room is low-lit and built for staying a while, with a bar at the front and booths down the side, and it does not push tables out the door.",
      "The kitchen opens at 4pm Tuesday through Sunday and closes on Monday. Friday and Saturday it runs to midnight, which is later than most of Alpharetta.",
      "There is a full bar if you want something to drink with the fish. <a href=\"/cocktail-bar-alpharetta\">More on the bar</a>.",
    ],
  },
  {
    kind: "cards",
    bg: "black",
    icon: "/assets/iconoestrellas.svg",
    heading: "Worth Knowing",
    script: "before you book",
    cards: [
      {
        title: "Book Ahead",
        desc: "Weekends fill, and the fish plates are cooked to order. <a href=\"/reservations\">Book a table</a> rather than chancing it.",
      },
      {
        title: "No Raw Bar",
        desc: "No oysters, no sushi, no shellfish tower. Every seafood plate is cooked, apart from the octopus carpaccio at Saturday brunch.",
      },
      {
        title: "Not Only Fish",
        desc: "If half the table does not eat seafood, the rest of the menu runs to lamb, steak, chicken and pasta. <a href=\"/dinner-alpharetta\">See the dinner menu</a>.",
      },
    ],
  },
  {
    kind: "split",
    bg: "green",
    heading: "Five Minutes From Avalon",
    script: "downtown alpharetta",
    image: "/assets/hero11.webp",
    alt: "Siena Restaurant & Bar on Devore Road in downtown Alpharetta, Georgia",
    paras: [
      "Siena is at 124 Devore Rd, in downtown Alpharetta and a short drive from Avalon. Parking is straightforward, the entrance is step-free, and there is accessible parking near the door.",
      "If you are deciding where to eat rather than what, the wider pages may help: <a href=\"/restaurants-near-avalon-alpharetta\">restaurants near Avalon</a>, <a href=\"/downtown-alpharetta-restaurants\">downtown Alpharetta</a>, and the <a href=\"/mediterranean-restaurant-alpharetta\">Mediterranean menu</a> the seafood belongs to.",
    ],
  },
];

export const FAQS: Faq[] = [
  {
    q: "Does Siena serve seafood?",
    a: "Yes. Mediterranean branzino, salmon limone, flame-grilled octopus and calamari fritti sit on the dinner menu. Saturday brunch adds octopus carpaccio, a shrimp al ajillo skillet and Spanish shrimp bruschetta, and happy hour carries calamari and a shrimp kabob skewer.",
  },
  {
    q: "Is Siena a seafood restaurant?",
    a: "No. Siena is a Mediterranean and Italian restaurant with a seafood section, not a fish house. If you want a whole menu of fish, this is not it. If you want a few seafood plates cooked properly as part of a bigger menu, it is.",
  },
  {
    q: "Do you have oysters or a raw bar?",
    a: "No. There are no oysters, no sushi and no shellfish platters. The only cold seafood plate is the octopus carpaccio at Saturday brunch.",
  },
  {
    q: "What is the best seafood dish to order?",
    a: "The Mediterranean branzino if you want fish, the polpo alla griglia if you want octopus, and the calamari fritti if you are starting a table off. <a href=\"/menus\">See the full menu</a>.",
  },
  {
    q: "When is the kitchen open?",
    a: "Dinner from 4pm Tuesday to Sunday, until 10pm most nights and until midnight on Friday and Saturday. Closed Monday. Brunch runs Saturday from 10am.",
  },
  {
    q: "Where is Siena?",
    a: "124 Devore Rd, Alpharetta, GA 30009, in downtown Alpharetta and five minutes from Avalon.",
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
      text: "The lamb chops is very flavorful as well as humus n pita bread.",
      author: "Big O.",
    },
    {
      text: "Food was great I had the Chicken tawook and rice it tasted very fresh and lite",
      author: "Eline P.",
    },
  ],
};

export const PRACTICAL = [
  "Branzino, salmon, octopus and calamari on the dinner menu",
  "Dinner from 4pm Tuesday to Sunday, closed Monday",
  "Five minutes from Avalon, in downtown Alpharetta",
];

export const CLOSING = {
  heading: "Book a Table",
  script: "the fish is cooked to order",
  paras: [
    "A short seafood list done properly, in a dark room five minutes from Avalon. Dinner from 4pm, Tuesday through Sunday.",
    "<a href=\"/reservations\">Book your table</a> and start with the calamari.",
  ],
};
