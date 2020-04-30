import React from 'react';
import { css } from '@emotion/core';
import { Link } from 'react-router-dom';

import { cypress } from 'config';

type Props = {
  alt: string;
  clickable: boolean;
  image: string;
  movieId: number;
  movieName: string;
};

// TODO: create config for url '/movie/'
const MovieThumb = ({ alt, clickable, image, movieId, movieName }: Props) => {
  return (
    <div css={cssMovieThumb}>
      {clickable ? (
        <Link to={`/movie/${movieId}`}>
          <img src={image} alt={alt} className="clickable" />
          <span className="movie-name" data-cy={cypress.movieName}>
            {movieName}
          </span>
        </Link>
      ) : (
        <img src={image} alt={alt} />
      )}
    </div>
  );
};

// TODO: remove all 'className' in app
const cssMovieThumb = css`
  text-align: center;
  position: relative;
  border-radius: 8px;
  min-width: 132px;
  min-height: 198px;
  background: #fff;

  img {
    object-fit: cover;
    border: transparent;
    border-radius: 8px;
    transition: all 0.4s ease;

    :hover {
      opacity: 0.8;
    }

    .clickable {
      cursor: pointer;
    }
  }

  .movie-name {
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
  }
`;

export { MovieThumb };
