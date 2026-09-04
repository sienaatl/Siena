import LandingPage from "@/components/LandingPage";
import { H1, H1_SCRIPT, MARQUEE, INTRO, BLOCKS, FAQS, REVIEWS, PRACTICAL, CLOSING } from "./content";

export default function FineDiningRestaurantAlpharetta() {
  return (
    <LandingPage
      slug="fine-dining-restaurant-alpharetta"
      h1={H1}
      h1Script={H1_SCRIPT}
      heroImage="/assets/hero4.webp"
      heroAlt="The upscale dining room at Siena, a fine dining restaurant in Alpharetta, Georgia"
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
