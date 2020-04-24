import React from 'react';
import { useTranslation } from 'react-i18next';

import { NotFound } from './index';
import { Actor, MovieInfo, Navigation } from '../elements';
import { Grid, Spinner } from '../shared';
import { useMovieFetch } from '../hooks';

const Movie = ({ movieId }) => {
  const { t } = useTranslation();

  const [movie, isLoading, error] = useMovieFetch(movieId);
  if (isLoading) return <Spinner />;
  if (error) return <NotFound />;
  console.log('Log - page - movie:', movie);
  console.log('Log - movieId:', movie.movieId);

  return (
    <>
      <Navigation movie={movie.original_title} />
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
