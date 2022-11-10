import { createBrowserRouter } from 'react-router-dom'
import { QueryClient } from '@tanstack/react-query'

import { Home } from '@/pages/Home'
import { MainLayout } from '@/MainLayout'
import { topNewsSectionLoader } from '@/services/getTopNews'
import { TopStories, TopStoriesSection } from '@/pages/TopStories'

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
        path: 'top-stories',
        element: <TopStories />,
      },
      {
        path: 'top-stories/:section',
        element: <TopStoriesSection />,
        loader: topNewsSectionLoader(queryClient),
      },
    ],
  },
])
