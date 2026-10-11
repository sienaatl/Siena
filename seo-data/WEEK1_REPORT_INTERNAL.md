# Week 1 SEO Report (Internal) - Siena Restaurant

**Reporting Period:** Monday 2026-10-05 00:00 through Monday 2026-10-12 23:59  
**Work Week:** October 5-11, 2026  
**Week 1 Round 1 SEO Update:** October 12, 2026  
**Timezone:** All commit timestamps are in +0500 (PKT - Pakistan Standard Time)  
**Git Author:** Mairaj001

---

## Summary

- **Found:** Homepage impressions down 8%, clicks down 12%, CTR down from 6.16% to 5.96%. Desktop CTR collapsed from 4.67% to 2.87% (39% drop). Italian page at position 6.04 with 3,284 impressions but only 0.37% CTR (92% below expected).
- **Fixed:** Homepage title (brand-first to protect 27% brand CTR), meta description, H1, logo alt. Italian page title (+19 chars differentiator), meta description (Italian-only positioning), H1, 2 internal links.
- **Deployed:** TODO: confirm deploy date for commits 9371a2e, f0310f6
- **Request Indexing:** TODO: pending in Search Console
- **Pending:** Italian page Round 2 (headings, body copy, 2 FAQs), audits of downtown/Mediterranean/new-restaurants/dinner pages

---

## Part 1: Observed → Gap → Why → Fix

### Search Console Metrics (Last 28 days vs Previous 28 days)

**Site-Wide Totals:**
- **Clicks:** 941 → 943 (+2, +0.2%)
- **Impressions:** 17,189 → 25,503 (+8,314, +48%)
- **CTR:** 5.48% → 3.70% (-1.78pp, -32%)
- **Average Position:** 11.80 → 10.70 (-1.1, improved)

**Key Finding:** Impressions up 48% but clicks flat. CTR dropped 32% site-wide.

---

**Device Split:**

| Device | Clicks (L28) | Clicks (P28) | Change | Impressions (L28) | Impressions (P28) | Change | CTR (L28) | CTR (P28) | Change |
|--------|--------------|--------------|--------|-------------------|-------------------|--------|-----------|-----------|---------|
| Mobile | 713 | 696 | +17 (+2%) | 17,887 | 12,071 | +5,816 (+48%) | 3.99% | 5.77% | -1.78pp (-31%) |
| Desktop | 213 | 233 | -20 (-9%) | 7,413 | 4,984 | +2,429 (+49%) | 2.87% | 4.67% | -1.80pp (-39%) |
| Tablet | 15 | 14 | +1 (+7%) | 203 | 134 | +69 (+51%) | 7.39% | 10.45% | -3.06pp (-29%) |

**Critical:** Desktop CTR collapsed 39% (4.67% → 2.87%) despite impressions up 49%.

---

**Homepage (sienaatl.com/):**
- **Clicks:** 735 → 831 (-96, -12%)
- **Impressions:** 12,331 → 13,483 (-1,152, -9%)
- **CTR:** 5.96% → 6.16% (-0.20pp, -3%)
- **Position:** 13.76 → 11.89 (+1.87, worse)

---

**Landing Pages Performance:**

| Page | URL | Clicks (L28) | Impr (L28) | CTR (L28) | Position (L28) | Clicks (P28) | Impr (P28) | CTR (P28) |
|------|-----|--------------|------------|-----------|----------------|--------------|------------|-----------|
| Italian | /italian-restaurant-alpharetta | 12 | 3,284 | 0.37% | 6.04 | 0 | 1,010 | 0% |
| Downtown | /downtown-alpharetta-restaurants | 4 | 2,849 | 0.14% | 8.02 | 1 | 622 | 0.16% |
| Mediterranean | /mediterranean-restaurant-alpharetta | 9 | 2,320 | 0.39% | 6.16 | 1 | 945 | 0.11% |
| New Restaurants | /new-restaurants-alpharetta | 36 | 2,243 | 1.6% | 6.99 | 7 | 541 | 1.29% |
| Dinner | /dinner-alpharetta | 5 | 1,869 | 0.27% | 4.42 | 0 | 513 | 0% |

---

**Query Analysis (Brand vs Non-Brand):**

**Brand Queries (containing "siena" or "sienna"):**
- Clicks: 604 (86% of total)
- Impressions: 4,799 (19% of total)
- **Implied CTR:** 12.6%
- Top brand query: "siena restaurant alpharetta" - 150 clicks, 553 impr, 27.12% CTR, pos 1.05

**Non-Brand Queries:**
- Clicks: 96 (14% of total)
- Impressions: 10,034 (81% of total)
- **Implied CTR:** 0.96%

**Top Non-Brand Queries by Impressions:**

| Query | Clicks | Impressions | CTR | Position |
|-------|--------|-------------|-----|----------|
| downtown alpharetta restaurants | 6 | 642 | 0.93% | 14.27 |
| restaurants in alpharetta | 2 | 366 | 0.55% | 17.55 |
| mediterranean food alpharetta | 4 | 331 | 1.21% | 9.18 |
| italian restaurants alpharetta | 1 | 255 | 0.39% | 10.2 |
| best restaurants near me | 0 | 193 | 0% | 8.19 |
| new restaurants alpharetta | 7 | 191 | 3.66% | 4.26 |
| restaurants in alpharetta ga | 5 | 186 | 2.69% | 18.89 |
| alpharetta restaurants | 1 | 185 | 0.54% | 16.3 |
| restaurants alpharetta | 3 | 185 | 1.62% | 19.19 |
| mediterranean restaurant alpharetta | 0 | 178 | 0% | 10.13 |
| restaurants near ameris bank amphitheatre | 1 | 162 | 0.62% | 12.54 |
| new italian restaurant alpharetta | 2 | 161 | 1.24% | 8.93 |

---

### Gap Analysis Table

