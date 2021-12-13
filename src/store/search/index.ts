import { createStore } from 'effector'
import { searchMoviesFX, searchTvShowsFX } from './effects'
import { cleanSearchStoreEvent } from './events'
import { SearchPageStore } from './interfaces'

export const $searchStore = createStore<SearchPageStore>({
  films: {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  },
  tvShows: {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  },
})

$searchStore.on(searchMoviesFX.doneData, (state, payload) => ({
  ...state,
  films: { ...payload },
}))
$searchStore.on(searchTvShowsFX.doneData, (state, payload) => ({
  ...state,
  tvShows: { ...payload },
}))
$searchStore.on(cleanSearchStoreEvent, (state, payload) => ({
  films: {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  },
  tvShows: {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  },
}))
