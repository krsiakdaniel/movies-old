import React from 'react';
import { createGlobalStyle } from 'styled-components';
import { Router } from '@reach/router';

import Header from './elements/Header';
import Home from './Home';
import Movie from './Movie';
import NotFound from './NotFound';

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
