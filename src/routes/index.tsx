import { Route, Routes } from 'react-router-dom'
import Home from '@pages/home/Home'
import Login from '@pages/login/Login'
import FilmDetails from '@/pages/film-details/FilmDetails'
import FavoriteFilms from '@/pages/favorites-films/FavoriteFilms'
import AuthGuarded from './components/AuthGuarded'
import SearchPage from '@/pages/search-page/SearchPage'
import FilmDiscovering from '@/pages/film-discovering/FilmDiscovering'
import NotFound from '@/pages/errors-pages/NotFound/NotFound'
import ErrorsGeneraly from '@/pages/errors-pages/ErrorsGeneraly/ErrorsGeneraly'

export const useRoutes = () => {
  return (
    <Routes>
      <Route
        path='/'
        element={
          <AuthGuarded>
            <Home />
          </AuthGuarded>
        }
      />
      <Route path='/login' element={<Login />} />
      <Route
        path='/film-detail/:id'
        element={
          <AuthGuarded>
            <FilmDetails />
          </AuthGuarded>
        }
      />
      <Route
        path='/favorites'
        element={
          <AuthGuarded>
            <FavoriteFilms />
          </AuthGuarded>
        }
      />
      <Route
        path='/search'
        element={
          <AuthGuarded>
            <SearchPage />
          </AuthGuarded>
        }
      />
      <Route
        path='/discover'
        element={
          <AuthGuarded>
            <FilmDiscovering />
          </AuthGuarded>
        }
      />
      <Route path='/errors/:error' element={<ErrorsGeneraly />} />
      <Route path='*' element={<NotFound />} />
    </Routes>
  )
}
