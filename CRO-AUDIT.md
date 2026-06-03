# DCTechnoLabs Website — CRO Audit Report
**Auditor:** CRO + Copywriting Review  
**Date:** May 2026  
**Scope:** Full site — homepage, service pages, location pages, blog, portfolio, contact, pricing, landing pages  

---

## Executive Summary

The site has strong technical bones: fast load, mobile-first layout, schema markup, proper canonical structure, form handling. The SEO foundation is solid. The conversion problem is almost entirely in the copy and the user journey.

The writing on this site reads like a template. Phrases like "We're not just another agency," "drive real results," "conversion-focused," and "transparent reporting" appear across almost every page. These phrases say nothing because every agency uses them. A business owner landing on this site cannot immediately tell what DCTechnoLabs does better than the fifteen other agencies they have found on Google.

The core problem: the site tries to be everything to everyone and ends up being nothing to anyone. A dental clinic owner in Navrangpura, a Surat diamond trader who wants e-commerce, and a GIFT City SaaS startup all land on the same generic homepage that speaks to none of them specifically.

Secondary problem: the trust signals are weak. "100+ Clutch Awards" means nothing to an Ahmedabad SME owner. Testimonials with no company names and no verifiable detail read as invented. The portfolio section on the homepage shows three unnamed generic project types with no metrics that matter.

This audit covers every major issue, ranked by impact on conversion, with specific recommended copy rewrites for the highest-leverage pages.

---

## 1. Critical Issues — Fix Immediately

These are losing you conversions today.

### 1.1 Banned Phrases Still Present Site-Wide

The rule says never use em dash or "No jargon, no fluff." Both appear across multiple pages:

**Em dashes found in:**
- `nz-website-offer/index.astro` — meta description, body copy, FAQ answers, section headlines (7+ instances)
- `portfolio/taste-of-gujarat.astro` — case study narrative (5 instances)
- `portfolio/edupro-academy.astro` — case study narrative (1 instance)
- `thank-you/index.astro` — page title

**"Jargon" or banned phrases found in:**
- `index.astro` line 349: "No complexity, no jargon. Here's how we take you from idea to results."
- `index.astro` line 651: "Got questions? Straight answers. No jargon."
- `about.astro` line 82: "Transparency over jargon. Results over promises."
- `about.astro` line 311: "No pressure, no jargon, just a genuine conversation..."
- `portfolio.astro` line 793: "We learn your business, goals, and audience. 30-minute call, no fluff."
- `sector-21.astro` line 143: "No technical jargon."

### 1.2 Internal Links Missing Trailing Slashes on Homepage

Every service card link, location card, and blog link on the homepage is missing the trailing slash. This causes 301 redirects on every click, which slows page load and signals broken navigation to crawlers.

**Broken links on homepage (`src/pages/index.astro`):**
- `/services/web-design` should be `/services/web-design/`
- `/services/web-development` should be `/services/web-development/`
- `/services/seo` should be `/services/seo/`
- `/services/ppc` should be `/services/ppc/`
- `/services/ecommerce` should be `/services/ecommerce/`
- `/services/wordpress` should be `/services/wordpress/`
- `/services/shopify` should be `/services/shopify/`
- `/services/social-media` should be `/services/social-media/`
- `/portfolio` should be `/portfolio/`
- `/industries` should be `/industries/`
- `/locations/ahmedabad` should be `/locations/ahmedabad/`
- `/locations/gandhinagar` should be `/locations/gandhinagar/`
- `/locations/surat` should be `/locations/surat/`
- `/locations` should be `/locations/`
- `/blog` should be `/blog/`
- `/blog/website-cost-ahmedabad` is the wrong slug — should be `/blog/website-cost-ahmedabad-2025/`
- `/blog/ahmedabad-seo` does not exist
- `/blog/choose-web-design-company` is the wrong slug — should be `/blog/how-to-choose-web-design-company-ahmedabad/`

### 1.3 The Hero Headline Is Generic

"We Build Websites That Grow Your Business" could be the headline for 10,000 agencies in India. It tells the visitor nothing specific about who this is for, what the outcome is, or why they should stay.

A visitor arriving from a Google search for "web design agency Ahmedabad" spends 3-5 seconds deciding whether to stay. This headline does not give them a reason.

**What is missing:** A specific claim tied to a measurable outcome for a recognisable audience.

---

## 2. Homepage CRO Teardown — Section by Section

