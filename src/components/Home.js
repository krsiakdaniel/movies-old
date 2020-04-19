import React, { useState } from 'react';
import {
  BASE_URL_MOVIES_POPULAR,
  BASE_URL_MOVIES_SEARCH,
  SIZE_POSTER,
  BASE_URL_IMAGE,
} from '../config';

import SearchBar from './elements/SearchBar';
import Grid from './elements/Grid';
import MovieThumb from './elements/MovieThumb';
import LoadMoreBtn from './elements/LoadMoreBtn';
import Spinner from './elements/Spinner';

import { useHomeFetch } from './hooks/useHomeFetch';

import NoImage from './images/no_image.jpg';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [
    {
      state: { movies, currentPage, totalPages },
      loading,
      error,
    },
    fetchMovies,
  ] = useHomeFetch(searchTerm);

  const searchMovies = search => {
    const endpoint = search ? BASE_URL_MOVIES_SEARCH + search : BASE_URL_MOVIES_POPULAR;

    setSearchTerm(search);
    fetchMovies(endpoint);

  }

  const loadMoreMovies = () => {
    const searchEndpoint = `${BASE_URL_MOVIES_SEARCH}${searchTerm}&page=${currentPage + 1}`;
    const popularEndpoint = `${BASE_URL_MOVIES_POPULAR}&page=${currentPage + 1}`;

    const endpoint = searchTerm ? searchEndpoint : popularEndpoint;

    fetchMovies(endpoint);

  }

  if (error) return <div>Something went wrong ...</div>;
  if (!movies[0]) return <Spinner />;

  return (
    <>
      <SearchBar callback={searchMovies} />
      <Grid header={searchTerm ? 'Search Result' : 'Popular Movies'}>
        {movies.map(movie => (
          <MovieThumb
            key={movie.id}
            clickable
            image={
              movie.poster_path
                ? BASE_URL_IMAGE + SIZE_POSTER + movie.poster_path
                : NoImage
            }
            movieId={movie.id}
            movieName={movie.original_title}
          />
        ))}
      </Grid>
      {loading && <Spinner />}
      {currentPage < totalPages && !loading && (
        <LoadMoreBtn text="Load More" callback={loadMoreMovies} />
      )}
    </>
  );
};

export default Home;
