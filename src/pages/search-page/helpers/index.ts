import { searchMoviesFX, searchTvShowsFX } from '@/store/search/effects'

export const searchQuery = (type: number, text: string) => {
  if (type === 0 && text) {
    searchMoviesFX({ query: text })
  } else if (type === 1 && text) {
    searchTvShowsFX({ query: text })
  }
}
