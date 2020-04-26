import {
  Home,
  Movie,
  About,
  NoSearchResults,
  NotFound,
} from './components/pages';

const routes = [
  {
    exact: true,
    path: '/',
    component: Home,
  },
  {
    path: '/Movie',
    component: Movie,
  },
  {
    path: '/About',
    component: About,
  },
  {
    path: '/NoSearchResults',
    component: NoSearchResults,
  },
  {
    path: '/NotFound',
    component: NotFound,
  },
];

export default routes;
