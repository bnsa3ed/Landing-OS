# Export Landing

You are helping the user export their complete landing page design as a handoff package for implementation. This generates all files needed to build the landing page in a real codebase.

## Step 1: Check Prerequisites

Verify minimum requirements:

**Required:**
- `product/landing-overview.md` — Landing page vision
- `product/page-structure.md` — Section structure
- At least one section with designs in `src/sections/[section-id]/`

**Recommended (show warning if missing):**
- `product/design-system/colors.json` — Color tokens
- `product/design-system/typography.json` — Typography tokens
- `src/shell/components/PageShell.tsx` — Page shell
- `product/seo/seo-config.md` — SEO configuration

If required files are missing:

"To export your landing page, you need at minimum:
- A landing vision (`/landing-vision`)
- A page structure (`/page-structure`)
- At least one section with designs

Please complete these first."

Stop here if required files are missing.

If recommended files are missing, show warnings but continue.

## Step 2: Gather Export Information

Read all relevant files:

1. `product/landing-overview.md`
2. `product/page-structure.md`
3. `product/design-system/colors.json` (if exists)
4. `product/design-system/typography.json` (if exists)
5. `product/shell/spec.md` (if exists)
6. `product/seo/seo-config.md` (if exists)
7. For each section: `spec.md`, `data.json`, `types.ts`
8. List components in `src/sections/` and `src/shell/`

## Step 3: Create Export Directory Structure

Create the `landing-plan/` directory:

```
landing-plan/
├── README.md
├── landing-overview.md
│
├── prompts/
│   ├── one-shot-prompt.md
│   └── section-prompt.md
│
├── instructions/
│   ├── one-shot-instructions.md
│   └── incremental/
│       ├── 01-foundation.md
│       ├── 02-[section-id].md
│       └── ...
│
├── design-system/
│   ├── tokens.css
│   ├── tailwind-colors.md
│   └── fonts.md
│
├── seo/
│   └── seo-config.md
│
├── shell/
│   ├── README.md
│   └── components/
│
└── sections/
    └── [section-id]/
        ├── README.md
        ├── components/
        ├── types.ts
        ├── sample-data.json
        └── screenshot.png
```

## Step 4: Generate landing-overview.md

Create `landing-plan/landing-overview.md` combining product vision with implementation context.

## Step 5: Generate Milestone Instructions

Each milestone instruction should begin with this preamble:

```markdown
---

## About These Instructions

**What you're receiving:**
- Finished section designs (React components with full styling)
- Content and copy (headlines, descriptions, CTAs)
- Design system tokens (colors, typography)
- SEO configuration (meta tags, schema markup)

**What you need to build:**
- Responsive landing page using these designs
- Proper HTML semantics and accessibility
- SEO implementation (meta tags, schema, OG)
- Performance optimization (lazy loading, font loading)
- Analytics and tracking setup

**Important guidelines:**
- **DO NOT** redesign or restyle the provided components — use them as-is
- **DO** wire up CTAs to appropriate actions (scroll, navigate, form submit)
- **DO** implement smooth scrolling for anchor navigation
- **DO** optimize for Core Web Vitals (LCP, FID, CLS)
- **DO** implement proper responsive behavior at all breakpoints
- The components are props-based and ready to integrate

---
```

### 01-foundation.md

Covers: design tokens setup, font loading, page shell (navbar + footer), basic page structure with section slots.

### [NN]-[section-id].md (for each section)

Covers: section component integration, content wiring, responsive behavior, scroll animations.

## Step 6: Generate one-shot-instructions.md

Combine all milestone content into a single document with the preamble at the top.

## Step 7: Copy and Transform Components

### Shell Components
Copy from `src/shell/components/` to `landing-plan/shell/components/`:
- Transform import paths from `@/...` to relative paths
- Remove framework-specific imports

### Section Components
For each section, copy from `src/sections/[section-id]/components/` to `landing-plan/sections/[section-id]/components/`:
- Transform import paths
- Keep only exportable components (not preview wrappers)

### Types and Data
- Copy types.ts files
- Copy data.json files as sample-data.json

## Step 8: Generate Section READMEs

For each section, create a README.md with:
- Overview and purpose
- Component list with descriptions
- Props documentation
- Design decisions and notes
- Screenshot reference

## Step 9: Generate Design System Files

### tokens.css
CSS custom properties for colors and fonts.

### tailwind-colors.md
Tailwind color configuration and usage examples.