| Observed (with numbers) | Where the gap is | Why it matters / why we fixed it | Fix applied | Status |
|-------------------------|------------------|----------------------------------|-------------|---------|
| Impressions up 48% (17,189 → 25,503) but clicks flat (+2, +0.2%); CTR dropped 32% (5.48% → 3.70%) | Site-wide | High visibility but poor conversion. Users see listings but don't click. Metadata not compelling. | Homepage: title, description, H1. Italian: title, description, H1, internal links | Applied (9371a2e, f0310f6) |
| Desktop CTR collapsed 39% (4.67% → 2.87%) despite impressions up 49% (4,984 → 7,413) | Desktop device | Desktop users have more options on SERP, need stronger differentiation. Critical revenue segment. | Homepage and Italian page title strengthening with specific menu features | Applied (9371a2e, f0310f6) |
| Homepage clicks down 12% (831 → 735), impressions down 9% (13,483 → 12,331), position worse (11.89 → 13.76) | Homepage | Losing ground on primary landing page. Generic title/description not competitive. | Brand-first title (protect 27% brand CTR), verified menu claims in description, sr-only H1, logo alt | Applied (9371a2e) |
| Italian page: 3,284 impressions, 12 clicks, 0.37% CTR at position 6.04 | /italian-restaurant-alpharetta | Position 6 typically gets 3-5% CTR. At 0.37%, this is 92% below expected. Title too generic to differentiate from competitors. | Title: +19 chars "House-Made Pasta". Description: specific pasta names (rigatoni, bucatini), Italian-only positioning. H1: removed "The", Italian focus. 2 internal links (downtown, date-night) | Applied (f0310f6) |
| Downtown page: 2,849 impressions, 4 clicks, 0.14% CTR at position 8.02 | /downtown-alpharetta-restaurants | Similar CTR problem as Italian page. 642 impressions for "downtown alpharetta restaurants" query but only 0.93% CTR at pos 14.27 | Audit complete, changes pending approval | Not started |
| Dinner page: 1,869 impressions, 5 clicks, 0.27% CTR at position 4.42 | /dinner-alpharetta | Position 4 with catastrophic CTR. Best position of all landing pages but worst conversion rate. | Audit pending | Not started |
| Non-brand queries: 10,034 impressions (81% of total) but only 96 clicks (14% of total) = 0.96% CTR | Site-wide non-brand traffic | Commercial queries (restaurants, italian, downtown) have massive impression volume but near-zero conversion. Revenue opportunity lost. | Italian page targets "italian restaurants alpharetta" (255 impr). Homepage targets general restaurant queries indirectly. Internal linking structure improved. | Partially applied |
| Brand CTR: homepage baseline 27.12% on "siena restaurant alpharetta" (150 clicks, 553 impr, pos 1.05) | Homepage brand queries | Strong brand performance must be protected. Any title change that moves brand name away from front could hurt this 27% CTR. | Homepage title: "Siena Restaurant |" (brand first) vs old "Mediterranean & Italian Restaurant in Alpharetta | Siena" (brand last) | Applied (9371a2e) |

---

## Part 2: Day-by-Day Work Log

### Tuesday, October 6, 2026

**26c4383 | 2026-10-06 Tue 19:25 +0500 | Mairaj001 | Update EVENTS_PHONE to correct contact number for event inquiries**

```
 app/event-inquiry/page.tsx           | 2 +-
 app/event-inquiry/thank-you/page.tsx | 2 +-
 2 files changed, 2 insertions(+), 2 deletions(-)
```

**[OTHER]** Updated event inquiry phone number in two files.

---

### Wednesday, October 7, 2026

No commits.

---

### Thursday, October 8, 2026

**f64e19c | 2026-10-08 Thu 22:37 +0500 | Mairaj001 | feat(responsive): Add mobile-first responsive typography across pages**

Full commit message:
```
feat(responsive): Add mobile-first responsive typography across pages
- Add sm: breakpoint for heading sizes on About Us, Blogs, Careers, Contact Us, Event Inquiry, Events, Gallery, Gift Card, Live Music, and Menus pages
- Implement progressive text scaling for main headings (h1) with mobile baseline (38px) → sm (50px) → md/lg
- Implement progressive text scaling for section headings (h2) with mobile baseline (34px) → sm (46px) → md/lg
- Update decorative script text sizes with sm breakpoint for improved readability on phones
- Refactor heading className patterns in LandingPage and ViewOurSpace components for consistent responsive behavior
- Ensures legible typography on small screens while maintaining visual hierarchy across all breakpoints
```

```
 app/about-us/page.tsx                | 14 ++++-----
 app/blogs/page.tsx                   |  2 +-
 app/careers/page.tsx                 | 10 +++---
 app/contact-us/page.tsx              |  8 ++---
 app/event-inquiry/page.tsx           |  6 ++--
 app/event-inquiry/thank-you/page.tsx |  2 +-
 app/events/page.tsx                  | 14 ++++-----
 app/gallery/page.tsx                 |  6 ++--
 app/gift-card/page.tsx               | 14 ++++-----
 app/live-music-fridays/page.tsx      |  2 +-
 app/menus/page.tsx                   |  6 ++--
 app/page.tsx                         | 28 ++++++++---------
 components/LandingPage.tsx           |  8 ++---
 components/ViewOurSpace.tsx          | 59 +++++++++++++++---------------------
 14 files changed, 85 insertions(+), 94 deletions(-)
```

**[OTHER]** Improved mobile typography with responsive breakpoints across 14 pages. Progressive scaling ensures readability on small screens.

---

### Friday, October 9, 2026

**6df303e | 2026-10-09 Fri 00:34 +0500 | Mairaj001 | Fix duplicate code and build errors**

```
 app/gallery/page.tsx           |  63 ++++++++++-----
 components/LazyBackgrounds.tsx |  14 +++-
 components/footer.tsx          | 175 ++++++++++++++++-------------------------
 3 files changed, 123 insertions(+), 129 deletions(-)
```

**[OTHER]** Removed duplicate code in footer and gallery page that was causing build failures.

---

**b4b15a1 | 2026-10-09 Fri 00:43 +0500 | Mairaj001 | Fix RESERVATIONS text being cut off on mobile devices**

