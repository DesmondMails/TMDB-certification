import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles({
  card: {
    maxWidth: '345px',
    width: '100%',
    margin: 0,
  },
  media: {
    height: '300px',
    objectFit: 'cover',
  },
  filmTitle: {
    fontWeight: 'bold',
    fontSize: '1.4rem',
  },
  overview: {
    maxHeight: '100px',
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  rateBox: {
    display: 'flex',
    justifyContent: 'space-between',
    marginTop: '15px',
  },
  rate: {
    fontSize: '1.2rem',
  },
  rateNum: {
    fontSize: '1.2rem',
    fontWeight: 'bold',
  },
})
