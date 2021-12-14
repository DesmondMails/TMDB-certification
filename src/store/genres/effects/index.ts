import { fetchListsFX } from '@/store/shared/effects'

export const fetchFilmGenresFX = fetchListsFX('genre/movie/list')
export const fetchTvShowsGenresFX = fetchListsFX('genre/tv/list')
