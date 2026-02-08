import { useMemo } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { AppLayout } from '@/components/AppLayout'
import { EmptyState } from '@/components/EmptyState'
import { StepIndicator } from '@/components/StepIndicator'
import { NextPhaseButton } from '@/components/NextPhaseButton'
import { loadLandingData } from '@/lib/landing-loader'

export function SeoPage() {
  const landingData = useMemo(() => loadLandingData(), [])
  const seo = landingData.seo

  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-stone-900 dark:text-stone-100 mb-2">
            SEO Configuration
          </h1>
          <p className="text-stone-600 dark:text-stone-400">
            Meta tags, Open Graph, schema markup, and keyword strategy for your landing page.
          </p>
        </div>

        <StepIndicator step={1} status={seo ? 'completed' : 'current'} isLast={!seo}>
          {!seo ? (
            <EmptyState type="seo" />
          ) : (
            <Card className="border-stone-200 dark:border-stone-700 shadow-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg font-semibold text-stone-900 dark:text-stone-100">
                  SEO Settings
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {seo.title && (
                  <div>
                    <h4 className="text-sm font-medium text-stone-500 dark:text-stone-400 uppercase tracking-wide mb-1">
                      Title Tag
                    </h4>
                    <p className="text-stone-700 dark:text-stone-300 font-medium">
                      {seo.title}
                    </p>
                  </div>
                )}

                {seo.metaDescription && (
                  <div>
                    <h4 className="text-sm font-medium text-stone-500 dark:text-stone-400 uppercase tracking-wide mb-1">
                      Meta Description
                    </h4>
                    <p className="text-stone-600 dark:text-stone-400 text-sm leading-relaxed">
                      {seo.metaDescription}
                    </p>
                    <p className="text-xs text-stone-400 dark:text-stone-500 mt-1">
                      {seo.metaDescription.length}/160 characters
                    </p>
                  </div>
                )}

                {seo.keywords.length > 0 && (
                  <div>
                    <h4 className="text-sm font-medium text-stone-500 dark:text-stone-400 uppercase tracking-wide mb-2">
                      Keywords
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {seo.keywords.map((keyword, i) => (
                        <span key={i} className="px-2 py-1 bg-stone-100 dark:bg-stone-800 rounded text-sm text-stone-700 dark:text-stone-300">
                          {keyword}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="bg-stone-100 dark:bg-stone-800 rounded-md px-4 py-2.5">
                  <p className="text-xs text-stone-500 dark:text-stone-400">
                    Run <code className="font-mono text-stone-700 dark:text-stone-300">/seo-config</code> to update
                  </p>
                </div>
              </CardContent>
            </Card>
          )}
        </StepIndicator>

        {seo && (
          <StepIndicator step={2} status="current" isLast>
            <NextPhaseButton nextPhase="export" />
          </StepIndicator>
        )}
      </div>
    </AppLayout>
  )
}
