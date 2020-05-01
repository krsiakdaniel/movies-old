import React from 'react';
import { css } from '@emotion/core';
import { Link } from 'react-router-dom';

import { cypress, pageUrls } from 'config';

type Props = {
  alt: string;
  clickable: boolean;
  image: string;
  movieId: number;
  movieName: string;
};

const MovieThumb = ({ alt, clickable, image, movieId, movieName }: Props) => {
  return (
    <div css={cssMovieThumb}>
      {clickable ? (
        <Link to={`${pageUrls.movie}${movieId}`}>
          <img src={image} alt={alt} css={cssMovieImage} />
          <span css={cssMovieName} data-cy={cypress.movieName}>
            {movieName}
          </span>
        </Link>
      ) : (
        <img src={image} alt={alt} />
      )}
    </div>
  );
};

const cssMovieThumb = css({
  textAlign: 'center',
  position: 'relative',
  borderRadius: 8,
  background: '#fff',
  // TODO: fix this, causes problems
  // minWidth: 132,
  // minHeight: 198,
});

const cssMovieImage = css({
  objectFit: 'cover',
  border: 'transparent',
  borderRadius: 8,
  transition: 'all 0.4s ease',
  cursor: 'pointer',

  ':hover': {
    opacity: 0.8,
  },
});

const cssMovieName = css({
  background: 'linear-gradient(rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.9))',
  fontSize: 12,
  color: '#fff',
  borderBottomLeftRadius: 4,
  borderBottomRightRadius: 4,
  padding: '8px 4px',
  position: 'absolute',
  bottom: 7,
  left: 0,
  right: 0,
});

export { MovieThumb };
