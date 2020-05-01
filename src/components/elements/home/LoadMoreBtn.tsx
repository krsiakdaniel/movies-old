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

const cssLoadMoreBtn = css({
  background: '#27ae60',
  border: 'transparent',
  minWidth: 150,
  color: '#fff',
  cursor: 'pointer',
  transition: 'all 0.4s',
  borderRadius: 4,
  fontSize: 24,
  display: 'block',
  margin: '32px auto',
  padding: '4px 8px',
  outline: 'none',

  ':hover': {
    background: '#2ecc71',
  },

  '@media screen and (max-width: 768px)': {
    margin: '24px auto',
  },
});

export { LoadMoreBtn };
