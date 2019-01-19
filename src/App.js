import React, { Component } from 'react';
import {Router, Route, Switch, Redirect} from 'react-router-dom';

import Login from './components/Login';
import Home from './components/Home';

import history from './history';
import { isSignedInByCookies } from './utilities';

import Register from './components/Register'

import './App.style.css';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
    isSignedInByCookies() === true
      ? <Component {...props} />
      : <Redirect to='/login' />
  )} />
)

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute path="/" component={Home} />
        </Switch>
      </Router>
    );
  }
}

export default App;
