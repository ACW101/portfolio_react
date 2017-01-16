import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, IndexRoute, hashHistory} from "react-router";

import Layout from './pages/Layout';
import Featured from './pages/Featured';
import Resume from './pages/Resume';
import Work from './pages/Work';
import Contact from './pages/Contact';

import './index.css';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" name="layout" component={Layout}>
    <IndexRoute component={Featured}></IndexRoute>
      <Route path="resume" name="about" component={Resume}></Route>
      <Route path="work" name="work" component={Work}></Route>
      <Route path="contact" name="contact" component={Contact}></Route>
    </Route>
  </Router>,
  document.getElementById('root')
);
