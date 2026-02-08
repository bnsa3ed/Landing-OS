# Design Section

You are helping the user create a visual design for a landing page section. The design will be a props-based React component that can be exported and integrated into any React codebase.

## Step 1: Check Prerequisites

First, identify the target section and verify that `spec.md`, `data.json`, and `types.ts` all exist.

Read `product/page-structure.md` to get the list of sections.

If there's only one section ready for design, auto-select it. If multiple, use AskUserQuestion.

Then verify all required files exist:

- `product/sections/[section-id]/spec.md`
- `product/sections/[section-id]/data.json`
- `product/sections/[section-id]/types.ts`

If spec.md doesn't exist:
"Please run `/shape-section` first to define this section's requirements."

If data.json or types.ts don't exist:
"Please run `/section-content` first to create content and types for this section."

Stop here if any file is missing.

## Step 2: Check for Design System

Check for design tokens:
- `product/design-system/colors.json`
- `product/design-system/typography.json`

If tokens exist, read them and use them for styling. If not:
"Note: Design tokens haven't been defined yet. I'll use default styling, but consider running `/design-tokens` first."

Also read `product/landing-overview.md` for brand context and tone.

## Step 3: Invoke the Frontend Design Skill

Before creating the section design, read the `frontend-design` skill to ensure high-quality design output.

Read the file at `.claude/skills/frontend-design/SKILL.md` and follow its guidance for creating distinctive, anti-AI-slop interfaces.

## Step 4: Analyze Requirements

Read and analyze all source files:

1. **spec.md** — Section type, copy, layout, design notes
2. **data.json** — Content and sample data
3. **types.ts** — TypeScript interfaces and props
4. **landing-overview.md** — Brand voice and audience

Identify:
- Section type (hero, features, pricing, etc.)
- Layout pattern (centered, split, asymmetric, grid, bento)
- Copy and content to display
- CTA strategy
- Responsive behavior requirements

## Step 5: Section-Type-Specific Design Guidance

Apply these patterns based on section type:

### Hero
- Headline: largest text on the page (48-80px), bold, potentially gradient text
- Above the fold: headline + subheadline + CTA must be visible without scrolling
- Visual element: product screenshot, abstract graphic, or animated element
- Consider: floating UI elements, particle effects, subtle motion
- CTA: high-contrast button, impossible to miss

### Features
- Avoid boring equal-sized card grids
- Consider: bento grid (varied card sizes), alternating left/right layout, icon + text list
- Each feature should have visual distinction
- Use icons from lucide-react

### Social Proof / Testimonials
- Photos make testimonials more credible (use placeholder avatars)
- Vary testimonial card sizes for visual interest
- Include name, role, company for each
- Consider: carousel, masonry grid, or featured + supporting layout

### Pricing
- Highlight recommended tier (larger, border, badge)
- Toggle for monthly/annual with savings callout
- Feature checkmarks for included items
- CTA per tier, more prominent on highlighted tier

### FAQ
- Accordion pattern with smooth expand/collapse
- Plus/minus or chevron icons for toggle
- Consider grouping by category for many questions
- Keep answers visible length manageable

### CTA Banner
- Full-width, high contrast
- Single focused CTA
- Consider: gradient background, pattern overlay, glowing button
- This is the last push — make it bold

### Stats
- Large numbers with animated counters
- Compact layout (horizontal row or 2x2 grid)
- Include prefix/suffix (e.g., "$", "M+", "%")

### Logo Bar
- Grayscale logos, optional color on hover
- "Trusted by" or similar label
- Horizontal scroll on mobile if many logos
- SVG logos for crispness

## Step 6: Create the Props-Based Component

Create the main component at `src/sections/[section-id]/components/[SectionType].tsx`.

### Component Structure

The component MUST:
- Import types from the types.ts file
- Accept all data via props (never import data.json directly)
- Accept callback props for interactive elements
- Be fully self-contained and portable

Example for a Hero section:

