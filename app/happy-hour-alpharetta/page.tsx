import LandingPage from "@/components/LandingPage";
import { H1, H1_SCRIPT, MARQUEE, INTRO, BLOCKS, FAQS, REVIEWS, PRACTICAL, CLOSING } from "./content";

export default function HappyHourAlpharetta() {
  return (
    <LandingPage
      slug="happy-hour-alpharetta"
      h1={H1}
      h1Script={H1_SCRIPT}
      heroImage="/assets/Siena_20.03.26-PS-05.webp"
      heroAlt="A cocktail and a small plate at the bar at Siena Restaurant & Bar in Alpharetta"
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
