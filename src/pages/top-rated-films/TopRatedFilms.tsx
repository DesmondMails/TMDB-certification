import { useEffect } from 'react'
import { useStore } from 'effector-react'
import { $topRatedFilmsStore } from '@/store/films/top-rated-films'
import { fetchTopRatedFilmsFX } from '@/store/films/top-rated-films/effects'
import FilmsList from '@/components/films-list/FilmsList'
import Preloader from '@/components/preloader/Preloader'

const TopRatedFilms = () => {
  const { results, page, total_pages } = useStore($topRatedFilmsStore)
  const isLoading = useStore(fetchTopRatedFilmsFX.pending)

  useEffect(() => {
    fetchTopRatedFilmsFX()
  }, [])

  if (isLoading) {
    return <Preloader />
  }

  return (
    <FilmsList
      list={results}
      fetchData={fetchTopRatedFilmsFX}
      page={page}
      total_pages={total_pages}
    />
  )
}

export default TopRatedFilms
