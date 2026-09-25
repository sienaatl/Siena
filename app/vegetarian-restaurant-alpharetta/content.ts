import type { Block, Faq, Reviews } from "@/components/LandingPage";

/**
 * Copy and layout for /vegetarian-restaurant-alpharetta.
 *
 * Every dish named here has no meat or fish in its name or description in
 * lib/site-data.json. The copy says vegetarian, never vegan or gluten free, because
 * those menu fields are not filled in and preparation has not been confirmed.
 */

export const H1 = "Vegetarian Options in Alpharetta";
export const H1_SCRIPT = "a full meal, no meat";

export const MARQUEE = [
  "Mezze and Vegetable Plates",
  "House-Made Pasta",
  "Built for Sharing",
  "Alpharetta, Georgia",
];

export const INTRO = {
  icon: "/assets/icon_aboutus.svg",
  heading: "More Than a Side Salad",
  script: "vegetarian at siena",
  paras: [
    "Most restaurants treat vegetarians as an afterthought, with one pasta and a salad tacked on the end of the menu. Mediterranean cooking does not have that problem, because half of it was vegetable-led to begin with.",
    "Siena Restaurant &amp; Bar is at 124 Devore Rd in downtown Alpharetta, and between the mezze, the salads, the pasta and the sides you can build a full meal without touching the meat menu.",
  ],
  cta: { label: "SEE THE MENU", href: "/menus" },
};

export const BLOCKS: Block[] = [
  {
    kind: "split",
    bg: "green",
    heading: "Where to Start",
    script: "the mezze",
    image: "/assets/Siena_20.03.26-D-Feta.webp",
    alt: "Whipped feta with char-grilled bread, a vegetarian starter at a restaurant in Alpharetta",
    paras: [
      "Hummus della Casa is chickpea purée with tahini and lemon, and it is what most tables open with. Lavender Whipped Feta is whipped feta, cream cheese and yogurt, sweet and salty at once.",
      "Cavolfiore Croccante is house-battered crispy cauliflower, and it converts people who claim not to like cauliflower. Add warm pita and you already have a table worth sitting at.",
      "All of it is designed to be passed around, which means a vegetarian at a mixed table is eating the same food as everyone else rather than a separate plate.",
    ],
  },
  {
    kind: "gallery",
    bg: "black",
    icon: "/assets/icon_menu.svg",
    heading: "A Meal Without Meat",
    script: "three courses of it",
    intro:
      "Every dish here is meat-free. Order across the three and you have a full evening rather than a compromise. <a href=\"/menus\">See the full menu</a>.",
    items: [
      {
        image: "/assets/menu/watermelon-feta-salad.webp",
        alt: "Watermelon and feta salad with arugula and pistachios, a vegetarian plate in Alpharetta",
        title: "SALADS",
        sub: "Watermelon and feta, Mediterranean garden",
        href: "/menus?tab=main-menu",
      },
      {
        image: "/assets/menu/bucatini-al-pepe-nero.webp",
        alt: "Bucatini al pepe nero with burrata, a meat-free pasta in Alpharetta",
        title: "PASTA",
        sub: "Rigatoni alla vodka, bucatini al pepe nero",
        href: "/italian-restaurant-alpharetta",
      },
      {
        image: "/assets/menu/cavolfiore-croccante.webp",
        alt: "Crispy battered cauliflower with sweet chili aioli, a meat-free plate in Alpharetta",
        title: "MORE",
        sub: "Crispy cauliflower, broccolini, pita",
        href: "/mediterranean-restaurant-alpharetta",
      },
    ],
  },
  {
    kind: "split",
    bg: "green",
    flip: true,
    heading: "Brunch Works Too",
    script: "saturday morning",
    image: "/assets/Siena_20.03.26-LS-LimoncelloRicottaPancakes-02.webp",
    alt: "Limoncello ricotta pancakes with berries, a meat-free brunch dish in Alpharetta",
    paras: [
      "Saturday runs a separate brunch menu, and a good part of it is meat-free. The Truffle and Pecorino Frittata with caramelised onion. The Mediterranean Omelette with tomato, red onion, spinach, olives and feta. Wild Mushroom and Pecorino Toast.",
      "On the sweeter side there are Limoncello Ricotta Pancakes and the Spiced Date Waffle, and a Roasted Cauliflower and Olive Salad if you want something lighter.",
      "<a href=\"/brunch-alpharetta\">More on brunch</a>, which runs from 10am on Saturday.",
    ],
  },
  {
    kind: "cards",
    bg: "black",
    icon: "/assets/iconoestrellas.svg",
    heading: "Worth Asking About",
    script: "tell the team",
    intro:
      "Some dishes can be adjusted and some cannot, so it is always worth saying what you need when you order rather than guessing from the menu.",
    cards: [
      {
        title: "Say So When You Book",
        desc: "Mentioning it on the <a href=\"/reservations\">reservation</a> gives the kitchen a heads-up, which matters more on a busy Friday than a quiet Tuesday.",
      },
      {
        title: "Vegan and Gluten Free",
        desc: "Ask the team directly. Several dishes look like they qualify, but preparation varies and we would rather you check than assume.",
      },
      {
        title: "Mixed Tables",
        desc: "The sharing format means vegetarians and meat eaters order from one spread together. Nobody gets a separate meal.",
      },
    ],
  },
  {
    kind: "split",
    bg: "green",
    heading: "The Room",
    script: "worth the evening",
    image: "/assets/hero3.webp",
    alt: "Teal booths and the lit Siena sign in the dining room at Siena in Alpharetta",
    paras: [
      "Siena opened in December 2025 and is women-led. Warm room, bold lighting, upscale without being stiff. Live music plays on Friday nights from 7 to 10pm.",
      "It is dinner and bar service from 4pm, with a <a href=\"/happy-hour-alpharetta\">happy hour menu</a> from 4 to 7pm where several of the small plates are meat-free.",
    ],
  },
];

