# DCTechnoLabs Website v2 — Project Context for Claude

> This file is the single source of truth for this project. Read it fully before making any changes.
> Every rule here exists because of a previous mistake or a deliberate decision. Do not override any rule unless Ashish explicitly says to change it.

---

## Project Overview

**Client:** DCTechnoLabs — Digital Marketing Agency  
**Website:** dctechnolabs.in  
**Framework:** Astro (static site, zero JS by default)  
**Owner:** Ashish  
**Location:** Ahmedabad, Gujarat, India  
**Contact email for all forms:** hello@dctechnolabs.com  

---

## Local Setup

**Project folder:** `C:\Users\ashis\Downloads\noxfolio\dctechnolabs-website`  
**GitHub repo:** dctechnolabs-website  
**Hosting:** Vercel (connected to GitHub)

**Workflow:**
1. Claude edits files locally
2. Ashish reviews in browser (local dev server)
3. Push to preview branch on GitHub
4. Vercel auto-creates a preview URL for review on desktop and mobile
5. Once approved, merge to main and the live site updates

---

## Roadmap Reference

This project follows **dctechnolabs-roadmap-v2.md** exactly. Every task, every page, every section is defined in that document. Always refer to it when building or expanding anything.

**Current Phase:** Phase 1 complete, transitioning into Phase 3 and deployment prep.

---

## Current Project Status

### COMPLETED PAGES

| Page | Status | Notes |
|---|---|---|
| Homepage | Done | 14 sections |
| Services Hub | Done | 10+ sections |
| Web Design | Done | 12+ sections |
| Web Development | Done | 12+ sections |
| SEO Services | Done | 12+ sections |
| PPC / Google Ads | Done | 12+ sections |
| E-commerce Development | Done | 12+ sections |
| WordPress Development | Done | 12+ sections |
| Social Media Marketing | Done | 12+ sections |
| Shopify Development | Done | Sub-service page |
| Custom Web Development | Done | Sub-service page |
| Local SEO | Done | Sub-service page |
| Google Ads Management | Done | Sub-service page |
| Website Maintenance | Done | Sub-service page |
| Locations Hub | Done | Balanced grid |
| Ahmedabad | Done | 1,500+ words |
| Gandhinagar | Done | 1,000+ words |
| Surat | Done | 1,000+ words |
| Vadodara | Done | 1,000+ words |
| About | Done | 10+ sections |
| Contact | Done | Form + map + contact methods |
| Pricing | Done | 3-tier tabbed pricing |
| Portfolio | Done | Grid layout |
| Blog Hub | Done | Category filters, featured post |
| FAQ | Done | Accordion |
| Privacy Policy | Done | |
| Terms of Service | Done | |

### COMPLETED BLOG POSTS

| Post | URL Slug | Status |
|---|---|---|
| 10 SEO Mistakes Ahmedabad Businesses Make | seo-mistakes-ahmedabad-businesses-2025 | Done |
| How Much Does a Website Cost in Ahmedabad | website-cost-ahmedabad-2025 | Done |
| How to Fix a Slow Website (Gujarat Businesses) | fix-slow-website-loading | Done |
| Instagram Reels Strategy for Indian Businesses 2025 | instagram-reels-strategy-2025 | Done |
| How to Set Up Razorpay on Shopify in India | razorpay-shopify-setup-guide | Done |
| How to Reduce Google Ads Cost Per Lead | reduce-google-ads-cost-per-lead | Done |
| Shopify vs WooCommerce for Indian Businesses 2025 | shopify-vs-woocommerce-2025 | Done |
| How Much Does a Website Cost in India 2025 | website-cost-india-2025 | Done |
| Google Business Profile Setup Guide for Ahmedabad Businesses 2026 | google-business-profile-setup-ahmedabad | Done |
| WhatsApp Business Marketing for Indian Small Businesses: Complete 2026 Guide | whatsapp-business-marketing-guide-india | Done |
| How to Choose a Digital Marketing Agency in Ahmedabad: 7 Questions to Ask | how-to-choose-digital-marketing-agency-ahmedabad | Done |
| How to Start Selling Online in India: Complete E-commerce Guide for 2026 | ecommerce-for-indian-businesses-2026 | Done |
| Google Ads vs Facebook Ads: Which Works Better for Gujarat Businesses? | google-ads-vs-facebook-ads-gujarat | Done |
| How to Choose a Web Design Company in Ahmedabad: 10 Questions to Ask | how-to-choose-web-design-company-ahmedabad | Done |
| Local SEO Checklist: How to Rank #1 in Ahmedabad | local-seo-checklist-ahmedabad | Done |

