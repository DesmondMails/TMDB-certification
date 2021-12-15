import { FC } from 'react'
import { Formatter } from '@/utils/formatter'
import { Typography } from '@mui/material'

interface IAdditionalInfo {
  runtime?: number | null
  budget?: number
}

const AdditionalInfo: FC<IAdditionalInfo> = ({ runtime, budget }) => {
  return (
    <div style={{ marginTop: 10 }}>
      <Typography component='div' style={{ marginRight: 15 }}>
        <b>Duration:</b> {runtime ?? ''} min.
      </Typography>
      <Typography component={'div'}>
        <b>Budget:</b> {budget ? '$' + Formatter.numberWithCommas(budget) : '-'}
      </Typography>
    </div>
  )
}

export default AdditionalInfo
