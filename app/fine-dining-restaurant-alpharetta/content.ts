import type { Block, Faq, Reviews } from "@/components/LandingPage";

/**
 * Copy and layout for /fine-dining-restaurant-alpharetta.
 *
 * Page 6 in the original plan. Search Console shows the term at position 15.5 with
 * only 6 impressions, so the volume is modest, but it is a distinct positioning term
 * and the only one of the remaining plan items with no page and no duplicate.
 *
 * The honest angle matters here. Siena is not white-tablecloth, tasting-menu fine
 * dining, and claiming that would set the wrong expectation and produce bad reviews.
 * What it genuinely is: chef-driven cooking and premium ingredients in an upscale
 * room, served as sharing plates, without the formality. The page leans on that
 * difference rather than pretending to be something it is not.
 *
 * Building this page also means /blogs/fine-dining-restaurant-alpharetta now competes
 * with it, so that post is redirected here in next.config.ts.
 */

export const H1 = "Fine Dining in Alpharetta";
export const H1_SCRIPT = "without the formality";

export const MARQUEE = [
  "Chef-Driven Kitchen",
  "Thirty-Bottle Wine List",
  "Live Sax Fridays",
  "Alpharetta, Georgia",
];

export const INTRO = {
  icon: "/assets/icono_123.svg",
  heading: "Upscale, Not Stuffy",
  script: "nobody whispers here",
  paras: [
    "Fine dining usually comes with a warning: keep your voice down, mind which fork, expect the bill. Siena Restaurant &amp; Bar takes the cooking seriously and leaves the rest of it out.",
    "The room is warm and low-lit, the kitchen is chef-driven, and the ingredients are the ones you would expect at the top end. What is missing is the formality. At 124 Devore Rd in downtown Alpharetta, a few minutes from Avalon.",
  ],
  cta: { label: "BOOK A TABLE", href: "/reservations" },
};

export const BLOCKS: Block[] = [
  {
    kind: "split",
    bg: "green",
    heading: "Who Cooks It",
    script: "chef-driven",
    image: "/assets/about3.webp",
    alt: "The chef-driven kitchen team at a fine dining restaurant in Alpharetta",
    paras: [
      "Executive chef Baba Estavillo runs the kitchen and co-owner Aida Lemma runs the floor. It is a women-led restaurant, which is still rare at this end of the market.",
      "The cooking is Italian technique with Mediterranean brightness. Pasta is made in house rather than bought in. Fish arrives whole. The lamb is cooked to order rather than held.",
      "That is where the money goes here: into the kitchen rather than into the tablecloths. <a href=\"/about-us\">More about how Siena started</a>.",
    ],
  },
  {
    kind: "gallery",
    bg: "black",
    icon: "/assets/icon_menus.svg",
    heading: "The Top of the Menu",
    script: "worth the occasion",
    intro:
      "If you are marking something, these are the plates people order. All of them share, which is unusual at this level and rather better for a table of four. <a href=\"/menus\">See the full menu</a>.",
    items: [
      {
        image: "/assets/Siena_20.03.26-PS-TheFlameSteak.webp",
        alt: "The Flame steak and filet mignon kabob at a fine dining restaurant in Alpharetta",
        title: "THE GRILL",
        sub: "Filet mignon kabob, the Flame steak",
        href: "/menus?tab=main-menu",
      },
      {
        image: "/assets/Siena_20.03.26-D-LambChop-01.webp",
        alt: "Grilled lamb chops served at an upscale restaurant in Alpharetta",
        title: "LAMB CHOPS",
        sub: "Cooked to order, the house signature",
        href: "/menus?tab=main-menu",
      },
      {
        image: "/assets/Siena_20.03.26-PS-GoldenOxtail.webp",
        alt: "Slow braised oxtail and Mediterranean branzino at a fine dining restaurant in Alpharetta",
        title: "SLOW COOKED",
        sub: "Braised oxtail, Mediterranean branzino",
        href: "/menus?tab=main-menu",
      },
    ],
  },
  {
    kind: "split",
    bg: "green",
    flip: true,
    heading: "The Cellar and the Bar",
    script: "thirty bottles deep",
    image: "/assets/Siena_20.03.26-LS-TiramisuEspressoMartini.webp",
    alt: "Wine and cocktails at a fine dining restaurant in Alpharetta, Georgia",
    paras: [
      "A thirty-bottle wine list running from Provence rosé and Burgundy chardonnay to Napa cabernet, with Moët &amp; Chandon and a handful of other champagnes for the nights that call for it.",
      "The spirits shelf runs deep too: Macallan 12, Woodford Reserve, a proper mezcal selection and twenty house cocktails. Ask the team what suits what you have ordered rather than guessing from the list.",
      "There is a <a href=\"/happy-hour-alpharetta\">happy hour menu</a> earlier in the evening if you want to start at the bar.",
    ],
  },
  {
    kind: "split",
    bg: "black",
    heading: "The Room After Dark",
    script: "and friday sax",
    image: "/assets/hero5.webp",
    alt: "The low-lit dining room at an upscale restaurant in Alpharetta on an evening",
    paras: [
      "Bold, low lighting. Space between tables. The kind of room that makes an ordinary Tuesday feel like it counts, and a real occasion feel properly marked.",
      "On Friday a saxophonist plays live, which is the closest Siena gets to formality and still nobody is being quiet about it. <a href=\"/live-music-fridays\">See what Friday looks like</a>.",
      "Friday and Saturday run to midnight, so there is no sense of being moved along after the dessert plates go.",
    ],
  },
  {
    kind: "cards",
    bg: "green",
    icon: "/assets/iconoestrellas.svg",
    heading: "What to Expect",
    script: "so there are no surprises",
    intro:
      "Worth knowing before you book, because Siena does a few things differently from a traditional fine dining room.",
    cards: [
      {
        title: "Plates Are Shared",
        desc: "No individual main courses. Order four or five between two and pass them around. It suits an occasion better than everyone guarding their own plate. <a href=\"/tapas-restaurant-alpharetta\">More on the format</a>.",
      },
      {
        title: "No Dress Code",
        desc: "Upscale but not formal. A nice shirt and a full outfit both belong. Nobody will look at your shoes.",
      },
      {
        title: "Allow the Evening",
        desc: "Two to three hours is normal. Food arrives in waves rather than courses, so this is not a quick dinner before something else.",
      },
    ],
  },
  {
    kind: "split",
    bg: "black",
    flip: true,
    heading: "For the Occasions",
    script: "that need a room",
    image: "/assets/hero6.webp",
    alt: "A celebration dinner at an upscale restaurant in Alpharetta",
    paras: [
      "Anniversaries, milestone birthdays, a promotion worth marking. Mention it when you book and the team will handle the timing rather than improvise on the night.",
      "For something larger there is <a href=\"/private-dining-alpharetta\">private dining</a>, and for two there is <a href=\"/date-night-alpharetta\">date night</a>. Both use the same room and the same kitchen.",
      "Siena sits minutes from Avalon and the Ameris Bank Amphitheatre, which makes it a natural stop either side of a show.",
    ],
  },
];

