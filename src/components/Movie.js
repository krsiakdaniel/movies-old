import React from 'react';

import Navigation from './elements/Navigation';
import MovieInfo from './elements/MovieInfo';
import MovieInfoBar from './elements/MovieInfoBar';
import Grid from './elements/Grid';
import Actor from './elements/Actor';
import Spinner from './elements/Spinner';

import { useMovieFetch } from './hooks/useMovieFetch';

const Movie = ({ movieId }) => {
  const [movie, isLoading, error] = useMovieFetch(movieId);

  // TODO: return NotFound page
  if (error) return <div>Something went wrong ...</div>;
  if (isLoading) return <Spinner />;

  return (
  <>
    <Navigation movie={movie.original_title} />
    <MovieInfo movie={movie} />
    <MovieInfoBar
      time={movie.runtime}
      budget={movie.budget}
      revenue={movie.revenue}
    />
    <Grid header="Actors">
      {movie.actors.map(actor => (
        <Actor key={actor.credit_id} actor={actor} />
      ))}
    </Grid>
  </>
  )
};

export default Movie;
