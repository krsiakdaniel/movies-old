import React, { useState } from 'react';
import { useTranslation } from 'react-i18next';

import { LoadMoreBtn, SearchBar } from '../elements/home';
import { Grid, MovieThumb, Spinner } from '../elements/shared';
import { NoSearchResults, NotFound } from './index';

import { useHomeFetch } from '../hooks';

import {
  BASE_URL_IMAGE,
  SIZE_POSTER,
  BASE_URL_MOVIES_POPULAR,
  BASE_URL_MOVIES_SEARCH,
} from '../../config';

import NoImage from '../../assets/svg/error/no-image.svg';

const Home = () => {
  const { t } = useTranslation();

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

  const noMoviesFound = movies.length === 0;

  if (isLoading) {
    return <Spinner />;
  }
  if (noMoviesFound) {
    return <NoSearchResults />;
  }
  if (error) {
    return <NotFound />;
  }

  return (
    <>
      <SearchBar callback={searchMovies} />
      <Grid header={searchTerm ? t('homeResults') : t('homeMovies')}>
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
            alt={movie.title}
          />
        ))}
      </Grid>
      {isLoading && <Spinner />}
      {currentPage < totalPages && !isLoading && (
        <LoadMoreBtn text={t('homeLoadMore')} callback={loadMoreMovies} />
      )}
    </>
  );
};

export { Home };
