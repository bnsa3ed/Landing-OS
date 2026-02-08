import { createBrowserRouter } from 'react-router-dom'
import { VisionPage } from '@/components/VisionPage'
import { StructurePage } from '@/components/StructurePage'
import { DesignPage } from '@/components/DesignPage'
import { SectionsPage } from '@/components/SectionsPage'
import { SectionPage } from '@/components/SectionPage'
import { SectionDesignPage } from '@/components/SectionDesignPage'
import { ShellDesignPage } from '@/components/ShellDesignPage'
import { SeoPage } from '@/components/SeoPage'
import { ExportPage } from '@/components/ExportPage'

export const router = createBrowserRouter([
  { path: '/', element: <VisionPage /> },
  { path: '/structure', element: <StructurePage /> },
  { path: '/design', element: <DesignPage /> },
  { path: '/shell/design', element: <ShellDesignPage /> },
  { path: '/sections', element: <SectionsPage /> },
  { path: '/sections/:sectionId', element: <SectionPage /> },
  { path: '/sections/:sectionId/designs/:designName', element: <SectionDesignPage /> },
  { path: '/seo', element: <SeoPage /> },
  { path: '/export', element: <ExportPage /> },
])
