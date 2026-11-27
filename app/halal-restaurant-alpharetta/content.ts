import type { Block, Faq, Reviews } from "@/components/LandingPage";

/**
 * Copy and layout for /halal-restaurant-alpharetta.
 *
 * The owner confirmed that Siena's beef and lamb are halal. Nothing here claims
 * certification, that chicken, seafood or every dish is halal, or that the menu is
 * pork-free (some dishes contain pork), so guests are pointed to their server for
 * specifics. Dishes follow lib/site-data.json.
 */

export const H1 = "Halal Food in Alpharetta";
export const H1_SCRIPT = "at Siena";

export const MARQUEE = [
  "Halal Beef and Lamb",
  "Mediterranean and Italian",
  "Lamb Chops and Filet Mignon",
  "Downtown Alpharetta",
];

export const INTRO = {
  icon: "/assets/icon_menus.svg",
  heading: "Halal Beef and Lamb",
  script: "ask and we will guide you",
  paras: [
    "Looking for halal food in Alpharetta? At Siena Restaurant &amp; Bar the beef and lamb are halal. They sit on a Mediterranean and Italian menu at 124 Devore Rd in downtown Alpharetta.",
    "Other proteins and some dishes may not be halal, so tell your server when you book or sit down. They will point you to the right dishes for your table.",
  ],
  cta: { label: "SEE THE MENU", href: "/menus" },
};

export const BLOCKS: Block[] = [
  {
    kind: "split",
    bg: "green",
    heading: "Dishes Guests Order",
    script: "grilled and shared",
    image: "/assets/Siena_20.03.26-D-LambChop-02.webp",
    alt: "Grilled lamb chops, a popular main at a Mediterranean restaurant in Alpharetta",
    paras: [
      "The lamb chops, braised lamb shank and filet mignon kabob are all made with halal beef or lamb. Hummus with warm pita, whipped feta and crispy cauliflower make easy starters to share.",
      "Confirm any other dish with your server. <a href=\"/menus\">See the full menu</a>.",
    ],
  },
  {
    kind: "cards",
    bg: "black",
    icon: "/assets/iconoestrellas.svg",
    heading: "Dining Halal at Siena",
    script: "before you come",
    cards: [
      {
        title: "Tell Us When You Book",
        desc: "Mention halal in your reservation notes or when you call, so the team can guide you to the right dishes.",
      },
      {
        title: "Ask About Each Dish",
        desc: "Beef and lamb are halal. Some other dishes contain pork or are not halal, and your server can confirm what is suitable before you order.",
      },
      {
        title: "Plenty Without Meat",
        desc: "Hummus, salads, crispy cauliflower and pasta are options for anyone avoiding meat. <a href=\"/vegetarian-restaurant-alpharetta\">More vegetarian options</a>.",
      },
    ],
  },
  {
    kind: "split",
    bg: "green",
    flip: true,
    heading: "Good for Groups",
    script: "one menu for everyone",
    image: "/assets/hero5.webp",
    alt: "A table of shared plates at Siena in Alpharetta",
    paras: [
      "The menu runs Mediterranean and Italian together, so a mixed group can all find something. Share starters and let everyone choose their own main.",
      "For birthdays, family gatherings and larger parties, see <a href=\"/private-dining-alpharetta\">private dining</a>. For a dinner for two, see <a href=\"/date-night-alpharetta\">date night</a>.",
    ],
  },
];

export const FAQS: Faq[] = [
  {
    q: "Does Siena serve halal food?",
    a: "Yes. Siena's beef and lamb are halal. Other dishes may not be, so please ask your server which are suitable.",
  },
  {
    q: "Is everything on the menu halal?",
    a: "No. The beef and lamb are halal, but other dishes may not be. Tell your server you are eating halal and they will guide you to suitable dishes.",
  },
  {
    q: "Which dishes do halal guests usually order?",
    a: "Lamb chops, braised lamb shank and filet mignon kabob are the halal beef and lamb mains. Hummus, whipped feta and crispy cauliflower are popular starters. Confirm any other dish with your server. <a href=\"/menus\">View the menu</a>.",
  },
  {
    q: "Can I mention halal when I make a reservation?",
    a: "Yes. Add a note to your <a href=\"/reservations\">reservation</a> or call (404) 999-0373 so the team knows ahead of time.",
  },
  {
    q: "Is there food for vegetarians in the same group?",
    a: "Yes. Hummus, salads, crispy cauliflower and pasta cover vegetarian guests. <a href=\"/vegetarian-restaurant-alpharetta\">More on the vegetarian side</a>.",
  },
  {
    q: "Where is it and what are the hours?",
    a: "124 Devore Rd, Alpharetta, GA 30009. Closed Monday. Tuesday to Thursday 4pm to 10pm, Friday and Saturday 4pm to midnight, Sunday 4pm to 10pm.",
  },
];

/** Quotes taken verbatim from public Yelp reviews, names as the reviewers display them. */
export const REVIEWS: Reviews = {
  quotes: [
    { text: "The lamb chops is very flavorful as well as humus n pita bread.", author: "Big O." },
  ],
};

export const PRACTICAL = [
  "Beef and lamb are halal; confirm other dishes with your server",
  "Step-free entrance and accessible parking near the door",
  "Minutes from Avalon and the Ameris Bank Amphitheatre",
];

export const CLOSING = {
  heading: "Come Hungry",
  script: "and ask away",
  paras: [
    "Tell us what you need and we will help you build the meal.",
    "<a href=\"/reservations\">Book your table</a> and mention halal in the notes.",
  ],
};
