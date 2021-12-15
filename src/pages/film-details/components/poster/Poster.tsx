import { FC } from 'react'
import { Grid } from '@mui/material'
import { useStyles } from './styles'

interface IPoster {
  poster_path?: string | null
  title?: string
}

export const Poster: FC<IPoster> = ({ poster_path, title }) => {
  const styles = useStyles()
  return (
    <Grid item md={3}>
      <img
        className={styles.poster}
        src={`https://image.tmdb.org/t/p/w300/${poster_path ?? ''}`}
        alt={'Poster of ' + title ?? ''}
      />
    </Grid>
  )
}
