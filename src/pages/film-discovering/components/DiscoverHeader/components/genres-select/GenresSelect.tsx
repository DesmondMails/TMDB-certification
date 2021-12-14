import { FC, useState, Dispatch, SetStateAction } from 'react'
import { Typography } from '@mui/material'
import { useStyles } from './styles'
import { Genre } from '@/store/genres/interfaces'
import { fetchFilmGenresFX, fetchTvShowsGenresFX } from '@/store/genres/effects'
import Genres from '@/components/genres/Genres'
import { useEffect } from 'react'

interface IGenresSelect {
  selectedGenres: Genre[]
  setSelectedGenres: Dispatch<SetStateAction<Genre[]>>
  type: number
  filmGenres: Genre[]
  tvShowGenres: Genre[]
}

const GenresSelect: FC<IGenresSelect> = ({
  selectedGenres,
  setSelectedGenres,
  type,
  filmGenres,
  tvShowGenres,
}) => {
  const styles = useStyles()
  const [filmGenresState, setFilmGenresState] = useState<Genre[]>([])
  const [tvShowsGenresState, setTvShowsGenresState] = useState<Genre[]>([])

  const genres = type === 0 ? filmGenresState : tvShowsGenresState
  const setGenres = type === 0 ? setFilmGenresState : setTvShowsGenresState
  const fetchGenres = type === 0 ? fetchFilmGenresFX : fetchTvShowsGenresFX

  useEffect(() => {
    setFilmGenresState(filmGenres)
    setTvShowsGenresState(tvShowGenres)
  }, [filmGenres, tvShowGenres])

  return (
    <div className={styles.genresWrapper}>
      <Typography align='center' className={styles.genreTitle}>
        Select genres
      </Typography>
      <Genres
        genres={genres}
        setGenres={setGenres}
        selectedGenres={selectedGenres}
        setSelectedGenres={setSelectedGenres}
        fetchGenres={fetchGenres}
      />
    </div>
  )
}

export default GenresSelect
