import { Typography } from '@mui/material'
import { Link } from 'react-router-dom'
import { useStyles } from './styles'

const NotFound = () => {
  const styles = useStyles()
  return (
    <div className={styles.wrapper}>
      <div className={styles.errorsWrapper}>
        <Typography className={styles.errorNum}>404</Typography>
        <Typography>Ooops, Page not found</Typography>
        <Link to='/' className={styles.back}>
          Back to Home
        </Link>
      </div>
    </div>
  )
}

export default NotFound
