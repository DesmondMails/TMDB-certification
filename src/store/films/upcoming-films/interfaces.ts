import { FilmsInterface } from '../shared/shared-interfaces'

export interface UpcomingFilms {
  page: number
  results: FilmsInterface[]
  dates: DatesUpcoming
  total_results: number
  total_pages: number
}

export interface DatesUpcoming {
  maximum: string
  minimum: string
}
