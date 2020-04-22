import React from 'react';

import { NotFound } from './index';
import { Actor, MovieInfo, Navigation } from '../elements';
import { Grid, Spinner } from '../shared';
import { useMovieFetch } from '../hooks';

const Movie = ({ movieId }) => {
  const [movie, isLoading, error] = useMovieFetch(movieId);

  if (isLoading) return <Spinner />;
  if (error) return <NotFound />;
  console.log('log:', movie);

  return (
    <>
      <Navigation movie={movie.original_title} />
      <MovieInfo
        movie={movie}
        time={movie.runtime}
        budget={movie.budget}
        revenue={movie.revenue}
      />
      <Grid header="Actors">
        {movie.actors.map((actor) => (
          <Actor key={actor.credit_id} actor={actor} />
        ))}
      </Grid>
    </>
  );
};

export { Movie };