### Hero Section

**Current headline:** "We Build Websites That Grow Your Business"  
**Problem:** Generic. No specificity. No differentiation.  
**Fix:** Lead with the outcome and the audience. See Section 9 for full rewrite.

**Current subhead:** "Ahmedabad's trusted digital marketing agency. From web design to SEO to PPC, we help local businesses get found online, generate leads, and increase revenue. 8+ years of proven results."  
**Problem:** Lists every service instead of speaking to one pain point. "Get found online, generate leads, and increase revenue" is the same sentence every agency writes.  
**Fix:** Pick one primary promise and make it specific.

**Hero badge:** "100+ Clutch Awards · Trusted by 945+ Businesses"  
**Problem:** Clutch is a US review platform virtually unknown to Ahmedabad SME owners. Citing it as social proof is the equivalent of showing someone a trophy they have never heard of. 945+ businesses means nothing without context — 945 websites? 945 active clients? 945 projects of all sizes over 8 years?  
**Fix:** Replace with Google Reviews count (which Indian business owners trust) and a specific named reference.

**Form CTA button:** "Send My Free Quote Request"  
**Problem:** Passive, wordy, friction-heavy language. "Request" makes it feel bureaucratic.  
**Fix:** "Get My Free Quote" or "Send My Details" — shorter, active, direct.

**Form note:** "No spam. No obligation. Just a conversation about growing your business."  
**Problem:** Three negatives ("No spam, No obligation") before a positive. Starts by reminding the user of reasons not to trust you.  
**Fix:** State the positive outcome: "We reply within 24 hours with a detailed plan."

**Form label:** "Service Interested In"  
**Problem:** Grammatically awkward. Sounds like machine-translated text.  
**Fix:** "What do you need help with?"

**Hero stats repeated:** The 945+, 8+, and 100+ stats appear in the hero badge, the hero stats row, and again in the stats counter bar. This dilutes the impact of each number and makes the page feel padded.  
**Fix:** Show stats once, in the stats bar where they have visual weight.

### Section 5: Why Choose Us

**Current subtitle:** "We're not just another agency. Here's what makes working with us different."  
**Problem:** "We're not just another agency" is the most overused phrase in B2B marketing. The moment a prospect reads it, they know what follows will be generic.  
**Fix:** Lead with what a client actually gets. See rewrite in Section 9.

**Card: "Local Business Expertise"**  
**Problem:** Vague. "We understand Ahmedabad's market" is an assertion without proof.  
**Fix:** Give a specific number. "We have built websites for businesses in Satellite, Navrangpura, GIFT City, and 30+ other locations across Gujarat" is credible. "We understand your market" is not.

**Card: "Cost-Effective Services"**  
**Problem:** "Premium quality without premium prices" is a contradiction — if it is premium, it is priced that way. This line reads as defensive.  
**Fix:** Be direct about the price-quality position. "Our web design starts at Rs. 25,000. A comparable agency in Mumbai or Delhi would charge Rs. 75,000 to 1 lakh for the same output."

**Card: "Value-Backed Guarantee"**  
**Problem:** "That's not a marketing line" IS a marketing line. The card contradicts itself.  
**Fix:** State the guarantee specifically. What exactly do you fix, and within what timeframe?

**Card: "Fast Turnaround"**  
**Problem:** "While other agencies take months, we deliver in weeks" — which agencies? What is the actual timeline?  
**Fix:** "Most websites are live within 14 to 21 days. E-commerce stores within 30 days."

**Emojis as card icons:** 🏠 💰 ✅ ⚡ 📊 🤝 — These look unprofessional on a B2B agency site and signal low effort. Replace with clean SVG icons consistent with the rest of the site.

### Section 6: Process

**Current subtitle:** "No complexity, no jargon. Here's how we take you from idea to results."  
**Problem:** "No jargon" is a banned phrase. Also, "from idea to results" is vague — results of what?  
**Fix:** "Four steps from first enquiry to live website."

**Step 1: "Discovery Call"** — fine.  
**Step 2: "Strategy & Proposal"** — subtitle says "Within 24 hours, you receive a detailed plan." Good specificity. Keep.  
**Step 3: "Build & Review"** — fine.  
**Step 4: "Launch & Grow"** — "Ongoing support ensures your investment keeps delivering returns" is vague. How? Weekly reports? Monthly calls?

### Section 7: Portfolio Preview

