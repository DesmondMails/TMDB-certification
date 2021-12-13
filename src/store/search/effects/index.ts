import { fetchFX } from '@/store/shared/effects'
import { RequestParams } from '@/types/paramsTypes'
import { createEffect } from 'effector'

export const searchMoviesFX = createEffect((params: RequestParams) =>
  fetchFX('search/movie', params)
)

export const searchTvShowsFX = createEffect((params: RequestParams) =>
  fetchFX('search/tv', params)
)
