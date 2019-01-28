import React, { Component } from 'react'
import { isSignedInByCookies } from '../utils/utilities';
import history from '../utils/history';
import { Route } from 'react-router-dom';
import {runAuth} from '../actions/logingActions'

import Loader from '../components/LoadingPage'
import Layout from '../layout/Layout'

import Radio from './Radio';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

class Home extends Component {
    state = {
        isLogged: false
    }
    static getDerivedStateFromProps(props){
        const redirect = () => {
            history.push("/login")
        }
        if(isSignedInByCookies() ){
            props.runAuth(redirect);
            return {
                isLogged: props.isLogged
            }
        }
        else{
            return null
        }


        
    }
    render() {
            return (
                <Layout>
                    Home
                    <Route path="/radio" component={Radio} />
                </Layout>
            )
    }
}


function mapStateToProps(state){
    return {
      isLogged: state.loginReducer
    }
  }
  //laczenie actions
  function matchDispatchToProps(dispatch){
    return bindActionCreators({
      runAuth
    },
      dispatch
    )
  }

export default connect(mapStateToProps, matchDispatchToProps)(Home);