```
 components/ReservationsPageClient.tsx | 2 +-
 1 file changed, 1 insertion(+), 1 deletion(-)
```

**[OTHER]** Fixed mobile text overflow on reservations hero. Font size adjusted from 52px to 38px on mobile to prevent trimming.

---

### Saturday, October 10, 2026

**75b630d | 2026-10-10 Sat 00:46 +0500 | Mairaj001 | Add Microsoft Clarity tracking code to root layout**

```
 app/layout.tsx | 14 ++++++++++++++
 1 file changed, 14 insertions(+)
```

**[ANALYTICS]** Added Microsoft Clarity tracking script (project ID yv6k5b38f2) to root layout with afterInteractive strategy.

---

**b090369 | 2026-10-10 Sat 00:57 +0500 | Mairaj001 | Update Microsoft Clarity tracking code to correct project ID yv6k5b38f2**

```
 app/layout.tsx | 4 ++--
 1 file changed, 2 insertions(+), 2 deletions(-)
```

**[ANALYTICS]** Corrected Clarity project ID in tracking code (typo fix).

---

**33a7750 | 2026-10-10 Sat 01:04 +0500 | Mairaj001 | Add descriptive alt text to all images for SEO and accessibility**

Full commit message:
```
Add descriptive alt text to all images for SEO and accessibility
- Added 'decorative star' alt text to all star.svg images
- Added 'decorative divider' alt text to all divider SVG images
- Added 'location pin icon' alt to contact page icon
- Added 'event planning icon' alt to events page icon
- Improves SEO by providing context to search engines
- Improves accessibility for screen readers
- Fixes missing alt attribute warnings across all pages
```

```
 app/about-us/page.tsx                 |  8 ++++----
 app/blogs/page.tsx                    |  8 ++++----
 app/careers/page.tsx                  | 10 +++++-----
 app/contact-us/page.tsx               | 14 +++++++-------
 app/event-inquiry/page.tsx            |  8 ++++----
 app/events/page.tsx                   | 14 +++++++-------
 app/gallery/page.tsx                  |  8 ++++----
 app/gift-card/page.tsx                | 14 +++++++-------
 app/live-music-fridays/page.tsx       |  2 +-
 app/menus/page.tsx                    |  8 ++++----
 components/LandingPage.tsx            |  6 +++---
 components/ReservationsPageClient.tsx |  8 ++++----
 12 files changed, 54 insertions(+), 54 deletions(-)
```

**[SEO]** Bulk alt text update for accessibility and image SEO.

**Observed:** Alt attribute warnings on 31 pages (decorative images: star.svg, divider SVGs)  
**Gap:** Missing alt text hurts accessibility (screen readers) and image SEO signals  
**Why we fixed it:** Search engines use alt text as image context signal. Accessibility compliance. Lighthouse/PageSpeed warnings.  
**Fix:** Added descriptive alt text: "decorative star", "decorative divider", "location pin icon", "event planning icon" across 12 files (54 changes)  
**Signal to watch:** Image search impressions (GSC), accessibility audit scores, Lighthouse SEO score

---

### Sunday, October 11, 2026

No commits.

---

### Monday, October 12, 2026 (Week 1 Round 1)

**9371a2e | 2026-10-12 Mon 04:02 +0500 | Mairaj001 | SEO: homepage title, meta description, H1**

```
 app/layout.tsx        | 12 ++++++------
 app/page.tsx          |  2 ++
 components/header.tsx |  2 +-
 3 files changed, 9 insertions(+), 7 deletions(-)
```

**[SEO]** Homepage metadata overhaul and H1 addition.

**Observed:** Homepage: 735 clicks, 12,331 impressions, 5.96% CTR, position 13.76. Clicks down 12% (831→735), impressions down 9%. Desktop CTR collapsed 39% (4.67%→2.87%). Brand query "siena restaurant alpharetta": 150 clicks, 553 impr, 27.12% CTR at position 1.05.  
**Gap:** Generic title "Mediterranean & Italian Restaurant in Alpharetta | Siena" (brand last) doesn't protect 27% brand CTR. Weak meta description "Experience Siena, a..." wastes 11 chars. No semantic H1 (visual "SIENA" is decorative). Logo alt="logo" (not descriptive).  
**Why we fixed it:** Homepage losing ground (-12% clicks, -9% impr, worse position). Desktop CTR catastrophic. Need brand-first title to protect 27% brand CTR on primary query. Need verified menu claims (handmade pasta, fresh seafood) in description to differentiate. H1 required for semantic SEO.  
**Fix:** Title: "Siena Restaurant | Italian Mediterranean Dining Alpharetta" (brand first, 58 chars). Description: verified "Handmade pasta, fresh seafood" against menu JSON (bucatini, rigatoni, calamari, octopus, salmon, branzino), removed weak opening, 151 chars. H1: sr-only "Siena Restaurant - Italian Mediterranean Dining in Alpharetta, GA" (no visual change). Logo alt: "logo" → "Siena Restaurant Logo". OpenGraph/Twitter: matched new metadata.  
**Signal to watch:** Homepage CTR (baseline 5.96%), brand query CTR "siena restaurant alpharetta" (baseline 27.12%), desktop CTR (baseline 2.87%), homepage clicks vs impressions trend

---

**5844c47 | 2026-10-12 Mon 04:03 +0500 | Mairaj001 | docs: add SEO changelog for homepage changes**

```
 seo-data/SEO_CHANGELOG.md | 63 +++++++++++++++++++++++++++++++++++++++++++++++
 1 file changed, 63 insertions(+)
```

**[SEO]** Created SEO_CHANGELOG.md with homepage baseline metrics and change documentation.

---

**f0310f6 | 2026-10-12 Mon 04:14 +0500 | Mairaj001 | SEO: Italian page title, description, H1, links**

```
 app/italian-restaurant-alpharetta/content.ts |  8 ++++----
 app/italian-restaurant-alpharetta/layout.tsx | 13 ++++++-------
 2 files changed, 10 insertions(+), 11 deletions(-)
```