### COMPLETED LANDING PAGES

| Page | Status | Notes |
|---|---|---|
| Free Website Audit | Done | 10 sections, colored checklist tiles, Web3Forms |
| Free SEO Audit | Done | 9 sections, before/after case study panel, Web3Forms |
| NZ Website Offer | Done | Meta Ads landing page, noindex, NOT in sitemap |
| Thank You | Done | Post-form redirect page, noindex, NOT in sitemap |

### PENDING PAGES (build in this order as per roadmap)

1. ✅ Blog detail / individual post pages (with sticky sidebar TOC) — DONE (March 2026)
2. ✅ Portfolio detail pages (individual case study page — lifecare-clinic) — DONE (March 2026)
3. ✅ Free Website Audit landing page — DONE (March 2026)
4. ✅ Free SEO Audit landing page — DONE (March 2026)
5. ✅ Industries hub page (/industries/) — DONE (March 2026) — 10 sections, 14 industry cards, Web3Forms
6. ✅ All 14 individual industry sub-pages — DONE (March 2026) — healthcare, real-estate, ecommerce, education, manufacturing, restaurants, legal, construction, finance, travel, automotive, saas, fashion, ngo
7. ✅ 8 Ahmedabad neighborhood sub-pages — DONE (March 2026) — satellite, sg-highway, prahlad-nagar, vastrapur, bodakdev, navrangpura, cg-road, maninagar. Uses NeighborhoodPageLayout.astro (wraps PageLayout, 12 sections). Ahmedabad.astro neighborhood cards now link to sub-pages. BaseLayout.astro and PageLayout.astro updated to support named head slot for schema injection.
8. ✅ 8 Gandhinagar neighborhood sub-pages — DONE (March 2026) — gift-city, infocity, sector-21, sector-7, kudasan, sargasan, adalaj, koba-circle. NeighborhoodPageLayout.astro and LocationPageLayout.astro updated to accept optional citySlug/cityName props (default: ahmedabad/Ahmedabad) for multi-city support. Gandhinagar.astro neighborhood cards now link to sub-pages.
9. ✅ 8 portfolio case study pages — DONE (March 2026) — lifecare-clinic, gujarat-gems, buildright-infra, freshbasket, crona-group, nis-consulting, edupro-academy, cloudsync-solutions, taste-of-gujarat. All 9 cards on portfolio.astro now have working detail pages.
10. ✅ 8 Surat neighborhood sub-pages — DONE (March 2026) — varachha, ring-road, vesu, adajan, athwa, katargam, piplod, dumas-road. surat.astro updated with slugs and citySlug="surat" prop.
11. ✅ 8 Vadodara neighborhood sub-pages — DONE (March 2026) — alkapuri, gotri, manjalpur, fatehgunj, sayajigunj, waghodia-road, makarpura-gidc, harni. vadodara.astro updated with slugs and citySlug="vadodara" prop.

### DEPLOYMENT STATUS

- Forms: Migrated to **Web3Forms** on all pages (March 2026)
- Sitemap: Static sitemap.xml in public/ (March 2026) — update manually when new pages are added
- Header nav: Services, Portfolio, Pricing, Locations, Blog, Contact
- Shared Header.astro component: All pages (including ServicePageLayout, LocationPageLayout, portfolio.astro) now use a single Header.astro component — nav changes only need to happen in one place (March 2026)
- robots.txt: Created in public/ (March 2026)
- Twitter Card meta tags: Added to BaseLayout.astro (March 2026)
- GitHub repo: Connected to Vercel
- Vercel: Live
- Deployment: LIVE at dctechnolabs.in (March 2026)

---

## Services Offered

- Web Design
- Web Development
- SEO Services
- PPC / Google Ads Management
- E-commerce Development
- WordPress Development
- Social Media Marketing

---

## Location Coverage

**Primary city:** Ahmedabad
Neighborhoods covered (with individual sub-pages): Satellite, SG Highway, Vastrapur, Bodakdev, Prahlad Nagar, Navrangpura, C.G. Road, Maninagar
Neighborhood sub-pages URL pattern: /locations/ahmedabad/[slug]/ (e.g. /locations/ahmedabad/satellite/)
Business hubs: GIFT City, InfoCity, Science City area

