import React, { useState, useRef } from 'react'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'
import { Box, Input } from '@chakra-ui/react'

export const SearchBar = ({ callback }) => {
  const { t } = useTranslation()

  const [state, setState] = useState('')
  const timeOut = useRef(null)

  const handleSearch = (e) => {
    const searchInputValue = e.target.value
    setState(searchInputValue)

    clearTimeout(timeOut.current)
    timeOut.current = setTimeout(() => {
      callback(searchInputValue)
    }, 1000)
  }

  return (
    <Box>
      <Box>
        <Input
          type="text"
          placeholder={t('search.placeholder')}
          onChange={handleSearch}
          value={state}
          data-testid="search-bar"
        />
      </Box>
    </Box>
  )
}

SearchBar.propTypes = {
  callback: PropTypes.func,
}
