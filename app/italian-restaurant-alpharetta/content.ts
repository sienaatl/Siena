import type { Block, Faq, Reviews } from "@/components/LandingPage";

/**
 * Copy and layout for /italian-restaurant-alpharetta.
 *
 * Dishes, drinks and hours follow lib/site-data.json. The phone number renders from
 * the same file rather than being written into the copy.
 */

export const H1 = "The Italian Restaurant in Alpharetta";
export const H1_SCRIPT = "with a Mediterranean soul";

export const MARQUEE = [
  "House-Made Pasta",
  "Medi-Talian Kitchen",
  "Live Music Fridays",
  "Alpharetta, Georgia",
];

export const INTRO = {
  icon: "/assets/icono_about1.svg",
  heading: "Not Your Usual Red Sauce",
  script: "medi-talian",
  paras: [
    "Looking for an Italian restaurant in Alpharetta that feels a little different? Siena Restaurant &amp; Bar sits at 124 Devore Rd, a few minutes from Avalon and the Ameris Bank Amphitheatre. It is an Italian kitchen with a Mediterranean heart. The team calls it <em>Medi-talian</em>.",
    "House-made pastas and Italian classics sit happily next to hummus, lamb chops and bright Mediterranean plates. Come hungry, bring people you like, and plan to share a lot of food.",
  ],
  cta: { label: "SEE THE MENU", href: "/menus" },
};

export const BLOCKS: Block[] = [
  {
    kind: "split",
    bg: "green",
    heading: "Pasta Made Here",
    script: "by hand",
    image: "/assets/menu/rigatoni-alla-vodka.webp",
    alt: "Rigatoni alla vodka with burrata and shaved Parmesan at Siena Restaurant & Bar in Alpharetta",
    paras: [
      "Pasta is the heart of the Italian menu, and it is made in house. That is a difference you taste in the first bite.",
      "Start with the rigatoni alla vodka. House-made rigatoni with a proper chew, in a vodka tomato cream sauce with shallots, garlic, burrata and fresh basil. The bucatini al pepe nero goes the other way: a Pecorino Romano cream sauce with white wine, burrata and cracked black pepper. Both come with char-grilled focaccia for the last of the sauce.",
      "It is not complicated cooking. It is just done right.",
    ],
  },
  {
    kind: "gallery",
    bg: "black",
    icon: "/assets/icon_menu.svg",
    heading: "From the Italian Side",
    script: "worth ordering twice",
    intro:
      "Beyond the pasta, the Italian half of the menu runs deep. Because everything is built for sharing, you can put a whole table of it in the middle and work through it together. <a href=\"/menus\">See the full menu</a>.",
    items: [
      {
        image: "/assets/menu/calamari-fritti-siena.webp",
        alt: "Calamari fritti with pickled peppers and sweet chili aioli at Siena in Alpharetta",
        title: "CALAMARI FRITTI",
        sub: "Garlic butter, pickled peppers",
        href: "/menus?tab=main-menu",
      },
      {
        image: "/assets/Siena_20.03.26-D-LambChop-01.webp",
        alt: "Grilled lamb chops served at Siena Restaurant & Bar, Alpharetta",
        title: "LAMB CHOPS",
        sub: "For a night that matters",
        href: "/menus?tab=main-menu",
      },
      {
        image: "/assets/menu/bucatini-al-pepe-nero.webp",
        alt: "Bucatini al pepe nero with burrata at Siena, an Italian restaurant in Alpharetta",
        title: "BUCATINI",
        sub: "Pecorino cream, burrata, black pepper",
        href: "/menus?tab=main-menu",
      },
    ],
  },
  {
    kind: "split",
    bg: "green",
    flip: true,
    heading: "The Other Half",
    script: "mediterranean",
    image: "/assets/Siena_20.03.26-D-Feta.webp",
    alt: "Whipped feta with char-grilled bread on the Mediterranean menu at Siena, Alpharetta",
    paras: [
      "This is where Siena steps away from every other Italian place in town. Right alongside the pasta sits a full Mediterranean spread.",
      "Hummus della Casa is chickpea purée with tahini and lemon, finished with crispy chickpeas. The chicken tawook is marinated in yogurt for 48 hours and grilled over an open flame. The watermelon and feta salad is cool, sweet and salty at once, and a perfect plate when the Georgia heat rolls in. And the crispy cauliflower, house-battered with sweet chili aioli, wins over even the sceptics at the table.",
      "Save room for dessert. The pistachio baklava cheesecake folds two good ideas into one, and the pistachio crème brûlée is worth the crack of that sugar top.",
      "That mix is the whole point. You get Italy and the Mediterranean on one table, and you do not have to pick a lane.",
    ],
  },
  {
    kind: "split",
    bg: "black",
    heading: "The Room, and Friday Music",
    script: "after dark",
    image: "/assets/Siena_20.03.26-A-06.webp",
    alt: "The dining room and bar at Siena Restaurant & Bar in Alpharetta, with teal booths and a stocked back bar",
    paras: [
      "Siena is warm and upscale without ever feeling stiff. The lighting is bold and a little moody, the kind that makes everyone at the table look good and every plate look better. Relaxed enough for a Tuesday, dressy enough for a big one.",
      "The bar pulls its weight: twelve house cocktails, a thirty-bottle wine list and a deep spirits shelf. The Italian Job is a house favourite and a good place to start. There is a happy hour menu from 4 to 7pm when you want to keep it casual after work.",
      "Then there is Friday. Live music plays from 7 to 10pm, with a different act each week, and the whole room shifts up a gear. Music, low lighting, a cocktail in your hand. <a href=\"/live-music-fridays\">If you want a Friday that actually feels like a night out, this is the room for it</a>.",
    ],
  },
  {
    kind: "gallery",
    bg: "green",
    icon: "/assets/icon_menus.svg",
    heading: "Weekend Brunch",
    script: "saturday mornings",
    intro:
      "Saturday runs on its own brunch menu, and it is worth planning around. Same idea as dinner. Italian technique, Mediterranean brightness, plates built for sharing, just earlier and in better light.",
    items: [
      {
        image: "/assets/Siena_20.03.26-LS-LimoncelloRicottaPancakes-01.webp",
        alt: "Limoncello ricotta pancakes from the weekend brunch menu at Siena, Alpharetta",
        title: "PANCAKES",
        sub: "Limoncello ricotta, macerated berries",
        href: "/menus?tab=weekend-brunch",
      },
      {
        image: "/assets/Siena_20.03.26-LS-BakedEggsInSanMarzano.webp",
        alt: "Baked eggs in San Marzano tomato sauce with grilled focaccia at Siena, Alpharetta",
        title: "BAKED EGGS",
        sub: "San Marzano, basil, focaccia",
        href: "/menus?tab=weekend-brunch",
      },
      {
        image: "/assets/Siena_20.03.26-LS-OctopusCarpaccio.webp",
        alt: "Octopus carpaccio with fennel slaw served at brunch at Siena, Alpharetta",
        title: "CARPACCIO",
        sub: "Octopus, fennel, Castelvetrano olives",
        href: "/menus?tab=weekend-brunch",
      },
    ],
  },
  {
    kind: "cards",
    bg: "black",
    icon: "/assets/iconoestrellas.svg",
    heading: "Who It Suits",
    script: "find your night",
    cards: [
      {
        title: "Date Night",
        desc: "The lighting, the sharing plates and Friday live music set the mood without you having to try. <a href=\"/reservations\">Book a table for two</a>.",
      },
      {
        title: "Groups",
        desc: "The whole menu is built to pass around, so nobody gets stuck with a plate they did not want. Bring six and order widely.",
      },
      {
        title: "Celebrations",
        desc: "Birthdays, anniversaries, or a good week worth marking. Siena also hosts <a href=\"/events\">private events</a>. <a href=\"/event-inquiry\">Tell the team what you have in mind</a>.",
      },
    ],
  },
];

