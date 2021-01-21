import React from 'react';
import { Box, Spinner as SpinnerChakra } from '@chakra-ui/react';
import { css } from '@emotion/react';

const Spinner = () => {
  return (
    <Box css={cssSpinnerRow}>
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
const cssSpinnerRow = css({
  margin: '32px auto',
  textAlign: 'center',
  maxWidth: 1200,
});

export { Spinner };
