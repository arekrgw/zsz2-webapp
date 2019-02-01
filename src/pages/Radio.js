import React, { Component } from 'react'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import {runAuth} from '../actions/logingActions'
import {getSongs} from '../actions/radioActions'
import history from '../utils/history';
import Loader from '../components/LoadingPage'
import { isSignedInByCookies } from '../utils/utilities';

class Radio extends Component {
  redirect = () => {
    history.push("/login")
  }
  fetchSongs = (date = null) => {
    this.props.getSongs(this.redirect, date);
  }
  componentDidMount(){

    if(isSignedInByCookies()){
        this.props.getSongs(this.redirect);
    }
    else{
        this.redirect();
    }
  }
  render() {
    return (
      <div>
        <Loader isLayout pageLabel="Wczytywanie piosenek..."/>
      </div>
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
    runAuth,
    getSongs
  },
    dispatch
  )
}

export default connect(mapStateToProps, matchDispatchToProps)(Radio)