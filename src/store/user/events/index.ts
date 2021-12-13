import { createEvent } from 'effector'
import { FavoiteFilms } from '../interfaces'

export const addToFavoritesEvent = createEvent<{ film: FavoiteFilms }>()
