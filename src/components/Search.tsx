import React from 'react';
import { Box, Input } from '@chakra-ui/core';

const Search = () => {
  return (
    <>
      <Box>
        <Input type="text" placeholder="Search ..." size="lg" mb={4} />
      </Box>
    </>
  );
};

export default Search;
