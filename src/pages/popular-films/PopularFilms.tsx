import { useEffect } from 'react'
import { useStore } from 'effector-react'
import { fetchPopularFilmsFX } from '@/store/films/popular-films/effects'
import { $popularFilmsStore } from '@/store/films/popular-films'
import FilmsList from '@components/films-list/FilmsList'

const PopularFilms = () => {
  const { results } = useStore($popularFilmsStore)

  useEffect(() => {
    fetchPopularFilmsFX()
  }, [])
  return <FilmsList list={results} />
}

export default PopularFilms
