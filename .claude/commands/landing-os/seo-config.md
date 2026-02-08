# SEO Configuration

You are helping the user define SEO configuration for their landing page. This covers meta tags, Open Graph, Twitter Cards, JSON-LD schema markup, and keyword strategy.

## Step 1: Check Prerequisites

Read `product/landing-overview.md` to understand the product, audience, and value proposition.

If it doesn't exist:
"Before configuring SEO, you need to define your landing page vision. Please run `/landing-vision` first."

Also check if `product/page-structure.md` exists for section context.

## Step 2: Gather SEO Information

"Let's configure SEO for **[Product Name]**'s landing page. I'll help you define:

1. **Title tag** — The text that appears in browser tabs and search results
2. **Meta description** — The snippet below your title in search results
3. **Open Graph / Twitter Cards** — How your page looks when shared on social media
4. **JSON-LD schema** — Structured data for rich search results
5. **Keywords** — Target search terms
6. **Canonical URL** — The authoritative URL for this page

Let me ask a few questions to get started."

Use AskUserQuestion:
- "What's the primary keyword you want to rank for? (e.g., 'project management tool', 'AI writing assistant')"
- "What's your landing page URL? (e.g., https://yourproduct.com)"
- "Do you have an OG image ready, or should I note dimensions for you to create one?"
- "What category best describes your product? (SaaS, Developer Tool, AI Tool, Design Tool, Productivity, Other)"

## Step 3: Generate SEO Configuration

Based on their answers and the landing overview, generate the SEO config:

"Here's the SEO configuration for **[Product Name]**:

**Title Tag:** [Product Name] — [Value Proposition in 5-7 words]
(~60 characters for optimal display)

**Meta Description:** [Compelling 150-160 character description with primary keyword and CTA]

**Open Graph:**
- Title: [OG Title — can be slightly different from title tag]
- Description: [OG Description — can be slightly different]
- Image: [1200x630px recommended]
- Type: website

**Twitter Card:**
- Card type: summary_large_image
- Title: [Twitter title]
- Description: [Twitter description]

**Keywords:** [5-10 target keywords]

**Schema type:** [SoftwareApplication / WebApplication / Product / Organization]

Does this look good? Would you like to adjust anything?"

## Step 4: Create the SEO Config File

Once approved, create `product/seo/seo-config.md`:

```markdown
# SEO Configuration — [Product Name]

## Meta Tags

### Title Tag
```
[Product Name] — [Concise Value Proposition]
```
*Keep under 60 characters. Primary keyword near the beginning.*

### Meta Description
```
[Compelling description with primary keyword, value proposition, and implicit CTA. 150-160 characters.]
```

### Canonical URL
```
[https://yourproduct.com]
```

### Additional Meta
```html
<meta name="robots" content="index, follow">
<meta name="author" content="[Company/Person Name]">
<meta name="keywords" content="[keyword1], [keyword2], [keyword3], [keyword4], [keyword5]">
```

## Open Graph

```html
<meta property="og:type" content="website">
<meta property="og:url" content="[canonical URL]">
<meta property="og:title" content="[OG Title]">
<meta property="og:description" content="[OG Description]">
<meta property="og:image" content="[URL to 1200x630 OG image]">
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="[Alt text for OG image]">
<meta property="og:site_name" content="[Product Name]">
<meta property="og:locale" content="en_US">
```

## Twitter Card

```html
<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="[Twitter Title]">
<meta name="twitter:description" content="[Twitter Description]">
<meta name="twitter:image" content="[URL to Twitter card image]">
<meta name="twitter:site" content="@[twitter_handle]">
<meta name="twitter:creator" content="@[creator_handle]">
```

## JSON-LD Schema Markup

```json
{
  "@context": "https://schema.org",
  "@type": "[SoftwareApplication/WebApplication/Product]",
  "name": "[Product Name]",
  "description": "[Product description]",
  "url": "[canonical URL]",
  "applicationCategory": "[Category]",
  "operatingSystem": "Web",
  "offers": {
    "@type": "Offer",
    "price": "[price or 0 for free]",
    "priceCurrency": "USD"
  },
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "[rating]",
    "ratingCount": "[count]"
  }
}
```

## Keyword Strategy

### Primary Keywords
1. [Primary keyword] — [Monthly search volume estimate]
2. [Secondary keyword] — [Monthly search volume estimate]
3. [Tertiary keyword] — [Monthly search volume estimate]

### Long-Tail Keywords
1. [Long-tail keyword phrase]
2. [Long-tail keyword phrase]
3. [Long-tail keyword phrase]

### Keyword Placement
- **Title tag:** [Primary keyword]
- **H1 (Hero headline):** [Primary or related keyword naturally incorporated]
- **Meta description:** [Primary keyword]
- **H2s (Section headings):** [Secondary keywords distributed naturally]
- **Body copy:** [Keywords used naturally, not stuffed]
- **Image alt text:** [Descriptive with relevant keywords]

## OG Image Specifications

Create a 1200x630px image that includes:
- Product name/logo
- Tagline or value proposition
- Product screenshot or visual
- Brand colors

**Tips:**
- Text should be large enough to read in social media feeds
- Leave safe margins (don't put important content near edges)
- Test with Twitter Card Validator and Facebook Sharing Debugger

## Performance & Technical SEO Notes

- Ensure page loads in under 3 seconds (Core Web Vitals)
- Use semantic HTML (proper heading hierarchy, landmark elements)
- Add alt text to all images
- Implement lazy loading for below-fold images
- Use preconnect for external font services
- Minimize render-blocking resources
- Consider adding a sitemap.xml and robots.txt
```

## Step 5: Confirm Completion

"I've created your SEO configuration at `product/seo/seo-config.md`.

**Key elements:**
- Title: \"[title tag]\"
- Description: \"[meta description]\"
- Primary keyword: \"[keyword]\"
- Schema type: [type]
- OG image specs: 1200x630px

**Implementation notes:**
- Add the meta tags to your page's `<head>`
- Create an OG image at 1200x630px with your brand
- Test social sharing with Twitter Card Validator
- Submit to Google Search Console after launch

**Next step:** If you have more sections to design, run `/shape-section`. When everything is ready, run `/export-landing` to generate the complete handoff package."

## Important Notes

- Title tags should be under 60 characters
- Meta descriptions should be 150-160 characters
- OG images should be 1200x630px
- Keywords should be naturally integrated, not stuffed
- JSON-LD schema helps with rich search results
- The SEO config informs the export package's implementation instructions
- Push users to be specific about their target keywords
