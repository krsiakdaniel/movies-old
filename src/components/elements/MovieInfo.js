import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { MovieThumb } from '../shared';
import { calcTime, convertMoney } from '../../utils';

import { BASE_URL_IMAGE, SIZE_BACKDROP, SIZE_POSTER } from '../../config';

import NoImage from '../../assets/jpg/error/no-image.jpg';

const TEXT_DIRECTOR = 'Director: ';
const TEXT_DIRECTORS = 'Directors: ';

const MovieInfo = ({ movie, time, budget, revenue }) => {
  return (
    <StyledMovieInfo backdrop={movie.backdrop_path}>
      <div className="movieinfo">
        <div className="movieinfo__thumb">
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

        <div className="movieinfo__text">
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>

          <ul>
            <li>
              <strong>Imdb rating:</strong> {movie.vote_average}
            </li>
            <li>
              <strong>
                {movie.directors.length > 1 ? TEXT_DIRECTORS : TEXT_DIRECTOR}
              </strong>
              {movie.directors.map((director) => (
                <span key={director.credit_id}>
                  {director.name}
                  {movie.directors.length > 1 ? ', ' : ''}
                </span>
              ))}
            </li>
            <li>
              <strong>Running time:</strong> {calcTime(time)}
            </li>
            <li>
              <strong>Budget:</strong> {convertMoney(budget)}
            </li>
            <li>
              <strong>Revenue:</strong> {convertMoney(revenue)}
            </li>
          </ul>
        </div>
      </div>
    </StyledMovieInfo>
  );
};

MovieInfo.propTypes = {
  movie: PropTypes.object,
  directors: PropTypes.array,
};

// css
const StyledMovieInfo = styled.div`
  background: ${(props) =>
    props.backdrop
      ? `url('${BASE_URL_IMAGE}${SIZE_BACKDROP}${props.backdrop}')`
      : '#000'};
  background-size: cover !important;
  background-position: center !important;
  width: 100%;
  padding: 32px 16px;
  margin-bottom: 32px;
  animation: animateMovieinfo 1s;

  .movieinfo {
    max-width: 1200px;
    min-height: 450px;
    margin: 0 auto;
    background: rgb(0, 0, 0, 0.7);
    border-radius: 16px;
    position: relative;

    &__thumb {
      width: 300px;
      float: left;

      @media screen and (max-width: 768px) {
        width: 100% !important;
      }
    }

    &__text {
      padding: 40px;
      color: #fff;
      overflow: hidden;

      ul {
        margin-top: 16px;
        li {
          margin-bottom: 8px;
        }
      }
    }
  }

  @media screen and (max-width: 768px) {
    min-height: 600px;
    height: auto;
  }

  @keyframes animateMovieinfo {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
`;

export { MovieInfo };
