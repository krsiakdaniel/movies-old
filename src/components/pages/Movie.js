import React from 'react';
import { useTranslation } from 'react-i18next';

import { Actor, MovieInfo, SubNavigation } from '../elements/movie';
import { Grid, Spinner } from '../elements/shared';
import { NotFound } from './index';

import { useMovieFetch } from '../hooks';

const Movie = ({ match }) => {
  const { t } = useTranslation();
  const movieId = match.params.movieId;
  // TODO: use hooks to get 'movieId'

  const [movie, isLoading, error] = useMovieFetch(movieId);
  if (isLoading) {
    return <Spinner />;
  }
  if (error) {
    return <NotFound />;
  }

  return (
    <>
      <SubNavigation movie={movie.original_title} />
      <MovieInfo
        movie={movie}
        time={movie.runtime}
        budget={movie.budget}
        revenue={movie.revenue}
      />
      <Grid header={t('movieActors')}>
        {movie?.actors?.map((actor) => (
          <Actor key={actor.credit_id} actor={actor} />
        ))}
      </Grid>
    </>
  );
};

export { Movie };
