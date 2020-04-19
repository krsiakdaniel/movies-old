import React from 'react';
import PropTypes from 'prop-types';

import MovieThumb from './MovieThumb';
import NoImage from '../../assets/jpg/error/no-image.jpg';
import {
  BASE_URL_IMAGE,
  SIZE_BACKDROP,
  SIZE_POSTER,
} from '../../config/apiMovies';

import styled from 'styled-components';

const TEXT_DIRECTOR = 'Director';
const TEXT_DIRECTORS = 'Directors';

const MovieInfo = ({ movie }) => {
  return (
    <StyledMovieInfo backdrop={movie.backdrop_path}>
      <div className="movieinfo-content">
        <div className="movieinfo-thumb">
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

        <div className="movieinfo-text">
          <h1>{movie.title}</h1>
          <p>{movie.overview}</p>

          <div className="rating-director">
            <div>
              <h3>Imdb rating</h3>
              <div className="score">{movie.vote_average}</div>
            </div>
            <div className="director">
              <h3>
                {movie.directors.length > 1 ? TEXT_DIRECTOR : TEXT_DIRECTORS}
              </h3>
              {movie.directors.map((director) => (
                <p key={director.credit_id}>{director.name}</p>
              ))}
            </div>
          </div>
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
  padding: 40px 16px;
  box-sizing: border-box;
  animation: animateMovieinfo 1s;

  .movieinfo-content {
    max-width: 1280px;
    min-height: 450px;
    margin: 0 auto;
    background: rgb(0, 0, 0, 0.7);
    border-radius: 16px;
    position: relative;
  }

  .movieinfo-thumb {
    width: 300px;
    float: left;

    @media screen and (max-width: 768px) {
      width: 100% !important;
    }
  }

  .movieinfo-text {
    padding: 40px;
    color: #fff;
    overflow: hidden;
  }

  .rating-director {
    display: flex;
    justify-content: flex-start;
  }

  .score {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 35px;
    height: 35px;
    background: #fff;
    color: #000;
    font-weight: 800;
    border-radius: 24px;
    margin: 0px 0 0 0;
  }

  .director {
    margin: 0 0 0 40px;
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

export default MovieInfo;
