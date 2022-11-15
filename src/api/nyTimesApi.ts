import { API_KEY } from './config'

import { ResponseTopStories } from '@/types/topStories.types'

class NyTimesApi {
  private apiUrl: string
  private apiKey: string

  constructor(apiUrl: string, apiKey: string) {
    this.apiUrl = apiUrl
    this.apiKey = apiKey
  }

  async getTopStories(section: string) {
    const response = await fetch(
      `${this.apiUrl}/topstories/v2/${section}.json?api-key=${this.apiKey}`
    )

    const data: ResponseTopStories = await response.json()

    return data ?? null
  }
}

export const api = new NyTimesApi('https://api.nytimes.com/svc', API_KEY)
