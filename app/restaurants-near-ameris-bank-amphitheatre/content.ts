import type { Block, Faq, Reviews } from "@/components/LandingPage";

/**
 * Copy and layout for /restaurants-near-ameris-bank-amphitheatre.
 *
 * Built around timing for a show: Siena opens at 4pm, plates arrive in waves, and
 * Friday and Saturday run to midnight. No drive time or distance is stated beyond
 * "a few minutes"; Siena and the venue (2200 Encore Pkwy) are both Alpharetta 30009.
 */

export const H1 = "Restaurants Near Ameris Bank Amphitheatre";
export const H1_SCRIPT = "eat before the show";

export const MARQUEE = [
  "Minutes From the Venue",
  "Kitchen Opens at 4pm",
  "Open Late Friday and Saturday",
  "Alpharetta, Georgia",
];

export const INTRO = {
  icon: "/assets/icono_findus.svg",
  heading: "Dinner, Then the Show",
  script: "or drinks after",
  paras: [
    "The Ameris Bank Amphitheatre holds around twelve thousand people, and on a show night plenty of them want dinner first. Siena Restaurant &amp; Bar is a few minutes away at 124 Devore Rd in downtown Alpharetta.",
    "The kitchen opens at 4pm, which is the part that matters, because an 8pm show does not wait.",
  ],
  cta: { label: "BOOK A TABLE", href: "/reservations" },
};

export const BLOCKS: Block[] = [
  {
    kind: "split",
    bg: "green",
    heading: "Getting the Timing Right",
    script: "read this bit",
    image: "/assets/Siena_20.03.26-A-01.webp",
    alt: "The front of Siena Restaurant & Bar on Devore Road, minutes from Ameris Bank Amphitheatre",
    paras: [
      "Check the show and gate times on your ticket before choosing a reservation. Allow time for dinner, the drive, concert traffic, parking and venue entry.",
      "Mention the concert when you book and tell your server when you need to leave. The team can help you choose dishes that fit your plans; service times vary.",
      "Allow a relaxed window for dinner, and call the restaurant if your schedule is tight.",
    ],
  },
  {
    kind: "gallery",
    bg: "black",
    icon: "/assets/icon_menu.svg",
    heading: "Explore the Menu Before You Arrive",
    script: "plates for sharing",
    intro:
      "Explore sharing plates and pasta before your visit, and ask your server what suits your timing. <a href=\"/menus\">See the full menu</a>.",
    items: [
      {
        image: "/assets/Siena_20.03.26-D-Feta.webp",
        alt: "Whipped feta with char-grilled bread, a quick starter before a concert in Alpharetta",
        title: "MEZZE",
        sub: "Hummus, whipped feta, warm pita",
        href: "/mediterranean-restaurant-alpharetta",
      },
      {
        image: "/assets/menu/calamari-fritti-siena.webp",
        alt: "Calamari fritti with sweet chili aioli before a show at Ameris Bank Amphitheatre",
        title: "SMALL PLATES",
        sub: "Calamari, crispy cauliflower",
        href: "/menus?tab=main-menu",
      },
      {
        image: "/assets/menu/rigatoni-alla-vodka.webp",
        alt: "Rigatoni alla vodka for an early dinner near Ameris Bank Amphitheatre",
        title: "PASTA",
        sub: "House-made pasta for the table",
        href: "/italian-restaurant-alpharetta",
      },
    ],
  },
  {
    kind: "split",
    bg: "green",
    flip: true,
    heading: "Or Come Afterwards",
    script: "the better option",
    image: "/assets/Siena_20.03.26-A-04.webp",
    alt: "The bar at Siena, open until midnight on Friday and Saturday in Alpharetta",
    paras: [
      "Siena’s published closing time is midnight on Friday and Saturday. Call before coming after a concert to confirm kitchen service and seating availability.",
      "Twelve house cocktails, a thirty-bottle wine list and small plates that suit a late table. Walk-ins are welcome at the bar when there is room. <a href=\"/cocktail-bar-alpharetta\">More on the bar</a>.",
      "The published closing time is 10pm Tuesday through Thursday and Sunday. Plan an earlier dinner when your concert ends late.",
    ],
  },
  {
    kind: "cards",
    bg: "black",
    icon: "/assets/iconoestrellas.svg",
    heading: "Practical Things",
    script: "on a show night",
    cards: [
      {
        title: "Book Ahead",
        desc: "Concert nights are busy downtown, so a 5pm table on a show night is worth booking well ahead. <a href=\"/reservations\">Book here</a>.",
      },
      {
        title: "Parking",
        desc: "Parking at Siena is straightforward and there is accessible parking near the door, which is worth having on a night when the venue lots are full.",
      },
      {
        title: "Closed Monday",
        desc: "Worth checking the day before you drive over. Tuesday to Sunday the kitchen opens at 4pm.",
      },
    ],
  },
  {
    kind: "split",
    bg: "green",
    heading: "What the Food Is",
    script: "in one paragraph",
    image: "/assets/Siena_20.03.26-D-LambChop-01.webp",
    alt: "Grilled lamb chops, a Mediterranean plate near Ameris Bank Amphitheatre",
    paras: [
      "Italian and Mediterranean on one menu, which the kitchen calls Medi-talian. House-made pasta, mezze, grilled skewers and lamb chops, all built to share.",
      "It suits a group heading to a show, because nobody has to agree on one cuisine and the plates land in the middle rather than in front of one person.",
      "Siena opened in December 2025 and is women-led. <a href=\"/about-us\">More about it</a>.",
    ],
  },
];

export const FAQS: Faq[] = [
  {
    q: "How far is Siena from Ameris Bank Amphitheatre?",
    a: "A few minutes' drive. Siena is at 124 Devore Rd in downtown Alpharetta and the venue is at 2200 Encore Pkwy, both in Alpharetta 30009.",
  },
  {
    q: "What time should we book before a show?",
    a: "Work back from your ticket’s gate and show times, allowing for dinner, traffic, parking and entry. Mention your timing when you book and when you arrive.",
  },
  {
    q: "How long does dinner take?",
    a: "Service time depends on your party, dishes and how busy the restaurant is. Allow a relaxed window and call ahead if you need help planning around a show.",
  },
  {
    q: "Can we come after the concert instead?",
    a: "Call to confirm kitchen service and seating before coming after a concert. Published restaurant closing times are midnight Friday and Saturday, and 10pm Tuesday through Thursday and Sunday.",
  },
  {
    q: "Do you take walk-ins on a show night?",
    a: "At the bar when there is room, but concert nights are busy downtown. <a href=\"/reservations\">Booking is the safer plan</a>.",
  },
  {
    q: "What are the hours?",
    a: "Closed Monday. Tuesday to Thursday 4pm to 10pm, Friday and Saturday 4pm to midnight, Sunday 4pm to 10pm, plus Saturday brunch from 10am.",
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
  "A few minutes from the Ameris Bank Amphitheatre",
  "Kitchen opens at 4pm, closed Monday",
  "Step-free entrance and accessible parking near the door",
];

export const CLOSING = {
  heading: "Book Before the Show",
  script: "concert nights fill up",
  paras: [
    "A big show means a busy evening downtown. Getting in early is the whole trick.",
    "<a href=\"/reservations\">Book yours</a>, and mention the show so we can time it properly.",
  ],
};
