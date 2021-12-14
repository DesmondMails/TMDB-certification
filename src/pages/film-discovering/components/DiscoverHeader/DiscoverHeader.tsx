import { FC, Dispatch, SetStateAction, useState } from 'react'
import { Genre } from '@/store/film-detail/interfaces'
import { $genresStore } from '@/store/genres'
import { Tab, Tabs } from '@mui/material'
import { useStore } from 'effector-react'
import DatePickers from './components/date-pickers/DatePickers'
import GenresSelect from './components/genres-select/GenresSelect'
import { useStyles } from './styles'
import { useEffect } from 'react'
import { getGenres } from '@/utils/getGenres'
import { dataForamatter } from '@/utils/dataForamatter'
import { discoverQuery } from '../../helpers'
import { cleanDiscoverStoreEvent } from '@/store/discover/events'

interface IDiscoverHeader {
  type: number
  setType: Dispatch<SetStateAction<number>>
}

const DiscoverHeader: FC<IDiscoverHeader> = ({ type, setType }) => {
  const styles = useStyles()
  const { filmGenres, tvShowGenres } = useStore($genresStore)
  const [selectedGenres, setSelectedGenres] = useState<Genre[]>([])
  const [startDate, setStartDate] = useState<Date | null>(null)
  const [endDate, setEndDate] = useState<Date | null>(null)

  const handleBeginSelect = (
    date: Date | null,
    keyboardInputValue?: string | undefined
  ) => {
    setStartDate(date)
  }
  const handleEndSelect = (
    date: Date | null,
    keyboardInputValue?: string | undefined
  ) => {
    setEndDate(date)
  }

  const handleChangedTab = (e: any, newValue: number) => {
    setType(newValue)
  }

  useEffect(() => {
    setSelectedGenres([])
    setStartDate(null)
    setEndDate(null)
    cleanDiscoverStoreEvent()
  }, [type])

  useEffect(() => {
    const geners = getGenres(selectedGenres)
    const startDateFormatter = startDate ? dataForamatter(startDate) : ''
    const endDateFormatter = endDate ? dataForamatter(endDate) : ''

    if (geners || startDateFormatter || endDateFormatter) {
      discoverQuery(type, geners, startDateFormatter, endDateFormatter)
    }
  }, [selectedGenres, startDate, endDate])

  useEffect(() => {
    const isEveryFieldsEmpty =
      selectedGenres.length === 0 && !startDate && !endDate
    if (isEveryFieldsEmpty) {
      cleanDiscoverStoreEvent()
    }
  }, [selectedGenres, startDate, endDate])

  return (
    <div className={styles.headerWrapper}>
      <div className={styles.headerOptions}>
        <GenresSelect
          selectedGenres={selectedGenres}
          setSelectedGenres={setSelectedGenres}
          type={type}
          filmGenres={filmGenres}
          tvShowGenres={tvShowGenres}
        />
        <DatePickers
          handleBeginSelect={handleBeginSelect}
          handleEndSelect={handleEndSelect}
          startDate={startDate}
          endDate={endDate}
        />
      </div>

      <Tabs
        value={type}
        indicatorColor='primary'
        textColor='primary'
        onChange={handleChangedTab}
        style={{ paddingBottom: 5 }}
        className={styles.tabContainer}
      >
        <Tab label='Discover Movies' />
        <Tab label='Discover TV Series' />
      </Tabs>
    </div>
  )
}

export default DiscoverHeader