**Other cities:** Gandhinagar, Surat, Vadodara
Gandhinagar neighborhoods (with sub-pages): GIFT City, Infocity, Sector 21, Sector 7, Kudasan, Sargasan, Adalaj, Koba Circle — URL pattern: /locations/gandhinagar/[slug]/
Surat neighborhoods (with sub-pages): Varachha, Ring Road, Vesu, Adajan, Athwa, Katargam, Piplod, Dumas Road — URL pattern: /locations/surat/[slug]/
Vadodara neighborhoods (with sub-pages): Alkapuri, Gotri, Manjalpur, Fatehgunj, Sayajigunj, Waghodia Road, Makarpura GIDC, Harni — URL pattern: /locations/vadodara/[slug]/

---

## ABSOLUTE RULES — Never Break These

### Writing and Content

- **Never use the em dash symbol ( — )** anywhere in any file, ever
- **Never use a hyphen** unless it is grammatically necessary (compound adjectives like "mobile-first" are fine, decorative hyphens or list separators are not)
- **Never use the phrase "No jargon, no fluff"** anywhere on the site
- **Never use square brackets in titles, headings, or content** unless absolutely necessary (e.g. do not write "2025 Guide" as "[2025 Guide]")
- Content must sound like a real Ahmedabad business, not AI-generated filler
- Always include specific local context: mention Ahmedabad, Gujarat, GIFT City, InfoCity, etc. where relevant
- Pricing should reference Indian Rupees (₹) not dollars
- Do not use generic placeholder text like "Lorem ipsum" or "Coming soon" anywhere

### Design and Layout

- Sections must alternate between light and dark backgrounds for visual rhythm
- Every page must have a minimum of 10 sections (service pages 12+, homepage 14)
- No orphan tiles in any grid. If grid does not fill evenly, the last space becomes a CTA card
- All buttons must pass WCAG AA contrast minimum against their background
- No invisible buttons, no low-contrast text
- Mobile-first: every element must be thumb-friendly on mobile
- Hero section on every page must have an embedded contact form, not just a tagline
- Navigation uses full-screen overlay style on mobile with large tap targets

### Technical

- Astro framework only, do not add React or Vue unless absolutely necessary
- Zero unnecessary JavaScript. Astro ships zero JS by default, keep it that way unless interactivity requires it
- All images must be WebP format with lazy loading and proper alt text
- Every page needs: meta title, meta description, OG tags, canonical URL
- Every page with FAQs needs FAQ schema markup
- Service pages need Service schema
- Homepage and location pages need LocalBusiness schema
- Target 90+ PageSpeed score on mobile
- sitemap.xml and robots.txt must stay updated as new pages are added
- ALL internal `href` links must include a trailing slash (e.g. `/about/` not `/about`). This applies to Header.astro, Footer.astro, and all page content. Missing trailing slashes cause 301 redirects that block Google indexing.
- The canonical domain is `https://dctechnolabs.in/` (no www). Never use www in canonical tags, sitemap URLs, or astro.config.mjs site setting. Vercel is configured with dctechnolabs.in as primary and www redirecting to it.
- Ad landing pages (Meta Ads, Google Ads) must have noindex and must NOT be added to sitemap.xml

---

## Contact Form Rules

**Form provider: Web3Forms** (NOT Formspree, NOT Contact Form 7)

**Why Web3Forms:**
- Free, no redirect to external success page
- Success message shows inline on the same page below the form
- Sends submissions directly to hello@dctechnolabs.com
- Spam protection built in
- Works with Astro static sites

**Implementation for every form:**
- Add a hidden input: `<input type="hidden" name="access_key" value="[ACCESS_KEY]">`
- On successful submit, show an inline success message in the form area. Do not redirect the user.
- The success message should say something like: "Thank you! We will get back to you within 24 hours."
- All forms submit to hello@dctechnolabs.com

**Standard form fields (hero and contact forms):**
- Name (required)
- Phone (required)
- Email (required)
- Service Interested In (dropdown)
- Brief Message (required)

**Audit landing page form fields:**
- Name (required)
- Email (required)
- Phone (required)
- Website URL (required)

---

## Design Identity

### Color Palette
- Primary background (dark sections): Deep navy or dark charcoal
- Secondary background (light sections): Clean white or very light grey
- Accent color: Bright blue or teal (used for CTAs, highlights, icons)
- Text on dark: White or near-white
- Text on light: Dark grey or near-black
- All color combinations must pass WCAG AA contrast

