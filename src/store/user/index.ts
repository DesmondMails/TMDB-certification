import { createStore } from 'effector'
import { fetchUserDetailsFX } from './effects'
import { addToFavoritesEvent } from './events'
import { UserInfo, UserStore } from './interfaces'

export const $userStore = createStore<UserStore>({
  favoriteFilms: [],
})

$userStore.on(addToFavoritesEvent, (state, payload) => {
  const isAllreadyExist =
    state.favoriteFilms.filter((val) => val.id === payload.film.id).length > 0

  if (isAllreadyExist) {
    const elIndex = state.favoriteFilms.findIndex(
      (item) => item.id === payload.film.id
    )
    const templateSchedule = state.favoriteFilms

    templateSchedule.splice(elIndex, 1)

    return { favoriteFilms: templateSchedule }
  } else {
    return {
      favoriteFilms: [...state.favoriteFilms, payload.film],
    }
  }
})
