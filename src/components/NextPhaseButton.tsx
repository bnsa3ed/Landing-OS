import { useNavigate } from 'react-router-dom'
import { LayoutList, Palette, LayoutGrid, Search, Package, ArrowRight } from 'lucide-react'
import type { Phase } from './PhaseNav'

interface NextPhaseButtonProps {
  nextPhase: Exclude<Phase, 'vision'>
}

const phaseConfig: Record<Exclude<Phase, 'vision'>, { label: string; icon: typeof LayoutList; path: string }> = {
  'structure': { label: 'Page Structure', icon: LayoutList, path: '/structure' },
  'design': { label: 'Design System', icon: Palette, path: '/design' },
  'sections': { label: 'Sections', icon: LayoutGrid, path: '/sections' },
  'seo': { label: 'SEO', icon: Search, path: '/seo' },
  'export': { label: 'Export', icon: Package, path: '/export' },
}

export function NextPhaseButton({ nextPhase }: NextPhaseButtonProps) {
  const navigate = useNavigate()
  const config = phaseConfig[nextPhase]
  const Icon = config.icon

  return (
    <button
      onClick={() => navigate(config.path)}
      className="w-full flex items-center justify-between gap-4 px-6 py-4 bg-stone-900 dark:bg-stone-100 text-stone-100 dark:text-stone-900 rounded-lg hover:bg-stone-800 dark:hover:bg-stone-200 transition-colors group"
    >
      <div className="flex items-center gap-3">
        <Icon className="w-5 h-5" strokeWidth={1.5} />
        <span className="font-medium">Continue to {config.label}</span>
      </div>
      <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
    </button>
  )
}
