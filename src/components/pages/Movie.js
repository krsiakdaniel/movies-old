import React from 'react'
import { useTranslation } from 'react-i18next'
import { useParams } from 'react-router-dom'
import { Helmet } from 'react-helmet'

import { Actor, MovieInfo, Breadcrumb } from '../elements/movie'
import { Grid, Spinner } from '../elements/shared'
import { Page404 } from './index'

import { useMovieFetch } from '../hooks/useMovieFetch'

const Movie = () => {
  const { t } = useTranslation()
  let { movieId } = useParams()

  const [movie, isLoading, error] = useMovieFetch(movieId)
  if (isLoading) {
    return <Spinner />
  }
  if (error) {
    return <Page404 />
  }

  return (
    <>
      <Helmet>
        <title>
          {movie.title} | {t('shared.app.title')}
        </title>
        <meta name="description" content={movie.overview} />
      </Helmet>
      <Breadcrumb movieTitle={movie.title} />
      <MovieInfo
        movie={movie}
        time={movie.runtime}
        budget={movie.budget}
        revenue={movie.revenue}
      />
      <Grid header={t('movie.actors')}>
        {movie?.actors?.map((actor) => (
          <Actor key={actor.credit_id} actor={actor} />
        ))}
      </Grid>
    </>
  )
}

export { Movie }
