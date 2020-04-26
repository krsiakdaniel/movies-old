import React from 'react';
import styled from 'styled-components';

// TODO: what is proper type for 'callback' or function?
type Props = {
  text: string;
  callback: any;
};

const LoadMoreBtn = ({ text, callback }: Props) => {
  return (
    <StyledLoadMoreBtn type="button" onClick={callback}>
      {text}
    </StyledLoadMoreBtn>
  );
};

// css
const StyledLoadMoreBtn = styled.button`
  background: #27ae60;
  border: transparent;
  min-width: 150px;
  color: #fff;
  cursor: pointer;
  transition: all 0.4s;
  border-radius: 4px;
  font-size: 24px;
  display: block;
  margin: 32px auto;
  padding: 4px 8px;
  outline: none;

  :hover {
    background: #2ecc71;
  }
`;

export { LoadMoreBtn };