**Problem 1:** Three generic unnamed projects ("Fashion Retail Store", "Real Estate Agency", "Healthcare Clinic") with no company names, no specific numbers beyond one stat each.  
**Problem 2:** The portfolio preview shows no brand names. A prospect cannot verify any of the claims.  
**Problem 3:** The portfolio link "View All Projects" goes to `/portfolio` without trailing slash.  
**Fix:** Show three named case studies from the portfolio (LifeCare Clinic, FreshBasket, BuildRight Infra) with one headline result each. Named, verifiable proof converts better than anonymous examples.

### Section 8: Testimonials

**Problem 1:** All three testimonials are from anonymous generics: "CEO, Construction Company"; "Owner, Dental Clinic"; "Founder, SaaS Startup." These could have been written by anyone.  
**Problem 2:** The testimonial quotes are polished but thin. "Best investment we've made" tells no story. "Incredible team" says nothing.  
**Problem 3:** "Don't take our word for it. Here's what business owners across Ahmedabad say." — "Don't take our word for it" is a pre-emptive defence that signals you think the reader is sceptical. It draws attention to potential distrust.  
**Fix:** Replace with testimonials tied to named businesses from the portfolio. "Rajesh Patel, BuildRight Infra, Gandhinagar" is verifiable. Add one specific outcome to each.

### Section 10: Pricing Preview

**Problem 1:** "Simple, Honest Pricing" — honest is a low bar to set for yourself. It implies that other agencies are dishonest.  
**Problem 2:** "No hidden fees. No long-term contracts. Just clear value for your investment." — three negatives again. Lead with what they do get, not what they do not.  
**Problem 3:** All three CTAs in the pricing section say "Get Started" and link to `#hero-form`. This anchor link may not work as intended on mobile if the form is off-screen.  
**Problem 4:** The pricing cards have no comparison context — why would someone pay Rs. 35,000/month for PPC over Rs. 30,000/month for SEO? No decision guide.

### Section 11: Blog Preview

**Problem 1:** All three blog links point to incorrect or non-existent URLs:
- `/blog/website-cost-ahmedabad` — wrong slug (correct: `/blog/website-cost-ahmedabad-2025/`)
- `/blog/ahmedabad-seo` — this page does not exist
- `/blog/choose-web-design-company` — wrong slug (correct: `/blog/how-to-choose-web-design-company-ahmedabad/`)

**Problem 2:** Subtitle "Practical guides to help your business grow online" — generic, same on every agency blog.

### Section 12: FAQ

**Current subtitle:** "Got questions? Straight answers. No jargon."  
**Problem:** Banned phrase. Also, "Straight answers" is a promise, not a descriptor.  
**Fix:** "Questions business owners ask before they get in touch."

**FAQ content — specific issues:**
- "Pricing is designed to be accessible" — vague, give a number
- "100+ Clutch awards don't lie" — Clutch is unknown to the target audience
- "Not a revolving door of freelancers" — negative framing, reads as defensive

### Section 14: Final CTA

**Current headline:** "Ready to Grow Your Business Online?"  
**Problem:** This question has been on agency websites since 2005. It has zero differentiation.  
**Fix:** Make it specific to the action you want: "Talk to Us This Week. Proposals Ready in 24 Hours."

---

## 3. Copy and Messaging Issues — Site-Wide

### 3.1 "Agency Speak" That Kills Credibility

The following phrases appear across multiple pages and should be removed entirely. They signal AI-generated or template copy and immediately lower trust with a business owner who has seen them on every agency site:

| Phrase | Problem |
|---|---|
| "Drive real results" | Every agency says this. It means nothing. |
| "Conversion-focused" | Technical term that business owners do not use or care about |
| "Transparent reporting" | Table stakes. Not a differentiator. |
| "Data-driven" | Overused to the point of meaninglessness |
| "Full-service digital agency" | Says nothing about what you actually do |
| "Helping businesses thrive online" | Could be anyone, anywhere |
| "We're not just another agency" | The most generic line in agency marketing |
| "Proven track record" | Prove it with specifics, do not just claim it |
| "Strategic approach" | Everyone claims strategy |
| "End-to-end solutions" | Software vendor language, not service agency language |
| "Scalable" | Overused tech word |
| "Innovative" | Everyone claims it, no one defines it |

### 3.2 Weak CTA Copy Across the Site

