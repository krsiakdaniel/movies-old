import React from 'react';
import { Box, Image, Text } from '@chakra-ui/react';
import { css } from '@emotion/react';

import imgNoActor from 'assets/jpg/error/no-image.jpg';
import { BASE_URL_IMAGE, SIZE_POSTER } from 'config';

// TODO: fix - actor = 'object' throws error, define using TS 'interface'
type Props = {
  actor: any;
};

const Actor = ({ actor }: Props) => {
  return (
    <Box css={cssActor}>
      <Image
        src={
          actor.profile_path
            ? `${BASE_URL_IMAGE}${SIZE_POSTER}${actor.profile_path}`
            : imgNoActor
        }
        alt={actor.name}
        css={cssActorImage}
      />
      <Box css={cssActorDetails}>
        <Text css={cssActorName}>{actor.name}</Text>
        <Text css={cssActorCharacter}>{actor.character}</Text>
      </Box>
    </Box>
  );
};

// TODO: use chakra
const cssActor = css({
  border: '1px solid #e2e8f0',
  borderRadius: 4,
  padding: 4,
  textAlign: 'center',
  background: '#fff',
});

const cssActorImage = css({
  borderRadius: 4,
  marginBottom: 8,
});

const cssActorDetails = css({
  fontSize: 14,
  padding: '0 4px',
});

const cssActorName = css({
  fontWeight: 700,
});

const cssActorCharacter = css({
  marginBottom: 4,
});

export { Actor };
