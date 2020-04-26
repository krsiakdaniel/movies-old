/** @jsx jsx */
import React from 'react';
import { jsx, css } from '@emotion/core';

import { BASE_URL_IMAGE, SIZE_POSTER } from '../../config';
import NoImage from '../../assets/jpg/error/no-image.jpg';

// TODO: fix - actor = 'object' throws error, define using TS 'interface'
type Props = {
  actor: any;
};

const Actor = ({ actor }: Props) => {
  return (
    <div css={cssActor}>
      <img
        src={
          actor.profile_path
            ? `${BASE_URL_IMAGE}${SIZE_POSTER}${actor.profile_path}`
            : NoImage
        }
        alt={actor.name}
        className="actor__img"
      />
      <div className="actor-details">
        <div className="actor-details__name">{actor.name}</div>
        <div className="actor-details__character">{actor.character}</div>
      </div>
    </div>
  );
};

const cssActor = css`
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  padding: 4px;
  text-align: center;
  background: #fff;

  // TODO: start using BEM
  .actor {
    &__img {
      height: 160px;
      object-fit: cover;
      border-radius: 8px;

      @media screen and (max-width: 480px) {
        height: 200px;
      }
    }

    &-details {
      padding: 0 4px;
      font-size: 14px;

      &__name {
        display: block;
        margin: 8px 0 0 0;
        font-weight: 700;
      }

      &__character {
        display: block;
        margin: 0 0 8px 0;
      }
    }
  }
`;

export { Actor };
