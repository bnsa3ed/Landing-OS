import { useState, useEffect, Suspense } from 'react'
import { AppLayout } from '@/components/AppLayout'
import { loadShellPreview } from '@/lib/shell-loader'
import type { ComponentType } from 'react'

export function ShellDesignPage() {
  const [Component, setComponent] = useState<ComponentType | null>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    const loader = loadShellPreview()
    if (!loader) {
      setError('Shell preview component not found. Create src/shell/ShellPreview.tsx')
      return
    }

    loader()
      .then(mod => setComponent(() => mod.default))
      .catch(() => setError('Failed to load shell preview component'))
  }, [])

  return (
    <AppLayout backTo="/design" backLabel="Design System" title="Shell Design">
      <div className="space-y-6">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-stone-900 dark:text-stone-100 mb-2">
            Shell Design
          </h1>
          <p className="text-stone-600 dark:text-stone-400">
            Preview of the navbar and footer wrapping your landing page.
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
                Loading shell preview...
              </div>
            }>
              <Component />
            </Suspense>
          ) : (
            <div className="p-8 text-center text-stone-500 dark:text-stone-400">
              Loading shell preview...
            </div>
          )}
        </div>
      </div>
    </AppLayout>
  )
}
