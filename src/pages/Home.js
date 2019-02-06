import React, { Component } from 'react'
import { isSignedInByCookies } from '../utils/utilities';
import history from '../utils/history';
import { Route } from 'react-router-dom';
import {runAuth} from '../actions/logingActions'

import Layout from '../layout/Layout'
import Loader from '../components/LoadingPage'
import BottomNavigation from '../components/BottomNavigation'

import Radio from './Radio';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

class Home extends Component {
    componentDidMount(){

        const redirect = () => {
            history.push("/login")
        }

        if(isSignedInByCookies()){
            this.props.runAuth(redirect);
        }
        else{
            redirect();
        }
    }
    render() {
        if(this.props.isLogged){
            return (
                <Layout fullVh bottomNavMargin>
                    <Route path="/radio" component={Radio} />
                    <BottomNavigation />
                </Layout>
            )
        }
        else{
            return (
                
                    <Loader pageLabel="Wczytywanie..."/>
                   
            )
        }
            
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

