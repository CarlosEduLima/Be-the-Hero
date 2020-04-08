import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './pages/home';
import Organization from './pages/orgs';
import About from './pages/about';

export default function Routes() {
  return (
    <Router>
    <Switch>
      <Route path="/" exact component={Home} />
      <Route path="/Organization" component={Organization} />
      <Route path="/About" component={About} />
      </Switch>
    </Router>
  );
}
