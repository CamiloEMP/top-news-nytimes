import { createBrowserRouter } from 'react-router-dom'
import { QueryClient } from '@tanstack/react-query'

import { Home } from '@/pages/Home'
import { MainLayout } from '@/MainLayout'
import { loader as topNewsSectionLoader, TopNews } from '@/pages/TopNews'

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
        path: 'about',
        element: <h1>About</h1>,
      },
      {
        path: 'top-news/:section',
        element: <TopNews />,
        loader: topNewsSectionLoader(queryClient),
      },
    ],
  },
])
