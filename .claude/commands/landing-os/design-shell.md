# Design Shell

You are helping the user design the landing page shell — the navbar and footer that wrap all sections. This is a design for a landing page, not a web application.

## Step 1: Check Prerequisites

Verify prerequisites exist:

1. Read `product/landing-overview.md` — Product name, description, CTA
2. Read `product/page-structure.md` — Sections for navigation
3. Check if `product/design-system/colors.json` and `product/design-system/typography.json` exist

If overview or page structure are missing:

"Before designing the shell, you need to define your product and page structure. Please run:
1. `/landing-vision` — Define your product
2. `/page-structure` — Define your sections"

Stop here if overview or page structure are missing.

If design tokens are missing, show a warning but continue:

"Note: Design tokens haven't been defined yet. I'll proceed with default styling, but you may want to run `/design-tokens` first for consistent colors and typography."

## Step 2: Analyze Product Structure

Review the page structure and present shell options:

"I'm designing the shell for **[Product Name]**'s landing page.

For landing pages, the shell consists of:

**Navbar (top of page):**
- Logo/brand name (left)
- Navigation links to page sections (center or right)
- Primary CTA button (right)
- Mobile hamburger menu

**Footer (bottom of page):**
- Multi-column layout with categorized links
- Social media icons
- Copyright and legal links

Let me ask a few questions to nail the design."

## Step 3: Gather Design Details

Use AskUserQuestion to clarify:

**Navbar questions:**
- "Should the navbar be sticky (stays visible on scroll) or static?"
- "What navigation links should appear? (Usually section names like Features, Pricing, FAQ)"
- "Should the CTA button match the hero CTA or be different? (e.g., 'Get Started', 'Sign Up Free')"
- "Transparent on hero, then solid on scroll — or always solid background?"

**Footer questions:**
- "How many columns of links? (2-4 is typical)"
- "What categories? (e.g., Product, Company, Resources, Legal)"
- "Social media links? (Twitter/X, GitHub, LinkedIn, Discord, etc.)"
- "Any trust badges, certifications, or partner logos?"

## Step 4: Present Shell Specification

"Here's the shell design for **[Product Name]**:

**Navbar:**
- Style: [Sticky/static], [transparent-to-solid / always solid]
- Logo: [Product Name] (left)
- Links: [Link 1], [Link 2], [Link 3] (center/right)
- CTA: [Button text] (right, primary color)
- Mobile: Hamburger menu with slide-in panel

**Footer:**
- Layout: [N]-column grid
- Columns: [Category 1], [Category 2], [Category 3], [Category 4]
- Social: [Platform icons]
- Bottom bar: Copyright, Privacy Policy, Terms of Service

Does this match what you had in mind?"

Iterate until approved.

## Step 5: Create the Shell Specification

Create `product/shell/spec.md`:

```markdown
# Landing Page Shell Specification

## Navbar

### Layout
- Position: [sticky / static]
- Background: [transparent-to-solid on scroll / always solid]
- Height: [64px / 72px / 80px]

### Left
- Logo: [Product Name] or logo image
- Logo links to: top of page (smooth scroll)

### Center/Right Navigation
- [Link 1] → scrolls to [section]
- [Link 2] → scrolls to [section]
- [Link 3] → scrolls to [section]
- [Link 4] → scrolls to [section]

### Right
- CTA Button: "[CTA Text]"
- Style: Primary color, prominent

### Mobile
- Hamburger icon replaces nav links below [breakpoint]
- Slide-in panel or dropdown with all links + CTA

## Footer

### Layout
- [N]-column grid on desktop, stacked on mobile
- Background: [Dark / neutral background]

### Columns

#### [Category 1]
- [Link 1]
- [Link 2]
- [Link 3]

#### [Category 2]
- [Link 1]
- [Link 2]
- [Link 3]

[Continue for all columns...]

### Social Links
- [Platform 1] → [URL]
- [Platform 2] → [URL]

### Bottom Bar
- Copyright: (c) [Year] [Product Name]. All rights reserved.
- Links: Privacy Policy, Terms of Service

## Design Notes
[Any additional design decisions]
```

## Step 6: Create Shell Components

Create the shell components at `src/shell/components/`:

### PageShell.tsx
The main wrapper that provides navbar at top and footer at bottom.

```tsx
interface PageShellProps {
  children: React.ReactNode
  navLinks: Array<{ label: string; href: string }>
  ctaButton: { label: string; href: string }
  footerColumns: Array<{ title: string; links: Array<{ label: string; href: string }> }>
  socialLinks?: Array<{ platform: string; href: string }>
  brandName: string
}
```

### Navbar.tsx
Sticky/transparent navbar with logo, links, CTA, and mobile menu.

### Footer.tsx
Multi-column footer with links, social icons, and legal.

### index.ts
Export all components.

**Component Requirements:**
- Use props for all data and callbacks (portable)
- Apply design tokens if they exist (colors, fonts)
- Support light and dark mode with `dark:` variants
- Be mobile responsive (hamburger menu for mobile)
- Use Tailwind CSS for styling
- Use lucide-react for icons
- Smooth scroll to sections on nav link click
- Navbar CTA should stand out visually

## Step 7: Create Shell Preview

Create `src/shell/ShellPreview.tsx` — a preview wrapper:

```tsx
import { PageShell } from './components/PageShell'

export default function ShellPreview() {
  const navLinks = [
    { label: 'Features', href: '#features' },
    { label: 'Pricing', href: '#pricing' },
    { label: 'FAQ', href: '#faq' },
  ]

  const ctaButton = { label: 'Get Started', href: '#cta' }

  const footerColumns = [
    {
      title: 'Product',
      links: [
        { label: 'Features', href: '#' },
        { label: 'Pricing', href: '#' },
        { label: 'Changelog', href: '#' },
      ],
    },
    // ... more columns
  ]

  return (
    <PageShell
      navLinks={navLinks}
      ctaButton={ctaButton}
      footerColumns={footerColumns}
      brandName="[Product Name]"
    >
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-lg text-stone-500">Section content renders here</p>
      </div>
    </PageShell>
  )
}
```

## Step 8: Apply Design Tokens

If design tokens exist, apply them:

**Colors:**
- Read `product/design-system/colors.json`
- Primary: CTA button, active nav links
- Neutral: Backgrounds, text, borders
- Accent: Hover states

**Typography:**
- Read `product/design-system/typography.json`
- Display font for logo text
- Body font for nav links
- Heading font for footer column titles

## Step 9: Confirm Completion

Let the user know:

"I've designed the landing page shell for **[Product Name]**:

**Created files:**
- `product/shell/spec.md` — Shell specification
- `src/shell/components/PageShell.tsx` — Main shell wrapper
- `src/shell/components/Navbar.tsx` — Sticky navbar with CTA
- `src/shell/components/Footer.tsx` — Multi-column footer
- `src/shell/components/index.ts` — Component exports
- `src/shell/ShellPreview.tsx` — Preview wrapper

**Shell features:**
- [Sticky/static] navbar with [N] nav links + CTA
- Mobile hamburger menu
- [N]-column footer with social links
- Light/dark mode support

**Next step:** Run `/shape-section` to start defining your first section (start with the Hero)."

## Important Notes

- Landing page shells are simpler than app shells — no sidebar, no user menu
- The navbar should have a CTA button — this is a conversion element
- Smooth scrolling to sections is expected behavior
- Consider transparent-to-solid navbar transition for a polished feel
- Footer should be comprehensive but not overwhelming
- Components are props-based and portable to the user's codebase
- Apply design tokens when available for consistent styling
