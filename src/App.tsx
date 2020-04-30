import React from 'react';
import { css, Global } from '@emotion/core';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Header, Footer } from './components/layout';
import {
  Home,
  About,
  Movie,
  NoSearchResults,
  NotFound,
} from './components/pages';

// TODO: load pages from 'routes.js'
const App = () => {
  return (
    <div>
      <Global styles={cssGlobal} />
      <Router>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          {/*TODO: use router 5.1, useParams to match 'movieId' */}
          <Route path="/movie/:movieId" component={Movie} />
          <Route path="/about">
            <About />
          </Route>
          <Route path="/no-search-results">
            <NoSearchResults />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
};

const cssGlobal = css`
  html {
    box-sizing: border-box;
    font-size: 16px; // base size for '1rem'
  }

  *,
  *:before,
  *:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: 'Poppins', sans-serif;
    color: #032139;
    overflow-y: scroll;
    background: #f7fbfb;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    margin-bottom: 16px;
  }

  p {
    margin-bottom: 16px;
  }

  ol,
  ul {
    list-style: none;
  }

  // TODO: add proper typography rules
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  ul,
  li,
  p,
  span,
  input,
  label {
    line-height: 1;
  }

  a {
    color: #27ae60;
    text-decoration: none;
    display: inline-block;
  }

  a:hover,
  a:active,
  a:focus {
    text-decoration: underline;
  }

  a:focus {
    outline: none;
  }

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`;

export { App };
