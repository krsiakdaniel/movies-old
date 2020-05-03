import React from 'react';
import { Box, Image, Text } from '@chakra-ui/core';
import { css } from '@emotion/core';
import { Link } from 'react-router-dom';

import { cypress, pageUrls } from 'config';

type Props = {
  alt: string;
  isClickable: boolean;
  image: string;
  movieId: number;
  movieName: string;
};

const MovieThumb = ({ alt, isClickable, image, movieId, movieName }: Props) => {
  return (
    <Box css={cssMovieThumb}>
      {isClickable ? (
        <Link to={`${pageUrls.movie}${movieId}`}>
          <Image src={image} alt={alt} css={cssMovieImage} />
          <Text css={cssMovieName} data-cy={cypress.movieName}>
            {movieName}
          </Text>
        </Link>
      ) : (
        <Image src={image} alt={alt} />
      )}
    </Box>
  );
};

// TODO: use chakra
const cssMovieThumb = css({
  textAlign: 'center',
  position: 'relative',
  borderRadius: 8,
  background: '#fff',
  // TODO: set default responsive size
  // minWidth: 132,
  // minHeight: 198,
});

const cssMovieImage = css({
  borderRadius: 4,
  transition: 'all 0.4s ease',

  ':hover': {
    opacity: 0.8,
  },
});

const cssMovieName = css({
  background: 'linear-gradient(rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.9))',
  fontSize: 12, // xs
  lineHeight: 1,
  color: '#fff',
  borderBottomLeftRadius: 4,
  borderBottomRightRadius: 4,
  padding: 4,
  position: 'absolute',
  bottom: 0,
  left: 0,
  right: 0,
});

export { MovieThumb };
