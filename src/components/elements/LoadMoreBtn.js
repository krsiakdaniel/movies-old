import React from 'react';
import PropTypes from 'prop-types';

import styled from 'styled-components';

const LoadMoreBtn = ({ text, callback }) => {
  return (
    <StyledLoadMoreBtn type="button" onClick={callback}>
      {text}
    </StyledLoadMoreBtn>
  );
};

LoadMoreBtn.propTypes = {
  text: PropTypes.string,
  callback: PropTypes.func,
};

// css
const StyledLoadMoreBtn = styled.button`
  background: #27ae60;
  border: transparent;
  min-width: 150px;
  color: #fff;
  cursor: pointer;
  transition: all 0.4s;
  border-radius: 32px;
  font-size: 24px;
  display: block;
  margin: 16px auto;
  padding: 4px 8px;
  outline: none;

  :hover {
    background: #2ecc71;
  }
`;

export default LoadMoreBtn;
