import { Link, Typography } from '@mui/material'

const Copyright = () => (
  <Typography
    variant='body2'
    color='text.secondary'
    align='center'
    sx={{ mt: 8, mb: 4 }}
  >
    {'Copyright © '}
    <Link color='inherit' href='https://youtu.be/JBRr1we8cmI'>
      Damage, Inc.
    </Link>{' '}
    {new Date().getFullYear()}
    {'.'}
  </Typography>
)

export default Copyright
