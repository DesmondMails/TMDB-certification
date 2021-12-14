import { useParams } from 'react-router-dom'
import { Typography } from '@mui/material'
import { useStyles } from './styles'

const ErrorsGeneraly = () => {
  const styles = useStyles()
  const { error }: { error?: string } = useParams()

  return (
    <div className={styles.wrapper}>
      <div className={styles.errorsWrapper}>
        <Typography className={styles.errorNum}>{error}</Typography>
        <Typography>Something went wrong...</Typography>
      </div>
    </div>
  )
}

export default ErrorsGeneraly
