import FilmsList from '@/components/films-list/FilmsList'
import { $userStore } from '@/store/user'
import { Box, Typography } from '@mui/material'
import { useStore } from 'effector-react'
import { useStyles } from './styles'

const FavoriteFilms = () => {
  const styles = useStyles()
  const { favoriteFilms } = useStore($userStore)

  return (
    <Box>
      <Typography align='center' className={styles.title}>
        Welcome to Your Favorite films
      </Typography>
      <Box>
        <FilmsList list={favoriteFilms} />
      </Box>
    </Box>
  )
}

export default FavoriteFilms
