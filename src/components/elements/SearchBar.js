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
  height: 105px;
  background: #bdc3c7;
  padding: 25px 20px 0px 20px;
  box-sizing: border-box;
  color: #000;
`;

const StyledSearchBarContent = styled.div`
  max-width: 1280px;
  width: 100%;
  height: 55px;
  background: #ecf0f1;
  margin: 0 auto;
  border-radius: 32px;
  position: relative;
  color: #000;

  input {
    font-size: 28px;
    position: absolute;
    left: 0px;
    margin: 8px;
    padding: 8px 16px;
    border: 0;
    width: 95%;
    background: transparent;
    height: 40px;
    color: #000;
    box-sizing: border-box;

    :focus {
      outline: none;
    }

    @media screen and (max-width: 720px) {
      font-size: 28px;
    }
  }
`;

export default SearchBar;
