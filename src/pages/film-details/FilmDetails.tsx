import { useEffect } from 'react'
import { Button, Container, Grid, Rating, Typography } from '@mui/material'
import FavoriteIcon from '@mui/icons-material/Favorite'
import { useStyles } from './styles'
import { useStore } from 'effector-react'
import { $singleFilmDetail } from '@/store/film-detail'
import { fetchFilmDetailsFX } from '@/store/film-detail/effects'
import { Genre, ProductionCountries } from '@/store/film-detail/interfaces'
import { Formatter } from '@/utils/formatter'
import { useParams } from 'react-router-dom'
import { clearFilmInfoEvent } from '@/store/film-detail/events'
import { FavoiteFilms } from '@/store/user/interfaces'
import { $userStore } from '@/store/user'
import { addToFavoritesEvent } from '@/store/user/events'

const FilmDetails = () => {
  const { favoriteFilms } = useStore($userStore)
  const { id }: { id?: string } = useParams()
  const styles = useStyles()
  const details = useStore($singleFilmDetail)

  const isFavorite =
    (id && favoriteFilms?.filter((film) => film.id === +id)?.length > 0) ??
    false

  const handleAddToFavorite = () => {
    if (id) {
      const payload: FavoiteFilms = {
        id: +id || 0,
        title: details?.title ?? '',
        overview: details?.overview ?? '',
        poster_path: details?.poster_path ?? '',
        vote_average: details?.vote_average ?? 0,
      }
      addToFavoritesEvent({ film: payload })
    }
  }

  useEffect(() => {
    if (id) {
      fetchFilmDetailsFX({ id: +id })
    }
    return () => clearFilmInfoEvent()
  }, [id])

  return (
    <main style={{ position: 'relative' }}>
      <div className={styles.backdrop}>
        <img
          className={styles.backdropImage}
          src={`https://image.tmdb.org/t/p/w300/${
            details?.backdrop_path ?? ''
          } `}
          alt={'Backdrop of ' + details?.title ?? ''}
        />
      </div>
      <Container className={styles.movieContainer}>
        <Grid container spacing={7}>
          <Grid item md={3}>
            <img
              className={styles.poster}
              src={`https://image.tmdb.org/t/p/w300/${
                details?.poster_path ?? ''
              }`}
              alt={'Poster of ' + details?.title ?? ''}
            />
          </Grid>
          <Grid item md={8} style={{ color: 'white' }}>
            <div className={styles.releaseDate}>
              {Formatter.formatDate(new Date(details?.release_date ?? ''))} (
              {details &&
                details.production_countries
                  .map((country: ProductionCountries) => country.name)
                  .join(', ')}
              )
            </div>
            <Typography
              variant='h4'
              style={{ fontWeight: 'bold' }}
              component='h1'
            >
              {details?.title ?? ''}
            </Typography>
            <ul className={styles.genreList}>
              {details &&
                details.genres.map((genre: Genre) => (
                  <li className={styles.genre} key={genre.id}>
                    {genre.name}
                  </li>
                ))}
            </ul>
            <div className={styles.vote}>
              <Rating value={details ? details.vote_average / 2 : 1} readOnly />
              <span style={{ margin: '2px 0px 0 6px' }}>
                {details?.vote_average}/10
              </span>
              <Button
                style={{ marginLeft: 16 }}
                onClick={handleAddToFavorite}
                variant={isFavorite ? 'contained' : 'outlined'}
                color={isFavorite ? 'error' : 'primary'}
              >
                <FavoriteIcon />
              </Button>
            </div>
            <div style={{ marginTop: 10 }}>
              <Typography component='div' style={{ marginRight: 15 }}>
                <b>Duration:</b> {details?.runtime ?? ''} min.
              </Typography>
              <Typography component={'div'}>
                <b>Budget:</b>{' '}
                {details?.budget
                  ? '$' + Formatter.numberWithCommas(details.budget)
                  : '-'}
              </Typography>
            </div>
            {details?.overview && (
              <>
                <h1 className={styles.subtitle}>Overview</h1>
                <Typography variant='body1'>{details.overview}</Typography>
              </>
            )}
          </Grid>
        </Grid>
      </Container>
    </main>
  )
}

export default FilmDetails
