import type { Block, Faq, Reviews } from "@/components/LandingPage";

/**
 * Copy and layout for /wine-bar-alpharetta.
 *
 * Every wine, region and price named here is in the Wines tab of lib/site-data.json:
 * 30 wines, 24 of them by the glass. The happy hour line follows that tab's footnote.
 * Pairing suggestions are written as suggestions, not as the kitchen's recommendations.
 */

export const H1 = "Wine in Alpharetta";
export const H1_SCRIPT = "twenty-four by the glass";

export const MARQUEE = [
  "Twenty-Four by the Glass",
  "Thirty Bottles",
  "Moët by the Glass",
  "Alpharetta, Georgia",
];

export const INTRO = {
  icon: "/assets/icono_123.svg",
  heading: "A Wine List Built for the Bar",
  script: "not just the table",
  paras: [
    "Siena Restaurant &amp; Bar is a restaurant with a proper bar rather than a dedicated wine bar, and it is worth being clear about that. What it has is a thirty-bottle list at 124 Devore Rd in downtown Alpharetta, and twenty-four of those bottles are open by the glass.",
    "That is the part that matters if you want to sit at the bar and try a few. Sparkling from the Veneto and Catalonia, whites from Burgundy, the Mosel and Marlborough, rosé from Provence, and reds from Oregon to Mendoza. Most glasses are $13 to $17.",
  ],
  cta: { label: "SEE THE WINE LIST", href: "/menus?tab=wines" },
};

export const BLOCKS: Block[] = [
  {
    kind: "gallery",
    bg: "green",
    icon: "/assets/icon_menus.svg",
    heading: "Four Kinds of Glass",
    script: "sparkling to red",
    intro:
      "The list runs nine sparkling, ten white, three rosé and eight red. Here is where each part of it goes with the food. <a href=\"/menus?tab=wines\">See the full wine list</a>.",
    items: [
      {
        image: "/assets/events/1779117506791_jvttbu.webp",
        alt: "Guests raising champagne flutes and cocktails at a celebration at Siena in Alpharetta",
        title: "SPARKLING",
        sub: "Prosecco, cava, Moët by the glass",
        href: "/menus?tab=wines",
      },
      {
        image: "/assets/menu/rigatoni-alla-vodka.webp",
        alt: "Rigatoni alla vodka with a glass of white wine and a bottle of Bourgogne chardonnay",
        title: "WHITE",
        sub: "Burgundy, Mosel, Marlborough",
        href: "/menus?tab=wines",
      },
      {
        image: "/assets/menu/polpo-alla-griglia.webp",
        alt: "Grilled octopus over potato puree with a bottle of wine on the table at Siena, Alpharetta",
        title: "RED",
        sub: "Pinot noir, malbec, cabernet",
        href: "/menus?tab=wines",
      },
    ],
  },
  {
    kind: "split",
    bg: "black",
    heading: "Twenty-Four by the Glass",
    script: "try three, not one bottle",
    image: "/assets/menu/lavender-whipped-feta.webp",
    alt: "Lavender whipped feta with focaccia, a glass of white wine and a bottle of Bourgogne chardonnay",
    paras: [
      "Of the thirty wines on the list, twenty-four are poured by the glass. Most sit between $13 and $17, with Moët &amp; Chandon at $29 a glass for the nights that call for it.",
      "Bottles run $45 to $70, and $110 for the Moët. Six wines are bottle only, mostly the ones worth sharing: a Napa Valley chardonnay, a Petit Chablis, a Provence rosé and an Alexander Valley cabernet among them.",
      "A by-the-glass list that long is what makes sitting at the bar work. You can start sparkling, move to a white with the mezze and finish on a red without committing anyone to a bottle.",
    ],
  },
  {
    kind: "split",
    bg: "green",
    flip: true,
    heading: "Sparkling, From Prosecco to Moët",
    script: "nine to choose from",
    image: "/assets/hero3.webp",
    alt: "A glass of rosé among cocktails on a tiered stand beneath the lit Siena sign in Alpharetta",
    paras: [
      "Three proseccos from the Veneto: Avissi at $13 a glass, Benvolio DOC and Zonin Extra Dry. Two cavas from Catalonia, Freixenet Cordon Negro and Mirame, and a Ruffino sparkling rosé.",
      "For a proper occasion there is Moët &amp; Chandon Brut Imperial, $29 a glass or $110 a bottle, and JP Chenet 24K at $17 a glass.",
      "If someone at the table is not drinking, Oddbird is an alcohol-free sparkling rosé from the Languedoc at $14 a glass, which is a better answer than a soda water.",
    ],
  },
  {
    kind: "split",
    bg: "black",
    heading: "Whites and Provence Rosé",
    script: "the food-friendly middle",
    image: "/assets/menu/baba-ghanoush-della-casa.webp",
    alt: "Baba ghanoush with grilled pita beside a bottle of Bourgogne chardonnay at Siena, Alpharetta",
    paras: [
      "By the glass: a Bourgogne Tradition chardonnay from Burgundy and a Diatom chardonnay from Santa Barbara, Au Bon Climat pinot gris, two pinot grigios in Massican from Napa Valley and Borgo Conventi from Collio, a Berres riesling from the Mosel and Greywacke sauvignon blanc from Marlborough.",
      "By the bottle only: Annia chardonnay from Napa Valley and a Christopher Patrice Petit Chablis.",
      "All three rosés are from Provence. Bieler Père et Fils and Le Cengle are $14 a glass, and La Jolie Fleur comes by the bottle.",
    ],
  },
  {
    kind: "split",
    bg: "green",
    flip: true,
    heading: "The Reds",
    script: "oregon to mendoza",
    image: "/assets/menu/lamb-chops.webp",
    alt: "Grilled lamb chops over rice pilaf from the dinner menu at Siena in Alpharetta",
    paras: [
      "Six reds by the glass. Two pinot noirs, Panther Creek from the Willamette Valley and Babs Dialtone from Santa Barbara. Language of Yes, a red blend from the Central Coast. Piattelli Premium malbec from Mendoza. Two cabernets, Fossil Point from Paso Robles and Ethos Cellars from the Columbia Valley.",
      "Two more by the bottle: an Annabella cabernet from Alexander Valley and a red from Puglia.",
      "Most red glasses are $15 or $16 and bottles $55 to $60, which leaves room to order a second glass rather than think about it.",
    ],
  },
  {
    kind: "cards",
    bg: "black",
    icon: "/assets/iconoestrellas.svg",
    heading: "Worth Knowing",
    script: "before you order",
    cards: [
      {
        title: "Happy Hour",
        desc: "Four to seven. The menu says to ask your server about featured happy hour wine, which changes. <a href=\"/happy-hour-alpharetta\">Happy hour details</a>.",
      },
      {
        title: "Not Drinking",
        desc: "Oddbird sparkling rosé is alcohol-free, and the bar has three alcohol-free cocktails too. <a href=\"/cocktail-bar-alpharetta\">More on the bar</a>.",
      },
      {
        title: "Prices Change",
        desc: "Glass and bottle prices here are from the current list and can move. <a href=\"/menus?tab=wines\">The menu page is always current</a>.",
      },
    ],
  },
  {
    kind: "split",
    bg: "black",
    heading: "What to Open With What",
    script: "a starting point",
    image: "/assets/hero9.webp",
    alt: "Octopus carpaccio and a glass of white wine on a marble table at Siena in Alpharetta",
    paras: [
      "A few pairings that suit this menu, as suggestions rather than rules. Greywacke sauvignon blanc or the Petit Chablis with the branzino, salmon limone or grilled octopus.",
      "Provence rosé with the mezze: hummus, whipped feta, baba ghanoush and the crispy cauliflower. It handles garlic, lemon and salt better than most whites.",
      "Pinot noir with the chicken tawook or the salmon. The cabernets or the malbec with the lamb chops, the filet mignon kabob or the braised lamb shank. <a href=\"/dinner-alpharetta\">More on dinner</a>.",
    ],
  },
  {
    kind: "split",
    bg: "green",
    flip: true,
    heading: "Where to Find the Bar",
    script: "devore road",
    image: "/assets/Siena_20.03.26-A-01.webp",
    alt: "The front of Siena Restaurant & Bar on Devore Road in downtown Alpharetta, Georgia",
    paras: [
      "Siena is at 124 Devore Rd in downtown Alpharetta, a short drive from Avalon. The bar opens at 4pm Tuesday to Sunday, runs to midnight on Friday and Saturday, and is closed on Monday.",
      "Friday nights have live music from 7 to 10pm, with a different act each week. Walk-ins are welcome at the bar when there is room.",
      "Nearby reading: <a href=\"/downtown-alpharetta-restaurants\">downtown Alpharetta</a>, <a href=\"/restaurants-near-avalon-alpharetta\">near Avalon</a>, or the <a href=\"/date-night-alpharetta\">date night page</a> if a bottle for two is the plan.",
    ],
  },
];

