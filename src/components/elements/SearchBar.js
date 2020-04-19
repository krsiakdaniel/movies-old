import React, { useState, useRef } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const TEXT_SEARCH_BAR = 'Search ...';

const SearchBar = ({ callback }) => {
  const [state, setState] = useState('');
  const timeOut = useRef(null);

  const handleSearch = (e) => {
    const searchInputValue = e.target.value;
    setState(searchInputValue);

    clearTimeout(timeOut.current);
    timeOut.current = setTimeout(() => {
      callback(searchInputValue);
    }, 500);
  };

  return (
    <>
      <StyledSearchBar>
        <StyledSearchBarContent>
          <input
            type="text"
            placeholder={TEXT_SEARCH_BAR}
            onChange={handleSearch}
            value={state}
          />
        </StyledSearchBarContent>
      </StyledSearchBar>
    </>
  );
};

SearchBar.propTypes = {
  callback: PropTypes.func,
};

// css
const StyledSearchBar = styled.div`
  width: 100%;
  box-sizing: border-box;
`;

const StyledSearchBarContent = styled.div`
  max-width: 1280px;
  width: 100%;
  margin: 0 auto;
  position: relative;

  input {
    margin: 32px auto;
    width: 100%;
    height: 40px;
    color: #000;
    box-sizing: border-box;
    position: relative;
    display: inline-block;
    min-width: 0;
    padding: 4px 16px;
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
    line-height: 1.5715;
    background-color: #fff;
    background-image: none;
    border: 1px solid #d9d9d9;
    border-radius: 32px;
    transition: all 0.3s;

    :focus {
      outline: 0;
      border-color: #40a9ff;
      box-shadow: 0 0 0 2px rgba(24, 144, 255, 0.2);
    }
  }
`;

export default SearchBar;
