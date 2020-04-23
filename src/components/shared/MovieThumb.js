import React from 'react';
import { Link } from '@reach/router';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const MovieThumb = ({ alt, clickable, image, movieId, movieName }) => {
  return (
    <StyledMovieThumb>
      {clickable ? (
        <>
          <Link to={`/${movieId}`}>
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

MovieThumb.propTypes = {
  image: PropTypes.string,
  movieId: PropTypes.number,
  clickable: PropTypes.bool,
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
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
    transition: all 0.4s ease;

    :hover {
      opacity: 0.8;
    }

    .clickable {
      cursor: pointer;
    }
  }

  .movie-name {
    background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.8));
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
