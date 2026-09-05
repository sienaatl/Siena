import LandingPage from "@/components/LandingPage";
import { H1, H1_SCRIPT, MARQUEE, INTRO, BLOCKS, FAQS, REVIEWS, PRACTICAL, CLOSING } from "./content";

export default function CocktailBarAlpharetta() {
  return (
    <LandingPage
      slug="cocktail-bar-alpharetta"
      h1={H1}
      h1Script={H1_SCRIPT}
      heroImage="/assets/Siena_20.03.26-A-06.webp"
      heroAlt="The bar at Siena Restaurant & Bar, a cocktail bar in Alpharetta, Georgia"
      marquee={MARQUEE}
      intro={INTRO}
      blocks={BLOCKS}
      faqs={FAQS}
      reviews={REVIEWS}
      practical={PRACTICAL}
      closing={CLOSING}
    />
  );
}
