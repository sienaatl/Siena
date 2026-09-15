import LandingPage from "@/components/LandingPage";
import { H1, H1_SCRIPT, MARQUEE, INTRO, BLOCKS, FAQS, REVIEWS, PRACTICAL, CLOSING } from "./content";

export default function FineDiningRestaurantAlpharetta() {
  return (
    <LandingPage
      slug="fine-dining-restaurant-alpharetta"
      h1={H1}
      h1Script={H1_SCRIPT}
      heroImage="/assets/Siena_20.03.26-A-06.webp"
      heroAlt="The dining room and bar at Siena, an upscale restaurant in Alpharetta, Georgia"
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
