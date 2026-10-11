# SEO Changelog

## Homepage (/) - October 8, 2026

**Date:** 2026-10-08  
**URL:** https://sienaatl.com/  
**Target Queries:** Italian restaurant Alpharetta, Mediterranean restaurant Alpharetta, restaurants in Alpharetta

### Changes Made

**Title Tag:**
- **Old:** "Mediterranean & Italian Restaurant in Alpharetta | Siena" (58 chars)
- **New:** "Siena Restaurant | Italian Mediterranean Dining Alpharetta" (58 chars)
- **Rationale:** Brand name first to protect 27% CTR on brand queries. Removed "downtown" keyword (dedicated page exists at /downtown-alpharetta-restaurants).

**Meta Description:**
- **Old:** "Experience Siena, a Mediterranean and Italian restaurant in Alpharetta, GA, serving chef-driven dishes, cocktails, date nights, private dining and special occasions." (163 chars)
- **New:** "Italian Mediterranean dining in Alpharetta. Handmade pasta, fresh seafood, cocktails & live music. Near Avalon. Reserve your table at Siena Restaurant." (151 chars)
- **Rationale:** Verified "handmade pasta" (house-made bucatini/rigatoni in menu) and "fresh seafood" (calamari, octopus, salmon, branzino) claims against lib/site-data.json. Programmatically confirmed 151 chars (under 155 limit).

**H1 Tag:**
- **Old:** None (visual "SIENA" was decorative only)
- **New:** `<h1 class="sr-only">Siena Restaurant - Italian Mediterranean Dining in Alpharetta, GA</h1>`
- **Rationale:** SEO-accessible H1 without affecting visual design. Screen-reader accessible.

**Logo Alt Text:**
- **Old:** "logo"
- **New:** "Siena Restaurant Logo"
- **Rationale:** Descriptive alt text for accessibility and image SEO.

**OpenGraph & Twitter:**
- Updated to match new title and meta description for consistent social sharing.

### Baseline Metrics (GSC Data)

**Period:** Last 28 days (ending 2026-10-08)
- **Clicks:** 735
- **Impressions:** 12,331
- **CTR:** 5.96%
- **Average Position:** 13.76

**Desktop CTR Issue:**
- Desktop CTR dropped 4.67% to 2.87% (needs monitoring post-implementation)

**Top Performing Query:**
- "siena restaurant alpharetta": 150 clicks, 553 impr, 27.12% CTR, pos 1.05

**Target Query Performance:**
- "downtown alpharetta restaurants": 6 clicks, 642 impr, 0.93% CTR, pos 14.27 (not targeting on homepage - dedicated page exists)

### Files Modified

- `app/layout.tsx` - Updated metadata (title, description, OpenGraph, Twitter)
- `app/page.tsx` - Added sr-only H1
- `components/header.tsx` - Updated logo alt text

### Git Commit

- Commit: 9371a2e
- Message: "SEO: homepage title, meta description, H1"
- Branch: updated-theme

---

## /italian-restaurant-alpharetta (Round 1) - October 8, 2026

**Date:** 2026-10-08  
**URL:** https://sienaatl.com/italian-restaurant-alpharetta  
**Target Queries:** Italian restaurants alpharetta, italian alpharetta, best italian alpharetta

### Changes Made

**Title Tag:**
- **Old:** "Italian Restaurant in Alpharetta | Siena" (40 chars with template)
- **New:** "Italian Restaurant in Alpharetta | House-Made Pasta | Siena" (59 chars with template)
- **Character count (programmatic):** 59 chars ✓
- **Rationale:** Added "House-Made Pasta" differentiator verified in menu JSON (bucatini, rigatoni). Maintains commercial-first positioning.

**Meta Description:**
- **Old:** "Siena is an Italian restaurant in Alpharetta with house-made pasta and a Mediterranean twist. Book a table for dinner, cocktails and Friday live music." (151 chars)
- **New:** "House-made rigatoni, bucatini & Italian classics in Alpharetta. Fresh pasta, Italian dishes & Friday live music. Reserve your table at Siena." (141 chars)
- **Character count (programmatic):** 141 chars ✓
- **Rationale:** Removed "Mediterranean" per Italian-only strategy. Removed weak "Siena is..." opening. Added specific pasta names (rigatoni, bucatini) verified in lib/site-data.json. Removed unverified "daily" claim.

**H1 Tag:**
- **Old:** "The Italian Restaurant in Alpharetta" + script "with a Mediterranean soul"
- **New:** "Italian Restaurant in Alpharetta" + script "house-made pasta & classics"
- **Rationale:** Removed "The" (unsupported competitive claim). Changed script from Mediterranean to pasta focus (aligns with Italian-only positioning).

**Internal Links Added:**
1. INTRO section: Added link to `/downtown-alpharetta-restaurants` ("in the heart of downtown Alpharetta's dining scene")
   - Target: "downtown alpharetta restaurants" query (642 impr, 0.93% CTR, pos 14.27)
   - Natural contextual placement after location mention
   
2. "Who It Suits" cards: Added link to `/date-night-alpharetta` before reservation CTA
   - Target: "date night alpharetta" queries (36 impr + 79 impr variations)
   - Verified page exists, indexable, in sitemap ✓

**Kept "Mediterranean" in body copy:** Per user instructions, Mediterranean references remain naturally in body content describing actual menu items. Removed only from page positioning (title, description, H1).

### Baseline Metrics (GSC Data)

**Period:** Last 28 days (ending 2026-10-08)
- **Clicks:** 12 (new traffic, 0 previous period)
- **Impressions:** 3,284 (+225% vs 1,010 previous)
- **CTR:** 0.37% (92% below expected 3-5% for position 6)
- **Average Position:** 6.04

**Key Query Performance:**
- "italian restaurants alpharetta": 1 click, 255 impr, 0.39% CTR, pos 10.2
- "italian alpharetta": 1 click, 40 impr, 2.5% CTR, pos 10.15
- "new italian restaurant alpharetta": 2 clicks, 161 impr, 1.24% CTR, pos 8.93
- "best italian alpharetta": 1 click, 26 impr, 3.85% CTR, pos 9.69

### Files Modified

- `app/italian-restaurant-alpharetta/layout.tsx` - title, description, OpenGraph, Twitter metadata
- `app/italian-restaurant-alpharetta/content.ts` - H1, H1_SCRIPT, 2 internal links

### Git Commit

- Commit: f0310f6
- Message: "SEO: Italian page title, description, H1, links"
- Branch: updated-theme

### Round 2 Changes (Pending Approval)

The following changes are ready but NOT YET IMPLEMENTED:
- Heading improvements (2 blocks)
- Body copy Mediterranean reference adjustments
- 2 new FAQs with verified menu items
- FAQ JSON-LD sync

---
