import React, { useState } from 'react';

import { NoResults, NotFound } from './index';
import { LoadMoreBtn, SearchBar } from '../elements';
import { Grid, MovieThumb, Spinner } from '../shared';
import { useHomeFetch } from '../hooks';

import {
  BASE_URL_IMAGE,
  SIZE_POSTER,
  BASE_URL_MOVIES_POPULAR,
  BASE_URL_MOVIES_SEARCH,
} from '../../config';

import NoImage from '../../assets/jpg/error/no-image.jpg';

const TEXT_MOVIES = 'Popular Movies';
const TEXT_RESULTS = 'Search Results ×';
const TEXT_LOAD_MORE = 'More ...';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');

  const [
    {
      state: { movies, currentPage, totalPages },
      isLoading,
      error,
    },
    fetchMovies,
  ] = useHomeFetch(searchTerm);

  const searchMovies = (searchTerm) => {
    const endpoint = searchTerm
      ? BASE_URL_MOVIES_SEARCH + searchTerm
      : BASE_URL_MOVIES_POPULAR;

    setSearchTerm(searchTerm);
    fetchMovies(endpoint);
  };

  const loadMoreMovies = () => {
    const endpointSearch = `${BASE_URL_MOVIES_SEARCH}${searchTerm}&page=${
      currentPage + 1
    }`;
    const endpointPopular = `${BASE_URL_MOVIES_POPULAR}&page=${
      currentPage + 1
    }`;
    const endpoint = searchTerm ? endpointSearch : endpointPopular;
    fetchMovies(endpoint);
  };

  if (isLoading) return <Spinner />;
  if (movies.length === 0) return <NoResults />;
  if (error) return <NotFound />;
  console.log('log:', movies);

  // TODO: clear results using '×'
  return (
    <>
      <SearchBar callback={searchMovies} />
      <Grid header={searchTerm ? TEXT_RESULTS : TEXT_MOVIES}>
        {movies.map((movie) => (
          <MovieThumb
            clickable
            key={movie.id}
            movieId={movie.id}
            movieName={movie.title}
            image={
              movie.poster_path
                ? `${BASE_URL_IMAGE}${SIZE_POSTER}${movie.poster_path}`
                : NoImage
            }
            alt={movie.original_title}
          />
        ))}
      </Grid>
      {isLoading && <Spinner />}
      {currentPage < totalPages && !isLoading && (
        <LoadMoreBtn text={TEXT_LOAD_MORE} callback={loadMoreMovies} />
      )}
    </>
  );
};

export { Home };
