import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';

import { AppLayout } from './components/layout';
import { Home, About, Movie, Page404 } from './components/pages';

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
                <Page404 />
              </Route>
            </Switch>
          </AppLayout>
        </ThemeProvider>
      </HashRouter>
    </div>
  );
};

export { App };
