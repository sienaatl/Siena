import type { Block, Faq, Reviews } from "@/components/LandingPage";

/**
 * Copy and layout for /cocktail-bar-alpharetta.
 *
 * Page 12 in the original plan. Cocktail bar is already a category on the Google
 * Business Profile with no page behind it.
 *
 * Every drink and bottle named here was checked against lib/site-data.json, which
 * lists 20 cocktails, 30 wines and 63 spirits. The ingredient lists are the menu's
 * own. Do not add a drink that is not on that file.
 *
 * Kept distinct from /happy-hour-alpharetta, which is about early evening and small
 * plates. This page is about the drinks programme itself and sitting at the bar.
 */

export const H1 = "A Cocktail Bar in Alpharetta";
export const H1_SCRIPT = "pull up a seat";

export const MARQUEE = [
  "Twenty House Cocktails",
  "Sixty-Three Spirits",
  "Live Sax Fridays",
  "Alpharetta, Georgia",
];

export const INTRO = {
  icon: "/assets/icono_123.svg",
  heading: "Not the Afterthought",
  script: "the bar at siena",
  paras: [
    "Plenty of restaurants have a bar. Fewer have one worth going to on its own. Siena Restaurant &amp; Bar runs twenty house cocktails, a thirty-bottle wine list and sixty-three spirits at 124 Devore Rd in downtown Alpharetta.",
    "Come for a drink and a couple of small plates, or sit at the bar and stay for the evening. Both work, and neither needs a reservation if there is room.",
  ],
  cta: { label: "SEE THE DRINKS", href: "/menus?tab=libations" },
};

export const BLOCKS: Block[] = [
  {
    kind: "gallery",
    bg: "green",
    icon: "/assets/icon_menus.svg",
    heading: "The House Cocktails",
    script: "start with one of these",
    intro:
      "Twenty of them, and none are the usual list with a new name. If you are not sure where to begin, the Italian Job is the house favourite and the espresso martini is the one that comes back twice. <a href=\"/menus?tab=libations\">See the full list</a>.",
    items: [
      {
        image: "/assets/Siena_20.03.26-PS-SienaMargarita-01.webp",
        alt: "The Siena Margarita cocktail at a cocktail bar in Alpharetta",
        title: "SIENA MARGARITA",
        sub: "Tequila blanco, crème de cassis, agave",
        href: "/menus?tab=libations",
      },
      {
        image: "/assets/Siena_20.03.26-LS-TiramisuEspressoMartini.webp",
        alt: "Espresso martini served at a cocktail bar in Alpharetta, Georgia",
        title: "ESPRESSO MARTINI",
        sub: "Vodka, espresso, coffee liqueur, Baileys",
        href: "/menus?tab=libations",
      },
      {
        image: "/assets/Siena_20.03.26-LS-MatchaMartini-01.webp",
        alt: "Matcha martini with Haku vodka at a bar in Alpharetta",
        title: "MATCHA MARTINI",
        sub: "Haku vodka, matcha, salted vanilla",
        href: "/menus?tab=libations",
      },
    ],
  },
  {
    kind: "split",
    bg: "black",
    heading: "What Else Is on the List",
    script: "worth reading properly",
    image: "/assets/Siena_20.03.26-LS-SienaMargarita-02.webp",
    alt: "House cocktails lined up at a cocktail bar in Alpharetta",
    paras: [
      "The Italian Job is bourbon with Amaro Montenegro, lemon, pomegranate and agave, and it is the one the bar is known for. Monaco is lighter, with St-Germain, passion fruit, yuzu and prosecco.",
      "Night Bloom is horchata, coconut, vanilla and coffee, which sounds like a dessert and drinks like one in the best way. Amalfi Beach is mango, orgeat, pineapple and lime for when the Georgia heat has not let go.",
      "There is a proper Old Fashioned too, made with cane sugar and maple rather than a sugar cube and hope.",
    ],
  },
  {
    kind: "split",
    bg: "green",
    flip: true,
    heading: "The Agave Shelf",
    script: "the part to notice",
    image: "/assets/Siena_20.03.26-PS-MatchaMartini.webp",
    alt: "Tequila and mezcal selection at a cocktail bar in Alpharetta",
    paras: [
      "This is the part most people do not expect from a restaurant bar. Tequila runs to Don Julio Reposado, Casamigos, Herradura, Tequila Ocho blanco and reposado, Lalo and La Gritona.",
      "The mezcal shelf is better still: Dos Hombres, Mezcal Vago Espadín, Creyente, Derrumbes Oaxaca, Madre Ensamble and Xicaru Pechuga. That is a genuine selection rather than one bottle for show.",
      "Ask the bar what to drink it alongside. The smoke works better with the mezze than most people expect.",
    ],
  },
  {
    kind: "cards",
    bg: "black",
    icon: "/assets/iconoestrellas.svg",
    heading: "Beyond Cocktails",
    script: "wine, whisky, beer",
    cards: [
      {
        title: "Thirty Wines",
        desc: "Provence rosé, Burgundy chardonnay, Napa cabernet, Italian malbec, and champagne including Moët &amp; Chandon when it is that sort of evening.",
      },
      {
        title: "Whisky and Cognac",
        desc: "Macallan 12, Woodford Reserve, Angel's Envy, Whistlepig, Widow Jane 10 Year. Cognac from Hennessy, Rémy Martin VSOP and Pierre Ferrand.",
      },
      {
        title: "Beer",
        desc: "Sweetwater 420, Day Trip IPA, Stella Artois, Dos Equis Amber and Miller Lite. Cold, cheap enough, and there when you want one.",
      },
    ],
  },
  {
    kind: "split",
    bg: "green",
    heading: "When to Come",
    script: "and what it is like",
    image: "/assets/hero6.webp",
    alt: "The bar and low-lit room at a cocktail bar in Alpharetta on a Friday night",
    paras: [
      "Doors open at 4pm. Early evening is quiet and easy, and there is a <a href=\"/happy-hour-alpharetta\">happy hour menu</a> if you want a drink and a few small plates without a full sit-down.",
      "Friday and Saturday run to midnight and the room fills. On Friday a saxophonist plays live, which is the night to come if you want the bar at its best. <a href=\"/live-music-fridays\">See what Friday looks like</a>.",
      "Walk-ins are welcome at the bar when there is room. If you want a table as well, <a href=\"/reservations\">book ahead</a>.",
    ],
  },
  {
    kind: "split",
    bg: "black",
    flip: true,
    heading: "Something to Eat With It",
    script: "small plates",
    image: "/assets/Siena_20.03.26-D-Feta.webp",
    alt: "Small plates to share alongside cocktails at a bar in Alpharetta",
    paras: [
      "The whole menu is tapas-style, so drinking here does not mean choosing between a bag of crisps and a full dinner. Hummus, whipped feta, crispy cauliflower, arancini and calamari all work with a drink in your other hand.",
      "Order two or three between you and it is a proper evening rather than a stop-off. <a href=\"/tapas-restaurant-alpharetta\">More on how the sharing works</a>.",
    ],
  },
];

