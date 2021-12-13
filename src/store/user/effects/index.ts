import { fetchSingleCallback } from '@/store/shared/effects'
import { createEffect } from 'effector'

export const fetchUserDetailsFX = createEffect(() =>
  fetchSingleCallback('account')
)

export const loginTMDBAccountFx = createEffect(() =>
  fetchSingleCallback('/authentication/token/new')
)
