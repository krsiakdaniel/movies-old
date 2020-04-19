import React from 'react';
import PropTypes from 'prop-types';

import NoImage from '../../assets/jpg/error/no-image.jpg';
import { BASE_URL_IMAGE, SIZE_POSTER } from '../../config/apiMovies';
import styled from 'styled-components';

const Actor = ({ actor }) => {
  return (
    <>
      <StyledActor>
        <img
          src={
            actor.profile_path
              ? `${BASE_URL_IMAGE}${SIZE_POSTER}${actor.profile_path}`
              : NoImage
          }
          alt={actor.name}
        />
        <div className="actor-name">{actor.name}</div>
        <div className="actor-character">{actor.character}</div>
      </StyledActor>
    </>
  );
};

Actor.propTypes = {
  actor: PropTypes.object,
};

// css
const StyledActor = styled.div`
  color: #fff;
  background: #1c1c1c;
  border-radius: 20px;
  padding: 5px;
  text-align: center;

  img {
    display: block;
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 15px;
  }

  .actor-name {
    display: block;
    font-size: 18px;
    margin: 10px 0 0 0;
  }

  .actor-character {
    display: block;
    font-size: 16px;
    margin: 0 0 10px 0;
  }
`;

export default Actor;
