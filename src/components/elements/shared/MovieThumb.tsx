import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

import { cypress } from 'config';
import { routes } from 'routes';

type Props = {
  alt: string;
  isClickable: boolean;
  image: string;
  movieId: number;
  movieName: string;
};

const MovieThumb = ({ alt, isClickable, image, movieId, movieName }: Props) => {
  return (
    <Box>
      {isClickable ? (
        <Link to={`${routes.movie.path}${movieId}`}>
          <Image src={image} alt={alt} />
          <Text data-cy={cypress.movieName}>{movieName}</Text>
        </Link>
      ) : (
        <Image src={image} alt={alt} />
      )}
    </Box>
  );
};

export { MovieThumb };
