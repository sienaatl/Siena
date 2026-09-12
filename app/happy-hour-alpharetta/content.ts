import type { Block, Faq, Reviews } from "@/components/LandingPage";

/**
 * Copy and layout for /happy-hour-alpharetta.
 *
 * Dishes, drinks and prices come from the Happy Hour and Libations tabs in
 * lib/site-data.json. The 4 to 7pm window is the one published on the home page.
 * Days are not stated anywhere on the site, so the copy does not claim any.
 */

export const H1 = "Happy Hour in Alpharetta";
export const H1_SCRIPT = "four until seven";

export const MARQUEE = [
  "Four Until Seven",
  "Plates From Eight Dollars",
  "Classic Cocktails Nine",
  "Alpharetta, Georgia",
];

export const INTRO = {
  icon: "/assets/icon_menus.svg",
  heading: "Drinks and Small Plates From Four",
  script: "before the evening turns",
  paras: [
    "Happy hour at Siena Restaurant &amp; Bar runs from 4 to 7pm at 124 Devore Rd in downtown Alpharetta, five minutes from Avalon. It has its own menu: seven starters, three salads, a pasta, two skewers and classic cocktails.",
    "The pricing is the point. Dips start at eight dollars, calamari is twelve, and a classic cocktail is nine when the same drink is sixteen or seventeen on the regular list. For anyone leaving an office park at five, that is the cheapest way into a proper kitchen in this town.",
  ],
  cta: { label: "SEE THE HAPPY HOUR MENU", href: "/menus?tab=happy-hour" },
};

export const BLOCKS: Block[] = [
  {
    kind: "gallery",
    bg: "green",
    icon: "/assets/icono_123.svg",
    heading: "What Four to Seven Gets You",
    script: "the short list",
    intro:
      "Thirteen plates and a drinks list, priced for the early evening. <a href=\"/menus?tab=happy-hour\">See the full happy hour menu</a>.",
    items: [
      {
        image: "/assets/Siena_20.03.26-LS-SienaMargarita-01.webp",
        alt: "A bartender finishing a cocktail at the bar at Siena in Alpharetta",
        title: "CLASSIC COCKTAILS",
        sub: "Nine dollars, four to seven",
        href: "/menus?tab=happy-hour",
      },
      {
        image: "/assets/menu/hummus-happy-hour.webp",
        alt: "Hummus with olive oil and grilled pita on a board, a happy hour plate in Alpharetta",
        title: "HUMMUS",
        sub: "Eight dollars, warm pita",
        href: "/menus?tab=happy-hour",
      },
      {
        image: "/assets/menu/crispy-cauliflower-happy-hour.webp",
        alt: "Crispy fried cauliflower with tahini aioli, served at happy hour in Alpharetta",
        title: "CRISPY CAULIFLOWER",
        sub: "Ten dollars, tahini aioli",
        href: "/menus?tab=happy-hour",
      },
      {
        image: "/assets/menu/siena-fries-happy-hour.webp",
        alt: "Siena fries with herbs in a bowl next to a cold beer at happy hour",
        title: "SIENA FRIES",
        sub: "Eight dollars, house seasoning",
        href: "/menus?tab=happy-hour",
      },
      {
        image: "/assets/menu/calamari-fritti-happy-hour.webp",
        alt: "Crispy calamari with peppers and dipping sauce, twelve dollars at happy hour",
        title: "CALAMARI FRITTI",
        sub: "Twelve dollars, lemon and herbs",
        href: "/menus?tab=happy-hour",
      },
    ],
  },
  {
    kind: "split",
    bg: "black",
    heading: "Nine Dollar Cocktails",
    script: "made properly",
    image: "/assets/Siena_20.03.26-PS-SienaMargarita-01.webp",
    alt: "A Siena Margarita with a dried citrus wheel on a pale table in Alpharetta",
    paras: [
      "Classic cocktails are nine dollars during happy hour. On the regular list the same classics run sixteen to seventeen, so the Siena Margarita, the Old Fashioned and the espresso martini all sit well under their usual price.",
      "These are not watered down versions. Same bar, same bartender, same build. The margarita is tequila blanco with creme de cassis, orange liqueur, agave and lime.",
      "The menu also says to ask your server about featured happy hour cocktails, wine and beer, which change. Beer on the regular list runs five to six dollars. <a href=\"/cocktail-bar-alpharetta\">More on the bar</a>.",
    ],
  },
  {
    kind: "split",
    bg: "green",
    flip: true,
    heading: "Dips, Bread and Things to Pick At",
    script: "eight and nine dollars",
    image: "/assets/menu/whipped-feta-happy-hour.webp",
    alt: "Whipped feta with grilled bread on a wooden board at Siena in Alpharetta",
    paras: [
      "Four dips run the cheap end of the menu. Hummus and baba ganoush at eight dollars, moussaka and whipped feta at nine. Each comes with warm pita, and two of them between four people is plenty to start.",
      "Then the fried end: Siena fries at eight, crispy cauliflower with tahini aioli at ten, and calamari fritti at twelve. The calamari is seventeen on the main menu, so this is the version to order before seven.",
      "Everything here is meant for the middle of the table. Nothing arrives as one person's dinner.",
    ],
  },
  {
    kind: "split",
    bg: "black",
    heading: "If You Want a Real Meal",
    script: "salads, pasta, skewers",
    image: "/assets/menu/rigatoni-alla-vodka-happy-hour.webp",
    alt: "Rigatoni alla vodka topped with burrata, on the happy hour menu in Alpharetta",
    paras: [
      "Three salads at nine and ten dollars: classic Caesar, Mediterranean salad, and watermelon and feta with balsamic.",
      "Heavier than that, rigatoni alla vodka at sixteen, a grilled shrimp kabob skewer at twelve, and a chicken tawook skewer at seventeen. Any of those plus a dip is a full dinner for under thirty dollars.",
      "Prices do not include tax, gratuity or fees, and the kitchen can change the list. <a href=\"/menus?tab=happy-hour\">The menu page is always current</a>.",
    ],
  },
  {
    kind: "cards",
    bg: "green",
    icon: "/assets/iconoestrellas.svg",
    heading: "Worth Knowing",
    script: "before you turn up",
    cards: [
      {
        title: "Four to Seven",
        desc: "Doors open at 4pm and happy hour runs to 7pm. Siena is closed on Monday, so check the day if you are planning ahead.",
      },
      {
        title: "Bar or Table",
        desc: "The bar takes walk-ins when there is room. For four or more, <a href=\"/reservations\">book a table</a> so you are not standing.",
      },
      {
        title: "A Shorter List",
        desc: "Happy hour is its own menu, not the full one. The <a href=\"/dinner-alpharetta\">dinner menu</a> starts at 4pm too if you want lamb, steak or branzino.",
      },
    ],
  },
  {
    kind: "split",
    bg: "black",
    flip: true,
    heading: "After Seven",
    script: "the room keeps going",
    image: "/assets/Siena_20.03.26-PS-07.webp",
    alt: "Grilled steak with potatoes and a cocktail on a marble table at Siena, Alpharetta",
    paras: [
      "At seven the full menu takes over: lamb chops, filet mignon kabobs, branzino, salmon, house made pasta. Friday and Saturday the kitchen runs to midnight, which is later than most of Alpharetta.",
      "Plenty of tables start at the bar for happy hour and move across for dinner. That is the easiest version of an evening here: cheap plates first, proper dinner after, no rush between them.",
      "Friday nights also carry <a href=\"/live-music-fridays\">live music</a>, and the room fills earlier because of it.",
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
      "Siena is at 124 Devore Rd in downtown Alpharetta, a short drive from Avalon and the office parks along Old Milton. Parking is straightforward, the entrance is step-free, and there is accessible parking near the door.",
      "If you are working out where to go rather than what to order: <a href=\"/downtown-alpharetta-restaurants\">downtown Alpharetta</a>, <a href=\"/restaurants-near-avalon-alpharetta\">near Avalon</a>, or the <a href=\"/date-night-alpharetta\">date night page</a> if it is that kind of evening.",
    ],
  },
];

