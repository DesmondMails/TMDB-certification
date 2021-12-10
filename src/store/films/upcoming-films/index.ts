import { createStore } from 'effector'
import { fetchUpcomingFilmsFX } from './effects'
import { UpcomingFilms } from './interfaces'

export const $upcomingFilms = createStore<UpcomingFilms>({
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
  dates: {
    maximum: '',
    minimum: '',
  },
})

$upcomingFilms.on(fetchUpcomingFilmsFX.doneData, (state, payload: any) => ({
  page: payload.page,
  results: payload.results,
  total_pages: payload.total_pages,
  total_results: payload.total_results,
  dates: payload.dates,
}))
