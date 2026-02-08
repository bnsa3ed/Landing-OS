/**
 * SEO configuration loading utilities — Landing OS exclusive
 */

import type { SeoConfig } from '@/types/landing'

const seoFiles = import.meta.glob('/product/seo/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

export function parseSeoConfig(md: string): SeoConfig | null {
  if (!md || !md.trim()) return null

  try {
    const titleMatch = md.match(/## Title Tag\s*\n+([\s\S]*?)(?=\n## |\n#[^#]|$)/)
    const title = titleMatch?.[1]?.trim() || ''

    const descMatch = md.match(/## Meta Description\s*\n+([\s\S]*?)(?=\n## |\n#[^#]|$)/)
    const metaDescription = descMatch?.[1]?.trim() || ''

    const keywordsSection = md.match(/## Keywords\s*\n+([\s\S]*?)(?=\n## |\n#[^#]|$)/)
    const keywords: string[] = []
    if (keywordsSection?.[1]) {
      for (const line of keywordsSection[1].split('\n')) {
        const trimmed = line.trim()
        if (trimmed.startsWith('- ')) keywords.push(trimmed.slice(2).trim())
      }
    }

    if (!title && !metaDescription && keywords.length === 0) return null

    return { raw: md, title, metaDescription, keywords }
  } catch {
    return null
  }
}

export function loadSeoConfig(): SeoConfig | null {
  const content = seoFiles['/product/seo/seo-config.md']
  return content ? parseSeoConfig(content) : null
}

export function hasSeo(): boolean {
  return '/product/seo/seo-config.md' in seoFiles
}
