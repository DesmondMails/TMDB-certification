import { fetchSingleFX } from '@/store/shared/effects'

export const fetchUserDetailsFX = fetchSingleFX('account')

export const loginTMDBAccountFx = fetchSingleFX('authentication/token/new')
