import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Router } from '@reach/router';

import Header from './components/elements/Header';
import Home from './components/pages/Home';
import Movie from './components/pages/Movie';
import NotFound from './components/pages/NotFound';

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
      </Router>
    </>
  );
};

// css
const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
`;

export default App;
