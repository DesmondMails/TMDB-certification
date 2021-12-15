import { FC } from 'react'
import { Genre } from '@/store/film-detail/interfaces'
import { useStyles } from './styles'

interface IFilmGenres {
  genres?: Genre[]
}

const FilmGenres: FC<IFilmGenres> = ({ genres }) => {
  const styles = useStyles()
  return (
    <ul className={styles.genreList}>
      {genres &&
        genres.map((genre: Genre) => (
          <li className={styles.genre} key={genre.id}>
            {genre.name}
          </li>
        ))}
    </ul>
  )
}

export default FilmGenres
