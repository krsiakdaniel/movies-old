import React from 'react';
import { HashRouter, Switch, Route } from 'react-router-dom';
import { ChakraProvider } from '@chakra-ui/react';

import { AppLayout } from 'components/layout';
import { Home, About, Movie, Page404 } from 'components/pages';

import { routes } from 'routes';

const App = () => {
  return (
    <div>
      <HashRouter>
        <ChakraProvider>
          <AppLayout>
            <Switch>
              <Route exact path={routes.home.path}>
                <Home />
              </Route>
              <Route path={routes.movieId.path}>
                <Movie />
              </Route>
              <Route path={routes.about.path}>
                <About />
              </Route>
              <Route>
                <Page404 />
              </Route>
            </Switch>
          </AppLayout>
        </ChakraProvider>
      </HashRouter>
    </div>
  );
};

export { App };