export const FAQS: Faq[] = [
  {
    q: "Can I come just for drinks?",
    a: "Yes. Walk-ins are welcome at the bar when there is room, and there is no expectation you order dinner. Small plates are there if you want something alongside.",
  },
  {
    q: "What should I order first?",
    a: "The Italian Job, which is bourbon with Amaro Montenegro, lemon, pomegranate and agave, or the espresso martini. The Siena Margarita is the easiest one to like.",
  },
  {
    q: "What spirits do you carry?",
    a: "Sixty-three, including Macallan 12, Woodford Reserve, Angel's Envy and Whistlepig on whisky, Don Julio Reposado, Casamigos and Tequila Ocho on tequila, and a real mezcal shelf with Dos Hombres, Mezcal Vago, Creyente and Xicaru Pechuga.",
  },
  {
    q: "Is there a happy hour?",
    a: "Yes, earlier in the evening, with small plates alongside. <a href=\"/happy-hour-alpharetta\">More on happy hour</a>.",
  },
  {
    q: "When is it busiest?",
    a: "Friday and Saturday evenings, and Friday has a live saxophonist. Tuesday to Thursday is quieter if you want to actually talk to the person next to you.",
  },
  {
    q: "Where are you and what are the hours?",
    a: "124 Devore Rd, Alpharetta, GA 30009, minutes from Avalon. Closed Monday. Tuesday to Thursday 4pm to 10pm, Friday and Saturday 4pm to midnight, Sunday 4pm to 10pm.",
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
    { text: "The lamb chops is very flavorful as well as humus n pita bread.", author: "Big O." },
    {
      text: "My favorite was the lollipop chicken with a yogurt sauce. Their Mac and cheese with brisket was also really good.",
      author: "Grace M.",
    },
  ],
};

export const PRACTICAL = [
  "Walk-ins welcome at the bar when there is room",
  "Step-free entrance and accessible parking near the door",
  "Open until midnight Friday and Saturday",
];

export const CLOSING = {
  heading: "Come for a Drink",
  script: "the bar is open",
  paras: [
    "Twenty cocktails, sixty-three spirits and a room worth staying in. No reservation needed if there is a seat.",
    "<a href=\"/reservations\">Book a table</a> if you want one, or just turn up.",
  ],
};