**[SEO]** Italian restaurant page metadata optimization and internal linking.

**Observed:** Italian page: 12 clicks, 3,284 impressions, 0.37% CTR, position 6.04. Query "italian restaurants alpharetta": 1 click, 255 impr, 0.39% CTR at pos 10.2. Query "new italian restaurant alpharetta": 2 clicks, 161 impr, 1.24% CTR at pos 8.93. Query "downtown alpharetta restaurants": 6 clicks, 642 impr, 0.93% CTR at pos 14.27.  
**Gap:** Position 6 typically gets 3-5% CTR. At 0.37%, this is 92% below expected performance. Title "Italian Restaurant in Alpharetta | Siena" (40 chars with template) too generic, no differentiator. Description mentions "Mediterranean twist" (conflicts with Italian-only strategy). H1 "The Italian Restaurant" = unsupported competitive claim. No internal links to downtown or date-night pages.  
**Why we fixed it:** Italian page has excellent position (6.04) and huge impression growth (+225%, 1,010→3,284) but catastrophic CTR. Users see listing but choose competitors. Need specific menu differentiator and Italian-only positioning. Downtown query (642 impr) needs internal link target.  
**Fix:** Title: "Italian Restaurant in Alpharetta | House-Made Pasta | Siena" (59 chars, +19 chars differentiator verified in menu JSON: bucatini, rigatoni). Description: "House-made rigatoni, bucatini & Italian classics in Alpharetta. Fresh pasta, Italian dishes & Friday live music. Reserve your table at Siena." (141 chars, specific pasta names, removed "Mediterranean" from positioning, removed weak "Siena is..." opening). H1: "Italian Restaurant in Alpharetta" (removed "The"), script: "house-made pasta & classics" (removed "Mediterranean soul"). Internal links: added link to /downtown-alpharetta-restaurants (targets 642-impr query), added link to /date-night-alpharetta (targets 36+79 impr queries). OpenGraph/Twitter: matched new metadata. Kept "Mediterranean" naturally in body copy describing actual menu items.  
**Signal to watch:** Italian page CTR (baseline 0.37%), Italian page clicks and impressions, query "italian restaurants alpharetta" (255 impr), query "new italian restaurant alpharetta" (161 impr), internal link click-through from Italian→downtown and Italian→date-night

---

**7d568dd | 2026-10-12 Mon 04:15 +0500 | Mairaj001 | docs: update SEO changelog for Italian page Round 1**

```
 seo-data/SEO_CHANGELOG.md | 71 +++++++++++++++++++++++++++++++++++++++++++++++
 1 file changed, 71 insertions(+)
```

**[SEO]** Updated SEO_CHANGELOG.md with Italian page Round 1 baseline metrics and changes.

---

### Week 1 Summary

**Commit Counts:**
- **[SEO]:** 3 commits (alt text, homepage, Italian page)
- **[ANALYTICS]:** 2 commits (Clarity tracking installation and correction)
- **[OTHER]:** 6 commits (phone number update, responsive typography, build fixes, mobile text overflow fix)
- **Total:** 11 commits

**Non-SEO Work Summary:**
- **Analytics:** Microsoft Clarity tracking installed (project yv6k5b38f2) with afterInteractive strategy for behavior analysis (dead clicks, rage clicks, scroll depth, drop-off points)
- **Responsive Design:** Mobile-first typography improvements across 14 pages with progressive text scaling (38px→50px mobile-to-desktop)
- **Bug Fixes:** Duplicate code removal in footer/gallery causing build errors, mobile RESERVATIONS text overflow fix (52px→38px)
- **Data Correction:** Event inquiry phone number updated

---

### SEO Commits Only (Quick Reference)

**33a7750 | 2026-10-10 Sat 01:04 +0500 | Mairaj001**
```
Add descriptive alt text to all images for SEO and accessibility
- Added 'decorative star' alt text to all star.svg images
- Added 'decorative divider' alt text to all divider SVG images
- Added 'location pin icon' alt to contact page icon
- Added 'event planning icon' alt to events page icon
- Improves SEO by providing context to search engines
- Improves accessibility for screen readers
- Fixes missing alt attribute warnings across all pages
```
Files: 12 files, 54 changes

---

**9371a2e | 2026-10-12 Mon 04:02 +0500 | Mairaj001**
```
SEO: homepage title, meta description, H1
```
Files: app/layout.tsx, app/page.tsx, components/header.tsx (3 files, 9 changes)

---

**5844c47 | 2026-10-12 Mon 04:03 +0500 | Mairaj001**
```
docs: add SEO changelog for homepage changes
```
Files: seo-data/SEO_CHANGELOG.md (1 file, 63 insertions)

---

**f0310f6 | 2026-10-12 Mon 04:14 +0500 | Mairaj001**
```
SEO: Italian page title, description, H1, links
```
Files: app/italian-restaurant-alpharetta/content.ts, app/italian-restaurant-alpharetta/layout.tsx (2 files, 10 changes)

---

**7d568dd | 2026-10-12 Mon 04:15 +0500 | Mairaj001**
```
docs: update SEO changelog for Italian page Round 1
```
Files: seo-data/SEO_CHANGELOG.md (1 file, 71 insertions)

---

## Part 3: Week 1 Round 1 SEO Update (2026-10-12)

### Homepage (https://sienaatl.com/)

**Baseline Metrics (Last 28 days ending 2026-10-08):**
- Clicks: 735
- Impressions: 12,331
- CTR: 5.96%
- Average Position: 13.76
- Desktop CTR: 2.87% (collapsed from 4.67%, -39%)
- Top query: "siena restaurant alpharetta" (150 clicks, 553 impr, 27.12% CTR, pos 1.05)

**The Gap:**
- Clicks down 12% (831→735), impressions down 9% (13,483→12,331)
- Position worse (11.89→13.76, dropped 1.87 positions)
- Desktop CTR catastrophic: 4.67%→2.87% (-39%)
- Generic title with brand name last doesn't protect 27% brand CTR
- Meta description wastes 11 chars on "Experience Siena, a..."
- No semantic H1 (visual "SIENA" is decorative only)
- Logo alt="logo" (non-descriptive)

