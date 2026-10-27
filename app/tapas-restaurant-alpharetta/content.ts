import type { Block, Faq, Reviews } from "@/components/LandingPage";

/**
 * Copy and layout for /tapas-restaurant-alpharetta.
 *
 * Explains the sharing format rather than re-listing dishes, to stay distinct from
 * the Italian and Mediterranean pages. Dishes named follow lib/site-data.json.
 */

export const H1 = "Tapas in Alpharetta";
export const H1_SCRIPT = "small plates at Siena";

export const MARQUEE = [
  "Tapas-Style Sharing Plates",
  "Small Plates and Entrées",
  "Italian and Mediterranean",
  "Alpharetta, Georgia",
];

export const INTRO = {
  icon: "/assets/icon_menus.svg",
  heading: "Small Plates for the Table",
  script: "share what you like",
  paras: [
    "Looking for tapas in Alpharetta? Siena Restaurant &amp; Bar offers Italian and Mediterranean small plates to share. Guests can also choose pasta and entrées from the main menu.",
    "The menu runs Italian and Mediterranean at the same time, so a single table can have house-made pasta, hummus, grilled skewers and crispy cauliflower going at once. It is at 124 Devore Rd in downtown Alpharetta.",
  ],
  cta: { label: "SEE THE MENU", href: "/menus" },
};

export const BLOCKS: Block[] = [
  {
    kind: "split",
    bg: "green",
    heading: "How to Order",
    script: "start with a few plates",
    image: "/assets/Siena_20.03.26-D-Feta.webp",
    alt: "Whipped feta with char-grilled bread, a plate to share at a restaurant in Alpharetta",
    paras: [
      "Start with a few small plates for the table. Ask your server about portions and the dishes available that evening.",
      "Hummus, whipped feta and crispy cauliflower are options to share. Add pasta or a grilled dish if the group wants a larger meal.",
      "Choose the number of dishes to suit your appetite and budget. Current prices are on the menu.",
    ],
  },
  {
    kind: "gallery",
    bg: "black",
    icon: "/assets/icon_menu.svg",
    heading: "A Table That Works",
    script: "a suggested spread",
    intro:
      "If you want a running order rather than a menu, this is the one that rarely disappoints. Add or swap as you go. <a href=\"/menus\">See the full menu</a>.",
    items: [
      {
        image: "/assets/menu/hummus-della-casa.webp",
        alt: "Hummus della Casa with grilled pita, a starter to share at a tapas restaurant in Alpharetta",
        title: "START",
        sub: "Hummus, whipped feta, watermelon and feta",
        href: "/mediterranean-restaurant-alpharetta",
      },
      {
        image: "/assets/menu/cavolfiore-croccante.webp",
        alt: "Crispy cauliflower with sweet chili aioli, a shared plate at a tapas restaurant in Alpharetta",
        title: "MIDDLE",
        sub: "Calamari, crispy cauliflower, a pasta",
        href: "/italian-restaurant-alpharetta",
      },
      {
        image: "/assets/Siena_20.03.26-D-LambChop-02.webp",
        alt: "Grilled lamb chops shared at the table in Alpharetta",
        title: "THEN",
        sub: "Lamb chops, chicken tawook, a skewer",
        href: "/menus?tab=main-menu",
      },
    ],
  },
  {
    kind: "split",
    bg: "green",
    flip: true,
    heading: "Why Sharing Suits Groups",
    script: "nobody loses",
    image: "/assets/hero5.webp",
    alt: "A table covered in shared plates from the brunch menu at Siena in Alpharetta",
    paras: [
      "The argument about where to eat is usually an argument about cuisine. One person wants pasta, another wants something lighter, someone else does not eat meat.",
      "Sharing plates end that. The menu covers Italian and Mediterranean at once, there is plenty without meat, and nobody is stuck watching someone else eat the better dish.",
      "It also makes the evening slower in a good way. Food keeps arriving, conversation keeps going, and a quick dinner turns into three hours. Larger groups can also book <a href=\"/private-dining-alpharetta\">private dining</a>.",
    ],
  },
  {
    kind: "cards",
    bg: "black",
    icon: "/assets/iconoestrellas.svg",
    heading: "Practical Bits",
    script: "worth knowing",
    cards: [
      {
        title: "Pace It",
        desc: "Order in two rounds rather than all at once. Plates arrive as they are ready, so a single big order lands all together and goes cold.",
      },
      {
        title: "Ask for Pita",
        desc: "Warm pita with the dips is the thing everyone forgets and then orders twice. Get it with the first round.",
      },
      {
        title: "Leave Room",
        desc: "The pistachio baklava cheesecake and the tiramisu are both worth it, and both easier to share than to finish alone.",
      },
    ],
  },
  {
    kind: "split",
    bg: "green",
    heading: "The Bar Shares Too",
    script: "twelve cocktails",
    image: "/assets/Siena_20.03.26-LS-MatchaMartini-01.webp",
    alt: "A matcha martini held up at the bar at Siena in Alpharetta",
    paras: [
      "Twelve house cocktails, a thirty-bottle wine list and a deep spirits shelf. A bottle for the table works better with this style of eating than everyone ordering separately.",
      "There is a <a href=\"/happy-hour-alpharetta\">happy hour menu</a> Tuesday through Thursday from 4 to 6pm if you want a few small plates and a drink without a full sit-down. On Friday live music plays from 7 to 10pm, and the room lifts. <a href=\"/live-music-fridays\">See what Friday looks like</a>.",
    ],
  },
];

