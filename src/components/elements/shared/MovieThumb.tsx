import React from 'react'
import { Link } from 'react-router-dom'
import { Box, Image, Text } from '@chakra-ui/react'

import { routes } from 'routes'

type Props = {
  alt: string
  isClickable: boolean
  image: string
  movieId: number
  movieName: string
}

export const MovieThumb = ({
  alt,
  isClickable,
  image,
  movieId,
  movieName,
}: Props) => {
  return (
    <Box>
      {isClickable ? (
        <Link to={`${routes.movie.path}${movieId}`}>
          <Image src={image} alt={alt} />
          <Text data-cy="movie-name">{movieName}</Text>
        </Link>
      ) : (
        <Image src={image} alt={alt} />
      )}
    </Box>
  )
}
