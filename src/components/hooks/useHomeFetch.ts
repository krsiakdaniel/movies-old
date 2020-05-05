import { useCallback, useState, useEffect } from 'react';

import { Movie } from 'models/Movie';
import { BASE_URL_MOVIES_POPULAR } from '../../config';

type MovieState = typeof initialState;

// TODO: read REDUX
const initialState = {
  movies: [] as Movie[],
  currentPage: 0,
  totalPages: 0,
};

export const useHomeFetch = (searchTerm: string) => {
  const [state, setState] = useState<MovieState>(initialState);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchMovies = useCallback(async (endpoint: string) => {
    setError(false);
    setIsLoading(true);

    const isLoadMore = endpoint.search('page');

    try {
      // TODO: await rozdelit
      const result = await (await fetch(endpoint)).json();
      const results: Movie[] = result.results;

      setState({
        movies:
          isLoadMore !== -1 ? [...state.movies, ...results] : [...results],
        currentPage: result.page,
        totalPages: result.total_pages,
      });
    } catch (error) {
      setError(true);
      // eslint-disable-next-line no-console
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMovies(`${BASE_URL_MOVIES_POPULAR}`);
  }, [fetchMovies]);

  return { state, isLoading, error, fetchMovies };
};
