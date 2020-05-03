import React, { useState, useRef } from 'react';
import { Box, Input } from '@chakra-ui/core';
import { css } from '@emotion/core';
import { useTranslation } from 'react-i18next';

import PropTypes from 'prop-types';
import { cypress } from '../../../config';

// TODO: use chakra
const cssSearchBarRow = css({
  width: '100%',
});

const cssSearchBar = css({
  maxWidth: 1200,
  margin: '0 auto',
  padding: '0 16px',

  '@media screen and (max-width: 768px)': {
    padding: '0 24px',
  },
});

const cssSearchBarInput = css({
  margin: '32px 0',
  transition: 'all 0.4s',

  ':focus': {
    outline: 0,
    borderColor: '#27ae60',
    boxShadow: '0 0 0 2px rgba(39, 174, 96, 0.1)',
  },
});

const SearchBar = ({ callback }) => {
  const { t } = useTranslation();

  const [state, setState] = useState('');
  const timeOut = useRef(null);

  const handleSearch = (e) => {
    const searchInputValue = e.target.value;
    setState(searchInputValue);

    clearTimeout(timeOut.current);
    timeOut.current = setTimeout(() => {
      callback(searchInputValue);
    }, 1000);
  };

  return (
    <Box css={cssSearchBarRow}>
      <Box css={cssSearchBar}>
        <Input
          type="text"
          placeholder={t('search.placeholder')}
          onChange={handleSearch}
          value={state}
          data-cy={cypress.searchBar}
          css={cssSearchBarInput}
        />
      </Box>
    </Box>
  );
};

SearchBar.propTypes = {
  callback: PropTypes.func,
};

export { SearchBar };