| Current | Problem | Fix |
|---|---|---|
| "Get Started" | Vague. Get started with what? | "Book a Free Call" or "Get My Quote" |
| "Learn more" | No benefit stated | "See What's Included" or "View Pricing" |
| "View All Projects" | Bland | "See the Full Portfolio" |
| "Explore All Industries" | Generic | "See If We Work in Your Industry" |
| "Get Your Free Quote" | Overused | "Tell Us About Your Project" |
| "Send My Free Quote Request" | Wordy and passive | "Get My Quote" |

### 3.3 Testimonial Quality Problem

Every testimonial on the site follows the same format: initials avatar, generic first-last name, generic role, generic quote. No company name. No location. No specific outcome with context.

A business owner reading "DC technolabs completely transformed our online presence" cannot verify this, cannot look up the business, cannot see before/after. Anonymous testimonials without a verifiable business name behind them are treated with the same scepticism as Amazon reviews with one word and five stars.

**Fix:** Replace every testimonial with a quote tied to a named business from the portfolio, a specific result, and a location. For example:

> "Before DC technolabs, our website was getting calls maybe twice a week. Four months after the rebuild and SEO, we are taking 8 to 10 enquiries every day. We had to hire two more staff to handle it."  
> Dinesh Thakkar, Taste of Gujarat, Ahmedabad

### 3.4 Stats Without Context

945+ projects, 8+ years, 100+ Clutch Awards, 20+ team members. These numbers appear three times on the homepage but are never given context:

- 945 projects over 8 years = roughly 120 projects per year, or 10 per month. Is that impressive? For a 20-person team, that is 5 projects per person per year. This does not add up as claimed without context.
- "100+ Clutch Awards" — most Indian business owners do not know what Clutch is. This adds noise, not signal.

**Fix:** Replace Clutch with Google Reviews. Show a star rating with count (e.g., "4.9 stars across 87 Google reviews"). Rework the stat on projects to be more specific: "200+ websites live in Gujarat" or "40 active SEO clients."

---

## 4. Trust and Social Proof Audit

| Element | Current State | Issue | Fix |
|---|---|---|---|
| Testimonials | 3 generic, no company names | Unverifiable, low trust | Use named businesses from portfolio |
| Client logos bar | Text names only, no logos | Text names = no visual credibility | Add actual company logos or full business names with sectors |
| Portfolio preview | 3 unnamed generic projects | Cannot be verified | Show 3 named case study results |
| Review platform | Clutch cited | Clutch unknown to Indian SME market | Switch to Google Reviews count |
| Guarantee | Buried in a "Why Choose Us" card | Prospect has to read carefully to find it | Surface guarantee prominently near CTA |
| Google Reviews widget | Not present | Missed credibility signal | Add Google Reviews embed or badge |

---

## 5. Form Conversion Audit

### Hero Form

| Element | Issue | Fix |
|---|---|---|
| 5 required fields | High friction for first contact | Make message optional; keep name, phone, email, service |
| "Brief Message" label | Generic, does not guide the user | Change to "What's your main challenge?" or make optional |
| "Your Name" placeholder: "John Patel" | Generic placeholder name | Use "Priya Shah" or a locally familiar name |
| Button: "Send My Free Quote Request" | Passive and wordy | "Get My Free Quote" |
| Form note: "No spam. No obligation." | Starts with negatives | "We respond within 24 hours with a detailed plan." |
| Label: "Service Interested In" | Grammatically clunky | "What do you need help with?" |

### Contact Page Form

Similar issues to the hero form. Check for consistency in labels and button text across all forms on the site.

### Landing Page Forms (Free Audit pages)

These are stronger — four specific fields tied to the audit promise. The primary issue is that "Website URL" is a required field but many small business owners do not have a website yet (which is why they are getting an audit). Consider making it optional with a note: "Don't have a website yet? Leave this blank."

---

## 6. Service Pages — Recurring Issues

All 7 main service pages and 5 sub-service pages share the same structural problems. Rather than repeating for each, the issues are:

### 6.1 Hero Headlines Are Descriptive, Not Outcome-Focused

**Pattern across service pages:** "Web Design Services in Ahmedabad" — describes what the page is about, not what the prospect gets.

**Better pattern:** Lead with the outcome. "A Website That Brings You Leads, Not Just Visitors" tells the prospect more in 8 words than any service description.

### 6.2 "What's Included" Lists Read Like Feature Brochures

