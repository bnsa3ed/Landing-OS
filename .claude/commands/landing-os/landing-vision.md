# Landing Vision

You are helping the user define their landing page vision for Landing-OS. This is a conversational, multi-step process that captures brand identity, audience, value proposition, and competitive positioning.

## Step 1: Gather Initial Input

First, ask the user to share their raw notes, ideas, or thoughts about the product and landing page they want to build. Be warm and open-ended:

"I'd love to help you define your landing page vision. Tell me about your product — what does it do, who is it for, and what makes it special? Share any notes, ideas, or rough thoughts. Don't worry about structure yet, just share what's on your mind."

Wait for their response before proceeding.

## Step 2: Ask Clarifying Questions

After receiving their input, use the AskUserQuestion tool to ask targeted questions to shape:

- **Product/Brand Name** — A clear, memorable name
- **Core Description** (1-3 sentences that capture the essence)
- **Target Audience** — Who are the ideal visitors to this landing page?
- **Unique Value Proposition** — What makes this different from competitors?
- **Competitor Landscape** — Who are 2-3 competitors and how does this differ?
- **Tone of Voice** — Professional, playful, technical, friendly, bold, minimal?
- **Primary CTA Goal** — What's the #1 action you want visitors to take? (Sign up, book demo, download, buy, join waitlist)

Example clarifying questions (adapt based on their input):
- "Who is your ideal customer? Can you describe them in one sentence?"
- "What's the single biggest pain point you're solving?"
- "If a visitor only reads your headline and one sentence, what should they understand?"
- "Name 2-3 competitors. What makes your approach better?"
- "What tone should the landing page convey? (Pick from: Professional & Polished / Bold & Provocative / Friendly & Approachable / Technical & Precise / Playful & Creative)"
- "What's the primary action you want visitors to take?"

Ask questions one or two at a time, and engage conversationally.

## Step 3: Define Target Audience Personas

Based on their answers, define 1-3 audience personas:

"Let me define the key audience personas for your landing page:

**Persona 1: [Name/Title]**
- Role: [Job title or role]
- Pain point: [Main frustration]
- What they're looking for: [Key desire]
- How they'll find you: [Channel — search, social, referral, ads]

**Persona 2: [Name/Title]**
- Role: [Job title or role]
- Pain point: [Main frustration]
- What they're looking for: [Key desire]
- How they'll find you: [Channel]

Do these personas feel right? Would you adjust anything?"

## Step 4: Present Draft and Refine

Once you have enough information, present a draft summary:

"Based on our discussion, here's the landing page vision for **[Product Name]**:

**Description:**
[Draft 1-3 sentence description]

**Target Audience:**
[Summary of audience personas]

**Unique Value Proposition:**
[The core differentiator in one sentence]

**Competitive Positioning:**
[How this differs from competitors]

**Tone of Voice:**
[The chosen tone with 2-3 adjective descriptors]

**Primary CTA:**
[The main conversion goal and CTA text]

Does this capture your vision? Would you like to adjust anything?"

Iterate until the user is satisfied.

## Step 5: Create the File

Once the user approves, create the file at `product/landing-overview.md` with this exact format:

```markdown
# [Product Name]

## Description
[The finalized 1-3 sentence description]

## Target Audience

### Persona 1: [Name/Title]
- **Role:** [Job title or role]
- **Pain point:** [Main frustration]
- **Looking for:** [Key desire]
- **Discovery channel:** [How they'll find you]

### Persona 2: [Name/Title]
- **Role:** [Job title or role]
- **Pain point:** [Main frustration]
- **Looking for:** [Key desire]
- **Discovery channel:** [How they'll find you]

[Add more personas as needed, up to 3]

## Unique Value Proposition
[One clear sentence that captures the core differentiator]

## Competitive Positioning

### vs [Competitor 1]
[How you differ in 1-2 sentences]

### vs [Competitor 2]
[How you differ in 1-2 sentences]

[Add more as needed]

## Tone of Voice
[2-3 adjective descriptors and a brief explanation of how this translates to copy]

## Primary CTA
- **Goal:** [Sign up / Book demo / Download / Buy / Join waitlist]
- **CTA Text:** [The actual button text, e.g., "Start Free Trial"]
- **Secondary CTA:** [Optional secondary action, e.g., "Watch Demo"]
```

## Step 6: Confirm Completion

Let the user know:

"I've created your landing page vision at `product/landing-overview.md`.

**Next step:** Run `/page-structure` to define the section layout of your landing page."

## Important Notes

- Be conversational and helpful, not robotic
- Ask follow-up questions when answers are vague
- Help the user think through their positioning, don't just transcribe
- Keep the final output concise and actionable
- **Always ensure the product has a name** — if user didn't provide one, ask for it
- The vision directly informs copy, design tokens, and section choices later
- Push the user to be specific about their audience and CTA — vague answers lead to generic pages
