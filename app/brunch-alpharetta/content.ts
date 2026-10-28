import type { Block, Faq, Reviews } from "@/components/LandingPage";

/**
 * Copy and layout for /brunch-alpharetta.
 *
 * Dish names and descriptions match the Weekend Brunch tab in lib/site-data.json.
 * Current brunch service days and hours must be confirmed with the restaurant.
 */

export const H1 = "Brunch in Alpharetta";
export const H1_SCRIPT = "confirm your visit";

export const MARQUEE = [
  "Call About Availability",
  "Fifteen Brunch Plates",
  "Built for Sharing",
  "Alpharetta, Georgia",
];

export const INTRO = {
  icon: "/assets/icon_menus.svg",
  heading: "Planning Brunch in Alpharetta",
  script: "check with Siena",
  paras: [
    "Exploring brunch in Alpharetta? Siena Restaurant &amp; Bar lists a separate brunch menu online. Call <a href=\"tel:+14049990373\">(404) 999-0373</a> to confirm current service days and hours before visiting 124 Devore Rd.",
    "The brunch menu pairs Italian and Mediterranean flavors. Choose sweet dishes, eggs or seafood, with plates to share around the table.",
  ],
  cta: { label: "SEE THE BRUNCH MENU", href: "/menus?tab=weekend-brunch" },
};

export const BLOCKS: Block[] = [
  {
    kind: "gallery",
    bg: "green",
    icon: "/assets/icono_123.svg",
    heading: "The Brunch Menu",
    script: "fifteen plates",
    intro:
      "Fifteen dishes across five sections: sweet, coastal, hearty, eggs, and things on focaccia or pita. These three are where most tables start. <a href=\"/menus?tab=weekend-brunch\">See the full brunch menu</a>.",
    items: [
      {
        image: "/assets/Siena_20.03.26-LS-LimoncelloRicottaPancakes-01.webp",
        alt: "Limoncello ricotta pancakes from the brunch menu at Siena in Alpharetta",
        title: "PANCAKES",
        sub: "Limoncello ricotta, macerated berries",
        href: "/menus?tab=weekend-brunch",
      },
      {
        image: "/assets/Siena_20.03.26-LS-BakedEggsInSanMarzano.webp",
        alt: "Baked eggs in San Marzano tomato sauce at brunch in Alpharetta",
        title: "BAKED EGGS",
        sub: "San Marzano, basil, grilled focaccia",
        href: "/menus?tab=weekend-brunch",
      },
      {
        image: "/assets/Siena_20.03.26-LS-OctopusCarpaccio.webp",
        alt: "Octopus carpaccio with fennel slaw on the brunch menu at Siena, Alpharetta",
        title: "CARPACCIO",
        sub: "Octopus, fennel, Castelvetrano olives",
        href: "/menus?tab=weekend-brunch",
      },
    ],
  },
  {
    kind: "split",
    bg: "black",
    heading: "Something Sweet",
    script: "for the middle of the table",
    image: "/assets/Siena_20.03.26-LS-LimoncelloRicottaPancakes-02.webp",
    alt: "Limoncello ricotta pancakes with berries on the brunch menu in Alpharetta",
    paras: [
      "Limoncello ricotta pancakes come with macerated berries, citrus mousse and a limoncello honey syrup. They are the dish people photograph, and then argue over.",
      "The French tiramisu brioche is espresso-soaked brioche with mascarpone and coffee cream, which is tiramisu for people who want it before noon. The spiced date waffle has a citrus glaze and mixed nuts.",
      "Order one sweet plate for the table rather than one each. They are filling, and there is a lot else to get through.",
    ],
  },
  {
    kind: "split",
    bg: "green",
    flip: true,
    heading: "Eggs and Heartier Plates",
    script: "the savoury side",
    image: "/assets/Siena_20.03.26-PS-BakedEggsInSanMarzano.webp",
    alt: "Baked eggs in heirloom tomato sauce with focaccia, a brunch dish in Alpharetta",
    paras: [
      "The truffle and pecorino frittata comes with caramelised onion and fresh herbs. The Mediterranean omelette carries tomato, red onion, spinach, olives and feta, with potatoes on the side.",
      "Baked eggs in San Marzano arrive in heirloom tomato sauce with garlic, basil and grilled focaccia for mopping up. For something bigger, steak and eggs Mediterraneo is grilled steak with sunny eggs, fingerling potatoes and red chimichurri.",
      "The shrimp al ajillo skillet is garlic, white wine and chilli flakes with grilled bread. It is the plate for anyone who skipped breakfast on purpose.",
    ],
  },
  {
    kind: "split",
    bg: "black",
    heading: "Lighter, and on Focaccia",
    script: "coastal plates",
    image: "/assets/Siena_20.03.26-PS-OctopusCarpaccio.webp",
    alt: "Octopus carpaccio with citrus oil, a lighter brunch plate in Alpharetta",
    paras: [
      "Octopus carpaccio with fennel slaw, citrus oil and Castelvetrano olives. A roasted cauliflower and olive salad with garlic chips. Prosciutto and fig salad with blue cheese and a balsamic glaze.",
      "Then the things on bread: Spanish shrimp bruschetta with romesco, wild mushroom and pecorino toast with truffle, pesto chicken focaccia, and an herb falafel pita with cucumber-mint sauce.",
      "A couple of these alongside the eggs is how most tables do it.",
    ],
  },
  {
    kind: "cards",
    bg: "green",
    icon: "/assets/iconoestrellas.svg",
    heading: "Worth Knowing",
    script: "before your visit",
    cards: [
      {
        title: "Confirm Service",
        desc: "Please call <a href=\"tel:+14049990373\">(404) 999-0373</a> to confirm brunch service and reservation arrangements. The online calendar currently lists dinner service.",
      },
      {
        title: "Plenty Without Meat",
        desc: "The frittata, omelette, mushroom toast, falafel pita, pancakes, waffle and cauliflower salad are all meat-free. <a href=\"/vegetarian-restaurant-alpharetta\">More on vegetarian options</a>.",
      },
      {
        title: "Bring a Group",
        desc: "Sharing plates suit a big table. For a larger booking, ask about <a href=\"/private-dining-alpharetta\">private dining</a>.",
      },
    ],
  },
  {
    kind: "split",
    bg: "black",
    flip: true,
    heading: "Brunch, Then Avalon",
    script: "or the other way round",
    image: "/assets/Siena_20.03.26-A-01.webp",
    alt: "The front of Siena Restaurant & Bar on Devore Road in downtown Alpharetta",
    paras: [
      "Siena is at 124 Devore Rd in downtown Alpharetta, a few minutes from Avalon. Brunch first and shopping after works better than the other way round, since nobody wants to carry bags into the dining room.",
      "Parking is straightforward, the entrance is step-free, and there is accessible parking near the door.",
      "Published hours cover dinner service from 4pm Tuesday to Sunday. Confirm brunch availability separately. Explore <a href=\"/dinner-alpharetta\">dinner</a>, when the room turns into somewhere for a <a href=\"/date-night-alpharetta\">date night</a>. <a href=\"/downtown-alpharetta-restaurants\">More on downtown Alpharetta</a>.",
    ],
  },
];

