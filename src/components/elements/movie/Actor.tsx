import React from 'react'
import { Box, Image, Text } from '@chakra-ui/react'

import { BASE_URL_IMAGE, SIZE_POSTER } from 'config'

import imgNoActor from 'assets/jpg/error/no-image.jpg'

// TODO: fix - actor = 'object' throws error, define using TS 'interface'
type Props = {
  actor: any
}

const Actor = ({ actor }: Props) => {
  return (
    <Box>
      <Image
        src={
          actor.profile_path
            ? `${BASE_URL_IMAGE}${SIZE_POSTER}${actor.profile_path}`
            : imgNoActor
        }
        alt={actor.name}
      />
      <Box>
        <Text>{actor.name}</Text>
        <Text>{actor.character}</Text>
      </Box>
    </Box>
  )
}

export { Actor }