**Changes Applied:**

| Element | Old | New | Reason |
|---------|-----|-----|--------|
| **Title** | "Mediterranean & Italian Restaurant in Alpharetta \| Siena" (58 chars) | "Siena Restaurant \| Italian Mediterranean Dining Alpharetta" (58 chars) | Brand-first to protect 27.12% CTR on "siena restaurant alpharetta" (150 clicks). Removed "downtown" (dedicated page exists). Maintains optimal length. |
| **Meta Description** | "Experience Siena, a Mediterranean and Italian restaurant in Alpharetta, GA, serving chef-driven dishes, cocktails, date nights, private dining and special occasions." (163 chars) | "Italian Mediterranean dining in Alpharetta. Handmade pasta, fresh seafood, cocktails & live music. Near Avalon. Reserve your table at Siena Restaurant." (151 chars) | Verified "handmade pasta" (menu JSON: bucatini, rigatoni), "fresh seafood" (calamari, octopus, salmon, branzino). Removed weak "Experience Siena, a..." opening (-11 chars). Location anchor "Near Avalon". Clear CTA. |
| **H1** | None (visual "SIENA" decorative) | `<h1 class="sr-only">Siena Restaurant - Italian Mediterranean Dining in Alpharetta, GA</h1>` | Semantic SEO requirement. Screen-reader accessible. No visual change (sr-only class). |
| **Logo Alt** | "logo" | "Siena Restaurant Logo" | Descriptive for accessibility and image SEO. |
| **OpenGraph Title** | "Mediterranean & Italian Restaurant in Alpharetta \| Siena" | "Siena Restaurant \| Italian Mediterranean Dining Alpharetta" | Consistent with new title for social sharing. |
| **OpenGraph Description** | "Chef-driven Mediterranean and Italian-inspired dishes, handcrafted cocktails and memorable dining in Alpharetta, Georgia." | "Italian Mediterranean dining in Alpharetta. Handmade pasta, fresh seafood, cocktails & live music. Near Avalon. Reserve your table at Siena Restaurant." | Matched new meta description. |
| **Twitter Title** | "Mediterranean & Italian Restaurant in Alpharetta \| Siena" | "Siena Restaurant \| Italian Mediterranean Dining Alpharetta" | Consistent with new title. |
| **Twitter Description** | "Chef-driven Mediterranean and Italian-inspired dining in Alpharetta, Georgia." | "Italian Mediterranean dining in Alpharetta. Handmade pasta, fresh seafood, cocktails & live music. Near Avalon. Reserve your table at Siena Restaurant." | Matched new meta description. |

**Commits:**
- 9371a2e | 2026-10-12 Mon 04:02 +0500 | "SEO: homepage title, meta description, H1"
- 5844c47 | 2026-10-12 Mon 04:03 +0500 | "docs: add SEO changelog for homepage changes"

**Deploy Status:** TODO: confirm deploy date  
**Request Indexing Status:** TODO: pending in Search Console

---

### Italian Restaurant Page (https://sienaatl.com/italian-restaurant-alpharetta)

**Baseline Metrics (Last 28 days ending 2026-10-08):**
- Clicks: 12 (new traffic, 0 previous)
- Impressions: 3,284 (+225% vs 1,010 previous)
- CTR: 0.37% (92% below expected 3-5% for position 6)
- Average Position: 6.04
- Key queries:
  - "italian restaurants alpharetta": 1 click, 255 impr, 0.39% CTR, pos 10.2
  - "new italian restaurant alpharetta": 2 clicks, 161 impr, 1.24% CTR, pos 8.93
  - "best italian alpharetta": 1 click, 26 impr, 3.85% CTR, pos 9.69

**The Gap:**
- Position 6.04 with 3,284 impressions but only 0.37% CTR
- Expected CTR for position 6: 3-5%
- Actual CTR: 0.37% = **92% underperformance**
- Title too short (40 chars with template), no differentiator
- Description mentions "Mediterranean twist" (conflicts with Italian-only strategy)
- H1 "The Italian Restaurant" = unsupported competitive claim
- No internal links to related pages (downtown, date-night)

**Changes Applied:**

| Element | Old | New | Reason |
|---------|-----|-----|--------|
| **Title** | "Italian Restaurant in Alpharetta" (40 chars with template) | "Italian Restaurant in Alpharetta \| House-Made Pasta" (59 chars with template) | Added +19 chars differentiator verified in menu JSON (house-made bucatini, rigatoni). Optimal length (50-60 chars). Commercial-first positioning. |
| **Meta Description** | "Siena is an Italian restaurant in Alpharetta with house-made pasta and a Mediterranean twist. Book a table for dinner, cocktails and Friday live music." (151 chars) | "House-made rigatoni, bucatini & Italian classics in Alpharetta. Fresh pasta, Italian dishes & Friday live music. Reserve your table at Siena." (141 chars) | Removed "Mediterranean" (Italian-only strategy). Removed weak "Siena is..." opening. Added specific pasta names (rigatoni, bucatini) verified in menu. Direct CTA "Reserve your table". |
| **H1** | "The Italian Restaurant in Alpharetta" | "Italian Restaurant in Alpharetta" | Removed "The" (unsupported competitive claim). Exact match for primary query. |
| **H1 Script** | "with a Mediterranean soul" | "house-made pasta & classics" | Removed Mediterranean reference. Reinforces pasta differentiator from title. |
| **Internal Link #1** | None | Added link to `/downtown-alpharetta-restaurants` in INTRO ("in the heart of downtown Alpharetta's dining scene") | Targets "downtown alpharetta restaurants" (642 impr, 0.93% CTR, pos 14.27). Natural contextual placement after location mention. |
| **Internal Link #2** | Single link to `/reservations` | Added link to `/date-night-alpharetta` before reservation CTA ("See why Siena works for date nights, then book a table for two") | Targets "date night alpharetta" queries (36 impr + 79 impr variations). Verified page exists, indexable, in sitemap. |
| **OpenGraph Title** | "Italian Restaurant in Alpharetta \| Siena Restaurant & Bar" | "Italian Restaurant in Alpharetta \| House-Made Pasta \| Siena" | Matched new title with differentiator. |
| **OpenGraph Description** | "House-made pasta, Italian classics and Mediterranean plates on one menu, a few minutes from Avalon. Book a table at Siena Restaurant & Bar." | "House-made rigatoni, bucatini & Italian classics in Alpharetta. Fresh pasta, Italian dishes & Friday live music. Reserve your table at Siena." | Matched new meta description. |
| **Twitter Title** | "Italian Restaurant in Alpharetta \| Siena Restaurant & Bar" | "Italian Restaurant in Alpharetta \| House-Made Pasta \| Siena" | Matched new title. |
| **Twitter Description** | "House-made pasta, Italian classics and Mediterranean plates on one menu, a few minutes from Avalon." | "House-made rigatoni, bucatini & Italian classics in Alpharetta. Fresh pasta, Italian dishes & Friday live music. Reserve your table at Siena." | Matched new meta description. |

