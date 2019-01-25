import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import InputStyled from '../components/LoginRegisterInput'
import { Link } from 'react-router-dom';
import './Login.style.css';
import history from "../utils/history";

import Layout from '../layout/Layout'
import Wrapper from '../components/LoginRegisterWrapper';
import StyledForm from '../components/StyledForm';
import StyledH3 from '../components/StyledH3';
import StyledH1 from '../components/StyledH1'

import { connect } from 'react-redux';
import { logInUser } from '../actions/logingActions'
import { clearLoginMessages } from '../actions/messagesActions'
import { bindActionCreators } from 'redux'
import { isSignedInByCookies } from '../utils/utilities'

class Login extends Component {
    state = {
        login: "",
        password: "",
        bgStyle: "normal"
    }
    componentWillMount(){
        isSignedInByCookies() && history.push("/");
    }
    componentDidMount(){
        document.addEventListener("keydown", this.checkKey); 
    }
    componentWillUnmount(){
        document.removeEventListener('keydown', this.checkKey);
        //Clear messages
        this.props.clearLoginMessages();
    }
    handleInput = (e) => {
        switch(e.target.name){
            case "login":
                this.setState({...this.state, login: e.target.value})
                break;
            case "password":
                this.setState({...this.state, password: e.target.value})
                break;
            default:
                break;
        }
    }
    procceedLogin = () => {
        this.props.logInUser(this.state.login, this.state.password, this.listenToBackground);
    }
    checkKey = (e) => {
        e.keyCode === 13 && this.procceedLogin();
    }
    printErrors = () => {
        if(this.props.messages.errors){
            return this.props.messages.errors.login ? <p className="errors">{this.props.messages.errors.login}</p> : ''
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
                    <StyledH1 align="center" margin="30px 0 50px 0" shadow>Zaloguj się do platformy</StyledH1>
                    <InputStyled onChange={(e) => this.handleInput(e)} name="login" value={this.state.login} type="text" label="Login" />
                    <InputStyled onChange={(e) => this.handleInput(e)} name="password" value={this.state.password} type="password" label="Hasło"/>
                    <Button onClick={this.procceedLogin} size="large" variant="contained" color="primary" fullWidth={true} style=
                    {this.loginInputStyle}>Zaloguj się</Button>
                </StyledForm>
                { this.printErrors() }
                <Link to="/register"><StyledH3 align="center" margin="50px 0 0 0">Nie posiadasz jeszcze konta? Załóż je!</StyledH3></Link>
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
      logInUser,
      clearLoginMessages
    },
      dispatch
    )
  }

export default connect(mapStateToProps, matchDispatchToProps)(Login);