import { useEffect, useState } from 'react'
import { cleanSearchStoreEvent } from '@/store/search/events'
import { searchQuery } from './helpers'
import SearchHeader from './components/SearchHeader/SearchHeader'
import SearchResults from './components/SearchResults/SearchResults'

const SearchPage = () => {
  const [type, setType] = useState<number>(0)
  const [searchText, setSearchText] = useState<string>('')

  useEffect(() => {
    window.scroll(0, 0)
    searchQuery(type, searchText)

    return () => cleanSearchStoreEvent()
  }, [type])

  useEffect(() => {
    if (!searchText) {
      cleanSearchStoreEvent()
    }
  }, [searchText])

  return (
    <div>
      <SearchHeader
        setSearchText={setSearchText}
        setType={setType}
        type={type}
      />
      <SearchResults type={type} searchText={searchText} />
    </div>
  )
}

export default SearchPage
