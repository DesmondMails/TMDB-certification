import { FC } from 'react'
import {
  Card,
  CardMedia,
  CardContent,
  Typography,
  CardActions,
  Button,
  IconButton,
  Box,
} from '@mui/material'
import { useNavigate } from 'react-router-dom'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { DatesUpcoming } from '@/store/films/upcoming-films/interfaces'
import { useStyles } from './styles'
import { addToFavoritesEvent } from '@/store/user/events'
import { useStore } from 'effector-react'
import { $userStore } from '@/store/user'
import noImage from '@assets/noImage.png'

interface IFilmCard {
  title: string
  overview: string
  poster_path: string | null
  rate: number
  id: number
  release?: DatesUpcoming
}

const FilmCard: FC<IFilmCard> = ({
  title,
  overview,
  id,
  poster_path,
  rate,
  release,
}) => {
  const { favoriteFilms } = useStore($userStore)
  const styles = useStyles()
  const navigate = useNavigate()

  const isFavorite =
    favoriteFilms?.filter((film) => film.id === id)?.length > 0 ?? false

  const handleDetailsClick = () => {
    navigate(`/film-detail/${id}`)
  }
  const handleAddToFavorite = () => {
    const payload = { title, overview, id, poster_path, vote_average: rate }
    addToFavoritesEvent({ film: payload })
  }

  return (
    <Card className={styles.card}>
      <CardMedia
        image={
          poster_path
            ? `https://image.tmdb.org/t/p/w300/${poster_path}`
            : noImage
        }
        className={styles.media}
        component='img'
      />
      <CardContent>
        <Typography gutterBottom className={styles.filmTitle}>
          {title}
        </Typography>
        <Typography noWrap className={styles.overview}>
          {overview}
        </Typography>
        <Box
          display='flex'
          justifyContent='space-between'
          className={styles.rateBox}
        >
          <Typography className={styles.rate}>Rate</Typography>
          <Typography className={styles.rateNum}>
            {rate !== 0 ? rate : '-'}
          </Typography>
        </Box>
        {/* {release && (
          <Box>
            <Typography>Realease dates:</Typography>
            <Typography>{`${release.minimum} - ${release.maximum}`}</Typography>
          </Box>
        )} */}
      </CardContent>
      <CardActions className={styles.actions}>
        <Button onClick={handleDetailsClick}>Read more</Button>
        <IconButton onClick={handleAddToFavorite}>
          <FavoriteIcon color={isFavorite ? 'error' : 'disabled'} />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default FilmCard
