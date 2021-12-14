import { createStore } from 'effector'
import { SearchPageStore } from '../search/interfaces'
import { discoverMoviesFX, discoverTvShowsFX } from './effects'
import { cleanDiscoverStoreEvent } from './events'

export const $discoverStore = createStore<SearchPageStore>({
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

$discoverStore.on(discoverMoviesFX.doneData, (state, payload) => ({
  films: { ...payload },
  tvShows: {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  },
}))
$discoverStore.on(discoverTvShowsFX.doneData, (state, payload) => ({
  tvShows: { ...payload },
  films: {
    page: 0,
    results: [],
    total_pages: 0,
    total_results: 0,
  },
}))

$discoverStore.on(cleanDiscoverStoreEvent, (state, payload) => ({
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
