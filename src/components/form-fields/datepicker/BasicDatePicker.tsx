import { FC } from 'react'
import TextField from '@mui/material/TextField'
import AdapterDateFns from '@mui/lab/AdapterDateFns'
import LocalizationProvider from '@mui/lab/LocalizationProvider'
import DatePicker from '@mui/lab/DatePicker'

interface IDatePicker {
  handleChangedValue: (
    date: Date | null,
    keyboardInputValue?: string | undefined
  ) => void
  value: Date | null
  label: string
  maxDate?: Date
}

const BasicDatePicker: FC<IDatePicker> = ({
  handleChangedValue,
  value,
  label,
  maxDate = new Date(),
}) => {
  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <DatePicker
        label={label}
        value={value}
        onChange={handleChangedValue}
        maxDate={maxDate}
        renderInput={(params) => <TextField {...params} />}
      />
    </LocalizationProvider>
  )
}

export default BasicDatePicker
