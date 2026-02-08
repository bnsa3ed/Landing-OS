import { useMemo } from 'react'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { AppLayout } from '@/components/AppLayout'
import { EmptyState } from '@/components/EmptyState'
import { StepIndicator, type StepStatus } from '@/components/StepIndicator'
import { NextPhaseButton } from '@/components/NextPhaseButton'
import { loadLandingData } from '@/lib/landing-loader'

function getStepStatuses(hasOverview: boolean, hasStructure: boolean): StepStatus[] {
  const statuses: StepStatus[] = []

  // Step 1: Landing Vision
  statuses.push(hasOverview ? 'completed' : 'current')

  // Step 2: Page Structure
  if (hasStructure) statuses.push('completed')
  else if (hasOverview) statuses.push('current')
  else statuses.push('upcoming')

  return statuses
}

export function VisionPage() {
  const landingData = useMemo(() => loadLandingData(), [])

  const hasOverview = !!landingData.overview
  const hasStructure = !!landingData.structure
  const allComplete = hasOverview && hasStructure

  const stepStatuses = getStepStatuses(hasOverview, hasStructure)

  return (
    <AppLayout>
      <div className="space-y-6">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-stone-900 dark:text-stone-100 mb-2">
            Landing Page Vision
          </h1>
          <p className="text-stone-600 dark:text-stone-400">
            Define your brand, audience, and value proposition. Then plan the section layout.
          </p>
        </div>

        {/* Step 1: Landing Vision */}
        <StepIndicator step={1} status={stepStatuses[0]}>
          {landingData.overview ? (
            <Card className="border-stone-200 dark:border-stone-700 shadow-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg font-semibold text-stone-900 dark:text-stone-100">
                  {landingData.overview.name}
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {landingData.overview.description && (
                  <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
                    {landingData.overview.description}
                  </p>
                )}

                {landingData.overview.audience && (
                  <div>
                    <h4 className="text-sm font-medium text-stone-500 dark:text-stone-400 uppercase tracking-wide mb-1">
                      Target Audience
                    </h4>
                    <p className="text-stone-700 dark:text-stone-300">
                      {landingData.overview.audience}
                    </p>
                  </div>
                )}

                {landingData.overview.valueProposition && (
                  <div>
                    <h4 className="text-sm font-medium text-stone-500 dark:text-stone-400 uppercase tracking-wide mb-1">
                      Value Proposition
                    </h4>
                    <p className="text-stone-700 dark:text-stone-300">
                      {landingData.overview.valueProposition}
                    </p>
                  </div>
                )}

                {landingData.overview.tone && (
                  <div>
                    <h4 className="text-sm font-medium text-stone-500 dark:text-stone-400 uppercase tracking-wide mb-1">
                      Tone of Voice
                    </h4>
                    <p className="text-stone-700 dark:text-stone-300">
                      {landingData.overview.tone}
                    </p>
                  </div>
                )}

                {landingData.overview.features.length > 0 && (
                  <div>
                    <h4 className="text-sm font-medium text-stone-500 dark:text-stone-400 uppercase tracking-wide mb-2">
                      Key Features
                    </h4>
                    <ul className="space-y-1">
                      {landingData.overview.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2 text-stone-700 dark:text-stone-300">
                          <span className="w-1 h-1 rounded-full bg-stone-400 dark:bg-stone-500 mt-2 shrink-0" />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

                {landingData.overview.competitors.length > 0 && (
                  <div>
                    <h4 className="text-sm font-medium text-stone-500 dark:text-stone-400 uppercase tracking-wide mb-2">
                      Competitors
                    </h4>
                    <div className="flex flex-wrap gap-2">
                      {landingData.overview.competitors.map((comp, i) => (
                        <span key={i} className="px-2 py-1 bg-stone-100 dark:bg-stone-800 rounded text-sm text-stone-700 dark:text-stone-300">
                          {comp}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="bg-stone-100 dark:bg-stone-800 rounded-md px-4 py-2.5">
                  <p className="text-xs text-stone-500 dark:text-stone-400">
                    Run <code className="font-mono text-stone-700 dark:text-stone-300">/landing-vision</code> to update
                  </p>
                </div>
              </CardContent>
            </Card>
          ) : (
            <EmptyState type="overview" />
          )}
        </StepIndicator>

        {/* Step 2: Page Structure */}
        <StepIndicator step={2} status={stepStatuses[1]} isLast={!allComplete}>
          {landingData.structure ? (
            <Card className="border-stone-200 dark:border-stone-700 shadow-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg font-semibold text-stone-900 dark:text-stone-100">
                  Page Structure
                  <span className="ml-2 text-sm font-normal text-stone-500 dark:text-stone-400">
                    ({landingData.structure.sections.length} sections)
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <ul className="divide-y divide-stone-200 dark:divide-stone-700">
                  {landingData.structure.sections.map((section) => (
                    <li key={section.id} className="px-6 py-3 flex items-center gap-4">
                      <div className="w-6 h-6 rounded-full bg-stone-200 dark:bg-stone-700 flex items-center justify-center shrink-0">
                        <span className="text-xs font-medium text-stone-600 dark:text-stone-400">
                          {section.order}
                        </span>
                      </div>
                      <div className="min-w-0 flex-1">
                        <h3 className="font-medium text-stone-900 dark:text-stone-100">
                          {section.title}
                        </h3>
                        <p className="text-sm text-stone-500 dark:text-stone-400 line-clamp-1">
                          {section.description}
                        </p>
                      </div>
                      <span className="text-xs px-2 py-1 bg-stone-100 dark:bg-stone-800 rounded text-stone-500 dark:text-stone-400 shrink-0">
                        {section.type}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ) : (
            <EmptyState type="structure" />
          )}
        </StepIndicator>

        {/* Next Phase */}
        {allComplete && (
          <StepIndicator step={3} status="current" isLast>
            <NextPhaseButton nextPhase="design" />
          </StepIndicator>
        )}
      </div>
    </AppLayout>
  )
}
