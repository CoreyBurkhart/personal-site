import React from 'react';
import ReactDOM from 'react-dom';
import Layout from './pages/layout/Layout.js';
import Portfolio from './pages/portfolio/Portfolio.js';
import Home from './pages/home/Home.js';
import { Router, Route, IndexRoute, hashHistory } from "react-router";

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path='/' component={Layout} >
      <IndexRoute component={Home} />
      <Route path='/portfolio' component={Portfolio} />
    </Route>
  </Router>,
  document.getElementById('root')
);
