# Landing-OS

An open-source **context development framework** for designing stunning, high-converting landing pages — powered by [Claude Code](https://claude.ai/claude-code) slash commands.

## The Problem

AI coding tools produce generic, forgettable landing pages — the same gradients, the same Inter font, the same purple-on-white card grids. We call this **AI slop**.

Landing-OS provides the missing **design step**: a structured process that captures vision, branding, section design, copy, and SEO **before** any code is written.

## What You Get

After completing the Landing-OS flow, you get a complete `landing-plan/` handoff package:

- **Brand definition** — Name, audience, value proposition, tone of voice
- **Page structure** — Ordered section layout optimized for conversion
- **Design system** — 4-color palette and 4-font typography system
- **Section designs** — Props-based React components for each section
- **Realistic copy** — Headlines, descriptions, CTAs, testimonials, FAQs
- **SEO configuration** — Meta tags, Open Graph, schema markup, keywords
- **Ready-to-use prompts** — Hand the package to any coding agent to build the actual page

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/) 18+
- [Claude Code](https://claude.ai/claude-code) installed and configured

### Step 1: Clone the Repository

```bash
git clone https://github.com/bnsa3ed/Langing-OS.git
cd Langing-OS
```

### Step 2: Install Dependencies

```bash
npm install
```

### Step 3: Start the Dashboard

```bash
npm run dev
```

This starts the Landing-OS dashboard at `http://localhost:3000`. The dashboard shows your progress through each phase and displays the artifacts you create with slash commands.

## Usage

Landing-OS uses **10 slash commands** in Claude Code to guide you through a complete landing page design process. Run them in order:

### Phase 1: Vision

```
/landing-vision
```

Define your brand, target audience, value proposition, competitive positioning, and tone of voice.

**Creates:** `product/landing-overview.md`

### Phase 2: Structure

```
/page-structure
```

Plan the section layout and ordering of your landing page. Choose from common patterns:
- **Product-led:** Hero → Demo → Features → Testimonials → Pricing → FAQ → CTA
- **Trust-first:** Hero → Logos → Stats → Testimonials → Features → Pricing → CTA
- **Story-driven:** Hero → Problem → Solution → Features → Social Proof → CTA

**Creates:** `product/page-structure.md`

### Phase 3: Design System

```
/design-tokens
```

Choose your **4-color system** (primary, secondary, accent, neutral) and **4-font system** (display, heading, body, mono).

**Anti-AI-slop rule:** No Inter, Roboto, or Arial. Choose fonts with character.

**Creates:** `product/design-system/colors.json`, `product/design-system/typography.json`

```
/design-shell
```

Design the navbar and footer that wrap your landing page.

**Creates:** `product/shell/spec.md` + `src/shell/components/`

### Phase 4: Sections

For each section in your page structure, run these three commands in order:

```
/shape-section        # Define spec — copy, layout, CTA strategy
/section-content      # Generate realistic copy and sample data
/design-section       # Build the React component
```

Optional: `/screenshot-section` to capture a visual reference.

**Creates per section:**
- `product/sections/[name]/spec.md`
- `product/sections/[name]/data.json`
- `src/sections/[name]/components/`

### Phase 5: SEO

```
/seo-config
```

Define meta tags, Open Graph, Twitter cards, JSON-LD schema, and keyword strategy.

**Creates:** `product/seo/seo-config.md`

### Phase 6: Export

```
/export-landing
```

Generate the complete handoff package with prompts, instructions, components, and checklists.

**Creates:** `landing-plan/` directory + `landing-plan.zip`

## Using the Export

### Option A: One-Shot Implementation

1. Copy `landing-plan/` to your implementation project
2. Open `landing-plan/prompts/one-shot-prompt.md`
3. Paste into your coding agent (Claude Code, Cursor, etc.)
4. Answer the tech stack questions
5. Let the agent build the full page

### Option B: Section-by-Section

1. Copy `landing-plan/` to your implementation project
2. Start with `instructions/incremental/01-foundation.md`
3. For each section, use `prompts/section-prompt.md` as a template
4. Build and review one section at a time

## Dashboard

The React dashboard (`npm run dev`) provides a visual overview of your progress:

| Phase | What It Shows |
|-------|--------------|
| **Vision** | Landing overview + page structure |
| **Structure** | Ordered section list with types |
| **Design** | Color swatches, typography preview, shell spec |
| **Sections** | Per-section progress (spec, content, design, screenshots) |
| **SEO** | Title tag, meta description, keywords |
| **Export** | Readiness checklist + download |

## Project Structure

```
Landing-OS/
├── CLAUDE.md                          # Entry point for Claude Code
├── agents.md                          # Central agent directives
├── .claude/
│   ├── commands/landing-os/           # 10 slash commands
│   └── skills/frontend-design/        # Design quality skill
├── product/                           # Your landing page definition
│   ├── landing-overview.md
│   ├── page-structure.md
│   ├── design-system/
│   │   ├── colors.json
│   │   └── typography.json
│   ├── shell/
│   │   └── spec.md
│   ├── seo/
│   │   └── seo-config.md
│   └── sections/
│       └── [section-name]/
│           ├── spec.md
│           ├── data.json
│           └── types.ts
├── src/                               # Dashboard app + section designs
│   ├── components/                    # Dashboard pages & UI
│   ├── lib/                           # Data loaders
│   ├── types/                         # TypeScript types
│   ├── shell/                         # Shell components
│   └── sections/                      # Section components
│       └── [section-name]/
│           └── components/
├── landing-plan/                      # Generated export package
└── docs/                              # Documentation
```

## Tips

1. **Be specific** — Vague inputs produce generic outputs
2. **Start with Hero** — It sets the design direction for everything else
3. **Write real copy** — Don't defer to placeholder text
4. **Review each section** — Iterate on the spec before designing
5. **Push for distinctive design** — The anti-AI-slop guidelines are there for a reason

## Inspired By

Landing-OS is modeled after [Design OS](https://github.com/buildermethods/design-os), adapted and specialized for landing page design.

## License

MIT
