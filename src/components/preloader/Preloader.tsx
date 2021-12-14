import { CircularProgress } from '@mui/material'
import { useStyles } from './styles'

const Preloader = () => {
  const styles = useStyles()
  return (
    <div className={styles.preloaderContainer}>
      <CircularProgress className={styles.preloader} />
    </div>
  )
}

export default Preloader
