import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { ThemeProvider, CSSReset } from '@chakra-ui/core';

import { AppLayout } from './components/layout';
import { Home, About, Movie, NotFound } from './components/pages';

const App = () => {
  return (
    <div>
      <HashRouter>
        <ThemeProvider>
          <CSSReset />
          <AppLayout>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/movie/:movieId">
                <Movie />
              </Route>
              <Route path="/about">
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
