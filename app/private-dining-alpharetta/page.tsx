import LandingPage from "@/components/LandingPage";
import { H1, H1_SCRIPT, MARQUEE, INTRO, BLOCKS, FAQS, REVIEWS, PRACTICAL, CLOSING } from "./content";

export default function PrivateEventsAlpharetta() {
  return (
    <LandingPage
      slug="private-dining-alpharetta"
      h1={H1}
      h1Script={H1_SCRIPT}
      heroImage="/assets/events/1779116274229_qew7cz.webp"
      heroAlt="Cocktails on a tiered stand beneath the lit Siena sign in the dining room at Siena Restaurant & Bar, Alpharetta"
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
