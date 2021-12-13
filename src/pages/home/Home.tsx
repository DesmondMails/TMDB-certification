import { fetchFilmDetailsFX } from '@/store/film-detail/effects'
import { searchMoviesFX } from '@/store/search/effects'
import { $userStore } from '@/store/user'
import { useStore } from 'effector-react'
import { useEffect } from 'react'
import { useState } from 'react'
import PopularFilms from '../popular-films/PopularFilms'

import TopRatedFilms from '../top-rated-films/TopRatedFilms'
import UpcomingFilms from '../upcoming-films/UpcomingFilms'
import HomeHeader from './components/home-header/HomeHeader'

const Home = () => {
  // const { info } = useStore($userStore)
  // console.log('Here is user info', info)

  const [collection, setCollection] = useState<number>(1)
  console.log('Collection', collection)
  useEffect(() => {
    // fetchFilmDetailsFX({ id: 580489 })
    // searchMoviesFX({ query: 's' })
  }, [])
  return (
    <div>
      <HomeHeader setCollection={setCollection} collection={collection} />
      {(() => {
        switch (collection) {
          case 1:
            return <PopularFilms />
          case 2:
            return <TopRatedFilms />
          case 3:
            return <UpcomingFilms />
        }
      })()}
    </div>
  )
}

export default Home
