import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import InputStyled from '../components/LoginRegisterInput'
import { Link } from 'react-router-dom';
import './Login.style.css';
import history from "../utils/history";

import Layout from '../layout/Layout'

import { connect } from 'react-redux';
import { logInUser } from '../actions'
import { bindActionCreators } from 'redux'
import { isSignedInByCookies } from '../utils/utilities'

class Login extends Component {
    state = {
        login: "",
        password: ""
    }
    componentWillMount(){
        isSignedInByCookies() && history.push("/");
    }
    componentDidMount(){
        document.addEventListener("keydown", this.checkKey); 
    }
    componentWillUnmount(){
        document.removeEventListener('keydown', this.checkKey);
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
        this.props.logInUser(this.state.login, this.state.password);
    }
    checkKey = (e) => {
        e.keyCode === 13 && this.procceedLogin();
    }
    printErrors = () => {
        if(this.props.messages.errors){
            return this.props.messages.errors.login ? <p className="errors">{this.props.messages.errors.login}</p> : ''
        }
    }
    render() {
        return (
            <Layout>
            <div className="container-login">
                <form className="login-form">
                    <h1>Zaloguj się do platformy</h1>
                    <InputStyled onChange={(e) => this.handleInput(e)} name="login" value={this.state.login} type="text" label="Login" />
                    <InputStyled onChange={(e) => this.handleInput(e)} name="password" value={this.state.password} type="password" label="Hasło"/>
                    <Button onClick={this.procceedLogin} size="large" variant="contained" color="primary" fullWidth={true} style=
                    {this.loginInputStyle}>Zaloguj się</Button>
                </form>
                { this.printErrors() }
                <Link to="/register"><h3 className="no-account">Nie posiadasz jeszcze konta? Załóż je!</h3></Link>
            </div>
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
      logInUser
    },
      dispatch
    )
  }

export default connect(mapStateToProps, matchDispatchToProps)(Login);