Service pages list features (mobile-first design, SSL certificate, contact forms, SEO foundation) without translating them into benefits. A business owner asking "why do I need SSL?" gets no answer from a bullet point.

Each feature needs a one-line "which means" translation:
- "Mobile-first design" → "Built for phones first, because 73% of your site visitors arrive on mobile"
- "SEO foundation" → "Structured so Google can find and rank your pages from day one"

### 6.3 Pricing Sections Are Defensive

"Starting at Rs. X" followed by "exact pricing depends on your specific requirements" creates ambiguity that makes prospects hesitant to engage. If they do not know what they will pay, they go elsewhere to compare.

**Fix:** Show a clear range. "Most business websites we build cost between Rs. 35,000 and Rs. 85,000 depending on the number of pages, custom features needed, and whether e-commerce is required."

### 6.4 FAQ Sections Have Generic Questions

Questions like "Why is web design important?" and "How long does it take?" are fine but should be balanced with questions that address actual objections:
- "I already have a website. Why do I need a new one?"
- "My nephew said he can build it on WordPress for free. Why should I pay?"
- "How do I know I won't be locked in to you forever?"
- "What if I am not happy with the design?"

### 6.5 Related Services Section Is an Afterthought

Every service page has a "Related Services" section with 3-4 icon cards linking to other services. The description under each is the same copy as the services page. This section drives no value.

**Fix:** Replace with a specific cross-sell. If someone is on the Web Design page, the cross-sell should say: "Most businesses that invest in a new website see significantly more results when they add a 3-month SEO campaign. Here is why." This is a nudge, not a link list.

---

## 7. Location Pages — Issues

### 7.1 Neighbourhood Pages Are Still Template-Thin

The s2Body fix expanded the prose from 3 to 7 paragraphs, which solved the indexing problem. The remaining issue is that the content is written about the neighbourhood, not for the business owner in that neighbourhood.

**Example:** The Satellite page describes Satellite's geography and business type. It does not answer the question a Satellite business owner actually has: "Will you meet me in person? Do you know the Satellite market? Can you show me clients you have worked with from here?"

### 7.2 Location Pages Duplicate Section Structures

Every location page follows the same 11-section structure with the same headings, only the city name and neighbourhood names change. Google increasingly penalises structurally identical pages, even when the text is different.

**Fix:** Each city page needs at least one section that is genuinely unique — a specific local business story, a named client from that city, or a market-specific challenge section that could not apply to any other location.

---

## 8. Blog and Portfolio — Conversion Points

### 8.1 Blog Posts Have No Mid-Content CTA

Blog posts have an inline CTA banner mid-article and at the end — the template was designed for this. Check that every blog post has these CTAs wired up and that they are specific to the topic. A reader who finishes a post on Google Ads should see a CTA for Google Ads management, not a generic "Contact us" button.

### 8.2 Portfolio Case Study Pages End Weakly

Case study pages (lifecare-clinic, buildright-infra, etc.) tell a strong story but end with a generic CTA. The conversion moment on a case study page is high — the prospect has just read a detailed success story. The CTA at the bottom should capitalise on this momentum.

**Current pattern:** Generic "Start Your Project" CTA.  
**Fix:** A specific CTA tied to the case study's service. "Got a clinic, medical practice, or health business? Let's talk about what we did for LifeCare and whether a similar approach makes sense for you."

### 8.3 Portfolio Grid on Portfolio.astro Lacks Outcomes

The portfolio hub page shows 9 case study cards. Each card has a project name, category tag, and short description. None of the cards lead with the result.

**Fix:** Each card should have a result badge at the top: "3x appointments in 90 days" (LifeCare Clinic), "8x Google Ads ROI" (BuildRight Infra), "1,200 orders/month" (FreshBasket). A prospect who can see the outcome in the card thumbnail has a reason to click. A prospect who sees a project name and category does not.

---

## 9. Recommended Copy Rewrites — Highest Priority Pages

### 9.1 Homepage

**Hero headline (current):**  
"We Build Websites That Grow Your Business"

**Recommended:**  
"Web Design, SEO and Google Ads for Ahmedabad Businesses — With Results You Can Measure"

or, more direct:

"Your Website Should Be Bringing You Leads. If It Is Not, We Should Talk."

**Hero subhead (current):**  
"Ahmedabad's trusted digital marketing agency. From web design to SEO to PPC, we help local businesses get found online, generate leads, and increase revenue. 8+ years of proven results."

