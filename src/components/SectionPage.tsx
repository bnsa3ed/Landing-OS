import { useMemo } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { AppLayout } from '@/components/AppLayout'
import { EmptyState } from '@/components/EmptyState'
import { StepIndicator, type StepStatus } from '@/components/StepIndicator'
import { loadLandingData } from '@/lib/landing-loader'
import { loadSectionData } from '@/lib/section-loader'
import { ChevronRight, Layout, Download, ArrowRight, LayoutList } from 'lucide-react'

function getStepStatuses(hasSpec: boolean, hasData: boolean, hasDesigns: boolean, hasScreenshots: boolean): StepStatus[] {
  const steps = [hasSpec, hasData, hasDesigns, hasScreenshots]
  const firstIncomplete = steps.findIndex(done => !done)

  return steps.map((done, index) => {
    if (done) return 'completed'
    if (index === firstIncomplete) return 'current'
    return 'upcoming'
  })
}

export function SectionPage() {
  const { sectionId } = useParams<{ sectionId: string }>()
  const navigate = useNavigate()

  const landingData = useMemo(() => loadLandingData(), [])
  const sections = landingData.structure?.sections || []
  const section = sections.find(s => s.id === sectionId)
  const currentIndex = sections.findIndex(s => s.id === sectionId)

  const sectionData = useMemo(
    () => (sectionId ? loadSectionData(sectionId) : null),
    [sectionId]
  )

  if (!section) {
    return (
      <AppLayout backTo="/sections" backLabel="Sections">
        <div className="text-center py-12">
          <p className="text-stone-600 dark:text-stone-400">
            Section not found: {sectionId}
          </p>
        </div>
      </AppLayout>
    )
  }

  const hasSpec = !!sectionData?.specParsed
  const hasData = !!sectionData?.data
  const hasDesigns = !!(sectionData?.designs && sectionData.designs.length > 0)
  const hasScreenshots = !!(sectionData?.screenshots && sectionData.screenshots.length > 0)

  const stepStatuses = getStepStatuses(hasSpec, hasData, hasDesigns, hasScreenshots)
  const requiredComplete = hasSpec && hasData && hasDesigns

  const isLastSection = currentIndex === sections.length - 1 || currentIndex === -1
  const nextSection = !isLastSection ? sections[currentIndex + 1] : null

  return (
    <AppLayout backTo="/sections" backLabel="Sections" title={section.title}>
      <div className="space-y-6">
        <div className="mb-8">
          <h1 className="text-2xl font-semibold text-stone-900 dark:text-stone-100 mb-2">
            {section.title}
          </h1>
          <p className="text-stone-600 dark:text-stone-400">
            {section.description}
          </p>
          <span className="inline-block mt-2 text-xs px-2 py-1 bg-stone-100 dark:bg-stone-800 rounded text-stone-500 dark:text-stone-400">
            {section.type}
          </span>
        </div>

        {/* Step 1: Section Spec */}
        <StepIndicator step={1} status={stepStatuses[0]}>
          {!sectionData?.specParsed ? (
            <EmptyState type="spec" />
          ) : (
            <Card className="border-stone-200 dark:border-stone-700 shadow-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg font-semibold text-stone-900 dark:text-stone-100">
                  Section Spec
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-3">
                {sectionData.specParsed.overview && (
                  <p className="text-stone-600 dark:text-stone-400 leading-relaxed">
                    {sectionData.specParsed.overview}
                  </p>
                )}
                {sectionData.specParsed.layoutPattern && (
                  <div>
                    <h4 className="text-sm font-medium text-stone-500 dark:text-stone-400 uppercase tracking-wide mb-1">Layout</h4>
                    <p className="text-stone-700 dark:text-stone-300">{sectionData.specParsed.layoutPattern}</p>
                  </div>
                )}
                {sectionData.specParsed.copyRequirements.length > 0 && (
                  <div>
                    <h4 className="text-sm font-medium text-stone-500 dark:text-stone-400 uppercase tracking-wide mb-1">Copy Requirements</h4>
                    <ul className="space-y-1">
                      {sectionData.specParsed.copyRequirements.map((req, i) => (
                        <li key={i} className="flex items-center gap-2 text-stone-700 dark:text-stone-300 text-sm">
                          <span className="w-1 h-1 rounded-full bg-stone-400 dark:bg-stone-500" />
                          {req}
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
                <div className="bg-stone-100 dark:bg-stone-800 rounded-md px-4 py-2.5">
                  <p className="text-xs text-stone-500 dark:text-stone-400">
                    Run <code className="font-mono text-stone-700 dark:text-stone-300">/shape-section</code> to update
                  </p>
                </div>
              </CardContent>
            </Card>
          )}
        </StepIndicator>

        {/* Step 2: Content / Data */}
        <StepIndicator step={2} status={stepStatuses[1]}>
          {!sectionData?.data ? (
            <EmptyState type="content" />
          ) : (
            <Card className="border-stone-200 dark:border-stone-700 shadow-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg font-semibold text-stone-900 dark:text-stone-100">
                  Content & Copy
                </CardTitle>
              </CardHeader>
              <CardContent>
                <pre className="text-xs text-stone-600 dark:text-stone-400 bg-stone-50 dark:bg-stone-800/50 rounded-md p-4 overflow-x-auto max-h-64 overflow-y-auto">
                  {JSON.stringify(sectionData.data, null, 2)}
                </pre>
                <div className="mt-4 bg-stone-100 dark:bg-stone-800 rounded-md px-4 py-2.5">
                  <p className="text-xs text-stone-500 dark:text-stone-400">
                    Run <code className="font-mono text-stone-700 dark:text-stone-300">/section-content</code> to update
                  </p>
                </div>
              </CardContent>
            </Card>
          )}
        </StepIndicator>

        {/* Step 3: Designs */}
        <StepIndicator step={3} status={stepStatuses[2]}>
          {!sectionData?.designs || sectionData.designs.length === 0 ? (
            <EmptyState type="designs" />
          ) : (
            <Card className="border-stone-200 dark:border-stone-700 shadow-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg font-semibold text-stone-900 dark:text-stone-100">
                  Section Designs
                  <span className="ml-2 text-sm font-normal text-stone-500 dark:text-stone-400">
                    ({sectionData.designs.length})
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent className="p-0">
                <ul className="divide-y divide-stone-200 dark:divide-stone-700">
                  {sectionData.designs.map((design) => (
                    <li key={design.name}>
                      <Link
                        to={`/sections/${sectionId}/designs/${design.name}`}
                        className="flex items-center justify-between gap-4 px-6 py-4 hover:bg-stone-50 dark:hover:bg-stone-800/50 transition-colors"
                      >
                        <div className="flex items-center gap-3 min-w-0">
                          <div className="w-8 h-8 rounded-md bg-stone-200 dark:bg-stone-700 flex items-center justify-center shrink-0">
                            <Layout className="w-4 h-4 text-stone-600 dark:text-stone-300" strokeWidth={1.5} />
                          </div>
                          <span className="font-medium text-stone-900 dark:text-stone-100 truncate">
                            {design.name}
                          </span>
                        </div>
                        <ChevronRight className="w-4 h-4 text-stone-400 dark:text-stone-500 shrink-0" strokeWidth={1.5} />
                      </Link>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          )}
        </StepIndicator>

        {/* Step 4: Screenshots */}
        <StepIndicator step={4} status={stepStatuses[3]} isLast={!requiredComplete}>
          {!hasScreenshots ? (
            <EmptyState type="screenshots" />
          ) : (
            <Card className="border-stone-200 dark:border-stone-700 shadow-sm">
              <CardHeader className="pb-4">
                <CardTitle className="text-lg font-semibold text-stone-900 dark:text-stone-100">
                  Screenshots
                  <span className="ml-2 text-sm font-normal text-stone-500 dark:text-stone-400">
                    ({sectionData!.screenshots.length})
                  </span>
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-2 gap-4">
                  {sectionData!.screenshots.map((screenshot) => (
                    <div key={screenshot.name} className="group">
                      <div className="aspect-video rounded-lg overflow-hidden bg-stone-100 dark:bg-stone-800 border border-stone-200 dark:border-stone-700">
                        <img
                          src={screenshot.url}
                          alt={screenshot.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="mt-2 flex items-center justify-between gap-2">
                        <p className="text-sm text-stone-600 dark:text-stone-400 truncate">
                          {screenshot.name}
                        </p>
                        <a
                          href={screenshot.url}
                          download={`${screenshot.name}.png`}
                          className="shrink-0 p-1.5 rounded-md text-stone-400 hover:text-stone-600 dark:text-stone-500 dark:hover:text-stone-300 hover:bg-stone-100 dark:hover:bg-stone-800 transition-colors"
                        >
                          <Download className="w-4 h-4" strokeWidth={1.5} />
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          )}
        </StepIndicator>

        {/* Next Step */}
        {requiredComplete && (
          <StepIndicator step={5} status="current" isLast>
            <div className="space-y-3">
              {nextSection ? (
                <>
                  <button
                    onClick={() => navigate(`/sections/${nextSection.id}`)}
                    className="w-full flex items-center justify-between gap-4 px-6 py-4 bg-stone-900 dark:bg-stone-100 text-stone-100 dark:text-stone-900 rounded-lg hover:bg-stone-800 dark:hover:bg-stone-200 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <ArrowRight className="w-5 h-5" strokeWidth={1.5} />
                      <span className="font-medium">Continue to {nextSection.title}</span>
                    </div>
                    <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
                  </button>
                  <button
                    onClick={() => navigate('/sections')}
                    className="w-full flex items-center justify-between gap-4 px-6 py-4 bg-stone-100 dark:bg-stone-800 text-stone-700 dark:text-stone-300 rounded-lg hover:bg-stone-200 dark:hover:bg-stone-700 transition-colors group"
                  >
                    <div className="flex items-center gap-3">
                      <LayoutList className="w-5 h-5" strokeWidth={1.5} />
                      <span className="font-medium">View All Sections</span>
                    </div>
                    <ChevronRight className="w-5 h-5 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
                  </button>
                </>
              ) : (
                <button
                  onClick={() => navigate('/sections')}
                  className="w-full flex items-center justify-between gap-4 px-6 py-4 bg-stone-900 dark:bg-stone-100 text-stone-100 dark:text-stone-900 rounded-lg hover:bg-stone-800 dark:hover:bg-stone-200 transition-colors group"
                >
                  <div className="flex items-center gap-3">
                    <LayoutList className="w-5 h-5" strokeWidth={1.5} />
                    <span className="font-medium">Back to All Sections</span>
                  </div>
                  <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" strokeWidth={1.5} />
                </button>
              )}
            </div>
          </StepIndicator>
        )}
      </div>
    </AppLayout>
  )
}
