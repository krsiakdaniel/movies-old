import React from 'react';
import { Box, Input } from '@chakra-ui/core';

type Props = {
  handleInput: any;
  search: any;
};

const Search = ({ handleInput, search }: Props) => {
  return (
    <>
      <Box>
        <Input
          type="text"
          placeholder="Search ..."
          onChange={handleInput}
          onKeyPress={search}
          size="lg"
          mb={4}
        />
      </Box>
    </>
  );
};

export default Search;
