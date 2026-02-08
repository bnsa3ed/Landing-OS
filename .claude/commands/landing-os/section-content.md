# Section Content

You are helping the user generate realistic copy and sample data for a landing page section. This creates the content that will populate the section design.

## Step 1: Check Prerequisites

First, identify the target section and verify that `spec.md` exists.

Read `product/page-structure.md` to get the list of sections. Check which sections have specs but no data yet.

If there's only one section ready for content, auto-select it. If multiple, use AskUserQuestion.

Then verify:
- `product/sections/[section-id]/spec.md` exists

If spec.md doesn't exist:

"I don't see a specification for **[Section Name]** yet. Please run `/shape-section` first to define the section's requirements."

Stop here if the spec is missing.

## Step 2: Read Context

Read these files:
1. `product/landing-overview.md` — Brand voice, audience, value proposition
2. `product/sections/[section-id]/spec.md` — Section specification
3. `product/page-structure.md` — Where this section fits in the page

## Step 3: Present Content Structure

Based on the section type, present the data structure:

"Based on the specification for **[Section Name]** ([section type]), here's how I'll organize the content:

**Content Structure:**

[Type-specific structure — see examples below]

**Tone:** [Based on landing-overview.md tone of voice]
**Audience:** [Based on landing-overview.md target audience]

Does this structure make sense? Any adjustments?"

### Content structures by section type:

**Hero:**
```
- headline: string
- subheadline: string
- primaryCta: { text, href }
- secondaryCta?: { text, href }
- visual?: { type, src, alt }
```

**Features:**
```
- sectionTitle: string
- sectionSubtitle?: string
- features: Array<{ title, description, icon }>
```

**Social Proof / Testimonials:**
```
- sectionTitle: string
- testimonials: Array<{ quote, author, role, company, avatar? }>
```

**Pricing:**
```
- sectionTitle: string
- sectionSubtitle?: string
- billingToggle: boolean
- tiers: Array<{ name, price, period, description, features, cta, highlighted? }>
```

**FAQ:**
```
- sectionTitle: string
- faqs: Array<{ question, answer }>
```

**Stats:**
```
- sectionTitle?: string
- stats: Array<{ value, label, prefix?, suffix? }>
```

**Logo Bar:**
```
- label?: string (e.g., "Trusted by")
- logos: Array<{ name, src, alt }>
```

**CTA Banner:**
```
- headline: string
- subheadline?: string
- cta: { text, href }
- secondaryCta?: { text, href }
```

**How It Works:**
```
- sectionTitle: string
- sectionSubtitle?: string
- steps: Array<{ number, title, description, visual? }>
```

**Comparison:**
```
- sectionTitle: string
- competitors: Array<string>
- features: Array<{ name, yours: boolean|string, competitors: Array<boolean|string> }>
```

**Newsletter:**
```
- headline: string
- subheadline?: string
- placeholder: string
- buttonText: string
- privacyNote?: string
```

## Step 4: Generate the Content

Once the user approves the structure, create `product/sections/[section-id]/data.json` with:

- **Brand-aligned copy** — Match the tone from landing-overview.md
- **Specific, benefit-driven text** — Not generic marketing speak
- **Realistic content** — Real-feeling names, companies, stats
- **Audience-appropriate language** — Technical for developers, simple for consumers
- **Conversion-focused CTAs** — Action verbs, clear outcomes

### Copy Quality Guidelines

**Headlines:**
- Lead with the benefit, not the feature
- Be specific: "Save 10 hours/week" beats "Save time"
- Use power words: transform, unlock, eliminate, accelerate
- Keep under 10 words for impact

**Subheadlines:**
- Expand on the headline's promise
- Address the "how" or "for whom"
- 1-2 sentences max

**Feature descriptions:**
- One benefit per feature
- Start with what the user gains, not what the product does
- Keep to 1-2 sentences

**Testimonials:**
- Include specific results: "Increased conversion by 40%"
- Use first person: "I was able to..."
- Vary length: mix short punchy quotes with longer stories
- Use realistic names and real-sounding companies

**FAQ answers:**
- Address the concern directly in the first sentence
- Keep answers concise (2-4 sentences)
- End with reassurance or a soft CTA

## Step 5: Generate TypeScript Types

After creating data.json, generate `product/sections/[section-id]/types.ts` based on the data structure.

### Type Generation Rules

1. **Infer types from the data values**
2. **Use union types for known variants** (e.g., icon names)
3. **Create a Props interface for the section component**
4. **Include optional callback props** for interactive elements

Example for a Features section:

```typescript
// =============================================================================
// Data Types
// =============================================================================

export interface Feature {
  title: string
  description: string
  icon: string
}

// =============================================================================
// Component Props
// =============================================================================

export interface FeaturesSectionProps {
  /** Section title displayed above the features */
  sectionTitle: string
  /** Optional subtitle for additional context */
  sectionSubtitle?: string
  /** Array of features to display */
  features: Feature[]
}
```

Example for a Pricing section:

```typescript
export interface PricingTier {
  name: string
  price: number | string
  period: string
  description: string
  features: string[]
  cta: string
  highlighted?: boolean
}

export interface PricingSectionProps {
  sectionTitle: string
  sectionSubtitle?: string
  tiers: PricingTier[]
  billingToggle?: boolean
  onSelectTier?: (tierName: string) => void
  onToggleBilling?: (isAnnual: boolean) => void
}
```

### Naming Conventions

- PascalCase for interfaces: `Feature`, `Testimonial`, `PricingTier`
- camelCase for properties: `sectionTitle`, `primaryCta`
- Props interface: `[SectionType]SectionProps`
- Add JSDoc comments for callback props

## Step 6: Confirm and Next Steps

Let the user know:

"I've created the content for **[Section Name]**:

1. `product/sections/[section-id]/data.json` — [Brief content summary]
2. `product/sections/[section-id]/types.ts` — TypeScript interfaces

**Content highlights:**
- Headline: \"[headline]\"
- [Other key content points]

**Next step:** Run `/design-section` to create the visual design for this section."

## Important Notes

- Generate realistic, brand-aligned content — NOT "Lorem ipsum" or "Test 123"
- Match the tone of voice from landing-overview.md
- Be specific and benefit-driven in all copy
- Testimonials should feel real — specific results, real-sounding names
- Pricing should be realistic for the product type
- FAQ answers should genuinely address objections
- CTA text should tell visitors exactly what happens next
- Always generate types.ts alongside data.json
