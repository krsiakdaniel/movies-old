import React from 'react';
import { Box, Spinner as SpinnerChakra } from '@chakra-ui/core';
import { css } from '@emotion/core';

const Spinner = () => {
  return (
    <Box css={cssSpinnerWrap}>
      <SpinnerChakra
        thickness="4px"
        speed="0.4s"
        emptyColor="gray.200"
        color="green.500"
        size="xl"
      />
    </Box>
  );
};

// TODO: use chakra
const cssSpinnerWrap = css({
  margin: '16px auto',
  textAlign: 'center',
  maxWidth: 1200,
});

export { Spinner };
