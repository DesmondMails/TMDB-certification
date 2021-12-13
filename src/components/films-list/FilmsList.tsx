import { FC } from 'react'
import { Box, Grid, IconButton } from '@mui/material'
import { FilmsInterface } from '@store/films/shared/shared-interfaces'
import FilmCard from '../film-card/FilmCard'
import ExpandCircleDownIcon from '@mui/icons-material/ExpandCircleDown'
import { useStyles } from './styles'
import { FilmsRequest, RequestParams } from '@/types/paramsTypes'
import { FavoiteFilms } from '@/store/user/interfaces'

interface IFilmsList {
  list: FilmsInterface[] | FavoiteFilms[]
  fetchData?: (params: RequestParams) => void
  page?: number
  query?: string
  total_pages?: number
}

const FilmsList: FC<IFilmsList> = ({
  list,
  fetchData,
  page,
  query,
  total_pages,
}) => {
  const styles = useStyles()

  const handleCLick = () => {
    const params: RequestParams = {}
    if (page) {
      params.page = page
    }
    if (query) {
      params.query = query
    }

    fetchData && fetchData(params)
  }

  return (
    <Box className={styles.parentContainer}>
      <Box>
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
      {total_pages && total_pages > 1 && (
        <Box className={styles.buttonContainer}>
          <IconButton className={styles.butttonIcon} onClick={handleCLick}>
            <p>Load More</p>
            <ExpandCircleDownIcon className={styles.button} />
          </IconButton>
        </Box>
      )}
    </Box>
  )
}

export default FilmsList