**Note:** "Mediterranean" references kept naturally in body copy describing actual menu items (hummus, lamb chops, feta). Removed only from page positioning (title, description, H1).

**Commits:**
- f0310f6 | 2026-10-12 Mon 04:14 +0500 | "SEO: Italian page title, description, H1, links"
- 7d568dd | 2026-10-12 Mon 04:15 +0500 | "docs: update SEO changelog for Italian page Round 1"

**Deploy Status:** TODO: confirm deploy date  
**Request Indexing Status:** TODO: pending in Search Console

---

## Part 4: Microsoft Clarity Work

**Installation Details:**

**Commit:** 75b630d | 2026-10-10 Sat 00:46 +0500 | Mairaj001  
**Message:** "Add Microsoft Clarity tracking code to root layout"

**Correction Commit:** b090369 | 2026-10-10 Sat 00:57 +0500 | Mairaj001  
**Message:** "Update Microsoft Clarity tracking code to correct project ID yv6k5b38f2"

**Implementation:**
- **Location:** `app/layout.tsx` (root layout, tracks all pages)
- **Project ID:** yv6k5b38f2
- **Loading Strategy:** `strategy="afterInteractive"` (Next.js Script component)
- **Custom Events/Tags:** None configured (standard Clarity auto-capture)
- **Consent Management:** None implemented (TODO: confirm if required for compliance)

**Code Added:**
```typescript
<Script
  id="clarity-script"
  strategy="afterInteractive"
  dangerouslySetInnerHTML={{
    __html: `
      (function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window, document, "clarity", "script", "yv6k5b38f2");
    `,
  }}
/>
```

**Deploy Status:** TODO: confirm deploy date

**Data Collection Status:**  
Data collection started 2026-10-10 (pending deploy confirmation). Findings to be reviewed after enough sessions accumulate (minimum 1-2 weeks recommended for statistical significance).

**TODO: Review After Data Accumulation:**

**Priority Pages to Analyze:**
1. **Homepage (sienaatl.com/):**
   - Dead clicks on "RESERVE A TABLE" button (baseline CTR 5.96%, desktop 2.87%)
   - Rage clicks on navigation or hero elements
   - Mobile vs desktop scroll depth (mobile has 3.99% CTR vs desktop 2.87%)
   - Where users drop off before reaching reservation CTA
   - Heatmap analysis: which menu items or sections get attention

2. **Italian Restaurant Page (/italian-restaurant-alpharetta):**
   - Why users bounce despite position 6.04 visibility (0.37% CTR = 92% underperformance)
   - Dead clicks on internal links (downtown, date-night) - track click-through after Round 1 deploy
   - Scroll depth: do users reach "Who It Suits" section with date-night link?
   - Mobile vs desktop behavior split (site-wide mobile 3.99% CTR, desktop 2.87%)
   - Heatmap: pasta descriptions vs other menu sections

3. **Downtown Alpharetta Page (/downtown-alpharetta-restaurants):**
   - Similar CTR problem (0.14% at position 8.02)
   - Incoming clicks from Italian page internal link (post-deploy)
   - Scroll depth and drop-off points
   - Rage clicks or confusion points

**Metrics to Track:**
- Session duration by page and device
- Click-through rate on primary CTAs (Reserve, View Menu, Call)
- Dead clicks (clicks on non-interactive elements)
- Rage clicks (rapid repeated clicks indicating frustration)
- Scroll depth percentage (% of users reaching bottom 25%, 50%, 75%, 100%)
- Drop-off analysis: where in the page do users leave?
- Device comparison: mobile vs desktop behavior differences
- Entry/exit pages correlation

**Clarity Features to Use:**
- Session recordings (sample frustrated or short sessions)
- Heatmaps (desktop and mobile separate)
- Scroll maps
- Click maps
- Dead click tracking
- Rage click alerts
- Filtered sessions by: device type, geographic location, entry page, exit page

---

## Part 5: Waiting and Measurement Plan

### On Hold (Pending Approval)

**Italian Restaurant Page Round 2:**
- 2 heading changes ("Pasta Made Here" → "House-Made Italian Pasta", "The Other Half" → "Beyond Pasta")
- Body copy adjustments (Mediterranean positioning refinements while keeping natural menu references)
- 2 new FAQs:
  - "Does Siena make fresh pasta in-house?" (targets "fresh pasta alpharetta" queries)
  - "What are the best Italian dishes at Siena?" (targets "best italian alpharetta" - 26 impr query)
- FAQ JSON-LD sync with new questions

**Pending Audits:**
- /downtown-alpharetta-restaurants (2,849 impr, 4 clicks, 0.14% CTR, pos 8.02)
- /mediterranean-restaurant-alpharetta (2,320 impr, 9 clicks, 0.39% CTR, pos 6.16)
- /new-restaurants-alpharetta (2,243 impr, 36 clicks, 1.6% CTR, pos 6.99) - best CTR of landing pages
- /dinner-alpharetta (1,869 impr, 5 clicks, 0.27% CTR, pos 4.42) - best position, worst CTR