export const FAQS: Faq[] = [
  {
    q: "What does tapas-style mean here?",
    a: "Tapas-style here means choosing small plates to share. Siena also serves pasta and entrées, so guests can share starters and order individual mains if they prefer.",
  },
  {
    q: "How many plates should we order?",
    a: "Start with a few small plates and ask your server about portion sizes. Add more dishes or individual mains to suit the group.",
  },
  {
    q: "Is it Spanish tapas?",
    a: "No. The format is tapas-style sharing, but the food is Italian and Mediterranean. House-made pasta, mezze, grilled skewers and crispy cauliflower rather than patatas bravas and jamón.",
  },
  {
    q: "Is it good for a big group?",
    a: "Yes, it is the format groups do best with. For larger bookings Siena also does <a href=\"/private-dining-alpharetta\">private dining</a>.",
  },
  {
    q: "Is there enough for someone who does not eat meat?",
    a: "Yes. Hummus, whipped feta, crispy cauliflower, the salads, the pasta and the sides make a full meal on their own. <a href=\"/vegetarian-restaurant-alpharetta\">More on the vegetarian side</a>.",
  },
  {
    q: "Where is it and what are the hours?",
    a: "124 Devore Rd, Alpharetta, GA 30009. Closed Monday. Tuesday to Thursday 4pm to 10pm, Friday and Saturday 4pm to midnight, Sunday 4pm to 10pm. Call to confirm current brunch availability.",
  },
];

/** Quotes taken verbatim from public Yelp reviews, names as the reviewers display them. */
export const REVIEWS: Reviews = {
  quotes: [
    { text: "The lamb chops is very flavorful as well as humus n pita bread.", author: "Big O." },
    {
      text: "Food was great I had the Chicken tawook and rice it tasted very fresh and lite",
      author: "Eline P.",
    },
    {
      text: "The combination of incredible Mediterranean cuisine, attentive service, and live music creates a unique atmosphere",
      author: "Chelsea G.",
    },
  ],
};

export const PRACTICAL = [
  "Step-free entrance and accessible parking near the door",
  "Minutes from Avalon and the Ameris Bank Amphitheatre",
  "Sharing plates, so order in rounds rather than all at once",
];

export const CLOSING = {
  heading: "Bring People",
  script: "and order widely",
  paras: [
    "Tapas works best with more of you. Share a few starters, choose your mains and enjoy dinner at your own pace.",
    "<a href=\"/reservations\">Book your table</a> and start with the hummus.",
  ],
};
