import { createStore } from 'effector'
import { fetchFilmDetailsFX } from './effects'
import { clearFilmInfoEvent } from './events'
import { SingleFilmDetail } from './interfaces'

export const $singleFilmDetail = createStore<SingleFilmDetail | null>(null)

$singleFilmDetail.on(fetchFilmDetailsFX.doneData, (state, payload) => ({
  ...payload,
}))

$singleFilmDetail.on(clearFilmInfoEvent, (state, payload) => null)
