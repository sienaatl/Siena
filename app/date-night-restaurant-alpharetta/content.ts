import type { Block, Faq, Reviews } from "@/components/LandingPage";

/**
 * Copy and layout for /date-night-restaurant-alpharetta.
 *
 * From the approved draft, with the standing corrections. The draft spelled the
 * venue "Ameris Bank Amphitheater"; the venue's own spelling is "Amphitheatre" and
 * that is used here and on every other page so the site stays consistent.
 */

export const H1 = "Date Night Restaurant in Alpharetta";
export const H1_SCRIPT = "where the night slows down";

export const MARQUEE = [
  "Live Sax Fridays",
  "Cocktails for Two",
  "Open Until Midnight",
  "Alpharetta, Georgia",
];

export const INTRO = {
  icon: "/assets/icono_testimonios.svg",
  heading: "A Room That Does Half the Work",
  script: "for two",
  paras: [
    "Looking for a date night restaurant in Alpharetta that actually feels like a date? Warm lighting, cocktails worth talking about, sharing plates made for two, and live saxophone on Friday nights.",
    "Siena Restaurant &amp; Bar sits at 124 Devore Rd, close to Avalon and the Ameris Bank Amphitheatre, an easy drive from Roswell, Johns Creek, Milton and Cumming. First date or tenth anniversary, this is the kind of room where the night slows down and you actually talk to each other.",
  ],
  cta: { label: "BOOK A TABLE", href: "/reservations" },
};

export const BLOCKS: Block[] = [
  {
    kind: "split",
    bg: "green",
    heading: "The Lighting Sets the Mood",
    script: "warm, not dark",
    image: "/assets/hero10.webp",
    alt: "Low warm lighting in the dining room at Siena, a date night restaurant in Alpharetta",
    paras: [
      "A good date night lives or dies on the room. The lighting here is bold and low in all the right ways, the kind that makes everyone across the table look great. Warm, not dark. Romantic, not sleepy.",
      "Booths and tables give you space to lean in and talk without shouting over the room. Comfortable and grown-up at the same time.",
      "Couples tell us the room is the first thing they notice, and the reason they book again. If you want a setting that does half the work for you, this is the one.",
    ],
  },
  {
    kind: "split",
    bg: "black",
    flip: true,
    heading: "Friday Is Saxophone Night",
    script: "book that one",
    image: "/assets/hero9.webp",
    alt: "Live saxophone on a Friday night at Siena Restaurant & Bar in Alpharetta",
    paras: [
      "This is the detail that makes Siena stand out. On Friday a live saxophonist plays in the room. Smooth, easy, and it turns a regular dinner into a night you remember.",
      "You order a cocktail, the sax kicks in, and suddenly it is a real date rather than just dinner. On Friday and Saturday the kitchen and bar stay open until midnight, so there is no rush. Take your time over dessert and order one more drink.",
      "Tables fill fast on live music nights, so plan a little ahead. <a href=\"/live-music-fridays\">See what Friday looks like</a>.",
    ],
  },
  {
    kind: "gallery",
    bg: "green",
    icon: "/assets/icono_123.svg",
    heading: "Start at the Bar",
    script: "then move to the table",
    intro:
      "The cocktail list has real personality. Start with a drink at the bar and move to your table when you are ready. There is a happy hour menu too if you want to come early and stretch the evening out.",
    items: [
      {
        image: "/assets/Siena_20.03.26-PS-SienaMargarita-01.webp",
        alt: "The Siena Margarita cocktail at Siena Restaurant & Bar in Alpharetta",
        title: "SIENA MARGARITA",
        sub: "Bright and easy to love",
        href: "/menus?tab=libations",
      },
      {
        image: "/assets/Siena_20.03.26-LS-TiramisuEspressoMartini.webp",
        alt: "Tiramisu espresso martini, a dessert cocktail at Siena in Alpharetta",
        title: "ESPRESSO MARTINI",
        sub: "A little buzz with dessert",
        href: "/menus?tab=libations",
      },
      {
        image: "/assets/Siena_20.03.26-LS-MatchaMartini-02.webp",
        alt: "Matcha martini from the cocktail list at Siena Restaurant & Bar, Alpharetta",
        title: "MATCHA MARTINI",
        sub: "An easy favourite",
        href: "/menus?tab=libations",
      },
    ],
  },
  {
    kind: "gallery",
    bg: "black",
    icon: "/assets/icon_menu.svg",
    heading: "Plates Made for Two",
    script: "order three or four",
    intro:
      "The whole menu is built for sharing, which is the easiest way to keep a conversation going. Order a few things, pass them back and forth, and taste more of the kitchen than you would at a normal sit-down. <a href=\"/menus\">See the full menu</a>.",
    items: [
      {
        image: "/assets/Siena_20.03.26-D-ShirimpFranceseArancini.webp",
        alt: "Shrimp francese arancini to share at Siena Restaurant & Bar in Alpharetta",
        title: "ARANCINI",
        sub: "Crispy, rich, gone quickly",
        href: "/menus?tab=main-menu",
      },
      {
        image: "/assets/Siena_20.03.26-D-MeatBalls-01.webp",
        alt: "House-made rigatoni and pasta at Siena, a date night restaurant in Alpharetta",
        title: "THE PASTA",
        sub: "House-made, worth splitting",
        href: "/italian-restaurant-alpharetta",
      },
      {
        image: "/assets/Siena_20.03.26-PS-Feta-03.webp",
        alt: "Watermelon and feta salad and mezze to share at Siena in Alpharetta",
        title: "FOR THE TABLE",
        sub: "Hummus, feta, charred cauliflower",
        href: "/mediterranean-restaurant-alpharetta",
      },
    ],
  },
  {
    kind: "cards",
    bg: "green",
    icon: "/assets/iconoestrellas.svg",
    heading: "When the Night Matters",
    script: "tell us in advance",
    intro:
      "Some evenings need a little extra. Mention it when you book and the team will help you plan it rather than improvise on the night.",
    cards: [
      {
        title: "Anniversaries",
        desc: "Split the baklava cheesecake bites or the saffron crème brûlée to close the night. Say the word and the team will take care of the timing.",
      },
      {
        title: "Birthdays",
        desc: "A dessert that arrives at the right moment beats a surprise nobody planned. Let us know the date when you reserve.",
      },
      {
        title: "Proposals",
        desc: "If you have been planning it for weeks, the room and the Friday sax do a lot of the work. <a href=\"/event-inquiry\">Get in touch first</a> so we can help you get it right.",
      },
    ],
  },
  {
    kind: "split",
    bg: "black",
    heading: "A Daytime Date Works Too",
    script: "saturday morning",
    image: "/assets/Siena_20.03.26-LS-LimoncelloRicottaPancakes-02.webp",
    alt: "Limoncello ricotta pancakes from the Saturday brunch menu at Siena, Alpharetta",
    paras: [
      "Not every date has to be dinner. Saturday morning runs on a separate brunch menu, with limoncello ricotta pancakes, a truffle and pecorino frittata, baked eggs in San Marzano and steak and eggs Mediterraneo.",
      "The same sharing idea, earlier in the day and in much better light.",
    ],
  },
];

