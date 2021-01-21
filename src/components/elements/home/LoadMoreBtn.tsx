import React from 'react';
import { Box, Button } from '@chakra-ui/react';
import { css } from '@emotion/react';

type Props = {
  text: string;
  callback: React.MouseEventHandler<HTMLElement>;
};

const LoadMoreBtn = ({ text, callback }: Props) => {
  return (
    <Box css={cssLoadMoreBtnRow}>
      <Button
        type="button"
        colorScheme="green"
        onClick={callback}
        css={cssLoadMoreBtn}
      >
        {text}
      </Button>
    </Box>
  );
};

// TODO: use chakra
const cssLoadMoreBtnRow = css({
  margin: '32px auto',
  textAlign: 'center',
  maxWidth: 1200,
});

const cssLoadMoreBtn = css({
  minWidth: 128,
  cursor: 'pointer',
});

export { LoadMoreBtn };
