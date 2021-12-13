import { FC } from 'react'
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import FavoriteIcon from '@mui/icons-material/Favorite'
import SearchIcon from '@mui/icons-material/Search'
import SideMenuItem from './menu-item/SideMenuItem'

interface ISideMenu {
  isOpen: boolean
  toggleDrawer: (isOpen: boolean) => void
}

const SideMenu: FC<ISideMenu> = ({ isOpen, toggleDrawer }) => {
  return (
    <Drawer
      variant='temporary'
      anchor='left'
      open={isOpen}
      onClose={() => toggleDrawer(false)}
    >
      <List>
        <SideMenuItem
          icon={<HomeIcon />}
          text='Home'
          toggleDrawer={toggleDrawer}
        />
        <SideMenuItem
          icon={<FavoriteIcon />}
          text='Favorite'
          path='favorites'
          toggleDrawer={toggleDrawer}
        />
        <SideMenuItem
          icon={<SearchIcon />}
          text='Search'
          path='search'
          toggleDrawer={toggleDrawer}
        />
      </List>
    </Drawer>
  )
}

export default SideMenu
