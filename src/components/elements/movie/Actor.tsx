import React from 'react';
import { css } from '@emotion/core';

import { BASE_URL_IMAGE, SIZE_POSTER } from 'config';
import NoImage from 'assets/jpg/error/no-image.jpg';

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
        css={cssActorImage}
      />
      <div css={cssActorDetails}>
        <div css={cssActorName}>{actor.name}</div>
        <div css={cssActorCharacter}>{actor.character}</div>
      </div>
    </div>
  );
};

const cssActor = css`
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.12);
  border-radius: 8px;
  padding: 4px;
  text-align: center;
  background: #fff;
`;

const cssActorImage = css`
  height: 160px;
  object-fit: cover;
  border-radius: 8px;

  @media screen and (max-width: 480px) {
    height: 200px;
  }
`;

const cssActorDetails = css`
  padding: 0 4px;
  font-size: 14px;
`;

const cssActorName = css`
  display: block;
  margin: 8px 0 0 0;
  font-weight: 700;
`;

const cssActorCharacter = css`
  display: block;
  margin: 0 0 8px 0;
`;

export { Actor };
