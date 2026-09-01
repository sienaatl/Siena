import LandingPage from "@/components/LandingPage";
import { H1, H1_SCRIPT, MARQUEE, INTRO, BLOCKS, FAQS, REVIEWS, PRACTICAL, CLOSING } from "./content";

export default function NewRestaurantsAlpharetta() {
  return (
    <LandingPage
      slug="new-restaurants-alpharetta"
      h1={H1}
      h1Script={H1_SCRIPT}
      heroImage="/assets/hero1.webp"
      heroAlt="The dining room at Siena, one of the new restaurants in Alpharetta, Georgia"
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