### fonts.md
Google Fonts import instructions and usage guide.

## Step 10: Copy SEO Configuration

If `product/seo/seo-config.md` exists, copy it to `landing-plan/seo/seo-config.md`.

## Step 11: Generate Prompt Files

### one-shot-prompt.md

```markdown
# One-Shot Landing Page Implementation

I need you to build a complete landing page based on detailed design specifications and section components I'm providing.

## Instructions

Please read and analyze:

1. **@landing-plan/landing-overview.md** — Product summary and vision
2. **@landing-plan/instructions/one-shot-instructions.md** — Complete implementation instructions

Also review:
- **@landing-plan/design-system/** — Color and typography tokens
- **@landing-plan/seo/** — SEO configuration
- **@landing-plan/shell/** — Navbar and footer components
- **@landing-plan/sections/** — All section components and content

## Before You Begin

Please ask me about:

1. **Tech Stack** — Next.js, Astro, Remix, plain React, or other?
2. **Deployment** — Vercel, Netlify, Cloudflare, or other?
3. **Analytics** — Google Analytics, Plausible, PostHog, or other?
4. **Form Handling** — How should form submissions (newsletter, contact) be handled?
5. **Domain & Hosting** — Any specific requirements?

Once I answer, proceed with implementation.
```

### section-prompt.md

Template for implementing individual sections.

## Step 12: Generate README.md

Create `landing-plan/README.md` with usage instructions for both one-shot and incremental approaches.

## Step 13: Add Performance & Analytics Checklist

Include in the README or as a separate file:

```markdown
## Performance Checklist (Core Web Vitals)

- [ ] Largest Contentful Paint (LCP) < 2.5s
- [ ] First Input Delay (FID) < 100ms
- [ ] Cumulative Layout Shift (CLS) < 0.1
- [ ] Images optimized (WebP/AVIF, proper sizing, lazy loading)
- [ ] Fonts preloaded with `font-display: swap`
- [ ] Critical CSS inlined for above-the-fold content
- [ ] JavaScript bundle minimized
- [ ] Gzip/Brotli compression enabled

## Analytics Setup

- [ ] Page view tracking
- [ ] CTA click tracking (all buttons)
- [ ] Scroll depth tracking (25%, 50%, 75%, 100%)
- [ ] Form submission tracking
- [ ] UTM parameter capture

## A/B Testing Recommendations

Consider testing these elements:
- [ ] Hero headline variations
- [ ] CTA button text and color
- [ ] Social proof placement
- [ ] Pricing tier highlighting
- [ ] FAQ question ordering
```

## Step 14: Copy Screenshots

Copy `.png` files from:
- `product/shell/` → `landing-plan/shell/`
- `product/sections/[section-id]/` → `landing-plan/sections/[section-id]/`

## Step 15: Create Zip File

```bash
rm -f landing-plan.zip
cd . && zip -r landing-plan.zip landing-plan/
```

## Step 16: Confirm Completion

"I've created the complete export package at `landing-plan/` and `landing-plan.zip`.

**What's Included:**

**Prompts:**
- `prompts/one-shot-prompt.md` — Full implementation prompt
- `prompts/section-prompt.md` — Section-by-section template

**Instructions:**
- `landing-overview.md` — Product and landing page vision
- `instructions/one-shot-instructions.md` — All sections combined
- `instructions/incremental/` — [N] milestone instructions

**Assets:**
- `design-system/` — Colors, fonts, tokens
- `seo/` — Meta tags, schema markup, keywords
- `shell/` — Navbar and footer components
- `sections/` — [N] section component packages

**Checklists:**
- Performance optimization (Core Web Vitals)
- Analytics and tracking setup
- A/B testing recommendations

**How to Use:**
1. Copy `landing-plan/` to your implementation codebase
2. Open `prompts/one-shot-prompt.md` or `prompts/section-prompt.md`
3. Paste into your coding agent
4. Answer the tech stack questions
5. Let the agent build your landing page

The components are props-based and portable — they work with Next.js, Astro, Remix, or plain React."

## Important Notes

- Transform import paths when copying components
- Include landing-overview.md context with every implementation session
- SEO configuration should be implemented in the page `<head>`
- Performance checklist is critical for landing pages — slow pages kill conversion
- Analytics setup enables data-driven optimization
- A/B testing recommendations help users optimize post-launch
- The export is self-contained — no dependencies on Landing-OS
