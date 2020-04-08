import React, { useState } from 'react';
import { withRouter } from 'react-router-dom';
import { Box, Heading } from '@chakra-ui/core';
import axios from 'axios';

import Search from '../components/Search';
import Results from '../components/Results';

const Movies = () => {
  const [state, setState] = useState({
    searchQuery: '',
    results: [],
  });
  const apiUrl = 'http://www.omdbapi.com/?apikey=6fc8b664';
  // example: http://www.omdbapi.com/?apikey=6fc8b664&s=batman

  const search = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      axios(apiUrl + '&s=' + state.searchQuery).then(({ data }) => {
        let results = data.Search;

        setState((prevState) => {
          return { ...prevState, results: results };
        });

        console.log(data);
      });
    }
  };

  const handleInput = (e: any) => {
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
      <Results results={state.results} />
    </>
  );
};

export default withRouter(Movies);
