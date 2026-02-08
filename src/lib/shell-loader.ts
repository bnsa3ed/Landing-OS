/**
 * Shell loading and parsing utilities for Landing OS
 */

import type { ShellSpec, ShellInfo } from '@/types/landing'
import type { ComponentType, ReactNode } from 'react'

const shellSpecFiles = import.meta.glob('/product/shell/*.md', {
  query: '?raw',
  import: 'default',
  eager: true,
}) as Record<string, string>

const shellComponentModules = import.meta.glob('/src/shell/components/*.tsx') as Record<
  string,
  () => Promise<{ default: ComponentType }>
>

const shellPreviewModules = import.meta.glob('/src/shell/*.tsx') as Record<
  string,
  () => Promise<{ default: ComponentType }>
>

export function parseShellSpec(md: string): ShellSpec | null {
  if (!md || !md.trim()) return null

  try {
    const overviewMatch = md.match(/## Overview\s*\n+([\s\S]*?)(?=\n## |\n#[^#]|$)/)
    const overview = overviewMatch?.[1]?.trim() || ''

    const navSection = md.match(/## Navigation Structure\s*\n+([\s\S]*?)(?=\n## |\n#[^#]|$)/)
    const navigationItems: string[] = []
    if (navSection?.[1]) {
      for (const line of navSection[1].split('\n')) {
        const trimmed = line.trim()
        if (trimmed.startsWith('- ')) navigationItems.push(trimmed.slice(2).trim())
      }
    }

    const layoutMatch = md.match(/## Layout Pattern\s*\n+([\s\S]*?)(?=\n## |\n#[^#]|$)/)
    const layoutPattern = layoutMatch?.[1]?.trim() || ''

    if (!overview && navigationItems.length === 0 && !layoutPattern) return null

    return { raw: md, overview, navigationItems, layoutPattern }
  } catch {
    return null
  }
}

export function hasShellComponents(): boolean {
  return '/src/shell/components/PageShell.tsx' in shellComponentModules
}

export function loadShellComponent(
  componentName: string
): (() => Promise<{ default: ComponentType }>) | null {
  const path = `/src/shell/components/${componentName}.tsx`
  return shellComponentModules[path] || null
}

export function loadPageShell(): (() => Promise<{ default: ComponentType<{ children?: ReactNode }> }>) | null {
  const path = '/src/shell/components/PageShell.tsx'
  return shellComponentModules[path] as (() => Promise<{ default: ComponentType<{ children?: ReactNode }> }>) || null
}

export function loadShellPreview(): (() => Promise<{ default: ComponentType }>) | null {
  return shellPreviewModules['/src/shell/ShellPreview.tsx'] || null
}

export function loadShellInfo(): ShellInfo | null {
  const specContent = shellSpecFiles['/product/shell/spec.md']
  const spec = specContent ? parseShellSpec(specContent) : null
  const hasComponents = hasShellComponents()
  if (!spec && !hasComponents) return null
  return { spec, hasComponents }
}

export function hasShell(): boolean {
  return hasShellSpec() || hasShellComponents()
}

export function hasShellSpec(): boolean {
  return '/product/shell/spec.md' in shellSpecFiles
}

export function getShellComponentNames(): string[] {
  const names: string[] = []
  for (const path of Object.keys(shellComponentModules)) {
    const match = path.match(/\/src\/shell\/components\/([^/]+)\.tsx$/)
    if (match) names.push(match[1])
  }
  return names
}
