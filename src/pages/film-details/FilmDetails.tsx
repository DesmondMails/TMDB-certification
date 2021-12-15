import { useEffect } from 'react'
import { useStore } from 'effector-react'
import { useParams } from 'react-router-dom'
import { Container, Grid, Typography } from '@mui/material'
import { $singleFilmDetail } from '@/store/film-detail'
import { fetchFilmDetailsFX } from '@/store/film-detail/effects'
import { clearFilmInfoEvent } from '@/store/film-detail/events'
import { Poster } from './components/poster/Poster'
import RateSection from './components/rate-section/RateSection'
import RealeaseDate from './components/release-date/RealeaseDate'
import FilmGenres from './components/genres/FilmGenres'
import AdditionalInfo from './components/additional-info/AdditionalInfo'
import { useStyles } from './styles'

const FilmDetails = () => {
  const { id }: { id?: string } = useParams()
  const styles = useStyles()
  const details = useStore($singleFilmDetail)

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
          <Poster poster_path={details?.poster_path} title={details?.title} />
          <Grid item md={8} style={{ color: 'white' }}>
            <RealeaseDate
              release_date={details?.release_date}
              production_countries={details?.production_countries}
              title={details?.title}
            />
            <FilmGenres genres={details?.genres} />
            <RateSection
              vote_average={details?.vote_average}
              title={details?.title}
              id={details?.id}
              poster_path={details?.poster_path}
              overview={details?.overview}
            />
            <AdditionalInfo
              budget={details?.budget}
              runtime={details?.runtime}
            />

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
