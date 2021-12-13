import { createStore } from 'effector'
import { FilmsStore } from '../shared/shared-interfaces'
import { fetchPopularFilmsFX } from './effects'

export const $popularFilmsStore = createStore<FilmsStore>({
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
})

$popularFilmsStore.on(fetchPopularFilmsFX.doneData, (state, payload: any) => ({
  page: payload.page,
  results: [...state.results, ...payload.results],
  total_pages: payload.total_pages,
  total_results: payload.total_results,
}))
