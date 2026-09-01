import type { Block, Faq, Reviews } from "@/components/LandingPage";

/**
 * Copy and layout for /downtown-alpharetta-restaurants.
 *
 * Second strongest opening in the Search Console data: 51 query variations and 717
 * impressions in three months, but ranking positions 26 to 31, so almost nobody
 * clicks. Plenty of people are being shown Siena for this and not seeing it.
 *
 * Siena is genuinely on Devore Rd in downtown Alpharetta, so the page is honest.
 * It leans on location detail rather than repeating the food pitch, to keep it
 * distinct from the other landing pages.
 */

export const H1 = "A Downtown Alpharetta Restaurant";
export const H1_SCRIPT = "on devore road";

export const MARQUEE = [
  "124 Devore Road",
  "Minutes From Avalon",
  "Walk From Downtown",
  "Alpharetta, Georgia",
];

export const INTRO = {
  icon: "/assets/icono_findus.svg",
  heading: "In the Middle of It",
  script: "downtown alpharetta",
  paras: [
    "Downtown Alpharetta has filled up with places to eat, which is good news until you are standing on the pavement deciding. Siena Restaurant &amp; Bar sits at 124 Devore Rd, in the thick of it and a few minutes from Avalon and the Ameris Bank Amphitheatre.",
    "The kitchen runs Italian and Mediterranean at once and everything comes as tapas-style sharing plates, which makes it a straightforward answer when a group cannot agree on one cuisine.",
  ],
  cta: { label: "BOOK A TABLE", href: "/reservations" },
};

export const BLOCKS: Block[] = [
  {
    kind: "split",
    bg: "green",
    heading: "Getting Here",
    script: "and parking",
    image: "/assets/hero11.webp",
    alt: "Siena Restaurant & Bar on Devore Road in downtown Alpharetta, Georgia",
    paras: [
      "124 Devore Rd, Alpharetta, GA 30009. The address drops you at the door, and parking is straightforward rather than the usual downtown hunt.",
      "Avalon is minutes away, and so is the Ameris Bank Amphitheatre, which makes Siena a natural stop before a show or after an afternoon of shopping. Plenty of tables on a concert night are people doing exactly that.",
      "From further out it is a short drive from Roswell, Johns Creek, Milton and Cumming. The entrance is step-free and there is accessible parking near the door.",
    ],
  },
  {
    kind: "split",
    bg: "black",
    flip: true,
    heading: "What Kind of Evening",
    script: "it depends on the night",
    image: "/assets/hero6.webp",
    alt: "The warm dining room at a downtown Alpharetta restaurant on a Friday evening",
    paras: [
      "The room is warm and a little dramatic, with bold lighting that makes a Tuesday feel like an occasion. Upscale, but nobody is being formal about it.",
      "Midweek is calmer and easier to get into. Friday and Saturday run later, to midnight, and Friday has a live saxophonist, which changes the room completely. <a href=\"/live-music-fridays\">See what Friday looks like</a>.",
      "Saturday morning is different again, with its own <a href=\"/brunch-alpharetta\">brunch menu</a> from 10am.",
    ],
  },
  {
    kind: "gallery",
    bg: "green",
    icon: "/assets/icon_menus.svg",
    heading: "What Is on the Table",
    script: "pass it around",
    intro:
      "Everything is built for sharing, so a table orders a spread rather than one plate each. It suits downtown evenings where nobody wants to commit to a single thing. <a href=\"/menus\">See the full menu</a>.",
    items: [
      {
        image: "/assets/Siena_20.03.26-D-Feta.webp",
        alt: "Mezze and sharing plates at a downtown Alpharetta restaurant",
        title: "MEZZE",
        sub: "Hummus, whipped feta, cauliflower",
        href: "/mediterranean-restaurant-alpharetta",
      },
      {
        image: "/assets/Siena_20.03.26-D-MeatBalls-02.webp",
        alt: "House-made pasta served in downtown Alpharetta",
        title: "PASTA",
        sub: "House-made, rigatoni and bucatini",
        href: "/italian-restaurant-alpharetta",
      },
      {
        image: "/assets/Siena_20.03.26-LS-SienaMargarita-01.webp",
        alt: "Cocktails at a bar in downtown Alpharetta",
        title: "THE BAR",
        sub: "Twenty cocktails, thirty wines",
        href: "/happy-hour-alpharetta",
      },
    ],
  },
  {
    kind: "cards",
    bg: "black",
    icon: "/assets/iconoestrellas.svg",
    heading: "Good For",
    script: "downtown nights",
    cards: [
      {
        title: "Before a Show",
        desc: "The Ameris Bank Amphitheatre is minutes away. Book early, eat properly, walk over. The bar works well for after, too.",
      },
      {
        title: "Groups Who Disagree",
        desc: "Italian on one side of the menu, Mediterranean on the other, everything shareable. Nobody has to win the argument.",
      },
      {
        title: "A Night Out",
        desc: "Low lighting, a proper cocktail list and live sax on Fridays. <a href=\"/date-night-alpharetta\">More on date night</a>.",
      },
    ],
  },
  {
    kind: "split",
    bg: "green",
    heading: "Who Runs It",
    script: "women-led",
    image: "/assets/about3.webp",
    alt: "The women-led team behind a downtown Alpharetta restaurant",
    paras: [
      "Siena opened in December 2025 and is women-led. Co-owner and manager Aida Lemma runs the floor, executive chef Baba Estavillo runs the kitchen.",
      "You notice it in the details, from the welcome at the door to how plates arrive. <a href=\"/about-us\">More about how Siena started</a>, or see why it is one of the <a href=\"/new-restaurants-alpharetta\">newer rooms downtown</a>.",
    ],
  },
];

