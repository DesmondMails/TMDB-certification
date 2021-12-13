import React, { useState } from 'react'
import { Button, Tab, Tabs, TextField } from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'
import { useStyles } from './styles'
import { useDebouncedCallback } from 'use-debounce/lib'
import { searchMoviesFX, searchTvShowsFX } from '@/store/search/effects'
import { useEffect } from 'react'
import { useStore } from 'effector-react'
import { $searchStore } from '@/store/search'
import FilmsList from '@/components/films-list/FilmsList'
import { cleanSearchStoreEvent } from '@/store/search/events'
import { searchQuery } from './helpers'

const SearchPage = () => {
  const styles = useStyles()
  const res = useStore($searchStore)
  const { films, tvShows } = res

  const [type, setType] = useState<number>(0)
  const [searchText, setSearchText] = useState<string>('')

  const handleSearch = useDebouncedCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const text = e.target.value
      setSearchText(text)
      searchQuery(type, searchText)
    },
    300
  )

  const handleChangedTab = (e: any, newValue: number) => {
    setType(newValue)
  }

  useEffect(() => {
    window.scroll(0, 0)
    searchQuery(type, searchText)

    return () => cleanSearchStoreEvent()
  }, [type])

  return (
    <div>
      <div className={styles.searchHeader}>
        <div className={styles.search}>
          <TextField
            style={{ flex: 1 }}
            className='searchBox'
            label='Search'
            variant='filled'
            onChange={handleSearch}
          />
        </div>
        <Tabs
          value={type}
          indicatorColor='primary'
          textColor='primary'
          onChange={handleChangedTab}
          style={{ paddingBottom: 5 }}
          className={styles.tabContainer}
        >
          <Tab label='Search Movies' />
          <Tab label='Search TV Series' />
        </Tabs>
      </div>
      <div>
        {type === 0 && films?.results?.length > 0 && (
          <FilmsList
            list={films.results}
            page={films.page}
            fetchData={searchMoviesFX}
            query={searchText}
            total_pages={films.total_pages}
          />
        )}
        {type === 1 && tvShows?.results?.length > 0 && (
          <FilmsList
            list={tvShows.results}
            page={tvShows.page}
            fetchData={searchTvShowsFX}
            query={searchText}
            total_pages={tvShows.total_pages}
          />
        )}
      </div>
    </div>
  )
}

export default SearchPage
