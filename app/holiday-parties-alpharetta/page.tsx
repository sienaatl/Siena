import LandingPage from "@/components/LandingPage";
import { H1, H1_SCRIPT, MARQUEE, INTRO, BLOCKS, FAQS, REVIEWS, PRACTICAL, CLOSING } from "./content";

export default function HolidayPartiesAlpharetta() {
  return (
    <LandingPage
      slug="holiday-parties-alpharetta"
      h1={H1}
      h1Script={H1_SCRIPT}
      heroImage="/assets/events/1779116412260_ckub4v.webp"
      heroAlt="A holiday party in the dining room at Siena Restaurant & Bar in Alpharetta, Georgia"
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
