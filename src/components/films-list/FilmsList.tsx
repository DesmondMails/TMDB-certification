import { FC } from 'react'
import { Box, Grid } from '@mui/material'
import { FilmsInterface } from '@store/films/shared/shared-interfaces'
import FilmCard from '../film-card/FilmCard'
import { useStyles } from './styles'

interface IFilmsList {
  list: FilmsInterface[]
}

const FilmsList: FC<IFilmsList> = ({ list }) => {
  const styles = useStyles()

  return (
    <Box className={styles.parentContainer}>
      <Grid container spacing={1}>
        <Grid container spacing={3}>
          {list.map((film) => (
            <Grid item xs={4} className={styles.gridItem}>
              <FilmCard
                title={film.title}
                overview={film.overview}
                id={film.id}
                poster_path={film.poster_path}
                rate={film.vote_average}
              />
            </Grid>
          ))}
        </Grid>
      </Grid>
    </Box>
  )
}

export default FilmsList
