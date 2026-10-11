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