### Typography
- Strong typographic hierarchy: large, bold headings with clean body text
- No generic fonts like Arial, Roboto, system-ui as primary display fonts
- Body text should be highly readable at all sizes

### Section Structure (every page)
Each section should have a clear purpose. No filler sections. Pattern:
- Hero with form
- Trust/proof signals
- Service details or content
- Process steps
- Testimonials
- FAQ accordion
- CTA with form

---

## Section Blueprints

### Homepage (14 sections)
1. Hero with embedded contact form (Name, Phone, Service dropdown, Message)
2. Trusted by / Client logo bar
3. Services overview grid (icon + title + description + link)
4. Stats counter bar (Projects Completed, Happy Clients, Years, Team Members)
5. Why Choose DCTechnoLabs (differentiators with icons)
6. Our Process (visual 4 to 6 step journey)
7. Featured Case Studies / Portfolio highlights
8. Testimonial carousel (photo, name, company, stars, quote)
9. Industries We Serve
10. Pricing preview (3 tiers, link to full pricing page)
11. Latest Blog Posts (3 cards)
12. FAQ accordion (8 to 10 questions)
13. Service Area Map / Local Presence section
14. Final CTA with contact form or "Get Free Quote"

### Service Pages (12 sections)
1. Hero with service-specific headline + mini contact form
2. What's Included (detailed feature list with icons)
3. Common Problems We Solve (relatable pain points)
4. Our Process (step-by-step with visuals, 4 to 6 steps)
5. What You Get / Deliverables
6. Why Choose DCTechnoLabs Over Competitors
7. Pricing / Packages (3-tier or "Starting from ₹X")
8. Portfolio / Work Samples for this service
9. Client Testimonials specific to this service
10. FAQ Accordion (10 questions)
11. Related Services (internal links to other pages)
12. Final CTA with contact form or WhatsApp

### Location Pages (11 sections)
1. Hero: "[Service] in [City]"
2. Overview of DCTechnoLabs presence in that city
3. Neighborhoods / Areas we serve (with prime locations listed)
4. Local business challenges we solve
5. Major business hubs we work with (e.g., GIFT City, InfoCity)
6. Why local businesses choose us
7. Case studies from that city (placeholder initially)
8. Response times for different areas
9. FAQ specific to that market
10. Embedded Google Map + directions
11. CTA with contact form

### Blog Post Pages (pending)
- Sticky table of contents in left or right sidebar (auto-generated from H2/H3 headings)
- 1,500 to 2,000 words per post
- Author box with photo
- Related posts at bottom
- CTA banner mid-article and at end
- Category tags and reading time estimate
- Social share buttons (WhatsApp, LinkedIn, Twitter, Facebook)

---

## Mistakes That Were Fixed — Do Not Reintroduce

| Mistake | What Was Done |
|---|---|
| Hero had a generic tagline instead of a form | All hero sections now have an embedded contact form |
| Mobile menu was broken | Full-screen overlay mobile menu with large tap targets |
| Service pages had fewer than 10 sections | All service pages rebuilt to 12 sections minimum |
| Location grid had an orphan tile (3 cities + empty slot) | Grid always fills with a CTA card in the last slot |
| Buttons were invisible or low contrast | All buttons checked for WCAG AA |
| Forms redirected users to Formspree success page | Switching to Web3Forms with inline success message |
| Em dash used throughout content | Em dash is permanently banned in this project |
| Phrase "No jargon, no fluff" was used | Permanently banned |
| Pricing page used single flat layout | Rebuilt as tabbed interface with multiple service categories |
| Content felt generic and thin | All content has specific Ahmedabad/Gujarat local context |
| Header HTML/CSS/JS duplicated across 4 layout files | Refactored to single shared Header.astro component with activePage and ctaHref props |
| GA loaded unconditionally on all pages (GDPR violation) | Removed all inline GA scripts. GA now loads ONLY after cookie consent via CookieBanner.astro |
| Cookie banner missing — analytics fired without user consent | Built CookieBanner.astro (pure vanilla JS, no third-party library). Consent stored in localStorage as dct_cookie_consent. Banner added to BaseLayout, ServicePageLayout, LocationPageLayout, portfolio.astro |
| portfolio.astro had hardcoded canonical without trailing slash | Fixed: canonical now uses trailing slash. GSC redirect error resolved. |
| about.astro passed canonical without trailing slash to PageLayout | Fixed: canonical prop now includes trailing slash. |
| ServicePageLayout and LocationPageLayout had inline GA bypassing consent | Removed inline GA from both layouts. Now use CookieBanner for consent-gated GA. |
| Sitemap had no lastmod dates | Added lastmod dates to all 100 URLs in sitemap.xml — signals freshness to Google crawlers |
| Header.astro and Footer.astro had ALL internal links without trailing slashes | Fixed: all internal hrefs now include trailing slash (e.g. /pricing/ not /pricing). This was causing every page on the site to serve redirect errors to Googlebot via the nav and footer links. |
| Vercel primary domain was www.dctechnolabs.in — entire site was 307-redirecting | Fixed: dctechnolabs.in is now the primary Production domain. www.dctechnolabs.in redirects to dctechnolabs.in. This was the root cause of ALL redirect errors in GSC. |

