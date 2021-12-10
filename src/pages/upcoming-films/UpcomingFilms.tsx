import { useEffect } from 'react'
import { $upcomingFilms } from '@/store/films/upcoming-films'
import { useStore } from 'effector-react'
import { fetchUpcomingFilmsFX } from '@/store/films/upcoming-films/effects'
import FilmsList from '@/components/films-list/FilmsList'

const UpcomingFilms = () => {
  const { results, dates } = useStore($upcomingFilms)
  console.log('dates', dates)

  useEffect(() => {
    fetchUpcomingFilmsFX()
  }, [])
  return <FilmsList list={results} />
}

export default UpcomingFilms
