import React, { useState, useRef } from 'react';
import { css } from '@emotion/core';
import { useTranslation } from 'react-i18next';

import PropTypes from 'prop-types';
import { cypress } from '../../../config';

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
    <div css={cssSearchBarWrap}>
      <div css={cssSearchBar}>
        <input
          type="text"
          placeholder={t('search.placeholder')}
          onChange={handleSearch}
          value={state}
          data-cy={cypress.searchBar}
          css={cssSearchBarInput}
        />
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  callback: PropTypes.func,
};

const cssSearchBarWrap = css({
  width: '100%',
});

const cssSearchBar = css({
  maxWidth: 1200,
  margin: '0 auto',
  padding: '0 16px',
  width: '100%',
  position: 'relative',

  '@media screen and (max-width: 768px)': {
    padding: '0 24px',
  },
});

const cssSearchBarInput = css({
  margin: '32px auto',
  width: '100%',
  height: 40,
  position: 'relative',
  display: 'inline-block',
  minWidth: 0,
  padding: '4px 16px',
  color: 'rgba(0, 0, 0, 0.5)',
  fontSize: 14,
  lineHeight: 1.5715,
  backgroundColor: '#fff',
  backgroundImage: 'none',
  border: '1px solid #d9d9d9',
  borderRadius: 8,
  transition: 'all 0.4s',

  ':focus': {
    outline: 0,
    borderColor: '#27ae60',
    boxShadow: '0 0 0 2px rgba(39, 174, 96, 0.1)',
  },
});

export { SearchBar };
