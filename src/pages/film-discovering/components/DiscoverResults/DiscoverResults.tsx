import { FC } from 'react'
import { useStore } from 'effector-react'
import Preloader from '@/components/preloader/Preloader'
import { $discoverStore } from '@/store/discover'
import { discoverMoviesFX, discoverTvShowsFX } from '@/store/discover/effects'
import FilmsList from '@/components/films-list/FilmsList'

interface IDiscoverResults {
  type: number
}

const DiscoverResults: FC<IDiscoverResults> = ({ type }) => {
  const res = useStore($discoverStore)
  const { films, tvShows } = res

  const isFilmsLoading = useStore(discoverMoviesFX.pending)
  const isTvShowsLoading = useStore(discoverTvShowsFX.pending)

  return (
    <div>
      {(isFilmsLoading || isTvShowsLoading) && <Preloader />}
      {type === 0 && films?.results?.length > 0 && (
        <FilmsList
          list={films.results}
          page={films.page}
          fetchData={discoverMoviesFX}
          total_pages={films.total_pages}
        />
      )}
      {type === 1 && tvShows?.results?.length > 0 && (
        <FilmsList
          list={tvShows.results}
          page={tvShows.page}
          fetchData={discoverTvShowsFX}
          total_pages={tvShows.total_pages}
        />
      )}
    </div>
  )
}

export default DiscoverResults
