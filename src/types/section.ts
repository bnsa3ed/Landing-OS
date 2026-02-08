/**
 * Section types for Landing OS
 */

export interface SectionData {
  sectionId: string
  spec: string | null
  specParsed: ParsedSpec | null
  data: Record<string, unknown> | null
  designs: DesignInfo[]
  screenshots: ScreenshotInfo[]
}

export interface ParsedSpec {
  title: string
  overview: string
  sectionType: string
  copyRequirements: string[]
  layoutPattern: string
  uiRequirements: string[]
}

export interface DesignInfo {
  name: string
  path: string
  componentName: string
}

export interface ScreenshotInfo {
  name: string
  path: string
  url: string
}
