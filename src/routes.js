import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

import AppLayout from './components/layout/AppLayout';
import Menu from './components/Menu';
import { About, Error404, Movies } from './pages';

const Routes = () => (
  <Router>
    <AppLayout>
      <Menu />
      <Switch>
        <Route exact path="/" component={Movies} />
        <Route exact path="/about" component={About} />
        <Route exact path="*" component={Error404} />
      </Switch>
    </AppLayout>
  </Router>
);

export default Routes;
