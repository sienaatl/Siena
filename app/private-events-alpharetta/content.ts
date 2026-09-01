import type { Block, Faq, Reviews } from "@/components/LandingPage";

/**
 * Copy and layout for /private-events-alpharetta.
 *
 * From the approved draft, with the standing corrections. The draft carried the dead
 * (404) 777-5124 three times; the number now renders from lib/site-data.json.
 *
 * This page keeps the draft's first-person voice ("we host", "tell us"). The other
 * four landing pages are third person, but an enquiry page reads better as the team
 * speaking, and it matches the tone of /event-inquiry which this page feeds.
 */

export const H1 = "Private Events Restaurant in Alpharetta";
export const H1_SCRIPT = "your table, your night";

export const MARQUEE = [
  "Birthdays and Anniversaries",
  "Corporate Dinners",
  "Sharing Plates for Groups",
  "Alpharetta, Georgia",
];

export const INTRO = {
  icon: "/assets/icon_happenings.svg",
  heading: "Special Without the Fuss",
  script: "we handle the rest",
  paras: [
    "Planning a night out for a group and want somewhere that feels like an occasion without the hassle? We host birthdays, anniversaries, corporate dinners, showers and big group nights in a warm room near Avalon and the Ameris Bank Amphitheatre.",
    "Our food comes as tapas-style sharing plates, so groups eat together and pass everything around. Add cocktails, live music and a team that makes booking easy, and you have somewhere people remember long after the last toast.",
  ],
  cta: { label: "ENQUIRE NOW", href: "/event-inquiry" },
};

export const BLOCKS: Block[] = [
  {
    kind: "split",
    bg: "green",
    heading: "Not Too Stiff, Not Too Loud",
    script: "right in the middle",
    image: "/assets/events/1779116274229_qew7cz.webp",
    alt: "A group celebration underway in the private event room at Siena, Alpharetta",
    paras: [
      "Some restaurants feel too formal for a celebration. Others are too loud to hear your own table. We sit in the middle. The room is warm and a little dramatic, with bold lighting that makes any group feel like the main event.",
      "We opened in December 2025 with a simple idea: bring Mediterranean and Italian food together, serve it in a way that gets people talking, and treat every table like it matters.",
      "We are a women-led team. Co-owner and manager Aida Lemma runs the floor and executive chef Baba Estavillo runs the kitchen, so when you book with us you are working with people who care about the details. <a href=\"/about-us\">More about us</a>.",
    ],
  },
  {
    kind: "cards",
    bg: "black",
    icon: "/assets/iconoestrellas.svg",
    heading: "What We Host",
    script: "most weeks",
    intro:
      "Whatever you are marking, we have a setup for it. If you are after a special event restaurant in Alpharetta that can flex to fit your plans, this is it.",
    cards: [
      {
        title: "Birthdays",
        desc: "Bring the whole crew. We will help with a toast, a round of dessert bites and a table that feels festive from the first drink.",
      },
      {
        title: "Corporate Dinners",
        desc: "Client dinners, team nights and end-of-quarter meals all work here. The sharing format keeps the table relaxed and the conversation going.",
      },
      {
        title: "Showers and Parties",
        desc: "Baby showers, bridal showers, engagement parties and graduations all fit. We will help plan the food so nobody is running around on the day.",
      },
    ],
  },
  {
    kind: "split",
    bg: "green",
    flip: true,
    heading: "How We Set the Room",
    script: "tell us the headcount",
    image: "/assets/events/1779117470689_4tnk9t.webp",
    alt: "Tables arranged for a group booking at Siena Restaurant & Bar, Alpharetta",
    paras: [
      "The room is the first thing people notice. Warm and upscale but still easy to relax in. Bold lighting, inviting tables, and a bit of energy to the space.",
      "We can set it up a few ways depending on your numbers and the mood you want. One long table so everyone can talk, or a cluster of tables for a bigger party. Tell us how many people you are expecting and what the night is about, and we will shape the setup around it.",
      "We are a dinner and bar room, so evenings are our thing. That makes us a strong pick for after-work parties, celebration dinners and late group nights at the weekend.",
    ],
  },
  {
    kind: "gallery",
    bg: "black",
    icon: "/assets/icon_menu.svg",
    heading: "Food Made for Groups",
    script: "everything gets passed",
    intro:
      "This is where the sharing format really works. A group orders a spread and everyone tastes a bit of everything. Nobody is stuck with one plate. <a href=\"/menus\">See the full menu</a>.",
    items: [
      {
        image: "/assets/Siena_20.03.26-D-Feta.webp",
        alt: "Sharing platters and Siena hummus for a group booking in Alpharetta",
        title: "TO START",
        sub: "Platters, hummus, whipped feta",
        href: "/mediterranean-restaurant-alpharetta",
      },
      {
        image: "/assets/Siena_20.03.26-D-ShirimpFranceseArancini.webp",
        alt: "Shrimp francese arancini for the table at a private event at Siena, Alpharetta",
        title: "FOR THE TABLE",
        sub: "Arancini and charred cauliflower",
        href: "/menus?tab=main-menu",
      },
      {
        image: "/assets/Siena_20.03.26-D-MeatBalls-02.webp",
        alt: "House-made pasta served family style at a group dinner in Alpharetta",
        title: "THE PASTA",
        sub: "House-made, a favourite for a reason",
        href: "/italian-restaurant-alpharetta",
      },
    ],
  },
  {
    kind: "split",
    bg: "green",
    heading: "Cocktails, Happy Hour, Live Music",
    script: "the evening, sorted",
    image: "/assets/events/1779116455576_rbt3oe.webp",
    alt: "Cocktails and drinks at a private event at Siena Restaurant & Bar in Alpharetta",
    paras: [
      "The bar is a real part of the night. Twenty house cocktails, a thirty-bottle wine list and a deep spirits shelf. The Italian Job and the espresso martini are the usual openers.",
      "There is a happy hour menu if your group wants to start early and keep it casual, which works well for after-work bookings.",
      "On Friday a saxophonist plays live, and the whole room lifts. If your date is flexible, a Friday booking gives you music without arranging anything yourself. <a href=\"/live-music-fridays\">See what Friday looks like</a>.",
    ],
  },
  {
    kind: "split",
    bg: "black",
    flip: true,
    heading: "How to Book",
    script: "start here",
    image: "/assets/events/1779117506791_jvttbu.webp",
    alt: "Guests at a celebration dinner at Siena Restaurant & Bar in Alpharetta",
    paras: [
      "Send us the date, a rough headcount and what the night is for. That is enough for us to come back with options.",
      "<a href=\"/event-inquiry\">Fill in the event enquiry form</a> and the team will be in touch. If you would rather talk it through, call the restaurant and ask for the events team.",
      "For a smaller table that does not need a full event setup, a normal <a href=\"/reservations\">reservation</a> is often all you need.",
    ],
  },
];

