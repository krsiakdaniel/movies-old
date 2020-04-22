import React from 'react';
import { Router } from '@reach/router';

import { Header, Footer } from './layout';
import { Home, Movie, NotFound, NoResults } from './pages';

import { GlobalStyle } from '../styles';

const App = () => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Router>
        <Home path="/" />
        <Movie path="/:movieId" />
        <NotFound path="/NotFound" />
        <NoResults path="/NoResults" />
      </Router>
      <Footer />
    </>
  );
};

export default App;
