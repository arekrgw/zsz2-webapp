import React from 'react'
import styled from 'styled-components';

import StyledP from './StyledP';
import Input from './LoginRegisterInput'; 
import StyledButton from './StyledButton'
import StyledCheckbox from './StyledCheckbox'

const MainDiv = styled.div`
    position: fixed;
    top: 20px;
    left: 20px;
    right: 20px;
    background: white;
    z-index: 5
    box-shadow: 0px 0px 15px 100vh #00000088, 0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12);
    
`


const Header = styled.div`
    ${({theme}) => theme.backgrounds.navBackground}
    padding: 25px 0;
    color: white;
    font-size: 22px;
    font-weight: 600;
    text-align: center;
    z-index: 1

`

const AddBody = styled.div`
    padding: 20px 20px;
    z-index: 1
`


export default class AddSong extends React.Component {
    state = {
        url: '',
        title: '',
        annonymous: false
    }

    handleInput = (e) => {
        const {name, value} = e.target;
        this.setState((prev) => ({...prev, [name]:value}));
        
    }
    handleCheckbox = e => {
        const {name, checked} = e.target;
        this.setState((prev) => ({...prev, [name]:checked}));

    }
    handleAdding = () => {
        const {url, title, annonymous} = this.state;
        this.props.addSong(url, title, annonymous);
    }
    render(){
        return (
            
                <MainDiv>
                    <Header>Dodaj Piosenkę!</Header>
                    <AddBody>
                        <StyledP align="center">Wymagane jest jedno z pól</StyledP>
                        <Input type="text" value={this.state.url} onChange={this.handleInput} name="url" label="URL piosenki" />
                        <Input type="text" value={this.state.title} onChange={this.handleInput} name="title" label="Nazwa piosenki" />
                        <StyledCheckbox label="Dodać piosenkę anonimowo?" onChange={this.handleCheckbox} name="annonymous"/>
                        <StyledButton fullWidth onClick={this.handleAdding}>DODAJ PIOSENKĘ</StyledButton>
                        <StyledButton danger fullWidth onClick={this.props.close}>ANULUJ</StyledButton>
                        {this.props.error && <StyledP align="center" error>{this.props.error}</StyledP>}
                    </AddBody>
                </MainDiv>
          
          )
    }
}
