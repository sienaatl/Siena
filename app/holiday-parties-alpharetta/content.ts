import type { Block, Faq, Reviews } from "@/components/LandingPage";

/**
 * Copy and layout for /holiday-parties-alpharetta.
 *
 * Built 5 September because the booking window for December parties runs roughly
 * September to November. The site had no holiday content at all.
 *
 * IMPORTANT, do not change without asking the client first. This page sells the
 * service Siena demonstrably has: private dining and group bookings through the
 * festive season. It deliberately makes NO claim about being open on Christmas Day
 * or New Year's Eve, no special holiday menu, no packages and no pricing, because
 * none of that has been confirmed. Every unknown is framed as something the guest
 * asks about rather than something we promise. If the client confirms holiday
 * opening or a festive menu, this page gets much stronger and should be revisited.
 */

export const H1 = "Holiday Parties in Alpharetta";
export const H1_SCRIPT = "book the room early";

export const MARQUEE = [
  "Company Parties",
  "Team Dinners",
  "Sharing Plates for Groups",
  "Alpharetta, Georgia",
];

export const INTRO = {
  icon: "/assets/icon_aboutus.svg",
  heading: "The Part Nobody Wants to Organise",
  script: "we will take it",
  paras: [
    "Somebody always ends up organising the company dinner, and it is usually in November when everywhere good has gone. Siena Restaurant &amp; Bar takes group bookings through the festive season at 124 Devore Rd in downtown Alpharetta, minutes from Avalon.",
    "The food comes as tapas-style sharing plates, which solves the usual problem of twenty people and twenty different dietary opinions. Send us the date and a rough headcount and we will do the rest.",
  ],
  cta: { label: "ENQUIRE NOW", href: "/event-inquiry" },
};

