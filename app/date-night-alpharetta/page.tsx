import LandingPage from "@/components/LandingPage";
import { H1, H1_SCRIPT, MARQUEE, INTRO, BLOCKS, FAQS, REVIEWS, PRACTICAL, CLOSING } from "./content";

export default function DateNightRestaurantAlpharetta() {
  return (
    <LandingPage
      slug="date-night-alpharetta"
      h1={H1}
      h1Script={H1_SCRIPT}
      heroImage="/assets/hero8.webp"
      heroAlt="Warm low lighting in the dining room at Siena, a date night restaurant in Alpharetta"
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
