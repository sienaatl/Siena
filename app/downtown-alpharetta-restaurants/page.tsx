import LandingPage from "@/components/LandingPage";
import { H1, H1_SCRIPT, MARQUEE, INTRO, BLOCKS, FAQS, REVIEWS, PRACTICAL, CLOSING } from "./content";

export default function DowntownAlpharettaRestaurants() {
  return (
    <LandingPage
      slug="downtown-alpharetta-restaurants"
      h1={H1}
      h1Script={H1_SCRIPT}
      heroImage="/assets/hero11.webp"
      heroAlt="Siena Restaurant & Bar on Devore Road in downtown Alpharetta, Georgia"
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