export const FAQS: Faq[] = [
  {
    q: "Where exactly in downtown Alpharetta is Siena?",
    a: "124 Devore Rd, Alpharetta, GA 30009, minutes from Avalon and the Ameris Bank Amphitheatre.",
  },
  {
    q: "Is there parking?",
    a: "Yes, and it is straightforward rather than the usual downtown search. There is accessible parking near the entrance and the door is step-free.",
  },
  {
    q: "Can I walk from Avalon?",
    a: "It is a few minutes away by car and an easy trip either side of a show at the Ameris Bank Amphitheatre. Many tables on concert nights are doing exactly that.",
  },
  {
    q: "What are the hours?",
    a: "Closed Monday. Tuesday to Thursday 4pm to 10pm, Friday and Saturday 4pm to midnight, Sunday 4pm to 10pm, plus a Saturday brunch menu from 10am.",
  },
  {
    q: "Do I need a reservation?",
    a: "Friday and Saturday fill up, especially on live music nights, so booking ahead is sensible. Midweek is easier and the bar takes walk-ins when there is room. <a href=\"/reservations\">Book here</a>.",
  },
  {
    q: "Is it good for a group?",
    a: "Yes. The menu is tapas-style and made for passing around. Siena also handles <a href=\"/private-dining-alpharetta\">private dining and larger events</a>.",
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
      text: "Food was great I had the Chicken tawook and rice it tasted very fresh and lite",
      author: "Eline P.",
    },
  ],
};

export const PRACTICAL = [
  "124 Devore Rd, in downtown Alpharetta",
  "Step-free entrance and accessible parking near the door",
  "Minutes from Avalon and the Ameris Bank Amphitheatre",
];

export const CLOSING = {
  heading: "Find Us Downtown",
  script: "devore road",
  paras: [
    "If you are standing in downtown Alpharetta deciding where to eat, this is the one with two kitchens on one menu and a saxophone on Fridays.",
    "<a href=\"/reservations\">Book your table</a>, or come and take a seat at the bar.",
  ],
};
