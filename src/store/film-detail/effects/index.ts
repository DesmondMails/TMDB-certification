import { fetchSingleCallback } from '@/store/shared/effects'
import { RequestParams } from '@/types/paramsTypes'
import { createEffect } from 'effector'

export const fetchFilmDetailsFX = createEffect((params: RequestParams) =>
  fetchSingleCallback(`movie/`, params)
)
