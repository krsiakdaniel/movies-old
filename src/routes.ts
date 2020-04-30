import {
  Home,
  Movie,
  About,
  NoSearchResults,
  NotFound,
} from './components/pages';

const routes = [
  {
    component: Home,
    exact: true,
    path: '/',
  },
  {
    component: Movie,
    path: '/Movie',
  },
  {
    component: About,
    path: '/About',
  },
  {
    component: NoSearchResults,
    path: '/NoSearchResults',
  },
  {
    component: NotFound,
    path: '/NotFound',
  },
];

export { routes };
