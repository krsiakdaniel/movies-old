import React from 'react';
import { withRouter } from 'react-router-dom';
import { Box, Heading, Image, Input, SimpleGrid, Text } from '@chakra-ui/core';

const Movies = () => {
  return (
    <>
      <Box>
        <Heading as="h1" mb={4}>
          Movies
        </Heading>
      </Box>
      <Box>
        <Input placeholder="Search ..." size="lg" mb={4} />
      </Box>
      <SimpleGrid
        columns={{ sm: 1, md: 3, lg: 6 }}
        spacingX="16px"
        spacingY="16px"
      >
        <Box>
          <Image
            src="https://image.tmdb.org/t/p/w500/k7Bg8WaFeSMWwxCKX2BhGjNMTjA.jpg"
            alt="i"
          />
        </Box>
        <Box>
          <Image
            src="https://image.tmdb.org/t/p/w500/or1gBugydmjToAEq7OZY0owwFk.jpg"
            alt="i"
          />
        </Box>
        <Box>
          <Image
            src="https://image.tmdb.org/t/p/w300/5LrI4GiCSrChgkdskVZiwv643Kg.jpg"
            alt="i"
          />
        </Box>
        <Box>
          <Image
            src="https://image.tmdb.org/t/p/w500/pTpxQB1N0waaSc3OSn0e9oc8kx9.jpg"
            alt="i"
          />
        </Box>
        <Box>
          <Image
            src="https://image.tmdb.org/t/p/w500/ooR8S0O0ZgxK2OBnT1GWHrr9w92.jpg"
            alt="i"
          />
        </Box>
        <Box>
          <Image
            src="https://image.tmdb.org/t/p/w300/bYR8O1H1ZlME7Dm9ysfTYZnRDpw.jpg"
            alt="i"
          />
        </Box>
      </SimpleGrid>
    </>
  );
};

export default withRouter(Movies);
