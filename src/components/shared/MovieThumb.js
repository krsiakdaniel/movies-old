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
            <img src={image} className="clickable" alt={alt} />
          </Link>
          <span className="movie-name">{movieName}</span>
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

  img {
    object-fit: cover;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
    transition: all 0.4s;
    :hover {
      transform: scale(1.1);
    }

    .clickable {
      cursor: pointer;
    }

    @media screen and (max-width: 768px) {
      :hover {
        transform: none;
      }
    }
  }

  .movie-name {
    font-size: 12px;
  }
`;

export { MovieThumb };
