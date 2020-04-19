import React, { useState } from 'react';
import {
  POPULAR_BASE_URL,
  SEARCH_BASE_URL,
  SIZE_POSTER,
  SIZE_BACKDROP,
  BASE_URL_IMAGE,
} from '../config';

// import Components
import HeroImage from './elements/HeroImage';
import SearchBar from './elements/SearchBar';
import Grid from './elements/Grid';
import MovieThumb from './elements/MovieThumb';
import LoadMoreBtn from './elements/LoadMoreBtn';
import Spinner from './elements/Spinner';

// Custom Hook
import { useHomeFetch } from './hooks/useHomeFetch';

import NoImage from './images/no_image.jpg';

const Home = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [
    {
      state: { movies, currentPage, totalPages, heroImage },
      loading,
      error,
    },
    fetchMovies,
  ] = useHomeFetch(searchTerm);

  const searchMovies = search => {
    const endpoint = search ? SEARCH_BASE_URL + search : POPULAR_BASE_URL;

    setSearchTerm(search);
    fetchMovies(endpoint);

  }

  const loadMoreMovies = () => {
    const searchEndpoint = `${SEARCH_BASE_URL}${searchTerm}&page=${currentPage + 1}`;
    const popularEndpoint = `${POPULAR_BASE_URL}&page=${currentPage + 1}`;

    const endpoint = searchTerm ? searchEndpoint : popularEndpoint;

    fetchMovies(endpoint);

  }

  if (error) return <div>Something went wrong ...</div>;
  if (!movies[0]) return <Spinner />;

  return (
    <>
      {!searchTerm && (
        <HeroImage
          image={`${BASE_URL_IMAGE}${SIZE_BACKDROP}${heroImage.backdrop_path}`}
          title={heroImage.original_title}
          text={heroImage.overview}
        />
      )}
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
