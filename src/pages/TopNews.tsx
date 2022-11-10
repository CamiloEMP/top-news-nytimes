import { useQuery } from '@tanstack/react-query'
import { useParams } from 'react-router-dom'

import { topNewSectionQuery } from '@/services/getTopNews'

export const TopNews = () => {
  const params = useParams()
  const { data: topNews, isLoading } = useQuery(topNewSectionQuery(params.section!))

  console.log(topNews)

  return <>{isLoading ? <div>cargando...</div> : <div>Top News {params.section}</div>}</>
}