export const FAQS: Faq[] = [
  {
    q: "What kind of Italian food does Siena serve?",
    a: "House-made pastas and classic Italian plates with a Mediterranean twist. Popular choices include the rigatoni alla vodka, the bucatini al pepe nero, calamari fritti and the lamb chops. Mediterranean dishes like hummus, chicken tawook and the watermelon and feta salad sit on the same menu, so a table can order across both.",
  },
  {
    q: "Do I need a reservation?",
    a: "Booking ahead is a smart move, especially on Friday and Saturday evenings and for weekend brunch. Walk-ins are welcome at the bar when there is room. <a href=\"/reservations\">Book a table here</a>.",
  },
  {
    q: "Where is Siena located in Alpharetta?",
    a: "124 Devore Rd, Alpharetta, GA 30009, near Avalon and the Ameris Bank Amphitheatre. It is a short drive from Roswell, Johns Creek, Milton and Cumming.",
  },
  {
    q: "Does Siena serve brunch?",
    a: "Yes. Weekend brunch runs on Saturday mornings, with dishes like limoncello ricotta pancakes, truffle and pecorino frittata, baked eggs in San Marzano and steak and eggs Mediterraneo.",
  },
  {
    q: "Is Siena good for groups?",
    a: "Yes. The menu is tapas-style and built for sharing, which suits groups well. Siena also hosts <a href=\"/events\">private events</a> for birthdays, anniversaries and corporate dinners.",
  },
  {
    q: "Does Siena have live music?",
    a: "Live music plays on <a href=\"/live-music-fridays\">Friday nights</a> from 7 to 10pm, with a different act each week, alongside the full cocktail, wine and spirits list.",
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
  "Step-free entrance and accessible parking near the door",
  "Minutes from Avalon and the Ameris Bank Amphitheatre",
  "Dinner and bar service, plus Saturday brunch",
];

export const CLOSING = {
  heading: "Come and See Us",
  script: "we saved you a seat",
  paras: [
    "Ready for the Italian restaurant in Alpharetta your table keeps coming back to? Siena Restaurant &amp; Bar is a few minutes from Avalon, and there is usually a seat at the bar if you have not booked.",
    "<a href=\"/reservations\">Book your table</a> and come share a night of house-made pasta, Mediterranean plates and good music.",
  ],
};
