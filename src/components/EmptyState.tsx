import { FileText, LayoutList, Palette, PanelLeft, ClipboardList, Database, Layout, Image, Search, Package } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

type EmptyStateType = 'overview' | 'structure' | 'spec' | 'content' | 'designs' | 'design-system' | 'shell' | 'seo' | 'screenshots' | 'export'

interface EmptyStateProps {
  type: EmptyStateType
}

const config: Record<EmptyStateType, {
  icon: typeof FileText
  title: string
  command: string
  description: string
}> = {
  overview: {
    icon: FileText,
    title: 'No landing vision defined yet',
    command: '/landing-vision',
    description: 'Define your brand, audience, and value proposition',
  },
  structure: {
    icon: LayoutList,
    title: 'No page structure defined yet',
    command: '/page-structure',
    description: 'Plan the sections and ordering of your landing page',
  },
  spec: {
    icon: ClipboardList,
    title: 'No section spec defined yet',
    command: '/shape-section',
    description: 'Define the copy, layout, and CTA strategy for this section',
  },
  content: {
    icon: Database,
    title: 'No content generated yet',
    command: '/section-content',
    description: 'Generate realistic copy and sample data',
  },
  designs: {
    icon: Layout,
    title: 'No section designs created yet',
    command: '/design-section',
    description: 'Create React component designs for this section',
  },
  'design-system': {
    icon: Palette,
    title: 'No design tokens defined yet',
    command: '/design-tokens',
    description: 'Choose colors (4-color) and typography (4-font) for your landing page',
  },
  shell: {
    icon: PanelLeft,
    title: 'No shell designed yet',
    command: '/design-shell',
    description: 'Design the navbar and footer',
  },
  seo: {
    icon: Search,
    title: 'No SEO configured yet',
    command: '/seo-config',
    description: 'Define meta tags, Open Graph, schema markup, and keywords',
  },
  screenshots: {
    icon: Image,
    title: 'No screenshots captured yet',
    command: '/screenshot-section',
    description: 'Capture screenshots of your section designs for documentation',
  },
  export: {
    icon: Package,
    title: 'Ready to export',
    command: '/export-landing',
    description: 'Generate the complete handoff package',
  },
}

export function EmptyState({ type }: EmptyStateProps) {
  const { icon: Icon, title, command, description } = config[type]

  return (
    <Card className="border-stone-200 dark:border-stone-700 shadow-sm border-dashed">
      <CardContent className="py-8">
        <div className="flex flex-col items-center text-center max-w-sm mx-auto">
          <div className="w-10 h-10 rounded-full bg-stone-100 dark:bg-stone-800 flex items-center justify-center mb-3">
            <Icon className="w-5 h-5 text-stone-400 dark:text-stone-500" strokeWidth={1.5} />
          </div>
          <h3 className="text-base font-medium text-stone-600 dark:text-stone-400 mb-1">
            {title}
          </h3>
          <p className="text-sm text-stone-500 dark:text-stone-400 mb-4">
            {description}
          </p>
          <div className="bg-stone-100 dark:bg-stone-800 rounded-md px-4 py-2.5 w-full">
            <p className="text-xs text-stone-500 dark:text-stone-400 mb-0.5">
              Run in Claude Code:
            </p>
            <code className="text-sm font-mono text-stone-700 dark:text-stone-300">
              {command}
            </code>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
