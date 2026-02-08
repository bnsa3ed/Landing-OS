# Landing-OS

An open-source **context development framework** for designing stunning, high-converting landing pages — powered by Claude Code slash commands.

## The Problem

AI coding tools produce generic, forgettable landing pages — the same gradients, the same Inter font, the same purple-on-white card grids. We call this **AI slop**.

Landing-OS provides the missing **design step**: a structured process that captures vision, branding, section design, copy, and SEO before any code is written.

## How It Works

Landing-OS uses 10 Claude Code slash commands to guide you through a complete landing page design process:

```
/landing-vision    → Define brand, audience, value proposition
/page-structure    → Plan section layout and ordering
/design-tokens     → Choose colors (4-color) and typography (4-font)
/design-shell      → Design navbar and footer
/shape-section     → Define a section's spec (copy, layout, CTA)
/section-content   → Generate realistic copy and data
/design-section    → Create the React component design
/screenshot-section → Capture screenshots for documentation
/seo-config        → Configure meta tags, OG, schema, keywords
/export-landing    → Generate complete handoff package
```

The output is a complete `landing-plan/` package that you can hand to any coding agent to build the actual landing page.

## Quick Start

1. Open your project directory in Claude Code
2. Run `/landing-vision` to start defining your landing page
3. Follow the guided flow through each command
4. Run `/export-landing` when you're done to generate the handoff package
5. Use the generated prompts to build the actual page

See [Usage Guide](usage.md) for detailed instructions.

## What You Get

After completing the Landing-OS flow, you'll have:

- **Brand definition** — Name, audience, value proposition, tone of voice
- **Page structure** — Ordered section layout optimized for conversion
- **Design system** — 4-color palette and 4-font typography system
- **Section designs** — Props-based React components for each section
- **Realistic copy** — Headlines, descriptions, CTAs, testimonials, FAQs
- **SEO configuration** — Meta tags, Open Graph, schema markup, keywords
- **Handoff package** — Ready-to-use prompts and instructions for implementation

## Inspirations

Landing-OS includes scraped design data from 100+ top landing pages across categories:

- **SaaS**: Linear, Stripe, Vercel, Supabase, Cal.com
- **AI Tools**: Anthropic, OpenAI, Cursor, ElevenLabs
- **Developer Tools**: Raycast, Neon, Warp, Bun
- **Creative Tools**: Framer, Figma, Spline, Rive
- **And many more...**

This data informs the design patterns, color strategies, typography pairings, and section ordering recommendations built into the framework.

## Inspired By

Landing-OS is modeled after [Design OS](https://github.com/buildermethods/design-os), adapted and specialized for landing page design.

## License

MIT
