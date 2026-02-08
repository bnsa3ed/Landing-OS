/**
 * Section data loading utilities for Landing OS
 *
 * File structure:
 * - product/sections/[section-id]/spec.md     - Section specification
 * - product/sections/[section-id]/data.json   - Sample content/copy
 * - src/sections/[section-id]/components/*.tsx - Section component designs
 * - product/sections/[section-id]/*.png       - Screenshots
 */

import type { SectionData, ParsedSpec, DesignInfo, ScreenshotInfo } from '@/types/section'
import type { ComponentType } from 'react'

const specFiles = import.meta.glob('/product/sections/*/spec.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

const dataFiles = import.meta.glob('/product/sections/*/data.json', {
  eager: true,
}) as Record<string, { default: Record<string, unknown> }>

// Section designs live in src/sections/[id]/components/ or src/sections/[id]/*.tsx
const designModules = import.meta.glob('/src/sections/*/*.tsx') as Record<
  string,
  () => Promise<{ default: ComponentType }>
>

const screenshotFiles = import.meta.glob('/product/sections/*/*.png', {
  query: '?url',
  import: 'default',
  eager: true,
}) as Record<string, string>

function extractSectionIdFromProduct(path: string): string | null {
  const match = path.match(/\/product\/sections\/([^/]+)\//)
  return match?.[1] || null
}

function extractSectionIdFromSrc(path: string): string | null {
  const match = path.match(/\/src\/sections\/([^/]+)\//)
  return match?.[1] || null
}

function extractDesignName(path: string): string | null {
  const match = path.match(/\/src\/sections\/[^/]+\/(?:components\/)?([^/]+)\.tsx$/)
  return match?.[1] || null
}

function extractScreenshotName(path: string): string | null {
  const match = path.match(/\/product\/sections\/[^/]+\/([^/]+)\.png$/)
  return match?.[1] || null
}

/**
 * Parse spec.md content into ParsedSpec structure
 *
 * Expected format:
 * # Section Specification
 *
 * ## Overview
 * [Brief description]
 *
 * ## Section Type
 * hero / features / social-proof / pricing / etc.
 *
 * ## Copy Requirements
 * - Headline
 * - Subheadline
 *
 * ## Layout Pattern
 * centered / split / grid / bento
 *
 * ## UI Requirements
 * - Requirement 1
 */
export function parseSpec(md: string): ParsedSpec | null {
  if (!md || !md.trim()) return null

  try {
    const titleMatch = md.match(/^#\s+(.+)$/m)
    const title = titleMatch?.[1]?.trim() || 'Section Specification'

    const overviewMatch = md.match(/## Overview\s*\n+([\s\S]*?)(?=\n## |\n#[^#]|$)/)
    const overview = overviewMatch?.[1]?.trim() || ''

    const typeMatch = md.match(/## Section Type\s*\n+([\s\S]*?)(?=\n## |\n#[^#]|$)/)
    const sectionType = typeMatch?.[1]?.trim().toLowerCase() || 'custom'

    const copySection = md.match(/## Copy Requirements\s*\n+([\s\S]*?)(?=\n## |\n#[^#]|$)/)
    const copyRequirements: string[] = []
    if (copySection?.[1]) {
      for (const line of copySection[1].split('\n')) {
        const trimmed = line.trim()
        if (trimmed.startsWith('- ')) copyRequirements.push(trimmed.slice(2).trim())
      }
    }

    const layoutMatch = md.match(/## Layout Pattern\s*\n+([\s\S]*?)(?=\n## |\n#[^#]|$)/)
    const layoutPattern = layoutMatch?.[1]?.trim() || ''

    const uiReqSection = md.match(/## UI Requirements\s*\n+([\s\S]*?)(?=\n## |\n#[^#]|$)/)
    const uiRequirements: string[] = []
    if (uiReqSection?.[1]) {
      for (const line of uiReqSection[1].split('\n')) {
        const trimmed = line.trim()
        if (trimmed.startsWith('- ')) uiRequirements.push(trimmed.slice(2).trim())
      }
    }

    return { title, overview, sectionType, copyRequirements, layoutPattern, uiRequirements }
  } catch {
    return null
  }
}

export function getSectionDesigns(sectionId: string): DesignInfo[] {
  const designs: DesignInfo[] = []
  const prefix = `/src/sections/${sectionId}/`

  for (const path of Object.keys(designModules)) {
    if (path.startsWith(prefix)) {
      const name = extractDesignName(path)
      if (name) {
        designs.push({ name, path, componentName: name })
      }
    }
  }

  return designs
}

export function getSectionScreenshots(sectionId: string): ScreenshotInfo[] {
  const screenshots: ScreenshotInfo[] = []
  const prefix = `/product/sections/${sectionId}/`

  for (const [path, url] of Object.entries(screenshotFiles)) {
    if (path.startsWith(prefix)) {
      const name = extractScreenshotName(path)
      if (name) screenshots.push({ name, path, url })
    }
  }

  return screenshots
}

export function loadDesignComponent(
  sectionId: string,
  designName: string
): (() => Promise<{ default: ComponentType }>) | null {
  // Try both direct path and components/ subdirectory
  const directPath = `/src/sections/${sectionId}/${designName}.tsx`
  const componentsPath = `/src/sections/${sectionId}/components/${designName}.tsx`
  return designModules[directPath] || designModules[componentsPath] || null
}

export function loadSectionData(sectionId: string): SectionData {
  const specPath = `/product/sections/${sectionId}/spec.md`
  const dataPath = `/product/sections/${sectionId}/data.json`

  const specContent = specFiles[specPath] || null
  const dataModule = dataFiles[dataPath]
  const data = dataModule?.default || null

  return {
    sectionId,
    spec: specContent,
    specParsed: specContent ? parseSpec(specContent) : null,
    data,
    designs: getSectionDesigns(sectionId),
    screenshots: getSectionScreenshots(sectionId),
  }
}

export function hasSectionSpec(sectionId: string): boolean {
  return `/product/sections/${sectionId}/spec.md` in specFiles
}

export function hasSectionData(sectionId: string): boolean {
  return `/product/sections/${sectionId}/data.json` in dataFiles
}

export function getAllSectionIds(): string[] {
  const ids = new Set<string>()

  for (const path of Object.keys(specFiles)) {
    const id = extractSectionIdFromProduct(path)
    if (id) ids.add(id)
  }

  for (const path of Object.keys(dataFiles)) {
    const id = extractSectionIdFromProduct(path)
    if (id) ids.add(id)
  }

  for (const path of Object.keys(designModules)) {
    const id = extractSectionIdFromSrc(path)
    if (id) ids.add(id)
  }

  return Array.from(ids)
}
