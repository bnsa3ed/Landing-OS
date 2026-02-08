# Shape Section

You are helping the user define the specification for a landing page section. This is a conversational process to establish the section's purpose, copy requirements, layout, and CTA strategy.

## Step 1: Check Prerequisites

First, verify that `product/page-structure.md` exists. If it doesn't:

"I don't see a page structure defined yet. Please run `/page-structure` first to define your landing page sections, then come back to shape individual sections."

Stop here if the page structure doesn't exist.

## Step 2: Identify the Target Section

Read `product/page-structure.md` to get the list of sections.

If there's only one section without a spec, auto-select it. If multiple sections exist, use the AskUserQuestion tool to ask which section to work on:

"Which section would you like to define?"

Present the available sections as options, indicating which already have specs.

## Step 3: Select Section Type

If the section type isn't already defined in page-structure.md, help them choose:

"What type of section is **[Section Name]**?"

Use AskUserQuestion with options:
- **Hero** — First impression, headline + CTA + visual
- **Logo Bar** — Customer/press logos for credibility
- **Features** — Product capabilities showcase
- **How It Works** — Step-by-step process explanation
- **Social Proof** — Testimonials, case studies, stats
- **Pricing** — Plan tiers and comparison
- **FAQ** — Common questions and objections
- **CTA Banner** — Final conversion push
- **Stats/Numbers** — Impressive metrics
- **Comparison** — Feature comparison vs competitors
- **Newsletter** — Email signup / lead capture

## Step 4: Gather Section Details

Based on the section type, ask targeted questions:

### For Hero:
- "What's the main headline? (This is the most important copy on the page)"
- "What's the subheadline? (1-2 sentences expanding on the headline)"
- "What visual should accompany the headline? (Product screenshot, illustration, video, abstract graphic)"
- "What's the primary CTA button text? Any secondary CTA?"

### For Features:
- "How many features? (3-6 is ideal)"
- "For each feature: name, one-line description, and icon/visual idea"
- "Layout preference? (Grid, bento, list, alternating left/right)"

### For Social Proof:
- "Testimonials, stats, case studies, or a mix?"
- "How many testimonials? Include name, role, company, photo?"
- "Any specific metrics or results to highlight?"

### For Pricing:
- "How many tiers? (2-3 recommended)"
- "For each: name, price, billing period, key features"
- "Which tier is recommended/highlighted?"
- "Free trial or money-back guarantee?"

### For FAQ:
- "What are the 5-8 most common questions?"
- "Any questions that address pricing, security, or competitor comparisons?"

### For CTA Banner:
- "What's the headline for the final push?"
- "Same CTA as hero or different?"
- "Any urgency element? (Limited time, spots remaining, etc.)"

### For all types:
- "Layout preference? (Centered, split, asymmetric, grid, bento)"
- "Any specific design inspiration or references?"

Ask questions conversationally, 2-3 at a time.

## Step 5: Present Draft Specification

"Based on our discussion, here's the specification for **[Section Name]**:

**Type:** [Section type]
**Purpose:** [What this section accomplishes]

**Copy:**
- Headline: [Headline text]
- Subheadline: [Subheadline text]
- Body: [Key body copy points]
- CTA: [Button text and action]

**Layout:** [Layout pattern]
**Key Elements:** [List of visual/interactive elements]

**Design Notes:** [Any specific design direction]

Does this capture everything? Would you like to adjust anything?"

Iterate until the user is satisfied.

## Step 6: Create the Spec File

Once the user approves, create the file at `product/sections/[section-id]/spec.md`:

```markdown
# [Section Name] Specification

## Overview
[2-3 sentence description of this section's purpose and how it fits in the page]

## Section Type
[hero / features / social-proof / pricing / faq / cta-banner / how-it-works / stats / logo-bar / comparison / newsletter]

## Copy

### Headline
[The main headline text]

### Subheadline
[The supporting subheadline text]

### Body Copy
[Key body copy points or descriptions]

### CTA
- **Primary:** [Button text] → [Action]
- **Secondary:** [Button text] → [Action] (if applicable)

## Layout
**Pattern:** [centered / split / asymmetric / grid / bento]
**Description:** [How the elements are arranged]

## Key Elements
- [Element 1 — e.g., "Product screenshot showing dashboard"]
- [Element 2 — e.g., "3 feature cards with icons"]
- [Element 3 — e.g., "Animated counter for stats"]

## Design Notes
[Any specific design direction, inspiration references, or constraints]

## Responsive Behavior
- **Desktop:** [How it looks on large screens]
- **Tablet:** [How it adapts]
- **Mobile:** [How it stacks/simplifies]
```

The section-id is the slug version of the section name (lowercase, hyphens instead of spaces).

## Step 7: Confirm and Next Steps

Let the user know:

"I've created the specification at `product/sections/[section-id]/spec.md`.

**Section summary:**
- Type: [type]
- Headline: \"[headline]\"
- Layout: [pattern]
- CTA: \"[CTA text]\"

**Next step:** Run `/section-content` to generate the copy and sample data for this section."

## Important Notes

- Be conversational and helpful, not robotic
- Ask follow-up questions when answers are vague
- Push for specific, benefit-driven copy — not generic marketing speak
- The headline is the most important element — spend time getting it right
- Help the user think about conversion — every section should move visitors toward the CTA
- Keep the spec concise — only include what was discussed, no bloat
- Reference the section type best practices from `agents.md`
- For Hero sections: the headline should be immediately compelling and specific
- For CTA Banners: the copy should create urgency without being manipulative
