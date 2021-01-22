import React from 'react'
import { useTranslation } from 'react-i18next'
import PropTypes from 'prop-types'
import { Box, Heading, List, ListItem, Text } from '@chakra-ui/react'

import { MovieThumb } from '../shared'

import { calcTime, convertMoney } from '../../../utils'
import { BASE_URL_IMAGE, SIZE_POSTER } from '../../../config'

import imgNoPoster from '../../../assets/svg/error/no-image.svg'

export const MovieInfo = ({ movie, time, budget, revenue }) => {
  const { t } = useTranslation()

  return (
    <Box backdrop={movie.backdrop_path}>
      <Box>
        <Box>
          <MovieThumb
            image={
              movie.poster_path
                ? `${BASE_URL_IMAGE}${SIZE_POSTER}${movie.poster_path}`
                : imgNoPoster
            }
            isClickable={false}
            alt={movie.title}
          />
        </Box>

        <Box>
          <Heading>{movie.title}</Heading>
          <Text>{movie.overview}</Text>

          <List>
            lineHeight: 1,
            <ListItem>
              <strong>{t('movie.director')}:</strong>
              {movie?.directors?.map((director) => (
                <Text key={director.credit_id}>
                  {director.name}
                  {movie.directors.length > 1 ? ', ' : ''}
                </Text>
              ))}
            </ListItem>
            <ListItem>
              <strong>{t('movie.runningTime')}:</strong> {calcTime(time)}
            </ListItem>
            <ListItem>
              <strong>{t('movie.budget')}:</strong> {convertMoney(budget)}
            </ListItem>
            <ListItem>
              <strong>{t('movie.revenue')}:</strong> {convertMoney(revenue)}
            </ListItem>
          </List>
        </Box>
      </Box>
    </Box>
  )
}

MovieInfo.propTypes = {
  movie: PropTypes.object,
  directors: PropTypes.array,
}
