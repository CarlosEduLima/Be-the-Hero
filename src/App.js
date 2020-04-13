import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Header from './components/Header';
import Home from './pages/home';
import Organization from './pages/orgs';
import About from './pages/about';
import Routes from './routes';
import './Global.css';
import './App.css';
import './Main.css';

function App() {
  return (
    <>
      <Header />
      <div id="app">
        <Router>
          <Routes />
        </Router>
      </div>
    </>
  );
}

export default App;