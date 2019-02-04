import React, { Component } from 'react'
import styled from 'styled-components';

import RadioWrapper from '../components/RadioWrapper';
import StyledP from '../components/StyledP'
import StyledH1 from '../components/StyledH1'

import DayPickerInput from 'react-day-picker/DayPickerInput';
import 'react-day-picker/lib/style.css';

import '../utils/datepicker.style.css'

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import {runAuth} from '../actions/logingActions'
import {getSongs} from '../actions/radioActions'
import history from '../utils/history';
import Loader from '../components/LoadingPage'
import { isSignedInByCookies } from '../utils/utilities';


class Radio extends Component {
  state = {
    date: new Date()
  }
  redirect = () => {
    history.push("/login")
  }
  fetchSongs = (date = null) => {
    this.setState({date: new Date(date)});
    console.log(date)
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
      if(this.props.songs){
        return (
          <>
            <RadioWrapper>
              <StyledH1 small align="center">Radiowęzeł</StyledH1>
              <StyledP align="center">Teraz sam możesz zdecydować jaka muzyka gra w Twojej szkole</StyledP>
            </RadioWrapper>
            <RadioWrapper nopadding>
              <StyledP align="center" underline>Wybierz datę</StyledP>
              <DayPickerInput 
                onDayChange={this.fetchSongs}
                value={this.state.date}
                format="dd-MM-YYYY"
              />
            </RadioWrapper>
          </>
          
        )
      }
      else{
        return (
          <div>
            <Loader isLayout pageLabel="Wczytywanie piosenek..."/>
          </div>
        )
      }
  }
}

function mapStateToProps(state){
  return {
    isLogged: state.loginReducer,
    songs: state.songs
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