**Recommended:**  
"We build websites and run Google Ads for businesses across Ahmedabad, Surat, Gandhinagar and Vadodara. 945 projects delivered. Most clients see measurable results within 90 days."

**Services section subtitle (current):**  
"From stunning websites to dominant search rankings, everything your business needs to thrive online."

**Recommended:**  
"Eight services. One team. Every project managed in-house from our Ahmedabad office."

**Why Choose Us subtitle (current):**  
"We're not just another agency. Here's what makes working with us different."

**Recommended:**  
"Six reasons Ahmedabad businesses stay with us for years, not just one project."

**Process subtitle (current):**  
"No complexity, no jargon. Here's how we take you from idea to results."

**Recommended:**  
"Four steps from your first message to a live website."

**Portfolio subtitle (current):**  
"A selection from 945+ completed projects across web design, SEO, and digital marketing."

**Recommended:**  
"A selection of recent work. Each case study includes the specific results we delivered."

**Testimonials header (current):**  
"Don't take our word for it. Here's what business owners across Ahmedabad say."

**Recommended:**  
"What clients say after working with us."

**FAQ subtitle (current):**  
"Got questions? Straight answers. No jargon."

**Recommended:**  
"Questions business owners ask before they get in touch."

**Final CTA headline (current):**  
"Ready to Grow Your Business Online?"

**Recommended:**  
"Tell us about your project. We respond within 24 hours."

---

## 10. Priority Fix Matrix

| Priority | Issue | Pages Affected | Effort |
|---|---|---|---|
| P1 — Critical | Fix all internal links missing trailing slashes | index.astro (18 links) | 30 min |
| P1 — Critical | Fix broken blog card links on homepage | index.astro | 10 min |
| P1 — Critical | Remove all em dashes from content files | 4 files | 30 min |
| P1 — Critical | Remove "jargon" and banned phrases | 6 files | 20 min |
| P1 — Critical | Replace homepage hero headline and subhead | index.astro | 20 min |
| P2 — High | Rewrite Why Choose Us section | index.astro | 45 min |
| P2 — High | Fix CTA button copy site-wide ("Get Started" → specific text) | All service pages | 1 hour |
| P2 — High | Add result badges to portfolio hub cards | portfolio.astro | 30 min |
| P2 — High | Fix testimonials to name actual businesses | index.astro | 20 min |
| P2 — High | Replace Clutch Awards reference with Google Reviews | index.astro, all pages | 30 min |
| P2 — High | Replace service page feature lists with benefit translations | 7 service pages | 2 hours |
| P3 — Medium | Add mid-content CTAs to blog posts | 21 blog posts | 2 hours |
| P3 — Medium | Improve portfolio case study end CTAs | 9 case study pages | 1 hour |
| P3 — Medium | Rewrite location page unique sections | 4 city pages | 2 hours |
| P3 — Medium | Add "who this is for" framing to service pages | 7 service pages | 1 hour |
| P3 — Medium | Replace emoji icons in Why Choose Us with SVGs | index.astro | 15 min |
| P4 — Low | Fix pricing copy from defensive to direct | pricing.astro | 1 hour |
| P4 — Low | Improve neighbourhood page "speak to the reader" tone | 32 pages | 4 hours |
| P4 — Low | Add WhatsApp floating button | Global (Header/BaseLayout) | 30 min |

---

## 11. What Good Looks Like — Benchmarks

For reference, these are characteristics of high-converting agency websites in the Rs. 25,000-1,00,000 service bracket:

1. **Specificity above the fold:** Named city, named service, specific outcome in the H1.
2. **Named proof in the first scroll:** At least one named client with a result (not just initials and a generic role).
3. **One clear next step:** Every page has one primary CTA. Not four.
4. **Price or range visible without asking:** Pricing is stated or a range is given on the service page.
5. **Risk reversal near the CTA:** "If you are not satisfied with the first draft, we redo it at no charge" converts better than "Value-Backed Guarantee" buried in a card.
6. **Specificity in the process:** "We reply within 24 hours" converts. "We'll be in touch" does not.
7. **Mobile-first CTA:** On mobile, the primary CTA should be a click-to-call or WhatsApp button, not a long form.

---

*This report covers issues found as of May 2026. Implement P1 and P2 items first as they are losing conversions today. P3 and P4 items compound over time but are not as immediately urgent.*
