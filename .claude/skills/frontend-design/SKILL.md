---
name: frontend-design
description: Create distinctive, production-grade landing page sections with high design quality. Use this skill when designing hero sections, feature grids, pricing tables, testimonials, and other landing page components. Generates creative, polished code that avoids generic AI aesthetics.
license: MIT
---

This skill guides creation of distinctive, production-grade landing page sections that avoid generic "AI slop" aesthetics. Implement real working code with exceptional attention to aesthetic details and creative choices.

The user provides section requirements: a landing page section type, copy, layout preferences, and design tokens. They may include context about the brand, audience, or technical constraints.

## Design Thinking for Landing Pages

Before coding, understand the context and commit to a BOLD aesthetic direction:

- **Brand**: What's the product? Who's the audience? What's the personality?
- **Section Purpose**: Is this a hero (first impression), social proof (trust), pricing (conversion), FAQ (objection handling)?
- **Conversion Goal**: What action should the visitor take? How does this section move them closer?
- **Visual Hierarchy**: Where should the eye go first? Second? Third?
- **Differentiation**: What makes this UNFORGETTABLE? What's the one thing someone will remember?

### Section-Specific Design Thinking

**Hero Sections** — The most critical section. Must be immediately compelling above the fold.
- Headline should be the dominant visual element (48-80px, bold)
- CTA must be visible without scrolling
- Visual (screenshot, illustration, or video) provides proof of product
- Consider: gradient text, animated elements, floating UI mockups, particle effects

**Feature Sections** — Demonstrate value clearly and memorably.
- Avoid: boring 3-column equal card grids
- Consider: bento grids, asymmetric layouts, interactive demos, before/after comparisons
- Each feature should feel like a mini-story

**Social Proof** — Build trust through evidence, not claims.
- Real photos and names (not generic avatars)
- Specific results and numbers
- Logo bars with grayscale-to-color hover effects
- Star ratings, review counts, trust badges

**Pricing** — Remove friction and guide toward the recommended plan.
- Highlight the recommended tier visually (scale, border, badge)
- Use toggle for monthly/annual with savings callout
- Feature comparison should be scannable

**FAQ** — Handle objections before they become blockers.
- Accordion pattern with smooth animations
- Group by theme if more than 6 questions
- Include conversion-relevant answers

**CTA Banners** — The final conversion push before the footer.
- High contrast, can't-miss design
- Single, clear action
- Urgency or exclusivity element
- Can be more experimental/bold than other sections

## Frontend Aesthetics Guidelines

Focus on:

- **Typography**: Choose fonts that are beautiful, unique, and interesting. NEVER use Inter, Roboto, Arial, or system fonts as primary choices. Opt for distinctive choices: Satoshi, Cabinet Grotesk, Clash Display, General Sans, Plus Jakarta Sans, Manrope, Cal Sans, Switzer. Pair a distinctive display font with a refined body font. Use dramatic size contrasts.

- **Color & Theme**: Commit to a cohesive aesthetic. Use CSS variables for consistency. Dominant colors with sharp accents outperform timid, evenly-distributed palettes. Dark themes are often more impactful for tech/SaaS products.

- **Motion**: Use animations for effects and micro-interactions. Focus on high-impact moments: staggered reveals on scroll, hover state transformations, counter animations for stats, smooth accordion expansions. Use `animation-delay` for orchestrated sequences. Consider: scroll-triggered animations, parallax effects, floating elements.

- **Spatial Composition**: Unexpected layouts. Asymmetry. Overlap. Diagonal flow. Grid-breaking elements. Generous negative space OR controlled density. Bento grids. Cards with varying sizes.

- **Backgrounds & Visual Details**: Create atmosphere and depth. Apply gradient meshes, noise textures, geometric patterns, layered transparencies, dramatic shadows, glow effects, grain overlays. Use radial gradients for spotlight effects. Consider: dot grids, mesh gradients, aurora effects.

## Anti-AI-Slop Checklist (Landing Page Specific)

NEVER use:
- ❌ Generic gradient heroes (blue-to-purple on white)
- ❌ Inter, Roboto, Arial, or system fonts
- ❌ Purple-on-white default themes
- ❌ Cookie-cutter 3-column card grids with equal spacing
- ❌ Stock illustration style (generic SVG people)
- ❌ "Lorem ipsum" or generic placeholder copy
- ❌ Centered-everything layouts with no visual tension
- ❌ Flat, lifeless solid-color backgrounds
- ❌ Generic "Get Started" CTAs without specificity
- ❌ Oversized rounded corners on everything (rounded-3xl abuse)
- ❌ Space Grotesk as the go-to "cool" font (it's overused)
- ❌ Identical testimonial cards in a boring row
- ❌ Pricing tables that all look the same

ALWAYS do:
- ✅ Choose a clear conceptual direction and execute with precision
- ✅ Use distinctive typography that elevates the brand
- ✅ Create visual hierarchy that guides eye to CTA
- ✅ Add atmospheric backgrounds (gradients, textures, patterns)
- ✅ Include micro-interactions on hover and scroll
- ✅ Write specific, benefit-driven copy (not generic marketing speak)
- ✅ Use real-feeling content (names, numbers, screenshots)
- ✅ Break the grid intentionally for visual interest
- ✅ Ensure every CTA tells visitors exactly what happens next
- ✅ Test that the section works beautifully at all breakpoints

## Inspiration Patterns (from Analyzed Landing Pages)

Reference these patterns from real high-converting pages:

- **Linear**: Dark theme, minimal, gradient text headlines, bento grid features
- **Stripe**: Precise typography, animated code blocks, layered depth
- **Vercel**: Black/white with accent, triangular motifs, monospace details
- **Raycast**: Apple-like polish, command palette UI as hero visual
- **Neon**: Dark + neon green, terminal-inspired, glowing effects
- **Resend**: Clean developer aesthetic, monochrome + single accent
- **Cal.com**: Open-source badge, screenshot hero, clear dual CTAs
- **Framer**: Heavy motion, interactive demos, bold typography
- **Statamic**: Playful illustration, warm colors, personality-driven
- **Ko-fi**: Friendly, approachable, community-focused design

## Implementation Requirements

- **Mobile responsive:** Use Tailwind responsive prefixes (`sm:`, `md:`, `lg:`, `xl:`)
- **Light & dark mode:** Use `dark:` variants for all colors
- **Props-based:** Accept all data via props, never hardcode content
- **Design tokens:** Apply the product's color palette and typography when defined
- **Accessible:** Proper contrast ratios, semantic HTML, keyboard navigation
- **Performance:** Optimize images, lazy-load below-fold content, minimal JS

**IMPORTANT**: Match implementation complexity to the aesthetic vision. Maximalist designs need elaborate code with extensive animations and effects. Minimalist or refined designs need restraint, precision, and careful attention to spacing, typography, and subtle details.

Remember: Claude is capable of extraordinary creative work. Don't hold back — show what can truly be created when thinking outside the box and committing fully to a distinctive vision.
