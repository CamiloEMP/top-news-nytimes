import { API_KEY } from './config'

class NyTimesApi {
  private apiUrl: string
  private apiKey: string

  constructor(apiUrl: string, apiKey: string) {
    this.apiUrl = apiUrl
    this.apiKey = apiKey
  }

  async getTopNews(section: string) {
    const response = await fetch(
      `${this.apiUrl}/topstories/v2/${section}.json?api-key=${this.apiKey}`
    )

    return (await response.json()) ?? null
  }
}

export const api = new NyTimesApi('https://api.nytimes.com/svc', API_KEY)
