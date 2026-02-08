# Page Structure

You are helping the user define the ordered section layout of their landing page. This establishes what sections appear on the page and in what order.

## Step 1: Check Prerequisites

First, verify that `product/landing-overview.md` exists. If it doesn't:

"I don't see a landing page vision defined yet. Please run `/landing-vision` first to define your brand and audience, then come back to define your page structure."

Stop here if the prerequisite is missing.

## Step 2: Analyze the Vision

Read `product/landing-overview.md` to understand:
- Product name and description
- Target audience
- Value proposition
- Tone of voice
- Primary CTA goal

## Step 3: Present Section Options

"Let's define the section structure for **[Product Name]**'s landing page.

Based on your product and audience, here are the available section types:

| Section | Purpose | Best For |
|---|---|---|
| **Hero** | First impression, value prop | Every page (required) |
| **Logo Bar** | Social proof, credibility | Products with recognizable customers |
| **Features** | Product capabilities | Products with 3-6 key features |
| **How It Works** | Process clarity | Products needing explanation |
| **Social Proof** | Testimonials, case studies | Trust-dependent products |
| **Pricing** | Conversion, plan selection | Products with pricing tiers |
| **FAQ** | Objection handling | Products with common questions |
| **CTA Banner** | Final conversion push | Every page (recommended) |
| **Stats/Numbers** | Credibility metrics | Products with impressive numbers |
| **Comparison** | Competitive positioning | Products in competitive markets |
| **Newsletter** | Lead capture | Content-driven products |
| **Footer** | Navigation, legal | Every page (required) |

Based on **[Product Name]** — a [description] targeting [audience] — I'd recommend this section order:

**Recommended Structure:**
1. **Hero** — [Brief rationale]
2. **[Section]** — [Brief rationale]
3. **[Section]** — [Brief rationale]
4. **[Section]** — [Brief rationale]
5. **[Section]** — [Brief rationale]
6. **CTA Banner** — Final conversion push
7. **Footer** — Navigation and legal

This follows the **[pattern name]** pattern (e.g., 'product-led', 'trust-first', 'story-driven').

Would you like to go with this, or modify the sections or order?"

Use AskUserQuestion if the user needs help deciding between patterns.

## Step 4: Refine the Structure

If the user wants changes, iterate:

"Here's the updated structure:

1. **[Section]** — [One-line purpose]
2. **[Section]** — [One-line purpose]
...

Does this look right? Anything to add, remove, or reorder?"

## Step 5: Create the File

Once the user approves, create the file at `product/page-structure.md`:

```markdown
# [Product Name] — Page Structure

## Section Order

### 1. Hero
**Type:** hero
**Purpose:** [What this section accomplishes]
**Key Elements:** [Headline, subheadline, CTA, visual element]

### 2. [Section Name]
**Type:** [section-type-id]
**Purpose:** [What this section accomplishes]
**Key Elements:** [Main elements this section will contain]

### 3. [Section Name]
**Type:** [section-type-id]
**Purpose:** [What this section accomplishes]
**Key Elements:** [Main elements this section will contain]

[Continue for all sections...]

### N. Footer
**Type:** footer
**Purpose:** Navigation, legal, social links
**Key Elements:** [Column structure, links, social icons]

## Pattern
**Strategy:** [product-led / trust-first / story-driven / custom]
**Rationale:** [Why this ordering works for this product and audience]

## Notes
[Any additional notes about the page structure, e.g., "Consider adding a comparison section later if competitive positioning becomes important"]
```

## Step 6: Confirm and Next Steps

Let the user know:

"I've created your page structure at `product/page-structure.md` with [N] sections.

**Your landing page flow:**
1. [Section] → [Purpose in 3 words]
2. [Section] → [Purpose in 3 words]
...

**Next step:** Run `/design-tokens` to choose your color palette and typography."

## Important Notes

- Hero and Footer are essentially required — gently push for these
- CTA Banner before Footer is a proven conversion pattern — recommend it
- Don't suggest more than 8-10 sections — landing pages should be focused
- The section order matters for conversion — guide the user toward proven patterns
- Each section should serve a distinct purpose — no redundancy
- Reference the Section Types table in `agents.md` for best practices
