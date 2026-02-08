import { useState, useEffect, useMemo, Suspense } from 'react'
import { useParams } from 'react-router-dom'
import { AppLayout } from '@/components/AppLayout'
import { loadDesignComponent } from '@/lib/section-loader'
import { loadLandingData } from '@/lib/landing-loader'
import type { ComponentType } from 'react'

export function SectionDesignPage() {
  const { sectionId, designName } = useParams<{ sectionId: string; designName: string }>()
  const [Component, setComponent] = useState<ComponentType | null>(null)
  const [error, setError] = useState<string | null>(null)

  const landingData = useMemo(() => loadLandingData(), [])
  const section = landingData.structure?.sections.find(s => s.id === sectionId)

  useEffect(() => {
    if (!sectionId || !designName) return

    const loader = loadDesignComponent(sectionId, designName)
    if (!loader) {
      setError(`Design component not found: ${designName}`)
      return
    }

    loader()
      .then(mod => setComponent(() => mod.default))
      .catch(() => setError(`Failed to load component: ${designName}`))
  }, [sectionId, designName])

  return (
    <AppLayout
      backTo={`/sections/${sectionId}`}
      backLabel={section?.title || 'Section'}
      title={designName}
    >
      <div className="space-y-6">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-stone-900 dark:text-stone-100 mb-2">
            {designName}
          </h1>
          <p className="text-stone-600 dark:text-stone-400">
            Section design preview for {section?.title || sectionId}
          </p>
        </div>

        <div className="border border-stone-200 dark:border-stone-700 rounded-lg overflow-hidden bg-white dark:bg-stone-900">
          {error ? (
            <div className="p-8 text-center text-stone-500 dark:text-stone-400">
              {error}
            </div>
          ) : Component ? (
            <Suspense fallback={
              <div className="p-8 text-center text-stone-500 dark:text-stone-400">
                Loading design...
              </div>
            }>
              <Component />
            </Suspense>
          ) : (
            <div className="p-8 text-center text-stone-500 dark:text-stone-400">
              Loading design...
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  )
}
