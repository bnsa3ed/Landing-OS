/**
 * Landing data loading and markdown parsing utilities
 */

import type { LandingOverview, PageStructure, PageSection, LandingData } from '@/types/landing'
import { loadDesignSystem, hasDesignSystem } from './design-system-loader'
import { loadShellInfo, hasShell } from './shell-loader'
import { loadSeoConfig, hasSeo } from './seo-loader'

// Load markdown files from /product/ directory at build time
const productFiles = import.meta.glob('/product/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

// Load zip files from root directory at build time
const exportZipFiles = import.meta.glob('/landing-plan.zip', {
  query: '?url',
  import: 'default',
  eager: true,
}) as Record<string, string>

/**
 * Slugify a string for use as an ID
 */
function slugify(str: string): string {
  return str
    .toLowerCase()
    .replace(/\s+&\s+/g, '-and-')
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/(^-|-$)/g, '')
}

/**
 * Parse landing-overview.md content into LandingOverview structure
 *
 * Expected format:
 * # [Product Name]
 *
 * ## Description
 * [1-3 sentence description]
 *
 * ## Target Audience
 * [Audience description]
 *
 * ## Value Proposition
 * [Value prop]
 *
 * ## Tone of Voice
 * [Tone description]
 *
 * ## Competitors
 * - Competitor 1
 *
 * ## Key Features
 * - Feature 1
 */
export function parseLandingOverview(md: string): LandingOverview | null {
  if (!md || !md.trim()) return null

  try {
    const nameMatch = md.match(/^#\s+(.+)$/m)
    const name = nameMatch?.[1]?.trim() || 'Landing Page'

    const descMatch = md.match(/## Description\s*\n+([\s\S]*?)(?=\n## |\n#[^#]|$)/)
    const description = descMatch?.[1]?.trim() || ''

    const audienceMatch = md.match(/## Target Audience\s*\n+([\s\S]*?)(?=\n## |\n#[^#]|$)/)
    const audience = audienceMatch?.[1]?.trim() || ''

    const vpMatch = md.match(/## Value Proposition\s*\n+([\s\S]*?)(?=\n## |\n#[^#]|$)/)
    const valueProposition = vpMatch?.[1]?.trim() || ''

    const toneMatch = md.match(/## Tone of Voice\s*\n+([\s\S]*?)(?=\n## |\n#[^#]|$)/)
    const tone = toneMatch?.[1]?.trim() || ''

    const competitorsSection = md.match(/## Competitors\s*\n+([\s\S]*?)(?=\n## |\n#[^#]|$)/)
    const competitors: string[] = []
    if (competitorsSection?.[1]) {
      for (const line of competitorsSection[1].split('\n')) {
        const trimmed = line.trim()
        if (trimmed.startsWith('- ')) competitors.push(trimmed.slice(2).trim())
      }
    }

    const featuresSection = md.match(/## Key Features\s*\n+([\s\S]*?)(?=\n## |\n#[^#]|$)/)
    const features: string[] = []
    if (featuresSection?.[1]) {
      for (const line of featuresSection[1].split('\n')) {
        const trimmed = line.trim()
        if (trimmed.startsWith('- ')) features.push(trimmed.slice(2).trim())
      }
    }

    if (!description && !audience && features.length === 0) return null

    return { name, description, audience, valueProposition, tone, competitors, features }
  } catch {
    return null
  }
}

/**
 * Parse page-structure.md content into PageStructure
 *
 * Expected format:
 * # Page Structure
 *
 * ## Sections
 *
 * ### 1. [Section Title] (type)
 * [One sentence description]
 */
export function parsePageStructure(md: string): PageStructure | null {
  if (!md || !md.trim()) return null

  try {
    const sections: PageSection[] = []

    // Match sections with pattern ### N. Title or ### N. Title (type)
    const sectionMatches = [...md.matchAll(/### (\d+)\.\s*(.+)\n+([\s\S]*?)(?=\n### |\n## |\n#[^#]|$)/g)]

    for (const match of sectionMatches) {
      const order = parseInt(match[1], 10)
      let title = match[2].trim()
      const description = match[3].trim()

      // Extract type from parentheses if present
      let type = 'custom'
      const typeMatch = title.match(/\(([^)]+)\)\s*$/)
      if (typeMatch) {
        type = typeMatch[1].trim().toLowerCase()
        title = title.replace(/\s*\([^)]+\)\s*$/, '')
      }

      sections.push({
        id: slugify(title),
        title,
        type,
        description,
        order,
      })
    }

    sections.sort((a, b) => a.order - b.order)

    if (sections.length === 0) return null

    return { sections }
  } catch {
    return null
  }
}

/**
 * Load all landing data from files
 */
export function loadLandingData(): LandingData {
  const overviewContent = productFiles['/product/landing-overview.md']
  const structureContent = productFiles['/product/page-structure.md']

  return {
    overview: overviewContent ? parseLandingOverview(overviewContent) : null,
    structure: structureContent ? parsePageStructure(structureContent) : null,
    designSystem: loadDesignSystem(),
    shell: loadShellInfo(),
    seo: loadSeoConfig(),
  }
}

export function hasLandingOverview(): boolean {
  return '/product/landing-overview.md' in productFiles
}

export function hasPageStructure(): boolean {
  return '/product/page-structure.md' in productFiles
}

export function hasExportZip(): boolean {
  return '/landing-plan.zip' in exportZipFiles
}

export function getExportZipUrl(): string | null {
  return exportZipFiles['/landing-plan.zip'] || null
}

export { hasDesignSystem, hasShell, hasSeo }
