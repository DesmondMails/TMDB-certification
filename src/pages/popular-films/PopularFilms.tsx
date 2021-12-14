import { useEffect } from 'react'
import { useStore } from 'effector-react'
import { fetchPopularFilmsFX } from '@/store/films/popular-films/effects'
import { $popularFilmsStore } from '@/store/films/popular-films'
import FilmsList from '@components/films-list/FilmsList'
import Preloader from '@/components/preloader/Preloader'

const PopularFilms = () => {
  const { results, page, total_pages } = useStore($popularFilmsStore)
  const isLoading = useStore(fetchPopularFilmsFX.pending)

  useEffect(() => {
    fetchPopularFilmsFX()
  }, [])

  if (isLoading) {
    return <Preloader />
  }

  return (
    <FilmsList
      list={results}
      fetchData={fetchPopularFilmsFX}
      page={page}
      total_pages={total_pages}
    />
  )
}

export default PopularFilms
