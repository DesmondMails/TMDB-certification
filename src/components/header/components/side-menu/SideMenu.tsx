import { FC } from 'react'
import { Drawer, List } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import FavoriteIcon from '@mui/icons-material/Favorite'
import SearchIcon from '@mui/icons-material/Search'
import SideMenuItem from './menu-item/SideMenuItem'
import ExploreIcon from '@mui/icons-material/Explore'

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
        <SideMenuItem
          icon={<ExploreIcon />}
          text='Discover'
          path='discover'
          toggleDrawer={toggleDrawer}
        />
      </List>
    </Drawer>
  )
}

export default SideMenu
