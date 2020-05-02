import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';

import { AppLayout } from './components/layout';
import { Home, About, Movie, NotFound } from './components/pages';

import { pageUrls } from 'config';

const App = () => {
  return (
    <div>
      <HashRouter>
        <ThemeProvider>
          <CSSReset />
          <AppLayout>
            <Switch>
              <Route exact path={pageUrls.home}>
                <Home />
              </Route>
              <Route path={`${pageUrls.movie}${pageUrls.movieId}`}>
                <Movie />
              </Route>
              <Route path={pageUrls.about}>
                <About />
              </Route>
              <Route>
                <NotFound />
              </Route>
            </Switch>
          </AppLayout>
        </ThemeProvider>
      </HashRouter>
    </div>
  );
};

export { App };
