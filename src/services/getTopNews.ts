import { QueryClient } from '@tanstack/react-query'
import { Params } from 'react-router-dom'

import { api } from '@/api/nyTimesApi'

export const topNewSectionQuery = (section: string) => ({
  queryKey: ['top-news', 'section', section],
  queryFn: async () => {
    const topNews = await api.getTopNews(section)

    if (!topNews) {
      throw new Response('', {
        status: 404,
        statusText: 'Not Found',
      })
    }

    return topNews
  },
})

export const topNewsSectionLoader =
  (queryClient: QueryClient) =>
  async ({ params }: { params: Params<string> }) => {
    const query = topNewSectionQuery(params.section!)

    return queryClient.getQueriesData(query) ?? (await queryClient.fetchQuery(query))
  }
