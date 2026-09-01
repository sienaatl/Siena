/**
 * Review figures for the landing pages. One file, so every page agrees and there is a
 * single thing to update.
 *
 * The problem: reviews arrive constantly, so any exact figure typed into a page is
 * wrong within days. Two different fixes, because the two numbers behave differently.
 *
 * COUNT — only ever goes up, so we publish a floor. "240+" cannot become false.
 *
 * RATING — can go down, so no written number is safe. Measured from 241 reviews at
 * 4.5, a printed "4.5" is false after a single 1-star review, and even "4+" is a
 * claim we would have to stand behind. So the rating is never printed as text. The
 * star row carries it instead: `rating` sets how far the gold fills, and a half-lit
 * star reads as "about four and a half" without asserting a figure. Small drifts
 * change the fill by a few pixels and mislead nobody.
 *
 * Check `rating` against the Google profile at each quarterly review and update it.
 * If it moves, the stars follow on every page at once.
 */

export type ReviewStats = {
  /** Drives how far the stars fill. Never printed as text. */
  rating: number;
  /** Published count, rounded DOWN to the nearest ten. Only ever understates. */
  countFloor: number;
  /** When the figures were last checked against the Google profile. */
  checked: string;
  /** The live profile, where anyone can see the real current numbers. */
  url: string;
};

export const REVIEW_STATS: ReviewStats = {
  rating: 4.5,
  countFloor: 240,
  checked: "2026-08-27",
  url: "https://maps.app.goo.gl/9rkP14kjw5Dhmrsy5",
};
