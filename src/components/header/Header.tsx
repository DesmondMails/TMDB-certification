import { useStore } from 'effector-react'
import { Link, useNavigate } from 'react-router-dom'
import { $authStore } from '@/store/auth'
import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'
import { TOKEN_KEY } from '@/constants'
import { logoutEvent } from '@/store/auth/events/logout'

const Header = () => {
  const navigate = useNavigate()
  const { username } = useStore($authStore)
  const token = localStorage.getItem(TOKEN_KEY)

  const handleLogout = () => {
    logoutEvent()
    navigate('/')
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Films
          </Typography>
          {!username && !token ? (
            <Button
              component={Link}
              to='/login'
              variant='outlined'
              color='inherit'
            >
              Login
            </Button>
          ) : (
            <>
              <Typography style={{ marginRight: '10px' }}>
                Hi there, {username}
              </Typography>
              <Button variant='outlined' color='inherit' onClick={handleLogout}>
                Logout
              </Button>
            </>
          )}
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header
