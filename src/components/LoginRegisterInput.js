import React from 'react'
import styled from 'styled-components';


const DivStyled = styled.div`
    position: relative;
    width: 100%;
    z-index: 1;
    margin: 1.7em 0

    &:hover::after {
        height: 2px;
        background: ${({theme}) => theme.colors.almostblack};
    }

    &::after {
      position: absolute;
      content: '';
      width: 100%;
      height: 1px;
      background: gray;
      bottom: 0;
      left: 0;
      transition: all .1s ease;
      ${({isFocused, theme}) => isFocused && `
        background: ${theme.colors.blue} !important;
        height: 2px;
      `}
      ${({value, theme}) => value && `
        height: 2px;
        background: ${theme.colors.blue};
      `}
      
    }
`;

const InputStyled = styled.input`
    position: relative;
    width: 100%;
    background: none;
    border: none;
    padding: .3em 0;
    display: block;
    font-size: 1.3em;
    outline: none;

    &:-webkit-autofill {
      transition: background-color 5000s ease-in-out 0s;
    }
    
`;
const LabelStyled = styled.label`
    display: block;
    position: absolute;
    bottom: .3em;
    left: 0;
    font-size: 1.3em;
    z-index: -1;
    transition: all .1s ease-in-out;
    color: gray;
    ${({set}) => set && `
      bottom: 3.1em;
      font-size: 0.8em;
    `}
    ${({isFocused, theme}) => isFocused && `color: ${theme.colors.blue}`}

    ${InputStyled}:focus ~ &{
      bottom: 3.1em;
      font-size: 0.8em
    }
`;



export default class LoginRegisterInput extends React.Component {
  state = {
    isFocused: false
  }
  handleFocus = () => {
    this.setState((prev) => ({...prev, isFocused: true}));
  }
  handleBlur = () => {
    this.setState((prev) => ({...prev, isFocused: false}));
  }
  render(){
    return (
      <DivStyled value={this.props.value} isFocused={this.state.isFocused}>
        <InputStyled {...this.props} onFocus={this.handleFocus} onBlur={this.handleBlur}/>
        <LabelStyled set={this.props.value} isFocused={this.state.isFocused}>{this.props.label}</LabelStyled>
      </DivStyled>
      
    )
  }
}
