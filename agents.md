# Agent Directives for Landing-OS

Landing-OS is a **context development framework** that helps users plan and design stunning, high-converting landing pages before writing any code. It uses Claude Code slash commands to guide users through a structured design process.

> **Important**: Landing-OS is a planning and design tool, not the final landing page codebase. The section designs and components generated here are meant to be exported and used as the definitive design reference when building the actual landing page.

---

## The Problem: AI Slop

AI coding tools produce generic, forgettable landing pages — the same gradients, the same Inter font, the same purple-on-white card grids. Landing-OS provides the missing **design step**: a structured process that captures vision, branding, section design, copy, and SEO before any code is written.

---

## Understanding Landing-OS Context

When working in Landing-OS, be aware of two distinct contexts:

### 1. Landing-OS Framework
The slash commands and skills that guide the planning process. When modifying the framework itself:
- Commands live in `.claude/commands/landing-os/`
- Skills live in `.claude/skills/`
- The framework generates planning files, not production code

### 2. Landing Page Design (Section Designs & Exports)
The landing page you're planning and designing. When creating section designs and exports:
- Section design components live in `src/sections/[section-name]/` and `src/shell/`
- Product definition files live in `product/`
- Exports are packaged to `landing-plan/` for handoff to implementation
- Follow the design requirements specified in each section's spec

---

## Getting Started — The Landing-OS Flow

Landing-OS follows a structured 10-step planning sequence:

### 1. Landing Vision (`/landing-vision`)
Define your brand, audience, value proposition, and competitive positioning.
**Output:** `product/landing-overview.md`

### 2. Page Structure (`/page-structure`)
Define the ordered section layout of the landing page.
**Output:** `product/page-structure.md`

### 3. Design Tokens (`/design-tokens`)
Choose colors (4-color system) and typography (4-font system).
**Output:** `product/design-system/colors.json`, `product/design-system/typography.json`

### 4. Landing Shell (`/design-shell`)
Design the navbar and footer.
**Output:** `product/shell/spec.md`, `src/shell/components/`

### 5. For Each Section:
- `/shape-section` — Define the section's specification (copy, layout, CTA)
- `/section-content` — Generate realistic copy and sample data
- `/design-section` — Create the actual React component
- `/screenshot-section` — Capture screenshots

### 6. SEO Configuration (`/seo-config`)
Define SEO meta tags, Open Graph, schema markup, and keywords.
**Output:** `product/seo/seo-config.md`

### 7. Export (`/export-landing`)
Generate the complete handoff package with all components, instructions, and prompts.
**Output:** `landing-plan/`

---

## File Structure

```
product/                           # Landing page definition (portable)
├── landing-overview.md            # Brand, audience, value proposition
├── page-structure.md              # Ordered list of sections
│
├── design-system/                 # Design tokens
│   ├── colors.json                # { primary, secondary, accent, neutral }
│   └── typography.json            # { display, heading, body, mono }
│
├── seo/                           # SEO configuration
│   └── seo-config.md              # Meta tags, OG, keywords, schema markup
│
└── sections/
    └── [section-name]/
        ├── spec.md                # Section specification (copy, layout, CTA)
        ├── data.json              # Sample content/data
        ├── types.ts               # TypeScript interfaces
        └── *.png                  # Screenshots

src/
├── shell/                         # Page shell (nav + footer)
│   ├── components/
│   │   ├── PageShell.tsx
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   └── index.ts
│   └── ShellPreview.tsx
│
└── sections/
    └── [section-name]/
        ├── components/            # Exportable components
        │   ├── [Component].tsx
        │   └── index.ts
        └── [SectionName].tsx      # Preview wrapper

landing-plan/                      # Export package (generated)
├── README.md
├── landing-overview.md
├── prompts/
│   ├── one-shot-prompt.md
│   └── section-prompt.md
├── instructions/
│   ├── one-shot-instructions.md
│   └── incremental/
├── design-system/
├── seo/
├── shell/
└── sections/
```

---

## Design Requirements

