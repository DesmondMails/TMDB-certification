import { FC } from 'react'
import BasicDatePicker from '@/components/form-fields/datepicker/BasicDatePicker'
import { Typography } from '@mui/material'
import { useStyles } from './styles'

interface IDatePickers {
  handleBeginSelect: (
    date: Date | null,
    keyboardInputValue?: string | undefined
  ) => void
  handleEndSelect: (
    date: Date | null,
    keyboardInputValue?: string | undefined
  ) => void
  startDate: Date | null
  endDate: Date | null
}

const DatePickers: FC<IDatePickers> = ({
  handleBeginSelect,
  handleEndSelect,
  startDate,
  endDate,
}) => {
  const styles = useStyles()
  return (
    <div className={styles.periodWrapper}>
      <Typography align='center' className={styles.textTitle}>
        Select dates
      </Typography>
      <div className={styles.datePickers}>
        <BasicDatePicker
          handleChangedValue={handleBeginSelect}
          value={startDate}
          label='Start date'
          maxDate={endDate || undefined}
        />
        <BasicDatePicker
          handleChangedValue={handleEndSelect}
          value={endDate}
          label='End date'
        />
      </div>
    </div>
  )
}

export default DatePickers
