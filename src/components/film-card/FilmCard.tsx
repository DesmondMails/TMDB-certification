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
import FavoriteIcon from '@mui/icons-material/Favorite'
import { useStyles } from './styles'
import { DatesUpcoming } from '@/store/films/upcoming-films/interfaces'

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
  const styles = useStyles()

  return (
    <Card className={styles.card}>
      <CardMedia
        image={`https://image.tmdb.org/t/p/w300/${poster_path}`}
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
        <Button>Read more</Button>
        <IconButton>
          <FavoriteIcon />
        </IconButton>
      </CardActions>
    </Card>
  )
}

export default FilmCard
