import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import Base from './components/Base.jsx';
import HomePage from './components/HomePage.jsx';
import LoginPage from './containers/LoginPage.jsx';
import SignUpPage from './containers/SignUpPage.jsx';

const Routes = () => (
  <BrowserRouter >
    <div>
      <Route path="/" component={Base} />
      <Route exact path="/" component={HomePage} />
      <Route exact path="/login" component={LoginPage} />
      <Route exact path="/signup" component={SignUpPage} />
    </div>
  </BrowserRouter>
);

export default Routes;
