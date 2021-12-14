import { useEffect } from 'react'
import { useStore } from 'effector-react'
import { $upcomingFilms } from '@/store/films/upcoming-films'
import { fetchUpcomingFilmsFX } from '@/store/films/upcoming-films/effects'
import FilmsList from '@/components/films-list/FilmsList'
import Preloader from '@/components/preloader/Preloader'

const UpcomingFilms = () => {
  const { results, page, total_pages } = useStore($upcomingFilms)
  const isLoading = useStore(fetchUpcomingFilmsFX.pending)

  useEffect(() => {
    fetchUpcomingFilmsFX()
  }, [])

  if (isLoading) {
    return <Preloader />
  }

  return (
    <FilmsList
      list={results}
      fetchData={fetchUpcomingFilmsFX}
      page={page}
      total_pages={total_pages}
    />
  )
}

export default UpcomingFilms