When creating section designs, follow these guidelines:

- **Mobile Responsive**: Use Tailwind's responsive prefixes (`sm:`, `md:`, `lg:`, `xl:`) to ensure layouts adapt properly across screen sizes.

- **Light & Dark Mode**: Use `dark:` variants for all colors. Test that all UI elements are visible and readable in both modes.

- **Use Design Tokens**: When design tokens are defined, apply the product's color palette and typography. Otherwise, fall back to `stone` for neutrals and `amber` for accents.

- **Props-Based Components**: All section design components must accept data and callbacks via props. Never import data directly in exportable components.

- **No Shell in Section Designs**: Section designs should not include nav or footer. The shell handles those separately.

- **Conversion-Focused**: Every section should guide the visitor's eye toward the primary call-to-action.

---

## Tailwind CSS Directives

These rules apply to all section designs and components:

- **Tailwind CSS v4**: We always use Tailwind CSS v4 (not v3). Do not reference or create v3 patterns.

- **No tailwind.config.js**: Tailwind CSS v4 does not use a `tailwind.config.js` file. Never reference, create, or modify one.

- **Use Built-in Utility Classes**: Avoid writing custom CSS. Stick to using Tailwind's built-in utility classes for all styling.

- **Use Built-in Colors**: Avoid defining custom colors. Use Tailwind's built-in color utility classes (e.g., `stone-500`, `amber-400`, `red-600`).

---

## The Five Pillars

Landing-OS is organized around five main areas:

1. **Brand Vision** — The "what" and "why"
   - Product/brand name and description
   - Target audience personas
   - Unique value proposition
   - Competitive positioning
   - Tone of voice

2. **Design System** — The "look and feel"
   - 4-color system (primary, secondary, accent, neutral)
   - 4-font system (display, heading, body, mono)
   - Anti-AI-slop aesthetic direction

3. **Page Sections** — The building blocks
   - Ordered section structure
   - Section specifications with copy and layout
   - React component designs
   - Screenshot documentation

4. **Copy & SEO** — The words and discoverability
   - Headlines, subheadlines, CTAs
   - Meta tags, Open Graph, schema markup
   - Keyword strategy

5. **Export** — The handoff
   - Complete implementation package
   - Ready-to-use prompts for coding agents
   - Performance and analytics checklists

---

## Landing Page Section Types Reference

| Section Type | Purpose | Key Elements |
|---|---|---|
| **Hero** | First impression, value proposition | Headline, subheadline, CTA, visual (screenshot/illustration/video) |
| **Logo Bar** | Social proof, credibility | 4-8 customer/press logos, "Trusted by" label |
| **Features** | Product capabilities | 3-6 feature cards with icons, titles, descriptions |
| **How It Works** | Process clarity | 3-4 numbered steps with illustrations |
| **Social Proof** | Trust building | Testimonials, case studies, stats, ratings |
| **Pricing** | Conversion | 2-3 tiers, feature comparison, highlighted recommended plan |
| **FAQ** | Objection handling | 5-8 accordion Q&As addressing common concerns |
| **CTA Banner** | Conversion push | Strong headline, single CTA button, urgency element |
| **Stats/Numbers** | Credibility | 3-4 impressive metrics with labels |
| **Comparison** | Competitive positioning | Feature comparison table vs competitors |
| **Newsletter** | Lead capture | Email input, value proposition, privacy note |
| **Footer** | Navigation, legal | Multi-column links, social icons, copyright |

### Section Ordering Best Practices

Based on analysis of top-converting landing pages:

**Standard High-Converting Order:**
1. Hero (always first — above the fold)
2. Logo Bar (immediate social proof)
3. Features or How It Works (demonstrate value)
4. Social Proof / Testimonials (build trust)
5. Pricing (if applicable)
6. FAQ (handle objections)
7. CTA Banner (final conversion push)
8. Footer

