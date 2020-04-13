import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Organization from './pages/orgs';
import About from './pages/about';

export default function Routes() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/organizations">
          <Organization />
        </Route>
        <Route path="/about" component={About} />
      </Switch>
    </Router>
  );
}
