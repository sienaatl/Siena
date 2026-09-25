import type { Block, Faq, Reviews } from "@/components/LandingPage";

/**
 * Copy and layout for /best-restaurants-alpharetta.
 *
 * Dishes, drinks and hours follow lib/site-data.json. The phone number renders from
 * the same file rather than being written into the copy.
 */

export const H1 = "One of the Best Restaurants in Alpharetta GA";
export const H1_SCRIPT = "worth booking twice";

export const MARQUEE = [
  "Medi-Talian Sharing Plates",
  "House-Made Pasta",
  "Live Music Fridays",
  "Alpharetta, Georgia",
];

export const INTRO = {
  icon: "/assets/iconoestrellas.svg",
  heading: "More Than a Good Plate",
  script: "what people come back for",
  paras: [
    "When people go looking for the best restaurants in Alpharetta GA, they usually want more than good food. They want a room that feels like an occasion, a drink worth ordering, and a team that looks after them.",
    "Siena Restaurant &amp; Bar sits at 124 Devore Rd, close to Avalon and the Ameris Bank Amphitheatre, and an easy drive from Roswell, Johns Creek, Milton and Cumming. It opened in December 2025, and it is built for coming back to.",
  ],
  cta: { label: "SEE THE MENU", href: "/menus" },
};

export const BLOCKS: Block[] = [
  {
    kind: "split",
    bg: "green",
    heading: "What Puts a Place Top of the List",
    script: "the short answer",
    image: "/assets/Siena_20.03.26-A-03.webp",
    alt: "The dining room at Siena Restaurant & Bar in Alpharetta, with tables set along the windows",
    paras: [
      "Alpharetta has plenty of good places to eat, so what pushes one to the top? The food has to be fresh and made with care. The room has to feel warm without feeling stiff. The drinks need to be worth ordering. The service has to make you feel looked after. And there has to be a reason to come back that goes past one good dish.",
      "Siena is a Mediterranean and <a href=\"/italian-restaurant-alpharetta\">Italian</a> mash-up the team calls Medi-talian. Tapas-style sharing plates, house-made pasta, proper cocktails and live music on Friday nights.",
      "It is upscale but comfortable. You can arrive in a nice shirt or your best dress and feel right either way. That balance is hard to pull off, and Siena makes it look easy.",
    ],
  },
  {
    kind: "gallery",
    bg: "black",
    icon: "/assets/icon_menu.svg",
    heading: "The Food",
    script: "built for sharing",
    intro:
      "You order a few plates, pass them round, and everyone gets a little of everything. It takes the pressure off picking one thing. Executive chef Baba Estavillo runs the kitchen, and her cooking is the reason to come. <a href=\"/menus\">See the full menu</a>.",
    items: [
      {
        image: "/assets/Siena_20.03.26-PS-Feta-01.webp",
        alt: "Whipped feta with char-grilled bread at Siena Restaurant & Bar in Alpharetta",
        title: "TO START",
        sub: "Whipped feta, hummus, watermelon salad",
        href: "/menus?tab=main-menu",
      },
      {
        image: "/assets/menu/filet-mignon-kabo.webp",
        alt: "Filet mignon kabob with basmati rice pilaf at Siena Restaurant & Bar, Alpharetta",
        title: "THE MAINS",
        sub: "Filet mignon kabob, salmon limone",
        href: "/menus?tab=main-menu",
      },
      {
        image: "/assets/Siena_20.03.26-D-LambChop-02.webp",
        alt: "Grilled lamb chops at Siena Restaurant & Bar in Alpharetta",
        title: "LAMB CHOPS",
        sub: "Rich, and cooked right",
        href: "/menus?tab=main-menu",
      },
    ],
  },
  {
    kind: "split",
    bg: "green",
    flip: true,
    heading: "The Room and Friday Music",
    script: "after the food",
    image: "/assets/hero3.webp",
    alt: "Teal booths and the lit Siena sign in the dining room at Siena in Alpharetta",
    paras: [
      "Food gets you in the door. The room keeps you there. Siena's space is warm and a little bold, with lighting that sets the mood the second you walk in. It makes a normal Tuesday feel like a night out.",
      "On Friday live music plays from 7 to 10pm, with a different act each week. It fills the room without drowning out your table, so you can still talk and hear each other. <a href=\"/live-music-fridays\">See what Friday nights look like</a>.",
      "The room works for a lot of moods. Lively enough for a group, calm enough for a quiet <a href=\"/date-night-alpharetta\">date night</a>. That flexibility is a big part of why Siena keeps coming up when people talk about where to eat in Alpharetta.",
    ],
  },
  {
    kind: "gallery",
    bg: "black",
    icon: "/assets/icono_123.svg",
    heading: "The Bar Is Not an Afterthought",
    script: "twelve house cocktails",
    intro:
      "The cocktail list is short, sharp and worth your time. There is a happy hour menu from 4 to 7pm if you want a drink and a few small plates without a full sit-down, and the bar is a good place to land before or after a show at the Ameris Bank Amphitheatre.",
    items: [
      {
        image: "/assets/Siena_20.03.26-LS-SienaMargarita-01.webp",
        alt: "A bartender finishing a cocktail at the bar at Siena Restaurant & Bar in Alpharetta",
        title: "SIENA MARGARITA",
        sub: "Bright, balanced, not too sweet",
        href: "/menus?tab=libations",
      },
      {
        image: "/assets/Siena_20.03.26-LS-TiramisuEspressoMartini.webp",
        alt: "An espresso martini being poured into a coupe at the bar at Siena in Alpharetta",
        title: "ESPRESSO MARTINI",
        sub: "Rich, with a lift for a long night",
        href: "/menus?tab=libations",
      },
      {
        image: "/assets/Siena_20.03.26-LS-MatchaMartini-01.webp",
        alt: "Matcha martini from the cocktail list at Siena Restaurant & Bar, Alpharetta",
        title: "THE LIST",
        sub: "Thirty wines and a deep spirits shelf",
        href: "/menus?tab=libations",
      },
    ],
  },
  {
    kind: "cards",
    bg: "green",
    icon: "/assets/icon6.svg",
    heading: "Who It Suits",
    script: "most nights, honestly",
    cards: [
      {
        title: "Date Night",
        desc: "The warm room, Friday live music and the sharing plates make it easy to relax and talk. Order a few dishes and let the night stretch out. <a href=\"/date-night-alpharetta\">More on date night</a>.",
      },
      {
        title: "Groups",
        desc: "The tapas-style menu was built for a table full of friends. Nobody fights over one main. You order a spread and everyone is happy.",
      },
      {
        title: "Celebrations",
        desc: "Birthdays, anniversaries, work wins. The team handles them with real care, and the pistachio baklava cheesecake is a good way to close. Siena also hosts <a href=\"/private-dining-alpharetta\">private events</a>.",
      },
    ],
  },
  {
    kind: "split",
    bg: "black",
    heading: "A Women-Led Table",
    script: "who runs it",
    image: "/assets/Siena_20.03.26-A-05.webp",
    alt: "The host stand at the entrance to Siena Restaurant & Bar, a women-led restaurant in Alpharetta",
    paras: [
      "One more thing sets Siena apart. It is a women-led team. Co-owner and manager Aida Lemma runs the floor, and executive chef Baba Estavillo runs the kitchen.",
      "You can feel that leadership in the details, from the welcome at the door to the food coming out of the kitchen. It shows up on the plate and in the service. <a href=\"/about-us\">More about how Siena started</a>.",
    ],
  },
];

