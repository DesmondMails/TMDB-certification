import { useState } from 'react'
import PopularFilms from '../popular-films/PopularFilms'

import TopRatedFilms from '../top-rated-films/TopRatedFilms'
import UpcomingFilms from '../upcoming-films/UpcomingFilms'
import HomeHeader from './components/home-header/HomeHeader'

const Home = () => {
  const [collection, setCollection] = useState<number>(1)
  console.log('Collection', collection)

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
