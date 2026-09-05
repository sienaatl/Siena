import LandingPage from "@/components/LandingPage";
import { H1, H1_SCRIPT, MARQUEE, INTRO, BLOCKS, FAQS, REVIEWS, PRACTICAL, CLOSING } from "./content";

export default function RestaurantsNearAmerisBankAmphitheatre() {
  return (
    <LandingPage
      slug="restaurants-near-ameris-bank-amphitheatre"
      h1={H1}
      h1Script={H1_SCRIPT}
      heroImage="/assets/Siena_20.03.26-A-02.webp"
      heroAlt="Siena Restaurant & Bar, minutes from Ameris Bank Amphitheatre in Alpharetta, Georgia"
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