```tsx
import type { HeroSectionProps } from '@/../product/sections/hero/types'

export function HeroSection({
  headline,
  subheadline,
  primaryCta,
  secondaryCta,
  onCtaClick,
}: HeroSectionProps) {
  return (
    <section className="relative min-h-[90vh] flex items-center">
      {/* Background effects */}
      <div className="absolute inset-0 bg-gradient-to-b from-stone-950 to-stone-900" />

      <div className="relative max-w-6xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-bold tracking-tight">
          {headline}
        </h1>
        <p className="mt-6 text-xl text-stone-400 max-w-2xl mx-auto">
          {subheadline}
        </p>
        <div className="mt-10 flex gap-4 justify-center">
          <button
            onClick={() => onCtaClick?.(primaryCta.href)}
            className="px-8 py-3 bg-amber-500 text-stone-950 font-semibold rounded-lg"
          >
            {primaryCta.text}
          </button>
          {secondaryCta && (
            <button
              onClick={() => onCtaClick?.(secondaryCta.href)}
              className="px-8 py-3 border border-stone-700 text-stone-300 rounded-lg"
            >
              {secondaryCta.text}
            </button>
          )}
        </div>
      </div>
    </section>
  )
}
```

### Design Requirements

- **Mobile responsive:** Use Tailwind responsive prefixes (`sm:`, `md:`, `lg:`, `xl:`)
- **Light & dark mode:** Use `dark:` variants for all colors
- **Design tokens:** Apply the product's color palette and typography if defined
- **Anti-AI-slop:** Follow the frontend-design skill guidelines
- **Conversion-focused:** Visual hierarchy guides eye to CTA
- **Atmospheric:** Add depth with gradients, textures, or patterns

### Applying Design Tokens

**If colors.json exists:**
- Primary: CTA buttons, key accents, links
- Secondary: Supporting elements, badges
- Accent: Decorative elements, hover states
- Neutral: Backgrounds, text, borders

**If typography.json exists:**
- Display font: Hero headlines (using font-family style or className)
- Heading font: Section titles
- Body font: Descriptions, paragraphs
- Mono font: Stats, code-like elements

**If tokens don't exist:**
- Fall back to `stone` for neutrals and `amber` for accents

## Step 7: Create Sub-Components (If Needed)

For complex sections, break into sub-components at `src/sections/[section-id]/components/`.

Examples: `FeatureCard.tsx`, `TestimonialCard.tsx`, `PricingTier.tsx`, `FaqItem.tsx`

## Step 8: Create the Preview Wrapper

Create a preview wrapper at `src/sections/[section-id]/[SectionType].tsx`:

```tsx
import data from '@/../product/sections/[section-id]/data.json'
import { HeroSection } from './components/HeroSection'

export default function HeroPreview() {
  return (
    <HeroSection
      headline={data.headline}
      subheadline={data.subheadline}
      primaryCta={data.primaryCta}
      secondaryCta={data.secondaryCta}
      onCtaClick={(href) => console.log('CTA clicked:', href)}
    />
  )
}
```

The preview wrapper:
- Has a `default` export
- Imports sample data from data.json
- Passes data to the component via props
- Provides console.log handlers for callbacks
- Is NOT exported — only for preview

## Step 9: Create Component Index

Create `src/sections/[section-id]/components/index.ts`:

```tsx
export { HeroSection } from './HeroSection'
// Add sub-components as needed
```

## Step 10: Confirm and Next Steps

Let the user know:

"I've created the section design for **[Section Name]**:

**Exportable components:**
- `src/sections/[section-id]/components/[Component].tsx`
- `src/sections/[section-id]/components/index.ts`

**Preview wrapper:**
- `src/sections/[section-id]/[SectionType].tsx`

**Design highlights:**
- [Key design choice 1]
- [Key design choice 2]
- [Key design choice 3]

**Next steps:**
- Run `/screenshot-section` to capture a screenshot
- Run `/shape-section` to define the next section
- When all sections are complete, run `/export-landing` for the full handoff package"

## Important Notes

- ALWAYS read the `frontend-design` skill before creating designs
- Components MUST be props-based — never import data.json in exportable components
- Apply section-type-specific design patterns from Step 5
- Follow anti-AI-slop guidelines strictly
- Hero sections are the most important — spend extra care on these
- Every section should visually guide toward the CTA
- Use scroll-triggered animations where appropriate
- Test responsive behavior at all breakpoints
