import React from 'react';
import { css } from '@emotion/core';

type Props = {
  text: string;
  callback: React.MouseEventHandler<HTMLElement>;
};

const LoadMoreBtn = ({ text, callback }: Props) => {
  return (
    <button css={cssLoadMoreBtn} type="button" onClick={callback}>
      {text}
    </button>
  );
};

// css
const cssLoadMoreBtn = css`
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
