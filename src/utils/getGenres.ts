import { Genre } from '@/store/film-detail/interfaces'

export const getGenres = (selectedGenres: Genre[]) => {
  if (selectedGenres.length < 1) return ''

  return selectedGenres.map((g) => g.id).join(',')
}
