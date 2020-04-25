import { useState, useEffect } from 'react';

import { BASE_URL_MOVIES_POPULAR } from '../../config';

const useHomeFetch = (searchTerm) => {
  const [state, setState] = useState({ movies: [] });
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  const fetchMovies = async (endpoint) => {
    setError(false);
    setIsLoading(true);

    const isLoadMore = endpoint.search('page');

    try {
      // TODO: await rozdelit
      const result = await (await fetch(endpoint)).json();
      setState((prevState) => ({
        ...prevState,
        movies:
          isLoadMore !== -1
            ? [...prevState.movies, ...result.results]
            : [...result.results],
        currentPage: result.page,
        totalPages: result.total_pages,
      }));
    } catch (error) {
      setError(true);
      console.error(error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchMovies(`${BASE_URL_MOVIES_POPULAR}`);
  }, []);

  return [{ state, isLoading, error }, fetchMovies];
};

export { useHomeFetch };
