import { useEffect } from 'react'
import { useStore } from 'effector-react'
import { $topRatedFilmsStore } from '@/store/films/top-rated-films'
import { fetchTopRatedFilmsFX } from '@/store/films/top-rated-films/effects'
import FilmsList from '@/components/films-list/FilmsList'

const TopRatedFilms = () => {
  const { results } = useStore($topRatedFilmsStore)

  useEffect(() => {
    fetchTopRatedFilmsFX()
  }, [])
  return <FilmsList list={results} />
}

export default TopRatedFilms
