import React from 'react';
import { css, Global } from '@emotion/core';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { AppLayout } from './components/layout';
import { Home, About, Movie, NotFound } from './components/pages';

const App = () => {
  return (
    <div>
      <Global styles={cssGlobal} />
      <HashRouter>
        <AppLayout>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            {/*TODO: use router 5.1 and hooks to get 'movieId' */}
            <Route path="/movie/:movieId" component={Movie} />
            <Route path="/about">
              <About />
            </Route>
            <Route>
              <NotFound />
            </Route>
          </Switch>
        </AppLayout>
      </HashRouter>
    </div>
  );
};

const cssGlobal = css({
  html: {
    boxSizing: 'border-box',
    fontSize: 16, // base size for '1rem'
  },

  '*, *:before, *:after': {
    boxSizing: 'inherit',
    margin: 0,
    padding: 0,
  },

  body: {
    fontFamily: 'Poppins',
    color: '#032139',
    overflowY: 'scroll',
    background: '#f7fbfb',
  },

  'h1, h2, h3, h4, h5, h6': {
    marginBottom: 16,
  },

  p: {
    marginBottom: 16,
  },

  'ol, ul': {
    listStyle: 'none',
  },

  'h1, h2, h3, h4, h5, h6, ul, li, p, span, input, label': {
    lineHeight: 1,
  },

  a: {
    color: '#27ae60',
    textDecoration: 'none',
    display: 'inline-block',
  },

  'a:hover, a:active, a:focus': {
    textDecoration: 'underline',
  },

  'a:focus': {
    outline: 'none',
  },

  img: {
    display: 'block',
    width: '100%',
    height: 'auto',
  },
});

export { App };
