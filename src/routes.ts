import { Home, About, Movie } from './components/pages'

export const routes = {
  home: {
    path: '/',
    component: Home,
    exact: true,
  },
  about: {
    path: '/about',
    component: About,
  },
  movie: {
    path: '/movie/',
    component: Movie,
  },
  movieId: {
    path: '/movie/:movieId',
    component: Movie,
  },
}
