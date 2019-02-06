import React, { Component } from 'react'
import styled from 'styled-components';

import RadioElement from '../components/RadioElement';
import StyledP from '../components/StyledP'
import StyledH1 from '../components/StyledH1'
import StyledH3 from '../components/StyledH3'
import AutorTag from '../components/AutorTag'
import SongComponent from '../components/SongComponent'


import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';
import {runAuth} from '../actions/logingActions'
import {getSongs} from '../actions/radioActions'
import history from '../utils/history';
import Loader from '../components/LoadingPage'
import { isSignedInByCookies } from '../utils/utilities';

import DatePicker from 'react-date-picker';


const StyledPicker = styled(DatePicker)`
  
  width: 100%;
  margin: 0 auto
  > .react-date-picker__wrapper{
    border: none
    margin: 0 auto
    font-size: 26px 
  }
`
class Radio extends Component {
  state = {
    date: new Date()
  }
  redirect = () => {
    history.push("/login")
  }
  fetchSongs = (date = null) => {
    this.setState({date: new Date(date)});
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
  renderSongs = () => {
    if(this.props.songs.length > 0){
      return this.props.songs.map((song, key) => {
        return (
          <RadioElement key={key} transparent>
            <StyledH3 bold align="center" bigger>Piosenka #{key+1}</StyledH3>
            <SongComponent>{song.url ? (
              <a href={song.url} target="_blank" rel="noopener noreferrer">{song.title ? song.title : song.url}</a>
            ) : <StyledP>{song.title}</StyledP>}
            </SongComponent>
            <AutorTag>Autor: {song.autor}</AutorTag>
          </RadioElement>
        )
      })
    }
    else {
      return (
        <RadioElement>
          <StyledH3 align="center">Dziś jeszcze nic tu nie ma :/</StyledH3>
        </RadioElement>
      )
    }
  }
  render() {
      if(this.props.songs){
        return (
          <>
            <RadioElement bigpadding>
              <StyledH1 small align="center">Radiowęzeł</StyledH1>
              <StyledP align="center">Teraz sam możesz zdecydować jaka muzyka gra w Twojej szkole</StyledP>
            </RadioElement>
            <RadioElement nopadding>
              <StyledP align="center" underline>Wybierz datę</StyledP>
              <StyledPicker 
                value={this.state.date}
                showLeadingZeros
                onChange={this.fetchSongs}
                clearIcon={null}
              />
              
            </RadioElement>
            {this.renderSongs()}
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