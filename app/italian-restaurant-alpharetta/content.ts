import type { Block, Faq, Reviews } from "@/components/LandingPage";

/**
 * Copy and layout for /italian-restaurant-alpharetta.
 *
 * Based on the approved draft in the SEO workspace, with four corrections applied:
 *
 *  1. The phone number is never written into the copy. It renders from
 *     lib/site-data.json, so it cannot go stale the way the draft's number had.
 *  2. Weekend brunch is kept and given its own section. It is a real 15-dish service.
 *  3. Internal links point only at pages that exist today. The draft linked to four
 *     landing pages that have not been built, which would have shipped live 404s.
 *  4. Parking and step-free access are stated outright. Local pages that rank
 *     consistently answer the practical questions, and the profile confirms both.
 *
 * The prose is broken across splits, photo grids and cards so the page reads the way
 * the rest of the site does rather than as one long column.
 */

export const H1 = "The Italian Restaurant in Alpharetta";
export const H1_SCRIPT = "with a Mediterranean soul";

export const MARQUEE = [
  "House-Made Pasta",
  "Medi-Talian Kitchen",
  "Live Sax Fridays",
  "Alpharetta, Georgia",
];

export const INTRO = {
  icon: "/assets/icono_about1.svg",
  heading: "Not Your Usual Red Sauce",
  script: "medi-talian",
  paras: [
    "Looking for an Italian restaurant in Alpharetta that feels a little different? Siena Restaurant &amp; Bar sits at 124 Devore Rd, a few minutes from Avalon and the Ameris Bank Amphitheatre. It is an Italian kitchen with a Mediterranean heart. The team calls it <em>Medi-talian</em>.",
    "House-made pastas and Italian classics sit happily next to warm hummus, lamb chops and bright Mediterranean plates. Come hungry, bring people you like, and plan to share a lot of food.",
  ],
  cta: { label: "SEE THE MENU", href: "/menus" },
};

export const BLOCKS: Block[] = [
  {
    kind: "split",
    bg: "green",
    heading: "Pasta Made Here",
    script: "by hand",
    image: "/assets/Siena_20.03.26-D-MeatBalls-01.webp",
    alt: "House-made spaghetti and meatballs at Siena Restaurant & Bar in Alpharetta",
    paras: [
      "Pasta is the heart of the Italian menu, and it is made in house. That is a difference you taste in the first bite.",
      "Start with the house-made rigatoni. It has that proper chew and a sauce that grabs onto every ridge. The spaghetti and meatballs is warm, honest and generous, exactly what you want it to be. The buttered gemelli is simple in the best way, silky and rich, the plate people quietly fight over the last bite of.",
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
        image: "/assets/Siena_20.03.26-D-ShirimpFranceseArancini.webp",
        alt: "Shrimp francese arancini, a crispy Italian starter at Siena in Alpharetta",
        title: "ARANCINI",
        sub: "Shrimp francese, crisp and golden",
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
        image: "/assets/Siena_20.03.26-D-MeatBalls-02.webp",
        alt: "Spaghetti and meatballs at Siena, an Italian restaurant in Alpharetta",
        title: "MEATBALLS",
        sub: "Warm, honest, generous",
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
    alt: "Whipped feta and mezze plates on the Mediterranean menu at Siena, Alpharetta",
    paras: [
      "This is where Siena steps away from every other Italian place in town. Right alongside the pasta sits a full Mediterranean spread.",
      "The Siena hummus is smooth, rich and made for scooping. The chicken tawook is marinated and grilled until juicy. The watermelon and feta salad is cool, sweet and salty at once, and a perfect plate when the Georgia heat rolls in. And the charred cauliflower has a smoky edge that wins over even the sceptics at the table.",
      "Save room for dessert. The baklava cheesecake bites fold two good ideas into one, and the saffron crème brûlée is worth the crack of that sugar top.",
      "That mix is the whole point. You get Italy and the Mediterranean on one table, and you do not have to pick a lane.",
    ],
  },
  {
    kind: "split",
    bg: "black",
    heading: "The Room, and Friday Sax",
    script: "after dark",
    image: "/assets/hero5.webp",
    alt: "The warm, low-lit dining room at Siena Restaurant & Bar in Alpharetta",
    paras: [
      "Siena is warm and upscale without ever feeling stiff. The lighting is bold and a little moody, the kind that makes everyone at the table look good and every plate look better. Relaxed enough for a Tuesday, dressy enough for a big one.",
      "The bar pulls its weight: twenty house cocktails, a thirty-bottle wine list and a deep spirits shelf. The Italian Job is a house favourite and a good place to start. There is a happy hour menu when you want to keep it casual after work.",
      "Then there is Friday. A saxophonist plays live and the whole room shifts up a gear. Music, low lighting, a cocktail in your hand. <a href=\"/live-music-fridays\">If you want a Friday that actually feels like a night out, this is the room for it</a>.",
    ],
  },
  {
    kind: "gallery",
    bg: "green",
    icon: "/assets/icon_happenings.svg",
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
        desc: "The lighting, the sharing plates and the Friday sax set the mood without you having to try. <a href=\"/reservations\">Book a table for two</a>.",
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
    a: "House-made pastas and classic Italian plates with a Mediterranean twist. Popular choices include the house-made rigatoni, spaghetti and meatballs, buttered gemelli, shrimp francese arancini and the lamb chops. Mediterranean dishes like Siena hummus, chicken tawook and the watermelon and feta salad sit on the same menu, so a table can order across both.",
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
    a: "A saxophonist plays live on <a href=\"/live-music-fridays\">Friday nights</a>, alongside the full cocktail, wine and spirits list.",
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
