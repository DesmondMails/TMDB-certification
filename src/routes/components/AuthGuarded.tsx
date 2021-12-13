import { TOKEN_KEY } from '@/constants'
import React, { FC } from 'react'
import { Navigate, useLocation } from 'react-router-dom'

interface IAuthGuarded {
  children: React.ReactElement
}

const AuthGuarded: FC<IAuthGuarded> = ({ children }) => {
  const isAuthed = !!localStorage.getItem(TOKEN_KEY)
  const location = useLocation()

  return isAuthed === true ? (
    children
  ) : (
    <Navigate to='/login' replace state={{ path: location.pathname }} />
  )
}

export default AuthGuarded
