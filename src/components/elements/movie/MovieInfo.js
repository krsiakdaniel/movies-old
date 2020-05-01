import React from 'react';
import { css } from '@emotion/core';
import { useTranslation } from 'react-i18next';

import { MovieThumb } from '../shared';

import PropTypes from 'prop-types';
import { calcTime, convertMoney } from '../../../utils';
import { BASE_URL_IMAGE, SIZE_BACKDROP, SIZE_POSTER } from '../../../config';

import NoImage from '../../../assets/svg/error/no-image.svg';

const MovieInfo = ({ movie, time, budget, revenue }) => {
  const { t } = useTranslation();

  return (
    <div css={cssMovieBackdrop} backdrop={movie.backdrop_path}>
      <div css={cssMovieInfo}>
        <div css={cssMovieInfoThumb}>
          <MovieThumb
            image={
              movie.poster_path
                ? `${BASE_URL_IMAGE}${SIZE_POSTER}${movie.poster_path}`
                : NoImage
            }
            clickable={false}
            alt={movie.title}
          />
        </div>

        <div css={cssMovieInfoText}>
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>

          <ul css={cssMovieInfoList}>
            <li>
              <strong>{t('ratingIMDb')}</strong> {movie.vote_average}
            </li>
            <li>
              <strong>
                {movie?.directors?.length > 1
                  ? t('movieInfoDirector')
                  : t('movieInfoDirectors')}
              </strong>
              {movie?.directors?.map((director) => (
                <span key={director.credit_id}>
                  {director.name}
                  {movie.directors.length > 1 ? ', ' : ''}
                </span>
              ))}
            </li>
            <li>
              <strong>{t('movieInfoRunningTime')}</strong> {calcTime(time)}
            </li>
            <li>
              <strong>{t('movieInfoBudget')}</strong> {convertMoney(budget)}
            </li>
            <li>
              <strong>{t('movieInfoRevenue')}</strong> {convertMoney(revenue)}
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

MovieInfo.propTypes = {
  movie: PropTypes.object,
  directors: PropTypes.array,
};

const cssMovieBackdrop = css`
  background: ${(props) =>
    props.backdrop
      ? `url('${BASE_URL_IMAGE}${SIZE_BACKDROP}${props.backdrop}')`
      : '#34495e'};
  background-size: cover !important;
  background-position: center !important;
  width: 100%;
  padding: 32px 16px;
  margin-bottom: 32px;
  animation: animateMovieInfo 1s;

  @media screen and (max-width: 768px) {
    padding: 32px 24px;
  }

  @keyframes animateMovieInfo {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

const cssMovieInfo = css`
  max-width: 1200px;
  min-height: 450px;
  margin: 0 auto;
  background: rgb(0, 0, 0, 0.7);
  border-radius: 8px;
  position: relative;
`;

const cssMovieInfoThumb = css`
  width: 300px;
  float: left;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

const cssMovieInfoText = css`
  padding: 40px;
  color: #fff;
  overflow: hidden;
`;

const cssMovieInfoList = css`
  li {
    margin-bottom: 4px;
  }
`;

export { MovieInfo };
