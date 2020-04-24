import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import { Header, Footer } from './components/layout';
import {
  Home,
  About,
  Movie,
  NoSearchResults,
  NotFound,
} from './components/pages';

import { GlobalStyle } from './styles';

// TODO: load pages from 'routes.js'
const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/:movieId" component={Movie} />
          <Route path="/About" component={About} />
          <Route path="/NoSearchResults" component={NoSearchResults} />
          <Route path="/NotFound" component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
