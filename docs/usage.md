# Usage Guide

## Prerequisites

- [Claude Code](https://claude.ai/claude-code) installed and configured
- A project directory for your landing page

## Setup

1. Clone or copy the Landing-OS framework into your project directory
2. Open the directory in Claude Code
3. The `CLAUDE.md` file will automatically load the framework context

## The Landing-OS Flow

### Step 1: Define Your Vision (`/landing-vision`)

Start here. This command guides you through defining:
- Product name and description
- Target audience personas
- Unique value proposition
- Competitive positioning
- Tone of voice
- Primary CTA goal

**Output:** `product/landing-overview.md`

**Tips:**
- Be specific about your audience — "developers building SaaS" is better than "everyone"
- Your value proposition should complete: "We help [audience] do [thing] unlike [competitors]"
- Choose a tone that matches your audience — technical for devs, approachable for consumers

### Step 2: Plan Your Page (`/page-structure`)

Define what sections appear and in what order.

**Output:** `product/page-structure.md`

**Common patterns:**
- **Product-led**: Hero → Demo → Features → Testimonials → Pricing → FAQ → CTA
- **Trust-first**: Hero → Logos → Stats → Testimonials → Features → Pricing → CTA
- **Story-driven**: Hero → Problem → Solution → Features → Social Proof → CTA

**Tips:**
- Start with Hero, end with CTA Banner + Footer
- Don't exceed 8-10 sections — focus beats volume
- Logo Bar right after Hero provides immediate credibility

### Step 3: Choose Your Design System (`/design-tokens`)

Pick your colors and fonts.

**Output:** `product/design-system/colors.json`, `product/design-system/typography.json`

**The 4-Color System:**
- Primary — CTAs, links, brand moments
- Secondary — Badges, highlights
- Accent — Decorative pops, hover states
- Neutral — Backgrounds, text, borders

**The 4-Font System:**
- Display — Hero headlines (bold, distinctive)
- Heading — Section titles
- Body — Paragraphs, UI text
- Mono — Code, stats, technical

**Anti-AI-slop rule:** No Inter, Roboto, or Arial. Choose fonts with character.

### Step 4: Design the Shell (`/design-shell`)

Design the navbar and footer that wrap your sections.

**Output:** `product/shell/spec.md`, `src/shell/components/`

**Key decisions:**
- Sticky navbar with CTA button
- Transparent-to-solid on scroll (optional)
- Footer column structure
- Mobile hamburger menu

### Step 5: Design Each Section

For each section in your page structure, run these three commands in order:

#### a. Shape the Section (`/shape-section`)
Define the spec — copy, layout, CTA strategy.

#### b. Generate Content (`/section-content`)
Create realistic copy and sample data.

#### c. Design the Component (`/design-section`)
Build the actual React component.

**Optional:** `/screenshot-section` to capture a visual reference.

**Tips:**
- Start with the Hero — it sets the tone for everything else
- Write specific headlines, not generic ones
- Every section should guide visitors toward the CTA

### Step 6: Configure SEO (`/seo-config`)

Define meta tags, Open Graph, schema markup, and keywords.

**Output:** `product/seo/seo-config.md`

### Step 7: Export (`/export-landing`)

Generate the complete handoff package.

**Output:** `landing-plan/`

The export includes:
- Ready-to-use prompts for coding agents
- Section-by-section implementation instructions
- All components, types, and sample data
- SEO implementation guide
- Performance and analytics checklists

## Using the Export

### Option A: One-Shot Implementation

1. Copy `landing-plan/` to your implementation project
2. Open `landing-plan/prompts/one-shot-prompt.md`
3. Paste into your coding agent (Claude Code, Cursor, etc.)
4. Answer the tech stack questions
5. Let the agent build the full page

### Option B: Section-by-Section

1. Copy `landing-plan/` to your implementation project
2. Start with foundation (`instructions/incremental/01-foundation.md`)
3. For each section, use `prompts/section-prompt.md` as a template
4. Build and review one section at a time

## File Structure Reference

```
product/                          # Your landing page definition
├── landing-overview.md           # Brand and vision
├── page-structure.md             # Section order
├── design-system/
│   ├── colors.json               # 4-color system
│   └── typography.json           # 4-font system
├── seo/
│   └── seo-config.md             # SEO configuration
├── shell/
│   └── spec.md                   # Navbar + footer spec
└── sections/
    └── [section-name]/
        ├── spec.md               # Section specification
        ├── data.json             # Content and copy
        └── types.ts              # TypeScript interfaces

src/                              # Section designs (React)
├── shell/
│   ├── components/               # Navbar, Footer, PageShell
│   └── ShellPreview.tsx
└── sections/
    └── [section-name]/
        ├── components/           # Exportable React components
        └── [SectionName].tsx     # Preview wrapper

landing-plan/                     # Generated handoff package
├── README.md
├── prompts/
├── instructions/
├── design-system/
├── seo/
├── shell/
└── sections/
```

## Tips for Best Results

1. **Be specific** — Vague inputs produce generic outputs
2. **Start with Hero** — It sets the design direction for everything
3. **Write real copy** — Don't defer to "Lorem ipsum" or placeholder text
4. **Review each section** — Iterate on the spec before designing
5. **Use the anti-AI-slop guidelines** — Push for distinctive, memorable design
6. **Export early, iterate** — You can always re-export after changes
