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

### PENDING PAGES (build in this order as per roadmap)

1. Blog detail / individual post pages (with sticky sidebar TOC)
2. Portfolio detail pages (individual case study pages)
3. Free Website Audit landing page (form: name, email, phone, website URL)
4. Free SEO Audit landing page (form: name, email, phone, website URL)

### DEPLOYMENT STATUS

- Forms: Migrated to **Web3Forms** on all pages (March 2026)
- GitHub repo: Ready
- Vercel: Connected
- Deployment to replace live dctechnolabs.in: Pending

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
Neighborhoods covered: Satellite, SG Highway, Vastrapur, Bodakdev, Prahlad Nagar, Navrangpura, C.G. Road, Maninagar  
Business hubs: GIFT City, InfoCity, Science City area

**Other cities:** Gandhinagar, Surat, Vadodara  
Future sub-pages planned per area (not built yet)

---

## ABSOLUTE RULES — Never Break These

### Writing and Content

- **Never use the em dash symbol ( — )** anywhere in any file, ever
- **Never use a hyphen** unless it is grammatically necessary (compound adjectives like "mobile-first" are fine, decorative hyphens or list separators are not)
- **Never use the phrase "No jargon, no fluff"** anywhere on the site
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
2. ✅ Build individual blog post page template (with sticky TOC sidebar) — DONE (March 2026) — see seo-mistakes-ahmedabad-businesses-2025.astro as the template
3. Build individual portfolio/case study detail page template
4. Build Free Website Audit landing page
5. Build Free SEO Audit landing page
6. Final pre-deployment check: sitemap, robots.txt, meta tags, schema on all pages
7. Deploy v2 to replace current live dctechnolabs.in

---

*Last updated: March 2026. Update this file whenever a page is completed, a rule is added, or a decision is made.*
