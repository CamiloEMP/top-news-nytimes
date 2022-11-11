import { createBrowserRouter } from 'react-router-dom'
import { QueryClient } from '@tanstack/react-query'

import { Home } from '@/pages/Home'
import { MainLayout } from '@/MainLayout'
import { topNewsSectionLoader } from '@/services/getTopNews'
import { TopStoriesLayout } from '@/layouts/TopStoriesLayout'
import { TopStoriesSection } from '@/pages/TopStoriesSection'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 10,
    },
  },
})

export const router = createBrowserRouter([
  {
    element: <MainLayout />,
    path: '/',
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        element: <TopStoriesLayout />,
        errorElement: <h2>Al parecer hubo un problema</h2>,
        children: [
          {
            path: '/top-stories/:section',
            element: <TopStoriesSection />,
            loader: topNewsSectionLoader(queryClient),
            index: true,
          },
        ],
      },
    ],
  },
])
