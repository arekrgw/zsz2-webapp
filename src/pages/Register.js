import React, { Component } from 'react'
import { Link } from 'react-router-dom';
import history from "../utils/history";

import InputStyled from '../components/LoginRegisterInput'
import Wrapper from '../components/LoginRegisterWrapper';
import StyledForm from '../components/StyledForm';
import StyledH3 from '../components/StyledH3'
import StyledH1 from '../components/StyledH1'
import StyledP from '../components/StyledP'
import StyledButton from '../components/StyledButton'

import { connect } from 'react-redux';
import { registerUser } from '../actions/logingActions'
import { clearRegisterMessages } from '../actions/messagesActions'
import { bindActionCreators } from 'redux'
import { isSignedInByCookies } from '../utils/utilities'
import Layout from '../layout/Layout';

class Register extends Component {
    state = {
        login: "",
        password: "",
        Spassword: "",
        code: "",
        email: "",
        nazwisko: "",
        imie: "",
        klasa: "",
        bgStyle: "normal",
        isLogged: isSignedInByCookies() && history.push("/")

    }
    componentDidMount(){
        document.addEventListener("keydown", this.checkKey);
    }
    componentWillUnmount(){
        document.removeEventListener('keydown', this.checkKey);
        this.props.clearRegisterMessages();
    }
    handleInput = (e) => {
        const {name, value} = e.target;
        this.setState((prev) => ({...prev, [name]:value}));
    }
    procceedRegister = (e) => {
        e.preventDefault();
        this.props.registerUser(this.state, this.listenToBackground);
    }
    checkKey = (e) => {
        e.keyCode === 13 && this.procceedRegister(e);
    }
    printErrors = () => {
        if(this.props.messages.errors){
            return this.props.messages.errors.register ? <StyledP error>{this.props.messages.errors.register}</StyledP> : ''
        }
    }
    printSuccess = () => {
        if(this.props.messages.success){
            return this.props.messages.success.register ? <StyledP success>{this.props.messages.success.register}</StyledP> : ''
        }
    }
    listenToBackground = (type) => {
        if(type === "success") this.setState((prev) => ({...prev, bgStyle: type}))
        else if(type === "failure") this.setState((prev) => ({...prev, bgStyle: type}))
    }
    render() {
        return (
            <Layout backgroundColor={this.state.bgStyle}>
            <Wrapper>
                <StyledForm setWidth="100%">
                    <StyledH1 align="center" fontSize="35px" margin="30px 0 50px 0" shadow>Załóż konto na szkolnej platformie</StyledH1>
                    <InputStyled onChange={(e) => this.handleInput(e)} name="login" value={this.state.login} type="text" label="Login"/>
                    <InputStyled onChange={(e) => this.handleInput(e)} name="email" value={this.state.email} type="text" label="E-mail"/>
                    <InputStyled onChange={(e) => this.handleInput(e)} name="imie" value={this.state.imie} type="text" label="Imię"/>
                    <InputStyled onChange={(e) => this.handleInput(e)} name="nazwisko" value={this.state.nazwisko} type="text" label="Nazwisko"/>
                    <InputStyled onChange={(e) => this.handleInput(e)} name="klasa" value={this.state.klasa} type="text" label="Lata dołączenia do szkoły"/>
                    <InputStyled onChange={(e) => this.handleInput(e)} name="password" value={this.state.password} type="password" label="Hasło"/>
                    <InputStyled onChange={(e) => this.handleInput(e)} name="Spassword" value={this.state.Spassword} type="password" label="Powtórz hasło"/>
                    <InputStyled onChange={(e) => this.handleInput(e)} name="code" value={this.state.code} type="text" label="Kod rejestracyjny szkoły"/>

                    <StyledButton onClick={this.procceedRegister} fullWidth>Zarejestruj się</StyledButton>
                </StyledForm>
                { this.printErrors() }
                { this.printSuccess() }
                <Link to="/login"><StyledH3 underline align="center" margin="50px 0 0 0">Posiadasz już konto? Zaloguj się!</StyledH3></Link>
            </Wrapper>
            </Layout>
        )
    }
}


//Polaczenie z state
function mapStateToProps(state){
    return {
        messages: state.messages
    }
  }
  //laczenie actions
  function matchDispatchToProps(dispatch){
    return bindActionCreators({
      registerUser,
      clearRegisterMessages
    },
      dispatch
    )
  }

export default connect(mapStateToProps, matchDispatchToProps)(Register);