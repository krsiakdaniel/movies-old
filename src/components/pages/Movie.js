import React from 'react';

import Navigation from '../elements/Navigation';
import MovieInfo from '../elements/MovieInfo';
import Grid from '../elements/Grid';
import Actor from '../elements/Actor';
import Spinner from '../elements/Spinner';
import NotFound from './NotFound';

import { useMovieFetch } from '../hooks/index';

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

export default Movie;
