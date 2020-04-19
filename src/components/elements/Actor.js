import React from 'react';
import PropTypes from 'prop-types';

import NoImage from '../images/no_image.jpg';

import { BASE_URL_IMAGE, SIZE_POSTER} from '../../config';
import { StyledActor } from '../styles/StyledActor';

const Actor = ({ actor }) => (
  <StyledActor>
    <img
      src={
        actor.profile_path
          ? `${BASE_URL_IMAGE}${SIZE_POSTER}${actor.profile_path}`
          : NoImage
      }
      alt="actorthumb"
    />
    <span className="actor-name">{actor.name}</span>
    <span className="actor-character">{actor.character}</span>
  </StyledActor>
);

Actor.propTypes = {
  actor: PropTypes.string,
}

export default Actor;