export const FAQS: Faq[] = [
  {
    q: "What makes Siena one of the best restaurants in Alpharetta?",
    a: "Fresh Medi-talian food, house-made pasta, proper cocktails, a warm room, live music on Fridays and friendly service. The sharing-plate menu makes it fun for groups and easy for dates. Add a women-led team that cares about the details and you get a place people book again.",
  },
  {
    q: "Is Siena good for a special occasion?",
    a: "Yes. It suits date nights, birthdays, anniversaries and celebrations of all kinds. The warm lighting, Friday live music and the shareable menu set the mood. Siena also hosts <a href=\"/private-dining-alpharetta\">private events</a> for something bigger.",
  },
  {
    q: "Do they take reservations?",
    a: "Yes. <a href=\"/reservations\">Book a table here</a>. Reservations are a smart move at the weekend, since Friday and Saturday fill up fast.",
  },
  {
    q: "What food does Siena serve?",
    a: "Mediterranean and Italian together, or Medi-talian. The menu is tapas-style, so you share. Favourites include the rigatoni alla vodka, filet mignon kabob, salmon limone, chicken tawook, hummus, lamb chops and the watermelon and feta salad. For dessert, the pistachio baklava cheesecake or the pistachio crème brûlée.",
  },
  {
    q: "Where is Siena located?",
    a: "124 Devore Rd, Alpharetta, GA 30009, near Avalon and the Ameris Bank Amphitheatre. An easy drive from Roswell, Johns Creek, Milton and Cumming.",
  },
  {
    q: "What are the opening hours?",
    a: "Closed Monday. Tuesday to Thursday 4pm to 10pm, Friday and Saturday 4pm to midnight, Sunday 4pm to 10pm. Dinner and bar service, plus Saturday brunch from 10am.",
  },
];

/** Quotes taken verbatim from public Yelp reviews, names as the reviewers display them. */
export const REVIEWS: Reviews = {
  quotes: [
    {
      text: "The combination of incredible Mediterranean cuisine, attentive service, and live music creates a unique atmosphere",
      author: "Chelsea G.",
    },
    {
      text: "Food was great I had the Chicken tawook and rice it tasted very fresh and lite",
      author: "Eline P.",
    },
    { text: "The lamb chops is very flavorful as well as humus n pita bread.", author: "Big O." },
  ],
};

export const PRACTICAL = [
  "Step-free entrance and accessible parking near the door",
  "Minutes from Avalon and the Ameris Bank Amphitheatre",
  "Dinner and bar service, plus Saturday brunch",
];

export const CLOSING = {
  heading: "Book Your Table",
  script: "we saved you a seat",
  paras: [
    "Ready for a good night out? Come and see why Siena keeps coming up when people talk about the best restaurants in Alpharetta GA.",
    "<a href=\"/reservations\">Book your table</a>, or pull up a seat at the bar and order the hummus and a cocktail.",
  ],
};
