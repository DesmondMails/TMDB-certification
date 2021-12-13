import { useEffect } from 'react'
import { $upcomingFilms } from '@/store/films/upcoming-films'
import { useStore } from 'effector-react'
import { fetchUpcomingFilmsFX } from '@/store/films/upcoming-films/effects'
import FilmsList from '@/components/films-list/FilmsList'

const UpcomingFilms = () => {
  const { results, page, total_pages } = useStore($upcomingFilms)

  useEffect(() => {
    fetchUpcomingFilmsFX()
  }, [])
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
