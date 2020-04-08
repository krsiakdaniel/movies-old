import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Box, Heading, SimpleGrid } from '@chakra-ui/core';
import axios from 'axios';

import Search from '../components/Search';

type Props = {
  e: any;
};

const Movies = () => {
  const [state, setState] = useState({
    searchQuery: '',
  });
  const apiUrl = 'http://www.omdbapi.com/?apikey=6fc8b664';
  // example: http://www.omdbapi.com/?apikey=6fc8b664&s=batman

  const search = ({ e }: Props) => {
    if (e.key === 'Enter') {
      axios(apiUrl + '&s=' + state.searchQuery).then((data) => {
        console.log(data);
      });
    }
  };

  const handleInput = ({ e }: Props) => {
    let searchValue = e.target.value;

    setState((prevState) => {
      return { ...prevState, searchQuery: searchValue };
    });
  };

  return (
    <>
      <Box>
        <Heading as="h1" mb={4}>
          Movies
        </Heading>
      </Box>
      <Search handleInput={handleInput} search={search} />
      <SimpleGrid
        columns={{ sm: 1, md: 3, lg: 6 }}
        spacingX="16px"
        spacingY="16px"
      >
        <p>results</p>
      </SimpleGrid>
    </>
  );
};

export default withRouter(Movies);
