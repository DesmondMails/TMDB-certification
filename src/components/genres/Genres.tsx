import { FC, Dispatch, SetStateAction, useEffect } from 'react'
import { Genre } from '@/store/film-detail/interfaces'
import { Chip } from '@mui/material'
import { fetchFilmGenresFX, fetchTvShowsGenresFX } from '@/store/genres/effects'

interface IGenres {
  selectedGenres: Genre[]
  genres: Genre[]
  setSelectedGenres: Dispatch<SetStateAction<Genre[]>>
  setGenres: Dispatch<SetStateAction<Genre[]>>
  fetchGenres: () => void
}

const Genres: FC<IGenres> = ({
  selectedGenres,
  genres,
  setSelectedGenres,
  setGenres,
  fetchGenres,
}) => {
  const handleAdd = (genre: Genre) => {
    setSelectedGenres([...selectedGenres, genre])
    setGenres(genres.filter((g) => g.id !== genre.id))
  }

  const handleRemove = (genre: Genre) => {
    setSelectedGenres(
      selectedGenres.filter((selected) => selected.id !== genre.id)
    )
    setGenres([...genres, genre])
  }

  useEffect(() => {
    fetchGenres()

    return () => {
      setGenres([])
    }
    // eslint-disable-next-line
  }, [])

  useEffect(() => {
    fetchFilmGenresFX()
    fetchTvShowsGenresFX()
  }, [])

  return (
    <div style={{ padding: '6px 0' }}>
      {selectedGenres.map((genre) => (
        <Chip
          style={{ margin: 2 }}
          label={genre.name}
          key={genre.id}
          color='primary'
          clickable
          size='small'
          onDelete={() => handleRemove(genre)}
        />
      ))}
      {genres.map((genre) => (
        <Chip
          style={{ margin: 2 }}
          label={genre.name}
          key={genre.id}
          clickable
          size='small'
          onClick={() => handleAdd(genre)}
        />
      ))}
    </div>
  )
}

export default Genres
