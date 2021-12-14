import { FC } from 'react'
import { useStore } from 'effector-react'
import { $searchStore } from '@/store/search'
import { searchMoviesFX, searchTvShowsFX } from '@/store/search/effects'
import Preloader from '@/components/preloader/Preloader'
import FilmsList from '@/components/films-list/FilmsList'

interface ISearchResults {
  type: number
  searchText: string
}

export const SearchResults: FC<ISearchResults> = ({ type, searchText }) => {
  const res = useStore($searchStore)
  const { films, tvShows } = res

  const isFilmsLoading = useStore(searchMoviesFX.pending)
  const isTvShowsLoading = useStore(searchTvShowsFX.pending)

  return (
    <div>
      {(isFilmsLoading || isTvShowsLoading) && <Preloader />}
      {type === 0 && films?.results?.length > 0 && (
        <FilmsList
          list={films.results}
          page={films.page}
          fetchData={searchMoviesFX}
          query={searchText}
          total_pages={films.total_pages}
        />
      )}
      {type === 1 && tvShows?.results?.length > 0 && (
        <FilmsList
          list={tvShows.results}
          page={tvShows.page}
          fetchData={searchTvShowsFX}
          query={searchText}
          total_pages={tvShows.total_pages}
        />
      )}
    </div>
  )
}

export default SearchResults