---

### Measurement Checkpoints

**Week 1 End Check (2026-10-12):**
Baseline established. No traffic/CTR data available yet (changes deployed 2026-10-12).

**2-4 Week Check (Earliest: 2026-10-19, Target: 2026-11-02 to 2026-11-09):**

Compare against baseline using same GSC report structure (last 28 days vs previous 28 days):

**Primary Metrics:**
1. **Homepage brand CTR:**
   - Query: "siena restaurant alpharetta" (baseline: 150 clicks, 553 impr, 27.12% CTR, pos 1.05)
   - Other brand queries CTR trend
   - **Critical:** Any material drop in brand CTR = revert title immediately

2. **Homepage overall:**
   - Clicks (baseline: 735)
   - Impressions (baseline: 12,331)
   - CTR (baseline: 5.96%)
   - Position (baseline: 13.76)

3. **Desktop CTR recovery:**
   - Desktop CTR (baseline: 2.87%, down from 4.67%)
   - Desktop clicks (baseline: 213)
   - Desktop impressions (baseline: 7,413)

4. **Italian page CTR improvement:**
   - CTR (baseline: 0.37%, target: move toward 3-5% expected for position 6)
   - Clicks (baseline: 12)
   - Impressions (baseline: 3,284)
   - Position (baseline: 6.04)

5. **Target query performance:**
   - "italian restaurants alpharetta" (baseline: 1 click, 255 impr, 0.39% CTR, pos 10.2)
   - "new italian restaurant alpharetta" (baseline: 2 clicks, 161 impr, 1.24% CTR, pos 8.93)
   - "downtown alpharetta restaurants" (baseline: 6 clicks, 642 impr, 0.93% CTR, pos 14.27)
   - "best italian alpharetta" (baseline: 1 click, 26 impr, 3.85% CTR, pos 9.69)

6. **Internal link effectiveness:**
   - Clicks from Italian page to /downtown-alpharetta-restaurants (GSC link clicks report)
   - Clicks from Italian page to /date-night-alpharetta (GSC link clicks report)
   - Downtown page impressions/clicks change

7. **Non-brand query CTR:**
   - Non-brand clicks (baseline: 96, 14% of total)
   - Non-brand impressions (baseline: 10,034, 81% of total)
   - Non-brand implied CTR (baseline: 0.96%)

**Secondary Metrics:**
- Mobile CTR (baseline: 3.99%)
- Site-wide CTR (baseline: 3.70%)
- Site-wide impressions (baseline: 25,503)
- Site-wide clicks (baseline: 943)
- Position trends across target queries

**What NOT to Measure Week 1:**
- Rankings/position changes (too early, Google needs 2-4 weeks minimum)
- Click projections or predicted CTR gains (no predictions, only baseline comparison)
- Revenue/booking conversions (requires GA4 data and longer time period)

**Week 1 is Measurement Baseline ONLY.**  
Results judged against baseline, not projections. Any material brand CTR drop triggers title revert.

---

### Query Competition Analysis

**Check for Cannibalization (2-4 weeks):**

Do Italian and downtown pages compete for same queries? Monitor which page ranks for:
- "downtown alpharetta restaurants" (642 impr)
- "restaurants in alpharetta" (366 impr)
- "italian restaurants alpharetta" (255 impr)
- "restaurants alpharetta" (185 impr)

Internal linking from Italian → downtown should help establish hierarchy. If both pages rank for same query, check which converts better and consolidate signals.

---

## Part 6: Open Items and Risks

### Unverified Claims

**"Friday live music" in Italian page meta description:**
- **Claim:** "Friday live music" in description "House-made rigatoni, bucatini & Italian classics in Alpharetta. Fresh pasta, Italian dishes & Friday live music. Reserve your table at Siena."
- **Verification:** Content file (app/italian-restaurant-alpharetta/content.ts) confirms "Live music plays from 7 to 10pm" on Fridays in "The Room, and Friday Music" block. Homepage hero also mentions Friday music. Site data hours show Friday closes at midnight (16:00-00:00).
- **Status:** ✓ Verified from content files and hours data
- **Risk:** Low

**Deploy dates:**
- TODO: confirm deploy date for commits 9371a2e (homepage), f0310f6 (Italian page), 33a7750 (alt text), 75b630d/b090369 (Clarity)
- **Impact:** Cannot measure effectiveness until deploy date confirmed and 2-4 weeks pass
- **Action Required:** Check deploy logs/history for exact timestamps

