import { createStore } from 'effector'
import { fetchFilmGenresFX, fetchTvShowsGenresFX } from './effects'
import { GenresStore } from './interfaces'

export const $genresStore = createStore<GenresStore>({
  filmGenres: [],
  tvShowGenres: [],
})

$genresStore.on(fetchFilmGenresFX.doneData, (state, payload) => ({
  ...state,
  filmGenres: payload.genres,
}))

$genresStore.on(fetchTvShowsGenresFX.doneData, (state, payload) => ({
  ...state,
  tvShowGenres: payload.genres,
}))
