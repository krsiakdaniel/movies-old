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

const cssMovieThumb = css`
  text-align: center;
  position: relative;
  border-radius: 8px;
  background: #fff;
  // TODO: fix this, causes problems
  min-width: 132px;
  min-height: 198px;
`;

const cssMovieImage = css`
  object-fit: cover;
  border: transparent;
  border-radius: 8px;
  transition: all 0.4s ease;
  cursor: pointer;

  :hover {
    opacity: 0.8;
  }
`;

const cssMovieName = css`
  background: linear-gradient(rgba(255, 255, 255, 0.1), rgba(0, 0, 0, 0.8));
  font-size: 12px;
  color: #fff;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  padding: 8px 4px;
  position: absolute;
  bottom: 7px;
  left: 0;
  right: 0;
`;

export { MovieThumb };
