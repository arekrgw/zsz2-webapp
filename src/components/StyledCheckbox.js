import styled from 'styled-components';

import React from 'react'


const StyledCheckIndicator = styled.span`
    position: absolute;
    top: -3px;
    left: 0;
    width: 26px;
    height: 26px;
    border: 4px solid ${({theme}) => theme.colors.darkblue}
    border-radius: 2px

    &:hover {
        background: ${({theme}) => theme.colors.blue + "77"}
    }
    &::after {
        content: '';
        position: absolute;
        bottom: 1px;
        left: 2px;
        display: block;
        height: 25px;
        width: 13px;
        border-right: solid ${({theme}) => theme.colors.success}
        border-bottom: solid ${({theme}) => theme.colors.success}
        border-width: 0 5px 5px 0;
        transform: rotate(-720deg) scale(0);
        opacity: 0;
        transition: all .2s ease-in-out
    }

`
const CheckBoxContainer = styled.label`
    position: relative;
    cursor: pointer;
    padding-left: 32px
    user-select: none;
    
    > input {
        display: none;
        height: 0;
        width: 0;
        opacity: 0;
    }

    > input:checked ~ ${StyledCheckIndicator}::after {
            opacity: 1;
            transform: rotate(45deg) scale(1.1);
        }
    

`

export default (props) => {
  return (
    <CheckBoxContainer>{props.label}
      <input type="checkbox" checked={props.checked} onChange={(e) => props.onChange(e)} name={props.name}/>
      <StyledCheckIndicator></StyledCheckIndicator>
    </CheckBoxContainer>
  )
}