export const BLOCKS: Block[] = [
  {
    kind: "split",
    bg: "green",
    heading: "Book Before November",
    script: "seriously",
    image: "/assets/events/1779116412260_ckub4v.webp",
    alt: "A group holiday party in the dining room at Siena Restaurant & Bar in Alpharetta",
    paras: [
      "December fills from September. By the time most people start ringing round, the good Friday and Saturday slots have gone and everyone is settling for a Tuesday in a room they did not want.",
      "If you have a rough date and a rough number, that is enough to hold something. Details can follow.",
      "Midweek in December is genuinely easier and often better, since the room is calmer and the kitchen has more attention for your table.",
    ],
  },
  {
    kind: "cards",
    bg: "black",
    icon: "/assets/iconoestrellas.svg",
    heading: "What We Take",
    script: "through the season",
    intro:
      "Whatever shape your December is, the room adapts. Tell us the occasion and the numbers and we will shape the setup around it.",
    cards: [
      {
        title: "Company Parties",
        desc: "Team dinners, department nights and end-of-year get-togethers. The sharing format keeps a long table talking rather than everyone eating in silence.",
      },
      {
        title: "Client Dinners",
        desc: "Smaller, quieter, and a room that looks like you chose it carefully. Midweek works best for these.",
      },
      {
        title: "Family and Friends",
        desc: "Family gatherings, reunions and the annual catch-up with people you only see in December. Bring everyone and order widely.",
      },
    ],
  },
  {
    kind: "split",
    bg: "green",
    flip: true,
    heading: "How the Room Works",
    script: "tell us the headcount",
    image: "/assets/events/1779117470689_4tnk9t.webp",
    alt: "Tables set up for a company holiday party in Alpharetta, Georgia",
    paras: [
      "One long table if you want everyone in one conversation. A cluster of tables if the group is bigger and people will move around. We set it up around your numbers rather than making you fit ours.",
      "The room is warm and low-lit, which does a lot of work on a December evening. Upscale, but nobody has to be on their best behaviour.",
      "We are a dinner and bar room, so evenings are what we do. Friday and Saturday run to midnight, which suits a party that is not in a hurry.",
    ],
  },
  {
    kind: "gallery",
    bg: "black",
    icon: "/assets/icon_menu.svg",
    heading: "Food for a Long Table",
    script: "everything gets passed",
    intro:
      "Tapas-style sharing plates land in the middle and everyone helps themselves, which is far easier than twenty individual orders on a busy December night. There is plenty without meat, so mixed groups eat from the same spread. <a href=\"/menus\">See the full menu</a>.",
    items: [
      {
        image: "/assets/Siena_20.03.26-D-Feta.webp",
        alt: "Mezze sharing platters for a holiday party in Alpharetta",
        title: "TO START",
        sub: "Hummus, whipped feta, warm pita",
        href: "/mediterranean-restaurant-alpharetta",
      },
      {
        image: "/assets/Siena_20.03.26-D-MeatBalls-02.webp",
        alt: "House-made pasta served family style at a group dinner in Alpharetta",
        title: "THE MIDDLE",
        sub: "House-made pasta, arancini, cauliflower",
        href: "/italian-restaurant-alpharetta",
      },
      {
        image: "/assets/Siena_20.03.26-D-LambChop-01.webp",
        alt: "Lamb chops and grilled dishes for a company party in Alpharetta",
        title: "THE GRILL",
        sub: "Lamb chops, skewers, the Flame steak",
        href: "/menus?tab=main-menu",
      },
    ],
  },
  {
    kind: "split",
    bg: "green",
    heading: "The Bar, and Fridays",
    script: "a saxophone helps",
    image: "/assets/Siena_20.03.26-LS-SienaMargarita-01.webp",
    alt: "Cocktails and drinks at a holiday party in Alpharetta",
    paras: [
      "Twenty house cocktails, a thirty-bottle wine list and a deep spirits shelf. A few bottles for the table works better with sharing plates than everyone queuing at the bar.",
      "There is a <a href=\"/happy-hour-alpharetta\">happy hour menu</a> earlier in the evening if the group is arriving from work in stages.",
      "On Friday a saxophonist plays live. If your date is flexible, booking a Friday gets you music without organising any. <a href=\"/live-music-fridays\">See what Friday looks like</a>.",
    ],
  },
  {
    kind: "split",
    bg: "black",
    flip: true,
    heading: "How to Book",
    script: "three things",
    image: "/assets/events/1779117506791_jvttbu.webp",
    alt: "Guests at a December celebration dinner at Siena Restaurant & Bar in Alpharetta",
    paras: [
      "Send the date, a rough headcount and what the evening is for. That is enough for us to come back with options, and everything else can be settled later.",
      "<a href=\"/event-inquiry\">Fill in the enquiry form</a> and the team will be in touch. If it is easier to talk it through, call the restaurant and ask for the events team.",
      "Smaller groups that do not need a setup can simply <a href=\"/reservations\">book a table</a>. For everything else there is <a href=\"/private-dining-alpharetta\">private dining</a>.",
    ],
  },
];

export const FAQS: Faq[] = [
  {
    q: "When should we book a December party?",
    a: "September to early November. December Fridays and Saturdays go first, and by late November most of the good slots have gone. A rough date and headcount is enough to start.",
  },
  {
    q: "How many people can you take?",
    a: "It depends on the date and how you want the room arranged, from one long table to a cluster for a bigger group. Send your numbers through the <a href=\"/event-inquiry\">enquiry form</a> and we will tell you what works.",
  },
  {
    q: "How does the food work for a big group?",
    a: "Tapas-style sharing plates, so dishes land in the middle and everyone helps themselves rather than placing twenty separate orders. We will help plan a spread for your numbers.",
  },
  {
    q: "What about people who do not eat meat?",
    a: "Straightforward. Between the mezze, salads, pasta and vegetable plates there is a full meal without meat, and because everything is shared nobody eats separately. <a href=\"/vegetarian-restaurant-alpharetta\">More on that</a>.",
  },
  {
    q: "Are you open on Christmas Day or New Year's Eve?",
    a: "Ask us when you enquire. Holiday opening is confirmed closer to the time, so it is worth checking rather than assuming.",
  },
  {
    q: "Where are you and what are the normal hours?",
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
  "Evening room, open until midnight Friday and Saturday",
];

export const CLOSING = {
  heading: "Hold Your Date",
  script: "december fills fast",
  paras: [
    "A date and a rough number is all it takes to start. Everything else can wait until you know who is coming.",
    "<a href=\"/event-inquiry\">Send your enquiry</a> and we will come back with options.",
  ],
};
