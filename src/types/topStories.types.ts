export interface ITopStories {
  abstract: string
  byline: string
  created_date: string
  des_facet: string[]
  geo_facet: string[]
  item_type: string
  kicker: string
  material_type_facet: string
  multimedia: {
    url: string
    caption: string
    copyright: string
  }[]
  org_facet: string
  per_facet: string[]
  published_date: string
  section: string
  short_url: string
  subsection: string
  title: string
  updated_date: string
  uri: string
  url: string
}

export interface ResponseTopStories {
  copyright: string
  last_updated: string
  num_results: number
  results: ITopStories[]
  section: string
  status: string
}
