import React, { Component } from 'react';
import {Router, Route, Switch, Redirect} from 'react-router-dom';
import { createGlobalStyle } from 'styled-components';
import Login from './pages/Login';
import Home from './pages/Home';

import history from './history';
import { isSignedInByCookies } from './utilities';

import Register from './pages/Register'

import './App.style.css';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Montserrat');

    *, *::before, *::after{
      margin: 0;
      padding: 0;
      font-family: Montserrat;
      box-sizing: border-box;
    }
    a {
      color: inherit;
      text-decoration: none;
    }

    a:visited {
      color: inherit;
    }

    body {
      background: linear-gradient(to right, rgba(0,0,0,0), rgb(27, 0, 145)), linear-gradient(to right, rgba(255,0,100,.3), rgba(255,100,127,.2)), linear-gradient(to top right, rgb(0, 255, 234), rgba(81, 5, 182, 0)), radial-gradient(closest-corner at 20% 80%, yellow, red);
      background-attachment: fixed;
    }
`;


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
      <>
      <GlobalStyle />
      <Router history={history}>
        <Switch>
          <Route exact path="/register" component={Register} />
          <Route exact path="/login" component={Login} />
          <PrivateRoute path="/" component={Home} />
        </Switch>
      </Router>
      </>
    );
  }
}

export default App;
