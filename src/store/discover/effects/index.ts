import { fetchListsFX } from '@/store/shared/effects'

export const discoverMoviesFX = fetchListsFX('discover/movie')
export const discoverTvShowsFX = fetchListsFX('discover/tv')
