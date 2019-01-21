import React from 'react'
import styled from 'styled-components';


const DivStyled = styled.div`
    position: relative;
    width: 100%;
    z-index: 1;
`;

const InputStyled = styled.input`
    width: 100%;
    background: none;
    border: none;
    border-bottom: 1px solid #333;
    padding: .3em 0;
    display: block;
    font-size: 1.3em;
    outline: none;
    &:hover {
      ${({value}) => value ? `
      border-bottom: 2px solid green;
    ` : `
      border-bottom: 2px solid #303f9f;
    `}

    }
    &:-webkit-autofill {
      transition: background-color 5000s ease-in-out 0s;
    }
    ${({value}) => value && `
      border-bottom: 2px solid green;
    `}
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

    ${InputStyled}:focus ~ &{
      bottom: 3.1em;
      font-size: 0.8em
    }
`;



export default (props) => {
  return (
    <DivStyled>
      <InputStyled {...props} />
      <LabelStyled set={props.value}>{props.label}</LabelStyled>
    </DivStyled>
    
  )
}
