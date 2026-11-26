import LandingPage from "@/components/LandingPage";
import { H1, H1_SCRIPT, MARQUEE, INTRO, BLOCKS, FAQS, REVIEWS, PRACTICAL, CLOSING } from "./content";

export default function HalalRestaurantAlpharetta() {
  return (
    <LandingPage
      slug="halal-restaurant-alpharetta"
      h1={H1}
      h1Script={H1_SCRIPT}
      heroImage="/assets/Siena_20.03.26-D-LambChop-02.webp"
      heroAlt="Grilled lamb chops on a plate at Siena Restaurant & Bar in Alpharetta"
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
