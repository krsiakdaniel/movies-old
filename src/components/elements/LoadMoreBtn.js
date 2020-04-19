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
  border: 1px solid #27ae60;
  min-width: 220px;
  color: #fff;
  cursor: pointer;
  transition: all 0.3s;
  border-radius: 8px;
  font-size: 24px;
  display: block;
  margin: 20px auto;
  padding: 4px 8px;
  outline: none;

  :hover {
    opacity: 0.8;
  }
`;

export default LoadMoreBtn;
