import { createStore } from 'effector'
import { FilmsStore } from '@store/films/shared/shared-interfaces'
import { fetchTopRatedFilmsFX } from './effects'

export const $topRatedFilmsStore = createStore<FilmsStore>({
  page: 0,
  results: [],
  total_pages: 0,
  total_results: 0,
})

$topRatedFilmsStore.on(
  fetchTopRatedFilmsFX.doneData,
  (state, payload: any) => ({
    page: payload.page,
    results: [state.results, ...payload.results],
    total_pages: payload.total_pages,
    total_results: payload.total_results,
  })
)
