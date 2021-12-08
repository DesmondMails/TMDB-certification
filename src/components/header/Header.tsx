import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import { Link } from 'react-router-dom'
const Header = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Films
          </Typography>
          <Button
            component={Link}
            to='/login'
            variant='outlined'
            color='inherit'
          >
            Login
          </Button>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