export const FAQS: Faq[] = [
  {
    q: "What makes Siena good for a date night?",
    a: "Warm low lighting, booths with room to talk, a menu built for sharing, a proper cocktail list and live saxophone on Friday nights. The kitchen and bar stay open until midnight on Friday and Saturday, so there is no rush to leave.",
  },
  {
    q: "Which night should we book?",
    a: "Friday if you want the live saxophonist. Those tables fill up fastest, so book ahead. Midweek is quieter if you would rather have a calm room. <a href=\"/reservations\">Book a table here</a>.",
  },
  {
    q: "Can you help with an anniversary or a proposal?",
    a: "Yes. Mention it when you book so the team can plan the timing rather than improvise. For anything more involved, <a href=\"/event-inquiry\">get in touch first</a>.",
  },
  {
    q: "Is it dressy?",
    a: "Upscale but not stiff. A nice shirt or a full outfit both fit. Nobody will feel out of place either way.",
  },
  {
    q: "Where is Siena and how late is it open?",
    a: "124 Devore Rd, Alpharetta, GA 30009, near Avalon and the Ameris Bank Amphitheatre. Closed Monday. Tuesday to Thursday 4pm to 10pm, Friday and Saturday 4pm to midnight, Sunday 4pm to 10pm, plus Saturday brunch from 10am.",
  },
  {
    q: "What should we order?",
    a: "Three or four plates between two. Siena hummus, the watermelon and feta salad, shrimp francese arancini, the house-made rigatoni and the lamb chops all share well. For dessert, the baklava cheesecake bites or the chocolate tahini mousse cake.",
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
  "Step-free entrance and accessible parking near the door",
  "Minutes from Avalon and the Ameris Bank Amphitheatre",
  "Open until midnight on Friday and Saturday",
];

export const CLOSING = {
  heading: "Book Your Date Night",
  script: "friday fills first",
  paras: [
    "Warm room, a cocktail worth ordering, plates you pass back and forth, and a saxophone on Friday. That is the whole pitch.",
    "<a href=\"/reservations\">Book your table</a> and let the night run long.",
  ],
};
