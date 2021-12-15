import { FC } from 'react'
import { ProductionCountries } from '@/store/film-detail/interfaces'
import { Formatter } from '@/utils/formatter'
import { Typography } from '@mui/material'
import { useStyles } from './styles'

interface IRealeaseDate {
  release_date?: string | null
  production_countries?: ProductionCountries[] | null
  title?: string
}

const RealeaseDate: FC<IRealeaseDate> = ({
  release_date,
  production_countries,
  title,
}) => {
  const styles = useStyles()

  return (
    <>
      <div className={styles.releaseDate}>
        {Formatter.formatDate(new Date(release_date ?? ''))} (
        {production_countries &&
          production_countries
            .map((country: ProductionCountries) => country.name)
            .join(', ')}
        )
      </div>
      <Typography variant='h4' style={{ fontWeight: 'bold' }} component='h1'>
        {title ?? ''}
      </Typography>
    </>
  )
}

export default RealeaseDate
