import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

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
    <StyledMovieThumb>
      {clickable ? (
        <>
          <Link to={`/movie/${movieId}`}>
            <img src={image} alt={alt} className="clickable" />
            <span className="movie-name">{movieName}</span>
          </Link>
        </>
      ) : (
        <img src={image} alt={alt} />
      )}
    </StyledMovieThumb>
  );
};

// css
const StyledMovieThumb = styled.div`
  text-align: center;
  position: relative;
  border-radius: 8px;

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
