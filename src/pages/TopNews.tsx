import { useQuery } from '@tanstack/react-query'
import { Params, useParams } from 'react-router-dom'
import { type QueryClient } from '@tanstack/react-query'

import { api } from '@/api/getNews'

const topNewSectionQuery = (section: string) => ({
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

export const loader =
  (queryClient: QueryClient) =>
  async ({ params }: { params: Params<string> }) => {
    const query = topNewSectionQuery(params.section!)

    return queryClient.getQueriesData(query) ?? (await queryClient.fetchQuery(query))
  }

export const TopNews = () => {
  const params = useParams()
  const { data: topNews, isLoading } = useQuery(topNewSectionQuery(params.section!))

  console.log(topNews)

  return <>{isLoading ? <div>cargando...</div> : <div>Top News {params.section}</div>}</>
}
