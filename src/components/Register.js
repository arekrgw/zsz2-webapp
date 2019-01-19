import React, { Component } from 'react'
import Button from '@material-ui/core/Button'
import Input from '@material-ui/core/TextField';
import { Link } from 'react-router-dom';
import './Login.style.css';
import history from "../history"

import { connect } from 'react-redux';
import { registerUser } from '../actions'
import { bindActionCreators } from 'redux'
import { isSignedInByCookies } from '../utilities'

class Login extends Component {
    state = {
        login: "",
        password: "",
        Spassword: "",
        code: "",
        email: "",
        nazwisko: "",
        imie: "",
        klasa: ""

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
            case "email":
                this.setState({...this.state, email: e.target.value})
                break;
            case "imie":
                this.setState({...this.state, imie: e.target.value})
                break;
            case "nazwisko":
                this.setState({...this.state, nazwisko: e.target.value})
                break;
            case "klasa":
                this.setState({...this.state, klasa: e.target.value})
                break;
            case "passwordS":
                this.setState({...this.state, Spassword: e.target.value})
                break;
            case "code":
                this.setState({...this.state, code: e.target.value})
                break;
            default:
                break;
        }
    }
    procceedRegister = () => {
        this.props.registerUser(this.state);
    }
    checkKey = (e) => {
        e.keyCode === 13 && this.procceedRegister();
    }
    printErrors = () => {
        if(this.props.messages.errors){
            return this.props.messages.errors.register ? <p className="errors">{this.props.messages.errors.register}</p> : ''
        }
    }
    printSuccess = () => {
        if(this.props.messages.success){
            return this.props.messages.success.register ? <p className="success">{this.props.messages.success.register}</p> : ''
        }
    }
    loginInputStyle = {
        marginTop: 20
    }

    render() {
        return (
            <div className="container-login">
                <form className="login-form">
                    <h1>Załóż konto na szkolnej platformie</h1>

                    <Input onChange={(e) => this.handleInput(e)} name="login" value={this.state.login} type="text" label="Login" fullWidth={true} style={this.loginInputStyle} />

                    <Input onChange={(e) => this.handleInput(e)} name="email" value={this.state.email} type="text" label="E-mail" fullWidth={true} style={this.loginInputStyle} />

                    <Input onChange={(e) => this.handleInput(e)} name="imie" value={this.state.imie} type="text" label="Imię" fullWidth={true} style={this.loginInputStyle} />
                    
                    <Input onChange={(e) => this.handleInput(e)} name="nazwisko" value={this.state.nazwisko} type="text" label="Nazwisko" fullWidth={true} style={this.loginInputStyle} />

                    <Input onChange={(e) => this.handleInput(e)} name="klasa" value={this.state.klasa} type="text" label="Lata dołączenia do szkoły (np. 2015/2016)" fullWidth={true} style={this.loginInputStyle} />

                    <Input onChange={(e) => this.handleInput(e)} name="password" value={this.state.password} type="password" label="Hasło" fullWidth={true} style={this.loginInputStyle} />

                    <Input onChange={(e) => this.handleInput(e)} name="passwordS" value={this.state.Spassword} type="password" label="Powtórz Hasło" fullWidth={true} style={this.loginInputStyle} />

                    <Input onChange={(e) => this.handleInput(e)} name="code" value={this.state.code} type="text" label="Kod Rejestracyjny Szkoły" fullWidth={true} style={this.loginInputStyle} />

                    <Button onClick={this.procceedRegister} size="large" variant="contained" color="primary" fullWidth={true} style=
                    {this.loginInputStyle}>Zarejstruj się</Button>
                </form>
                { this.printErrors() }
                { this.printSuccess() }
                <Link to="/login"><h3 className="no-account">Posiadasz już konto? Zaloguj się!</h3></Link>
            </div>
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
      registerUser
    },
      dispatch
    )
  }

export default connect(mapStateToProps, matchDispatchToProps)(Login);