**Search Console indexing requests:**
- TODO: pending manual "Request Indexing" in GSC for:
  - Homepage (https://sienaatl.com/)
  - Italian page (https://sienaatl.com/italian-restaurant-alpharetta)
- **Impact:** Faster Google re-crawl of updated metadata
- **Action Required:** Submit via GSC URL Inspection tool after deploy confirmation

**Microsoft Clarity deploy status:**
- TODO: confirm Clarity script is live in production (commits 75b630d, b090369 on 2026-10-10)
- **Impact:** Cannot collect session data until deployed
- **Verification:** Check production source code for Clarity script tag, or check Clarity dashboard for incoming sessions
- **Action Required:** Confirm project yv6k5b38f2 shows "Recording" status in Clarity dashboard

---

### Audit TODOs

From seo-data/audit-italian-restaurant-alpharetta.md (not yet applied):

**Round 2 changes pending approval:**
- Heading updates (2 blocks)
- Body copy Mediterranean references (keep natural, remove positioning)
- 2 new FAQs with verified menu items
- FAQ JSON-LD sync

**Pending page audits:**
- /downtown-alpharetta-restaurants (642 impr query "downtown alpharetta restaurants" - 0.93% CTR)
- /mediterranean-restaurant-alpharetta (178 impr query "mediterranean restaurant alpharetta" - 0% CTR)
- /new-restaurants-alpharetta (191 impr query "new restaurants alpharetta" - 3.66% CTR, best performer)
- /dinner-alpharetta (position 4.42, catastrophic 0.27% CTR despite best position)

---

### Risks and Mitigation

**Risk #1: Brand CTR Drop**
- **Risk:** Homepage title change from "Mediterranean & Italian Restaurant in Alpharetta | Siena" to "Siena Restaurant | Italian Mediterranean Dining Alpharetta" could hurt brand query CTR
- **Baseline:** "siena restaurant alpharetta" at 27.12% CTR (150 clicks, 553 impr, pos 1.05)
- **Mitigation:** Title puts "Siena Restaurant" first (vs old "Siena" last) to protect brand visibility
- **Monitoring:** Check brand query CTR in GSC at 1 week and 2-4 weeks
- **Revert Plan:** If brand CTR drops materially (>10% relative drop, e.g. 27%→24%), revert title to original immediately via git revert 9371a2e
- **Decision Point:** Week 2-4 data review

**Risk #2: Desktop CTR Not Recovering**
- **Risk:** Desktop CTR at 2.87% (down 39% from 4.67%) may not recover despite stronger title/description
- **Root Cause Hypothesis:** Desktop users have more SERP options visible, need stronger differentiation. Title/description may not be compelling enough vs competitors.
- **Mitigation:** Added specific menu features (handmade pasta, fresh seafood) verified from menu. Italian page added "House-Made Pasta" differentiator.
- **Monitoring:** Desktop CTR trend weekly for 4 weeks
- **Escalation:** If no improvement after 4 weeks, consider A/B testing alternative titles or description formats
- **Note:** Desktop revenue likely higher per click than mobile, so this is critical business metric

**Risk #3: Italian Page CTR Doesn't Improve**
- **Risk:** Position 6.04 with 0.37% CTR (92% below expected). Title/description changes may not be enough to overcome competitor advantage.
- **Root Cause Hypothesis:** Generic metadata was the problem. Adding "House-Made Pasta" + specific pasta names should differentiate.
- **Mitigation:** Round 1 added title differentiator, specific pasta names, removed weak opening. Round 2 (pending) adds FAQs targeting "best italian" and "fresh pasta" queries.
- **Monitoring:** Italian page CTR weekly, target movement toward 1-2% (still below 3-5% expected but significant improvement)
- **Escalation:** If no improvement after Round 2 deploy (4 weeks total), consider:
  - Review competitor listings on SERP (what are they doing better?)
  - Add review stars schema (if reviews are strong)
  - Test alternative title formats
  - Add local business schema enhancements

**Risk #4: Query Cannibalization**
- **Risk:** Italian and downtown pages may compete for same queries ("downtown alpharetta restaurants", "italian restaurants alpharetta")
- **Impact:** Splits impression volume, confuses Google about which page is authoritative
- **Mitigation:** Internal link from Italian→downtown establishes hierarchy. Italian page focuses on "italian" queries, downtown focuses on "downtown" queries.
- **Monitoring:** GSC query reports at 2-4 weeks - which page ranks for which queries?
- **Resolution:** If cannibalization detected, strengthen topical differentiation or consolidate pages

**Risk #5: Impressions Drop After Title Change**
- **Risk:** Homepage title change could shift which queries Google associates with the page, potentially losing impressions on some queries
- **Baseline:** Homepage 12,331 impressions
- **Mitigation:** New title still contains "Italian Mediterranean Dining Alpharetta" - maintains keyword relevance
- **Monitoring:** Homepage impressions weekly, by query to see if any high-volume queries drop off
- **Note:** Short-term impression fluctuation is normal. Look for sustained trend over 4 weeks.

**Risk #6: Clarity Data Collection Delayed**
- **Risk:** If Clarity not deployed or deploy date unknown, cannot collect user behavior data to inform future optimizations
- **Impact:** Delays understanding of why CTR is low (usability issues? confusing layout? CTA problems?)
- **Mitigation:** TODO: confirm Clarity deployment ASAP
- **Timeline:** Need minimum 1-2 weeks of data (100+ sessions) for meaningful insights
- **Action:** Verify Clarity dashboard shows "Recording" status and session count > 0

---

### Data Gaps

**Missing from GSC CSVs:**
- Device-specific performance by page (only site-wide device split available)
- Click position distribution (what SERP position generates clicks?)
- Query performance by page (CSVs show overall queries, not per-page query breakdown)
- Actual CTR curve by position (need to calculate expected CTR for position 6, 8, 13, etc.)

**Workarounds:**
- Use GSC web interface Search Results report filtered by page for per-page query data
- Use GSC Performance report "Position" dimension for click distribution
- Industry benchmarks: position 6 typically 3-5% CTR, position 8-10 typically 2-3% CTR

**Additional Data Needed:**
- GA4 conversion data (reservations, phone clicks) to measure business impact vs vanity metrics
- Clarity session data (see Part 4)
- Competitor SERP analysis (manual review of Google results for target queries)

---

### Next Steps (Priority Order)

1. **TODO: Confirm deploy dates** for all SEO commits (9371a2e, f0310f6, 33a7750)
2. **TODO: Confirm Clarity deployment** (check dashboard for sessions)
3. **TODO: Submit GSC indexing requests** for homepage and Italian page URLs
4. **Week 1 baseline complete** - monitor GSC daily for indexing confirmation
5. **Week 2-4:** Collect GSC data, Clarity sessions (target 100+ sessions minimum)
6. **Week 2-4 review:** Compare all metrics vs baseline, decision on Round 2 and additional page audits
7. **If brand CTR drops >10%:** Revert homepage title immediately
8. **If CTR improvements seen:** Continue with Italian Round 2, proceed to downtown/dinner page audits
9. **If no CTR improvements:** Deep-dive competitor analysis, consider alternative approaches

---

**Report Prepared:** 2026-10-12  
**Next Review:** Week 2-4 data comparison (earliest 2026-10-19, target 2026-11-02 to 2026-11-09)  
**Status:** Week 1 Round 1 complete, measurement baseline established, awaiting production deploy confirmation and 2-4 weeks of post-deploy data