export const FAQS: Faq[] = [
  {
    q: "Is there enough for a vegetarian to eat properly?",
    a: "Yes. Hummus della Casa, Lavender Whipped Feta, Cavolfiore Croccante, the Watermelon and Feta Salad, the Mediterranean Garden Salad, Rigatoni alla Vodka, Bucatini al Pepe Nero, broccolini, roasted potatoes and warm pita are all meat-free, which is a full meal across several courses.",
  },
  {
    q: "Do you have vegan dishes?",
    a: "Several dishes look like they would qualify, but preparation varies and we would rather you asked the team when you order than relied on a guess from the menu.",
  },
  {
    q: "What about gluten free?",
    a: "Ask the team directly. The kitchen can talk you through what is possible on the night.",
  },
  {
    q: "Is brunch vegetarian friendly?",
    a: "Yes. The Truffle and Pecorino Frittata, Mediterranean Omelette, Wild Mushroom and Pecorino Toast, Roasted Cauliflower and Olive Salad, Limoncello Ricotta Pancakes and the Spiced Date Waffle are all meat-free. <a href=\"/brunch-alpharetta\">More on brunch</a>.",
  },
  {
    q: "Will I be stuck eating separately from my table?",
    a: "No. Everything is tapas-style and shared, so a mixed table orders one spread and everyone eats from it.",
  },
  {
    q: "Where are you and what are the hours?",
    a: "124 Devore Rd, Alpharetta, GA 30009. Closed Monday. Tuesday to Thursday 4pm to 10pm, Friday and Saturday 4pm to midnight, Sunday 4pm to 10pm, plus Saturday brunch from 10am.",
  },
];

/** Quotes taken verbatim from public Yelp reviews, names as the reviewers display them. */
export const REVIEWS: Reviews = {
  quotes: [
    { text: "The lamb chops is very flavorful as well as humus n pita bread.", author: "Big O." },
    {
      text: "The combination of incredible Mediterranean cuisine, attentive service, and live music creates a unique atmosphere",
      author: "Chelsea G.",
    },
    {
      text: "Food was great I had the Chicken tawook and rice it tasted very fresh and lite",
      author: "Eline P.",
    },
  ],
};

export const PRACTICAL = [
  "Step-free entrance and accessible parking near the door",
  "Minutes from Avalon and the Ameris Bank Amphitheatre",
  "Tell the team about any dietary needs when you book",
];

export const CLOSING = {
  heading: "Come and Eat Properly",
  script: "no compromise plate",
  paras: [
    "A vegetarian meal here is a spread of mezze, salads, pasta and vegetables, not one dish grudgingly added to the end of a menu.",
    "<a href=\"/reservations\">Book your table</a> and start with the hummus and the cauliflower.",
  ],
};
