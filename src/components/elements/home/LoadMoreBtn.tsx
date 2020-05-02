import React from 'react';
import { Button } from '@chakra-ui/core';
import { css } from '@emotion/core';

type Props = {
  text: string;
  callback: React.MouseEventHandler<HTMLElement>;
};

const LoadMoreBtn = ({ text, callback }: Props) => {
  return (
    <Button
      type="button"
      variantColor="green"
      css={cssLoadMoreBtn}
      onClick={callback}
    >
      {text}
    </Button>
  );
};

const cssLoadMoreBtn = css({
  minWidth: 150,
  cursor: 'pointer',
  display: 'block',
  margin: '32px auto',

  '@media screen and (max-width: 768px)': {
    margin: '24px auto',
  },
});

export { LoadMoreBtn };
