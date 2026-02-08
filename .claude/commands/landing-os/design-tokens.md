# Design Tokens

You are helping the user choose colors and typography for their landing page. These design tokens will be used consistently across all section designs and the page shell.

## Step 1: Check Prerequisites

First, verify that the landing overview exists:

Read `product/landing-overview.md` to understand the product, audience, and tone.

If it doesn't exist:

"Before defining your design system, you'll need to establish your landing page vision. Please run `/landing-vision` first."

Stop here if the prerequisite is missing.

## Step 2: Explain the Process

"Let's define the visual identity for **[Product Name]**.

I'll help you choose:
1. **Colors** — A 4-color system (primary, secondary, accent, neutral)
2. **Typography** — A 4-font system (display, heading, body, mono)

These will be applied consistently across all your section designs and the page shell.

Do you have any existing brand colors or fonts in mind, or would you like suggestions based on your product's tone?"

Wait for their response.

## Step 3: Choose Colors

Help the user select from Tailwind's built-in color palette. Use the product's tone and audience to guide suggestions.

"For your landing page, we'll use a **4-color system**:

**Primary** (main brand color — CTAs, links, key accents):
Options: `blue`, `indigo`, `violet`, `emerald`, `teal`, `amber`, `rose`, `cyan`, `lime`, `orange`

**Secondary** (complementary — badges, highlights, secondary elements):
Should complement your primary — often analogous or contrasting

**Accent** (attention-grabbing — special callouts, hover states, decorative):
A pop color that creates visual interest

**Neutral** (backgrounds, text, borders):
Options: `slate` (cool), `gray` (pure), `zinc` (slightly warm), `neutral`, `stone` (warm)

Based on **[Product Name]**'s [tone] tone targeting [audience]:

- **Primary:** [suggestion] — [why it fits the brand]
- **Secondary:** [suggestion] — [why it complements]
- **Accent:** [suggestion] — [why it creates interest]
- **Neutral:** [suggestion] — [why it works for readability]

**Theme preference:** Should the default be light mode, dark mode, or both?

What feels right?"

Use AskUserQuestion if they need help:
- "What mood should the colors convey? Bold & energetic, calm & trustworthy, or dark & sophisticated?"
- "Any colors you definitely want to avoid?"

## Step 4: Choose Typography

Help the user select fonts. **CRITICAL: Follow anti-AI-slop guidelines — do NOT suggest Inter, Roboto, Arial, or system fonts.**

"For typography, we'll use a **4-font system** with distinctive, characterful choices:

**Display font** (hero headlines — large, impactful, 48-80px):
Distinctive options: `Clash Display`, `Cabinet Grotesk`, `Satoshi`, `General Sans`, `Cal Sans`, `Switzer`, `Playfair Display`, `Space Mono`, `Unbounded`, `Syne`

**Heading font** (section titles, card headers — 24-40px):
Options: `Plus Jakarta Sans`, `Manrope`, `Outfit`, `DM Sans`, `Lexend`, `Red Hat Display`

**Body font** (paragraphs, UI text — 16-18px):
Readable options: `Source Sans 3`, `Nunito Sans`, `Work Sans`, `Lato`, `Karla`, `Geist`

**Mono font** (code, technical, stats):
Options: `IBM Plex Mono`, `JetBrains Mono`, `Fira Code`, `Source Code Pro`, `Geist Mono`

My suggestions for **[Product Name]** ([tone]):
- **Display:** [suggestion] — [why it makes a statement]
- **Heading:** [suggestion] — [why it works for section titles]
- **Body:** [suggestion] — [why it's readable yet distinctive]
- **Mono:** [suggestion] — [why it fits]

What resonates with you?"

## Step 5: Present Final Choices

Once they've made decisions:

"Here's your design system for **[Product Name]**:

**Colors (4-color system):**
- Primary: `[color]` — CTAs, links, key brand moments
- Secondary: `[color]` — Badges, highlights, secondary elements
- Accent: `[color]` — Decorative pops, hover states
- Neutral: `[color]` — Backgrounds, text, borders
- Theme: [Light / Dark / Both]

**Typography (4-font system):**
- Display: [Font] — Hero headlines
- Heading: [Font] — Section titles
- Body: [Font] — Paragraphs, UI text
- Mono: [Font] — Code, stats, technical

Does this look good? Ready to save?"

## Step 6: Create the Files

Once approved, create two files:

**File 1:** `product/design-system/colors.json`
```json
{
  "primary": "[color]",
  "secondary": "[color]",
  "accent": "[color]",
  "neutral": "[color]",
  "theme": "[light/dark/both]"
}
```

**File 2:** `product/design-system/typography.json`
```json
{
  "display": "[Font Name]",
  "heading": "[Font Name]",
  "body": "[Font Name]",
  "mono": "[Font Name]"
}
```

## Step 7: Confirm Completion

Let the user know:

"I've saved your design tokens:
- `product/design-system/colors.json`
- `product/design-system/typography.json`

**Your palette:**
- Primary: `[color]` — for CTAs, links, key brand moments
- Secondary: `[color]` — for badges, highlights
- Accent: `[color]` — for decorative pops
- Neutral: `[color]` — for backgrounds, text
- Theme: [preference]

**Your fonts:**
- [Display Font] for hero headlines
- [Heading Font] for section titles
- [Body Font] for body text
- [Mono Font] for code/stats

These will be applied when creating section designs.

**Next step:** Run `/design-shell` to design your navbar and footer."

## Reference: Anti-AI-Slop Font Recommendations

**DO NOT suggest these (overused in AI-generated pages):**
- Inter, Roboto, Arial, Helvetica, system-ui
- Space Grotesk (becoming the new "default AI font")
- Poppins (overused in generic landing pages)

**DO suggest these distinctive options:**
- Display: Clash Display, Cabinet Grotesk, Cal Sans, Syne, Unbounded, Playfair Display
- Heading: Plus Jakarta Sans, Manrope, Outfit, Red Hat Display, Lexend
- Body: Satoshi, General Sans, Source Sans 3, Work Sans, Karla, Geist
- Mono: IBM Plex Mono, JetBrains Mono, Geist Mono, Fira Code

## Reference: Tailwind Color Palette

Available colors (each has shades 50-950):
- **Warm:** `red`, `orange`, `amber`, `yellow`, `lime`
- **Cool:** `green`, `emerald`, `teal`, `cyan`, `sky`, `blue`
- **Purple:** `indigo`, `violet`, `purple`, `fuchsia`, `pink`, `rose`
- **Neutral:** `slate`, `gray`, `zinc`, `neutral`, `stone`

## Reference: Proven Color Strategies

- **Monochrome + accent**: Stone/slate neutrals + one vibrant primary (Linear, Resend)
- **Dark + neon**: Dark backgrounds + neon accent (Neon, Raycast)
- **Warm minimalism**: Warm stone neutrals + amber/orange accent (Granola)
- **Brand-forward**: Strong primary used extensively (Stripe, Cal.com)
- **High contrast**: Black/white with single bold accent (Vercel)

## Important Notes

- Colors should be Tailwind palette names (not hex codes)
- Fonts should be exact Google Fonts names (or widely available web fonts)
- Keep suggestions contextual to the product type and audience
- Push for distinctive choices — the design tokens set the tone for everything
- The 4-color and 4-font systems give more flexibility than 3-of-each
