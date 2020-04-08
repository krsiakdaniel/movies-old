import React from 'react';
import { Box, Heading, Image, Link } from '@chakra-ui/core';

type Props = {
  result: any;
};

const Result = ({ result }: Props) => {
  const imdbUrl = `https://www.imdb.com/title/${result.imdbID}/`;

  return (
    <Box className="result" mb={8}>
      <Link href={imdbUrl} isExternal>
        <Image src={result.Poster} alt={result.Title} borderRadius={4} />
      </Link>
      <Heading as="h3">{result.Title}</Heading>
      <Link href={imdbUrl} isExternal>
        View on IMDB →
      </Link>
    </Box>
  );
};

export default Result;
