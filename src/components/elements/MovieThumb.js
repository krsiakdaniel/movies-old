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
`;

export default MovieThumb;