export const FAQS: Faq[] = [
  {
    q: "What kind of private events do you host?",
    a: "Birthdays, anniversaries, corporate and client dinners, baby and bridal showers, engagement parties, graduations and group nights out. If you are not sure whether your plan fits, ask us.",
  },
  {
    q: "How many people can you take?",
    a: "It depends on the date and how you want the room arranged, from a long table for one group to a cluster of tables for a bigger party. Send us your headcount and we will tell you what works.",
  },
  {
    q: "How do I book?",
    a: "Send the date, a rough headcount and what the occasion is through the <a href=\"/event-inquiry\">event enquiry form</a>, and the team will come back to you with options.",
  },
  {
    q: "How does the food work for a group?",
    a: "The menu is tapas-style, so plates land in the middle and everyone shares. We will help you plan a spread for your numbers so nobody is ordering on the night. Vegetarians are easy to cater for.",
  },
  {
    q: "Can we have live music?",
    a: "A saxophonist plays on <a href=\"/live-music-fridays\">Friday nights</a> as part of the normal evening. If your date is flexible, booking a Friday gets you music without arranging anything.",
  },
  {
    q: "Where are you and what are the hours?",
    a: "124 Devore Rd, Alpharetta, GA 30009, near Avalon and the Ameris Bank Amphitheatre. Closed Monday. Tuesday to Thursday 4pm to 10pm, Friday and Saturday 4pm to midnight, Sunday 4pm to 10pm, plus Saturday brunch from 10am.",
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
    {
      text: "Food was great I had the Chicken tawook and rice it tasted very fresh and lite",
      author: "Eline P.",
    },
  ],
};

export const PRACTICAL = [
  "Step-free entrance and accessible parking near the door",
  "Minutes from Avalon and the Ameris Bank Amphitheatre",
  "Evening room, open until midnight Friday and Saturday",
];

export const CLOSING = {
  heading: "Plan Your Event",
  script: "tell us the date",
  paras: [
    "Send the date, a rough headcount and what the night is for. We will shape the room and the food around it.",
    "<a href=\"/event-inquiry\">Start your event enquiry</a>, or <a href=\"/reservations\">book a normal table</a> if your group is small enough not to need a setup.",
  ],
};
