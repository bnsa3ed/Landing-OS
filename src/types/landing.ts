/**
 * Landing OS types — adapted from Design OS for landing page design
 */

// =============================================================================
// Landing Overview (replaces ProductOverview)
// =============================================================================

export interface LandingOverview {
  name: string
  description: string
  audience: string
  valueProposition: string
  tone: string
  competitors: string[]
  features: string[]
}

// =============================================================================
// Page Structure (replaces ProductRoadmap)
// =============================================================================

export interface PageSection {
  id: string
  title: string
  type: string
  description: string
  order: number
}

export interface PageStructure {
  sections: PageSection[]
}

// =============================================================================
// Design System (4-color, 4-font — enhanced from Design OS's 3-color, 3-font)
// =============================================================================

export interface ColorTokens {
  primary: string
  secondary: string
  accent: string
  neutral: string
}

export interface TypographyTokens {
  display: string
  heading: string
  body: string
  mono: string
}

export interface DesignSystem {
  colors: ColorTokens | null
  typography: TypographyTokens | null
}

// =============================================================================
// Shell (Navbar + Footer for landing pages)
// =============================================================================

export interface ShellSpec {
  raw: string
  overview: string
  navigationItems: string[]
  layoutPattern: string
}

export interface ShellInfo {
  spec: ShellSpec | null
  hasComponents: boolean
}

// =============================================================================
// SEO Configuration (Landing OS exclusive — not in Design OS)
// =============================================================================

export interface SeoConfig {
  raw: string
  title: string
  metaDescription: string
  keywords: string[]
}

// =============================================================================
// Combined Landing Data
// =============================================================================

export interface LandingData {
  overview: LandingOverview | null
  structure: PageStructure | null
  designSystem: DesignSystem | null
  shell: ShellInfo | null
  seo: SeoConfig | null
}
