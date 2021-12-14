import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles({
  wrapper: {
    height: '80vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorsWrapper: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
  },
  errorNum: {
    fontSize: '3rem',
    fontWeight: 'bold',
  },
})