export const FAQS: Faq[] = [
  {
    q: "What time is happy hour at Siena?",
    a: "From 4 to 7pm. The doors open at 4pm and the happy hour menu runs for those three hours. Siena is closed on Monday.",
  },
  {
    q: "What is on the happy hour menu?",
    a: "Seven starters including hummus, baba ganoush, moussaka, whipped feta, crispy cauliflower, Siena fries and calamari fritti. Three salads, rigatoni alla vodka, a chicken tawook skewer and a shrimp kabob skewer. Classic cocktails are on the drinks list. <a href=\"/menus?tab=happy-hour\">See the menu</a>.",
  },
  {
    q: "How much are happy hour cocktails?",
    a: "Classic cocktails are nine dollars during happy hour, against sixteen to seventeen on the regular list. Ask your server about featured happy hour wine and beer, which change.",
  },
  {
    q: "How much is the food?",
    a: "Dips start at eight dollars, crispy cauliflower is ten, calamari is twelve, salads are nine and ten, and rigatoni alla vodka is sixteen. Prices do not include tax, gratuity or fees.",
  },
  {
    q: "Do I need a reservation for happy hour?",
    a: "Not for two at the bar, if there is room. For a group of four or more it is worth booking. <a href=\"/reservations\">Book a table</a>.",
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
  "Happy hour from 4 to 7pm, closed Monday",
  "Plates from eight dollars, classic cocktails nine",
  "Downtown Alpharetta, five minutes from Avalon",
];

export const CLOSING = {
  heading: "Come at Four",
  script: "stay for dinner",
  paras: [
    "Three hours of cheaper plates and nine dollar classics, in a room that does a proper dinner after. Doors at 4pm, happy hour until 7pm.",
    "<a href=\"/reservations\">Book a table</a>, or take your chances at the bar.",
  ],
};
