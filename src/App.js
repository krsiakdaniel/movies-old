import React from 'react';
import { Router } from '@reach/router';

import Header from './components/elements/Header';
import Home from './components/pages/Home';
import Movie from './components/pages/Movie';
import NotFound from './components/pages/NotFound';
import NoResults from './components/pages/NoResults';

import GlobalStyle from './styles/global';

// TODO: add spinner to load instead of entire page
const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Router>
        <Home path="/" />
        <Movie path="/:movieId" />
        <NotFound default />
        <NoResults path="/NoResults" />
      </Router>
    </>
  );
};

export default App;
