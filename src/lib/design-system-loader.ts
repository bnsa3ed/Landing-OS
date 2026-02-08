/**
 * Design system loading utilities — 4-color and 4-font system
 */

import type { DesignSystem, ColorTokens, TypographyTokens } from '@/types/landing'

const designSystemFiles = import.meta.glob('/product/design-system/*.json', {
  eager: true,
}) as Record<string, { default: Record<string, string> }>

/**
 * Load color tokens from colors.json
 * Landing OS uses 4 colors: primary, secondary, accent, neutral
 */
export function loadColorTokens(): ColorTokens | null {
  const colorsModule = designSystemFiles['/product/design-system/colors.json']
  if (!colorsModule?.default) return null

  const colors = colorsModule.default
  if (!colors.primary || !colors.neutral) return null

  return {
    primary: colors.primary,
    secondary: colors.secondary || colors.primary,
    accent: colors.accent || colors.primary,
    neutral: colors.neutral,
  }
}

/**
 * Load typography tokens from typography.json
 * Landing OS uses 4 fonts: display, heading, body, mono
 */
export function loadTypographyTokens(): TypographyTokens | null {
  const typographyModule = designSystemFiles['/product/design-system/typography.json']
  if (!typographyModule?.default) return null

  const typography = typographyModule.default
  if (!typography.body) return null

  return {
    display: typography.display || typography.heading || 'DM Sans',
    heading: typography.heading || typography.display || 'DM Sans',
    body: typography.body,
    mono: typography.mono || 'IBM Plex Mono',
  }
}

export function loadDesignSystem(): DesignSystem | null {
  const colors = loadColorTokens()
  const typography = loadTypographyTokens()
  if (!colors && !typography) return null
  return { colors, typography }
}

export function hasDesignSystem(): boolean {
  return (
    '/product/design-system/colors.json' in designSystemFiles ||
    '/product/design-system/typography.json' in designSystemFiles
  )
}
