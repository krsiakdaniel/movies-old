import React, { useState } from 'react';
import {
  BASE_URL_IMAGE,
  SIZE_POSTER,
  BASE_URL_MOVIES_POPULAR,
  BASE_URL_MOVIES_SEARCH,
} from '../../config/apiMovies';

import SearchBar from '../elements/SearchBar';
import Grid from '../elements/Grid';
import MovieThumb from '../elements/MovieThumb';
import LoadMoreBtn from '../elements/LoadMoreBtn';
import Spinner from '../elements/Spinner';

import { useHomeFetch } from '../hooks/index';

import NoImage from '../../assets/jpg/error/no-image.jpg';

const TEXT_MOVIES = 'Popular Movies';
const TEXT_RESULTS = 'Search Results';
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

  if (error) return <div>Something went wrong ...</div>;
  console.log('log:', movies);
  if (!movies[0]) return <Spinner />;
  // TODO: add empty state movies === 0 - delka pole vzdy
  // TODO: if spinner is removed it gives type error https://tppr.me/thzwm

  return (
    <>
      <SearchBar callback={searchMovies} />
      <Grid header={searchTerm ? TEXT_RESULTS : TEXT_MOVIES}>
        {movies.map((movie) => (
          <MovieThumb
            clickable
            key={movie.id}
            movieId={movie.id}
            movieName={movie.original_title}
            image={
              movie.poster_path
                ? `${BASE_URL_IMAGE}${SIZE_POSTER}${movie.poster_path}`
                : NoImage
            }
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

export default Home;
