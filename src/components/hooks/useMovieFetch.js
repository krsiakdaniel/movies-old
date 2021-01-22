import { useState, useEffect, useCallback } from 'react'

import { BASE_URL_API, API_KEY } from '../../config'

const useMovieFetch = (movieId) => {
  const [state, setState] = useState({})
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(false)

  const fetchData = useCallback(async () => {
    setError(false)
    setIsLoading(true)

    try {
      const endpointMovieData = `${BASE_URL_API}movie/${movieId}?api_key=${API_KEY}`
      const resultMovieData = await (await fetch(endpointMovieData)).json()

      const endpointCredits = `${BASE_URL_API}movie/${movieId}/credits?api_key=${API_KEY}`
      const resultCredits = await (await fetch(endpointCredits)).json()

      const directors = resultCredits.crew.filter(
        (member) => member.job === 'Director',
      )

      setState({
        ...resultMovieData,
        actors: resultCredits.cast,
        directors,
      })
    } catch (error) {
      setError(true)
      // eslint-disable-next-line no-console
      console.error(error)
    } finally {
      setIsLoading(false)
    }
  }, [movieId])

  useEffect(() => {
    fetchData()
  }, [fetchData])

  return [state, isLoading, error]
}

export { useMovieFetch }
