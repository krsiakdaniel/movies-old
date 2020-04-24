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
// TODO: useLocation + get id from route 'movie'
const App = () => {
  return (
    <>
      <GlobalStyle />
      <Router>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/movie/:movieId" component={Movie} />
          <Route path="/about" component={About} />
          <Route path="/no-search-results" component={NoSearchResults} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
};

export default App;
