import React from 'react';
import { Box, Spinner as SpinnerChakra } from '@chakra-ui/react';

const Spinner = () => {
  return (
    <Box>
      <SpinnerChakra
        thickness="4px"
        speed="0.4s"
        emptyColor="gray.200"
        color="green.500"
        size="xl"
        mx="auto"
        my="32px"
      />
    </Box>
  );
};

export { Spinner };
