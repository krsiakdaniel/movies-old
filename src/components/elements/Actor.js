import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { BASE_URL_IMAGE, SIZE_POSTER } from '../../config';
import NoImage from '../../assets/jpg/error/no-image.jpg';

const Actor = ({ actor }) => {
  return (
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
  );
};

Actor.propTypes = {
  actor: PropTypes.object,
};

// css
const StyledActor = styled.div`
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 8px;
  text-align: center;

  img {
    height: 160px;
    object-fit: cover;
    border-radius: 8px;

    @media screen and (max-width: 480px) {
      height: 200px;
    }
  }

  .actor-name {
    display: block;
    margin: 8px 0 0 0;
    font-weight: 700;
  }

  .actor-character {
    display: block;
    margin: 0 0 8px 0;
  }
`;

export { Actor };
