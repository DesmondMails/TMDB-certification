import { makeStyles } from '@mui/styles'

export const useStyles = makeStyles({
  genreList: {
    listStyle: 'none',
    padding: 0,
    display: 'flex',
    flexWrap: 'wrap',
    marginBottom: '15px',
  },
  genre: {
    cursor: 'pointer',
    padding: '1px 6px',
    marginRight: 10,
    border: '1px solid white',
    borderRadius: 4,
    fontSize: '14px',
  },
})
