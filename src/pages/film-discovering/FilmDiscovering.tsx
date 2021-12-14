import { useEffect, useState } from 'react'
import { cleanDiscoverStoreEvent } from '@/store/discover/events'
import DiscoverHeader from './components/DiscoverHeader/DiscoverHeader'
import DiscoverResults from './components/DiscoverResults/DiscoverResults'

const FilmDiscovering = () => {
  const [type, setType] = useState<number>(0)

  useEffect(() => {
    return () => cleanDiscoverStoreEvent()
  }, [])

  return (
    <div>
      <DiscoverHeader type={type} setType={setType} />
      <DiscoverResults type={type} />
    </div>
  )
}

export default FilmDiscovering
