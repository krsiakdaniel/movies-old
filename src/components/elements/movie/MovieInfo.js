import React from 'react';
import { Box, Heading, List, ListItem, Text } from '@chakra-ui/core';
import { css } from '@emotion/core';
import { MovieThumb } from '../shared';
import { useTranslation } from 'react-i18next';

import PropTypes from 'prop-types';
import { calcTime, convertMoney } from '../../../utils';
import { BASE_URL_IMAGE, SIZE_POSTER } from '../../../config';

import imgNoPoster from '../../../assets/svg/error/no-image.svg';

// TODO: use chakra
const cssMovieBackdrop = css({
  // TODO: fix bg
  // background: `${(props) =>
  //   props.backdrop
  //     ? `url('${BASE_URL_IMAGE}${SIZE_BACKDROP}${props.backdrop}')`
  //     : '#34495e'}`,
  // backgroundSize: 'cover !important',
  // backgroundPosition: 'center !important',
  background: '#edf2f7', // gray100
  width: '100%',
  padding: '32px 16px',
  marginBottom: 32,
  // animation: 'animateMovieInfo 1s',
  // TODO: fix
  // @keyframes animateMovieInfo {
  //   from {
  //     opacity: 0,
  //   }
  //   to {
  //     opacity: 1,
  //   }
  // }

  '@media screen and (max-width: 768px)': {
    padding: '32px 24px',
  },
});

const cssMovie = css({
  maxWidth: 1200,
  minHeight: 450,
  margin: '0 auto',
  background: '#2d3748',
  borderRadius: 8,
  position: 'relative',
});

const cssMovieThumbWrap = css({
  width: 300,
  float: 'left',

  '@media screen and (max-width: 768px)': {
    width: '100%',
    marginBottom: 16,
  },
});

const cssMovieThumb = css({
  borderRadius: 8,
});

const cssMovieInfo = css({
  color: '#fff',
  marginLeft: 300,
  padding: 32,

  '@media screen and (max-width: 768px)': {
    marginLeft: 0,
  },
});

const cssMovieTitle = css({
  marginBottom: 16,
});

const cssMovieOverview = css({
  marginBottom: 16,
  lineHeight: 1,
});

const cssMovieDetails = css({
  lineHeight: 1,
});

const MovieInfo = ({ movie, time, budget, revenue }) => {
  const { t } = useTranslation();

  return (
    <Box css={cssMovieBackdrop} backdrop={movie.backdrop_path}>
      <Box css={cssMovie}>
        <Box css={cssMovieThumbWrap}>
          <MovieThumb
            image={
              movie.poster_path
                ? `${BASE_URL_IMAGE}${SIZE_POSTER}${movie.poster_path}`
                : imgNoPoster
            }
            isClickable={false}
            alt={movie.title}
            css={cssMovieThumb}
          />
        </Box>

        <Box css={cssMovieInfo}>
          <Heading css={cssMovieTitle}>{movie.title}</Heading>
          <Text css={cssMovieOverview}>{movie.overview}</Text>

          <List css={cssMovieDetails}>
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
  );
};

MovieInfo.propTypes = {
  movie: PropTypes.object,
  directors: PropTypes.array,
};

export { MovieInfo };
