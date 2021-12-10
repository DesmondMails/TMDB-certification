import { FC, Dispatch, SetStateAction } from 'react'
import { Box, Button, ButtonGroup, Typography } from '@mui/material'
import { useStyles } from './styles'

interface IHomeHeader {
  collection: number
  setCollection: Dispatch<SetStateAction<number>>
}

const HomeHeader: FC<IHomeHeader> = ({ collection, setCollection }) => {
  const styles = useStyles()

  const handleClick = (collectionIndex: number) => {
    setCollection(collectionIndex)
  }

  return (
    <Box className={styles.headWrapper}>
      <Typography align='center' variant='h6' className={styles.title}>
        Welcome to the film exploerering
      </Typography>
      <Box>
        <Typography align='center' className={styles.buttonTitle}>
          Select a collection
        </Typography>
        <ButtonGroup>
          <Button
            variant={collection === 1 ? 'contained' : 'outlined'}
            onClick={() => handleClick(1)}
          >
            Popular
          </Button>
          <Button
            variant={collection === 2 ? 'contained' : 'outlined'}
            onClick={() => handleClick(2)}
          >
            Top Rated
          </Button>
          <Button
            variant={collection === 3 ? 'contained' : 'outlined'}
            onClick={() => handleClick(3)}
          >
            Upcoming
          </Button>
        </ButtonGroup>
      </Box>
    </Box>
  )
}

export default HomeHeader
