/** @jsx jsx */
import React, { useState, useRef } from 'react';
import { jsx, css } from '@emotion/core';
import { useTranslation } from 'react-i18next';

import PropTypes from 'prop-types';
import { cypress } from '../../utils';

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
          placeholder={t('search')}
          onChange={handleSearch}
          value={state}
          data-cy={cypress.searchBar}
        />
      </div>
    </div>
  );
};

SearchBar.propTypes = {
  callback: PropTypes.func,
};

// css
const cssSearchBarWrap = css`
  width: 100%;
`;

const cssSearchBar = css`
  max-width: 1200px;
  margin: 0 auto;
  padding: 16px;
  width: 100%;
  position: relative;

  @media screen and (max-width: 768px) {
    padding: 0 24px;
  }

  input {
    margin: 32px auto;
    width: 100%;
    height: 40px;
    position: relative;
    display: inline-block;
    min-width: 0;
    padding: 4px 16px;
    color: rgba(0, 0, 0, 0.5);
    font-size: 14px;
    line-height: 1.5715;
    background-color: #fff;
    background-image: none;
    border: 1px solid #d9d9d9;
    border-radius: 8px;
    transition: all 0.4s;

    :focus {
      outline: 0;
      border-color: #27ae60;
      box-shadow: 0 0 0 2px rgba(39, 174, 96, 0.1);
    }
  }
`;

export { SearchBar };