export const FAQS: Faq[] = [
  {
    q: "Is Siena a wine bar?",
    a: "It is a restaurant and bar with a thirty-bottle wine list rather than a dedicated wine bar. Twenty-four of those wines are poured by the glass, so sitting at the bar and trying a few works well.",
  },
  {
    q: "How many wines are available by the glass?",
    a: "Twenty-four: sparkling, white, rosé and red. The other six are bottle only. <a href=\"/menus?tab=wines\">See the wine list</a>.",
  },
  {
    q: "How much is a glass of wine?",
    a: "Most glasses are $13 to $17, and Moët &amp; Chandon is $29 a glass. Bottles run $45 to $70, and $110 for the Moët. Prices can change.",
  },
  {
    q: "Do you serve champagne?",
    a: "Yes. Moët &amp; Chandon Brut Imperial is available by the glass or the bottle, along with prosecco, cava and a sparkling rosé.",
  },
  {
    q: "Is there an alcohol-free wine?",
    a: "Yes. Oddbird is an alcohol-free sparkling rosé from the Languedoc, $14 a glass. There are also three alcohol-free cocktails.",
  },
  {
    q: "Where is Siena and when is the bar open?",
    a: "124 Devore Rd, Alpharetta, GA 30009. Tuesday to Thursday and Sunday 4pm to 10pm, Friday and Saturday 4pm to midnight, closed Monday. Happy hour runs 4 to 7pm.",
  },
];

/** Quotes taken verbatim from public Yelp reviews, names as the reviewers display them. */
export const REVIEWS: Reviews = {
  quotes: [
    {
      text: "The combination of incredible Mediterranean cuisine, attentive service, and live music creates a unique atmosphere",
      author: "Chelsea G.",
    },
    { text: "The lamb chops is very flavorful as well as humus n pita bread.", author: "Big O." },
    {
      text: "Food was great I had the Chicken tawook and rice it tasted very fresh and lite",
      author: "Eline P.",
    },
  ],
};

export const PRACTICAL = [
  "Thirty wines, twenty-four by the glass",
  "Bar open from 4pm, closed Monday",
  "Downtown Alpharetta, a short drive from Avalon",
];

export const CLOSING = {
  heading: "Come for a Glass",
  script: "or three",
  paras: [
    "Twenty-four wines by the glass, Moët when it is that kind of evening, and a bar that stays open until midnight on Friday and Saturday.",
    "<a href=\"/reservations\">Book a table</a>, or take a seat at the bar if there is room.",
  ],
};
