import { useState } from 'react'
import { useStore } from 'effector-react'
import { Link, useNavigate } from 'react-router-dom'
import { $authStore } from '@/store/auth'
import {
  AppBar,
  Box,
  Button,
  Toolbar,
  Typography,
  IconButton,
} from '@mui/material'
import MenuIcon from '@mui/icons-material/Menu'
import { TOKEN_KEY } from '@/constants'
import { logoutEvent } from '@/store/auth/events/logout'
import SideMenu from './components/side-menu/SideMenu'

const Header = () => {
  const navigate = useNavigate()
  const { username } = useStore($authStore)
  const token = localStorage.getItem(TOKEN_KEY)
  const [isOpen, setState] = useState(false)

  const handleLogout = () => {
    logoutEvent()
    navigate('/')
  }

  const toggleDrawer = (open: boolean) => {
    setState(open)
  }

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position='static'>
        <Toolbar>
          {(username || token) && (
            <IconButton
              size='large'
              edge='start'
              color='inherit'
              onClick={() => toggleDrawer(!isOpen)}
            >
              <MenuIcon />
            </IconButton>
          )}
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
        <SideMenu isOpen={isOpen} toggleDrawer={toggleDrawer} />
      </AppBar>
    </Box>
  )
}

export default Header
