import React from 'react';
import { Link } from '@reach/router';
import styled from 'styled-components';
import PropTypes from 'prop-types';

const MovieThumb = ({ clickable, image, movieId }) => {
  return (
    <StyledMovieThumb>
      {clickable ? (
        <Link to={`/${movieId}`}>
          <img src={image} className="clickable" alt="i" />
        </Link>
      ) : (
        <img src={image} alt="x" />
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
  img {
    width: 100%;
    height: auto;
    /* max-height: 350px; */
    transition: all 0.3s;
    object-fit: cover;
    border-radius: 8px;

    :hover {
      opacity: 0.8;
    }

    /* @media screen and (max-width: 1024px) {
      height: 300px;
    }

    @media screen and (max-width: 768px) {
      height: 350px;
    }

    @media screen and (max-width: 600px) {
      max-height: 300px;
    }

    @media screen and (max-width: 375px) {
      max-height: 450px;
    } */

    .clickable {
      cursor: pointer;
    }
  }
`;

export default MovieThumb;
