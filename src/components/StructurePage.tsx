import { useMemo } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { AppLayout } from '@/components/AppLayout'
import { EmptyState } from '@/components/EmptyState'
import { NextPhaseButton } from '@/components/NextPhaseButton'
import { loadLandingData } from '@/lib/landing-loader'
import { ChevronRight } from 'lucide-react'

export function StructurePage() {
  const navigate = useNavigate()
  const landingData = useMemo(() => loadLandingData(), [])
  const structure = landingData.structure

  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-stone-900 dark:text-stone-100 mb-2">
            Page Structure
          </h1>
          <p className="text-stone-600 dark:text-stone-400">
            The ordered layout of sections on your landing page.
          </p>
        </div>

        {!structure ? (
          <EmptyState type="structure" />
        ) : (
          <Card className="border-stone-200 dark:border-stone-700 shadow-sm">
            <CardHeader className="pb-2">
              <CardTitle className="text-lg font-semibold text-stone-900 dark:text-stone-100">
                All Sections ({structure.sections.length})
              </CardTitle>
            </CardHeader>
            <CardContent className="p-0">
              <ul className="divide-y divide-stone-200 dark:divide-stone-700">
                {structure.sections.map((section) => (
                  <li key={section.id}>
                    <button
                      onClick={() => navigate(`/sections/${section.id}`)}
                      className="w-full px-6 py-4 flex items-center justify-between gap-4 text-left hover:bg-stone-50 dark:hover:bg-stone-800/50 transition-colors"
                    >
                      <div className="flex items-start gap-4 min-w-0">
                        <div className="w-6 h-6 rounded-full bg-stone-200 dark:bg-stone-700 flex items-center justify-center shrink-0 mt-0.5">
                          <span className="text-xs font-medium text-stone-600 dark:text-stone-400">
                            {section.order}
                          </span>
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="font-medium text-stone-900 dark:text-stone-100 truncate">
                            {section.title}
                          </h3>
                          <p className="text-sm text-stone-500 dark:text-stone-400 mt-0.5 line-clamp-1">
                            {section.description}
                          </p>
                        </div>
                        <span className="text-xs px-2 py-1 bg-stone-100 dark:bg-stone-800 rounded text-stone-500 dark:text-stone-400 shrink-0">
                          {section.type}
                        </span>
                      </div>
                      <ChevronRight className="w-4 h-4 text-stone-400 dark:text-stone-500 flex-shrink-0" strokeWidth={1.5} />
                    </button>
                  </li>
                ))}
              </ul>
            </CardContent>
          </Card>
        )}

        {structure && (
          <NextPhaseButton nextPhase="design" />
        )}
      </div>
    </AppLayout>
  )
}
