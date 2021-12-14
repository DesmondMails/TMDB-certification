import {
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from '@mui/material'
import { FC } from 'react'
import { useNavigate } from 'react-router-dom'

interface IMenuItem {
  icon: any
  text: string
  path?: string
  toggleDrawer: (isOpen: boolean) => void
}

const SideMenuItem: FC<IMenuItem> = ({
  icon,
  text,
  path = '',
  toggleDrawer,
}) => {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate(`/${path}`)
    toggleDrawer(false)
  }
  return (
    <ListItem>
      <ListItemButton onClick={handleClick}>
        <ListItemIcon>{icon}</ListItemIcon>
        <ListItemText primary={text} />
      </ListItemButton>
    </ListItem>
  )
}

export default SideMenuItem
