import { fetchListsFX } from '@/store/shared/effects'

export const searchMoviesFX = fetchListsFX('search/movie')

export const searchTvShowsFX = fetchListsFX('search/tv')
