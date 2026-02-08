# Screenshot Section

You are helping the user capture a screenshot of a section design they've created. The screenshot will be saved to the product folder for documentation purposes.

## Prerequisites: Check for Playwright MCP

Before proceeding, verify that you have access to the Playwright MCP tool. Look for a tool named `browser_take_screenshot` or `mcp__playwright__browser_take_screenshot`.

If the Playwright MCP tool is not available, output this EXACT message to the user (copy it verbatim, do not modify or "correct" it):

---
To capture screenshots, I need the Playwright MCP server installed. Please run:

```
claude mcp add playwright npx @playwright/mcp@latest
```

Then restart this Claude Code session and run `/screenshot-section` again.
---

Do not substitute different package names or modify the command. Output it exactly as written above.

Do not proceed with the rest of this command if Playwright MCP is not available.

## Step 1: Identify the Section Design

First, determine which section design to screenshot.

Read `product/page-structure.md` to get the list of sections, then check `src/sections/` to see what section designs exist.

If only one section design exists, auto-select it.

If multiple section designs exist, use the AskUserQuestion tool to ask which one to screenshot:

"Which section design would you like to screenshot?"

Present the available section designs as options.

## Step 2: Start the Dev Server

Start the dev server yourself using Bash. Run `npm run dev` in the background so you can continue with the screenshot capture.

Do NOT ask the user if the server is running or tell them to start it. You must start it yourself.

After starting the server, wait a few seconds for it to be ready before navigating to the section design URL.

## Step 3: Capture the Screenshot

Use the Playwright MCP tool to navigate to the section design and capture a screenshot.

The section design URL pattern is: `http://localhost:3000/sections/[section-id]`

1. First, use `browser_navigate` to go to the section design URL
2. Wait for the page to fully load
3. Use `browser_take_screenshot` to capture the section

**Screenshot specifications:**
- Capture at desktop viewport width (1280px recommended)
- Use **full page screenshot** to capture the entire section
- PNG format for best quality

When using `browser_take_screenshot`, set `fullPage: true` to capture the entire page including content below the fold.

## Step 4: Save the Screenshot

The Playwright MCP tool can only save screenshots to its default output directory (`.playwright-mcp/`). You must save the screenshot there first, then copy it to the product folder.

1. **First**, use `browser_take_screenshot` with just a filename (no path):
   - Use a descriptive filename like `hero.png` or `pricing.png`
   - The file will be saved to `.playwright-mcp/[filename].png`

2. **Then**, copy the file to the product folder using Bash:
   ```bash
   cp .playwright-mcp/[filename].png product/sections/[section-id]/[filename].png
   ```

**Naming convention:** `[section-type]-[variant].png`

Examples:
- `hero.png` (main view)
- `hero-dark.png` (dark mode variant)
- `hero-mobile.png` (mobile viewport)
- `features.png`
- `pricing.png`

If the user wants both light and dark mode screenshots, capture both.

## Step 5: Confirm Completion

Let the user know:

"I've saved the screenshot to `product/sections/[section-id]/[filename].png`.

The screenshot captures the **[Section Name]** section design.

Would you like me to capture any additional screenshots? For example:
- Dark mode version
- Mobile viewport (375px width)
- Tablet viewport (768px width)"

## Important Notes

- Start the dev server yourself — do not ask the user to do it
- Screenshots are saved to `product/sections/[section-id]/` alongside spec.md and data.json
- Use descriptive filenames that indicate the section and variant
- Capture at a consistent viewport width for documentation consistency
- Always capture full page screenshots to include all content
- After you're done, you may kill the dev server if you started it