---

## What Claude Should Do When Unsure

1. Read this CLAUDE.md file first
2. Check the roadmap file: `dctechnolabs-roadmap-v2.md`
3. Look at the existing completed pages for patterns before building new ones
4. If a new page is being built, follow the relevant section blueprint above
5. Never assume a design choice — match the existing site's patterns
6. When adding a new page, also update sitemap.xml

---

## What Ashish Does vs What Claude Does

| Ashish | Claude |
|---|---|
| Reviews pages in browser and on mobile | Writes all code, content, and config |
| Provides feedback with screenshots | Fixes issues based on feedback |
| Pushes to GitHub after approving locally | Manages all file structure and code |
| Approves merge to main for live deployment | Keeps CLAUDE.md updated as project evolves |
| Provides business info (testimonials, pricing, etc.) | Writes all page content using that info |

---

## Upcoming Next Steps (in order)

1. ✅ Replace all Formspree form code with Web3Forms across all pages — DONE (March 2026)
2. ✅ Build individual blog post page template (with sticky TOC sidebar) — DONE (March 2026)
3. ✅ Build individual portfolio/case study detail page (lifecare-clinic) — DONE (March 2026)
4. ✅ Build Free Website Audit landing page — DONE (March 2026)
5. ✅ Build Free SEO Audit landing page — DONE (March 2026)
6. ✅ Pre-deployment check: sitemap (@astrojs/sitemap), robots.txt, Twitter Card meta tags — DONE (March 2026)
7. ✅ Deploy v2 to replace current live dctechnolabs.in — LIVE (March 2026)
8. ✅ Cookie consent banner — DONE (March 2026) — CookieBanner.astro, consent-gated GA across all layouts
9. ✅ Fix GSC redirect errors for /about/ and /portfolio/ — DONE (March 2026) — canonical tags corrected
10. ✅ Added lastmod dates to all sitemap URLs — DONE (March 2026)
11. ✅ GA removed from ServicePageLayout and LocationPageLayout — DONE (March 2026) — now consent-gated via CookieBanner
12. Indexing: All technical redirect issues now resolved (March 2026). Root causes were: (a) Vercel primary domain was www instead of non-www, (b) Header/Footer internal links missing trailing slashes, (c) portfolio.astro canonical had no trailing slash. After deploying fixes, use GSC to Start New Validation on redirect errors and request indexing for 10 priority pages per day.

---

## Cookie Consent Architecture

**Component**: `src/components/CookieBanner.astro`
**Storage key**: `localStorage.dct_cookie_consent` = `'accepted'` | `'declined'`
**Event fired on accept**: `window.dispatchEvent(new Event('dct:consent-accepted'))`

**Where it is included** (all standalone layouts must import it):
- `src/layouts/BaseLayout.astro` — covers: PageLayout, NeighborhoodPageLayout, IndustryPageLayout, blog pages, about, contact, pricing, faq, industries
- `src/layouts/ServicePageLayout.astro` — covers all service pages
- `src/layouts/LocationPageLayout.astro` — covers all city pages (ahmedabad, gandhinagar, surat, vadodara)
- `src/pages/portfolio.astro` — standalone page
- `src/pages/nz-website-offer/index.astro` — FB Pixel also consent-gated via dct:consent-accepted event

**Rule**: Any new standalone layout (one that has its own `<!DOCTYPE html>` and does NOT wrap BaseLayout) MUST import and include `<CookieBanner />` before `</body>` and must NOT include inline GA scripts.

---

*Last updated: March 2026 (cookie consent, GSC redirect fixes, sitemap lastmod, GA consent-gating across all layouts). Update this file whenever a page is completed, a rule is added, or a decision is made.*
