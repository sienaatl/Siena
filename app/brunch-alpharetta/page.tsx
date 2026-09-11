import LandingPage from "@/components/LandingPage";
import { H1, H1_SCRIPT, MARQUEE, INTRO, BLOCKS, FAQS, REVIEWS, PRACTICAL, CLOSING } from "./content";

export default function BrunchAlpharetta() {
  return (
    <LandingPage
      slug="brunch-alpharetta"
      h1={H1}
      h1Script={H1_SCRIPT}
      heroImage="/assets/about1.webp"
      heroAlt="Weekend brunch at Siena Restaurant & Bar in Alpharetta, Georgia"
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
