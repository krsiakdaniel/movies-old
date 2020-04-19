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
   * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Poppins", sans-serif;
    font-size: 14px;
    color: #032139;
  }


  h1, h2, h3, h4, h5, h6 {
    margin-top: 0;
    margin-bottom: 16px;
    line-height: 1;
    }

  p {
      margin-bottom: 16px;
  }

  ul {
    line-height: 1;
   }

  li {
    list-style: none;
    line-height: 1;
   }

  a {
    color: #27ae60;
    text-decoration: none;
    display: inline-block;
    }

  a:hover, a:active, a:focus {
    text-decoration: underline;
    }

  a:focus {
    outline: none;
    }

  input, label {
    line-height: 1;
    }

  img {
    display: block;
    width: 100%;
    height: auto;
    }
`;

export default App;
