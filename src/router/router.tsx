import { createBrowserRouter } from 'react-router-dom'
import { QueryClient } from '@tanstack/react-query'

import { Home } from '@/pages/Home'
import { MainLayout } from '@/MainLayout'
import { topStoriesSectionLoader } from '@/services/getTopStories'
import { TopStoriesLayout } from '@/layouts/TopStoriesLayout'
import { TopStoriesSection } from '@/pages/TopStoriesSection'

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 10000 * 10,
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
            loader: topStoriesSectionLoader(queryClient),
            index: true,
          },
        ],
      },
    ],
  },
])