export const FAQS: Faq[] = [
  {
    q: "When is brunch?",
    a: "Please call (404) 999-0373 to confirm current brunch days and hours. The published hours show dinner from 4pm Tuesday to Sunday, with Monday closed.",
  },
  {
    q: "Do I need a reservation for brunch?",
    a: "Please call <a href=\"tel:+14049990373\">(404) 999-0373</a> to confirm current brunch service and reservation arrangements. The online calendar currently lists dinner service.",
  },
  {
    q: "What is on the brunch menu?",
    a: "Fifteen dishes, including limoncello ricotta pancakes, French tiramisu brioche, a truffle and pecorino frittata, baked eggs in San Marzano, steak and eggs Mediterraneo, octopus carpaccio and an herb falafel pita. <a href=\"/menus?tab=weekend-brunch\">See the full menu</a>.",
  },
  {
    q: "Is there anything for vegetarians?",
    a: "Yes. The frittata, the Mediterranean omelette, the wild mushroom and pecorino toast, the herb falafel pita, the pancakes, the waffle and the cauliflower and olive salad are all meat-free.",
  },
  {
    q: "Is brunch good for a group?",
    a: "Yes. Everything is built for sharing, so a group orders a spread for the middle of the table. For larger numbers, ask about <a href=\"/private-dining-alpharetta\">private dining</a>.",
  },
  {
    q: "Where is Siena?",
    a: "124 Devore Rd, Alpharetta, GA 30009, in downtown Alpharetta and a few minutes from Avalon.",
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
      text: "The lamb chops is very flavorful as well as humus n pita bread.",
      author: "Big O.",
    },
    {
      text: "Food was great I had the Chicken tawook and rice it tasted very fresh and lite",
      author: "Eline P.",
    },
  ],
};

export const PRACTICAL = [
  "Call to confirm current brunch days and hours",
  "Step-free entrance and accessible parking near the door",
  "Minutes from Avalon, in downtown Alpharetta",
];

export const CLOSING = {
  heading: "Ask About Brunch",
  script: "plan with the team",
  paras: [
    "Browse the separate brunch menu, then call Siena to confirm current service days, hours and table availability.",
    "<a href=\"tel:+14049990373\">Call (404) 999-0373</a> to discuss your visit.",
  ],
};