export const FAQS: Faq[] = [
  {
    q: "Is Siena actually fine dining?",
    a: "It is chef-driven cooking and premium ingredients in an upscale room, but it is not white-tablecloth formal and there is no tasting menu. Plates are shared rather than plated individually. If you want serious food without the ceremony, it fits. If you want a hushed room and a sommelier at your elbow, it does not.",
  },
  {
    q: "Is there a dress code?",
    a: "No. Upscale but relaxed. A nice shirt or a full outfit both work and nobody will feel out of place either way.",
  },
  {
    q: "What should we order for a special occasion?",
    a: "The lamb chops, the filet mignon kabob and the Flame steak are the plates people order when they are marking something. Add mezze to start and the saffron crème brûlée or the baklava cheesecake to finish.",
  },
  {
    q: "Do you have a wine list?",
    a: "Thirty bottles, from Provence rosé and Burgundy chardonnay to Napa cabernet, plus champagne including Moët &amp; Chandon. The spirits list runs to Macallan 12 and a full mezcal selection.",
  },
  {
    q: "How long does dinner take?",
    a: "Two to three hours. Plates are shared and arrive in waves, so it runs longer than a standard three-course meal. Friday and Saturday go to midnight.",
  },
  {
    q: "Where is it and do I need to book?",
    a: "124 Devore Rd, Alpharetta, GA 30009. Booking ahead is sensible for Friday and Saturday, especially on live music nights. <a href=\"/reservations\">Book a table here</a>.",
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
  "Step-free entrance and accessible parking near the door",
  "Minutes from Avalon and the Ameris Bank Amphitheatre",
  "Open until midnight Friday and Saturday",
];

export const CLOSING = {
  heading: "Book the Evening",
  script: "and take your time",
  paras: [
    "Serious cooking, a room worth sitting in and nobody hurrying you out. That is the whole idea.",
    "<a href=\"/reservations\">Book your table</a>, and tell us if you are marking something.",
  ],
};
