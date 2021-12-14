import { FC, Dispatch, SetStateAction } from 'react'
import { Tab, Tabs, TextField } from '@mui/material'
import { useStyles } from './styles'
import { useDebouncedCallback } from 'use-debounce/lib'
import { searchQuery } from '../../helpers'

interface ISearchHeader {
  setType: Dispatch<SetStateAction<number>>
  setSearchText: Dispatch<SetStateAction<string>>
  type: number
}

const SearchHeader: FC<ISearchHeader> = ({ type, setType, setSearchText }) => {
  const styles = useStyles()

  const handleSearch = useDebouncedCallback(
    (e: React.ChangeEvent<HTMLInputElement>) => {
      const text = e.target.value
      setSearchText(text)
      searchQuery(type, text)
    },
    300
  )

  const handleChangedTab = (e: any, newValue: number) => {
    setType(newValue)
  }

  return (
    <div className={styles.searchHeader}>
      <div className={styles.search}>
        <TextField
          style={{ flex: 1 }}
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
  )
}

export default SearchHeader
