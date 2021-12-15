import { FC } from 'react'
import { useStore } from 'effector-react'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { Button, Rating } from '@mui/material'
import { $userStore } from '@/store/user'
import { addToFavoritesEvent } from '@/store/user/events'
import { useStyles } from './styles'
import { FavoiteFilms } from '@/store/user/interfaces'

interface IRateSection {
  vote_average?: number
  id?: number
  title?: string
  overview?: string | null
  poster_path?: string | null
}

const RateSection: FC<IRateSection> = ({
  vote_average,
  id,
  title,
  overview,
  poster_path,
}) => {
  const styles = useStyles()
  const { favoriteFilms } = useStore($userStore)

  const isFavorite =
    (id && favoriteFilms?.filter((film) => film.id === +id)?.length > 0) ??
    false

  const handleAddToFavorite = () => {
    if (id) {
      const payload: FavoiteFilms = {
        id: +id || 0,
        title: title ?? '',
        overview: overview ?? '',
        poster_path: poster_path ?? '',
        vote_average: vote_average ?? 0,
      }
      addToFavoritesEvent({ film: payload })
    }
  }

  return (
    <div className={styles.vote}>
      <Rating value={vote_average ? vote_average / 2 : 1} readOnly />
      <span style={{ margin: '2px 0px 0 6px' }}>{vote_average}/10</span>
      <Button
        style={{ marginLeft: 16 }}
        onClick={handleAddToFavorite}
        variant={isFavorite ? 'contained' : 'outlined'}
        color={isFavorite ? 'error' : 'primary'}
      >
        <FavoriteIcon />
      </Button>
    </div>
  )
}

export default RateSection
