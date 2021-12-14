export interface FilmsRequest {
  language?: string
  region?: string
  page?: number
}
export interface RequestParams {
  id?: number
  language?: string
  region?: string
  page?: number
  query?: string
  ['primary_release_date.gte']?: string
  ['primary_release_date.lte']?: string
  with_genres?: string
}