**Variations:**
- **Product-led**: Hero → Demo/Screenshot → Features → Testimonials → Pricing → FAQ → CTA
- **Trust-first**: Hero → Logo Bar → Stats → Testimonials → Features → Pricing → CTA
- **Story-driven**: Hero → Problem → Solution (How It Works) → Features → Social Proof → CTA

---

## Anti-AI-Slop Design Principles

These principles MUST be followed in all section designs:

### Typography
- **NO** Inter, Roboto, Arial, or system fonts as primary choices
- **DO** use distinctive, characterful fonts that elevate the design
- **DO** pair a bold display font with a refined body font
- **DO** use dramatic size contrasts between headings and body text

### Color
- **NO** purple-on-white default themes
- **NO** generic blue gradient heroes
- **DO** commit to a bold, cohesive color strategy
- **DO** use dominant colors with sharp accents
- **DO** consider dark themes as the default for tech products

### Layout
- **NO** cookie-cutter card grids with equal spacing
- **NO** predictable centered-everything layouts
- **DO** use asymmetry, overlap, and unexpected spatial composition
- **DO** break the grid intentionally for visual interest
- **DO** use generous negative space OR controlled density — not medium-bland

### Visual Details
- **NO** generic stock illustration styles
- **NO** flat, lifeless backgrounds
- **DO** create atmosphere with gradient meshes, noise textures, geometric patterns
- **DO** add depth with layered transparencies and dramatic shadows
- **DO** use micro-interactions and scroll-triggered animations

### Copy
- **NO** "Lorem ipsum" or generic placeholder copy
- **NO** vague marketing buzzwords without substance
- **DO** write specific, benefit-driven headlines
- **DO** use power words that create urgency and emotion
- **DO** ensure every CTA tells the visitor exactly what happens next

---

## Patterns from Analyzed Landing Pages

### Design Patterns (from Inspirations/)
- **Dark themes** dominate modern SaaS (Linear, Neon, Raycast)
- **Gradient text** for hero headlines creates visual impact
- **Bento grids** for feature showcases (Raycast, Linear)
- **Full-width screenshots** as social proof (Cal.com, Stripe)
- **Sticky navbars** with CTA button in top-right
- **Animated counters** for stats sections
- **Logo bars** with grayscale logos that colorize on hover
- **Accordion FAQs** with smooth expand/collapse

### Typography Patterns
- Display/hero: Large, bold (48-72px), often with letter-spacing
- Section headings: Medium (32-40px), semi-bold
- Body: Comfortable reading size (16-18px), regular weight
- Popular distinctive pairings: Satoshi + Cabinet Grotesk, Clash Display + General Sans, Plus Jakarta Sans + Manrope

### Color Strategies
- **Monochrome + accent**: Mostly neutrals with one vibrant accent (Linear, Resend)
- **Dark + neon**: Dark backgrounds with neon accent colors (Neon, Raycast)
- **Warm minimalism**: Warm neutrals with subtle accent (Granola, Paper)
- **Brand-forward**: Strong brand color throughout (Stripe, Cal.com)

### CTA Patterns
- Primary CTA: High-contrast button, action-oriented text ("Get Started Free", "Start Building")
- Secondary CTA: Ghost/outline button ("Watch Demo", "Learn More")
- Double CTA: Primary + secondary side by side in hero
- Floating CTA: Appears on scroll when hero CTA leaves viewport

---

## Export & Handoff

The `/export-landing` command generates a complete handoff package:

- **Ready-to-use prompts**: Pre-written prompts to copy/paste into coding agents
  - `one-shot-prompt.md`: For full implementation in one session
  - `section-prompt.md`: Template for section-by-section implementation
- **Implementation instructions**: Detailed guides for each section
  - `landing-overview.md`: Always provide for context
  - `one-shot-instructions.md`: All sections combined
  - Incremental instructions in `instructions/incremental/`
- **SEO implementation**: Meta tags, OG, schema markup, keywords
- **Performance checklist**: Core Web Vitals optimization
- **Analytics setup**: Tracking and A/B testing recommendations
- **Portable components**: Props-based, ready for any React setup
