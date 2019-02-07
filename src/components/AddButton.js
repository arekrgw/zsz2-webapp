import styled from 'styled-components'
import {faPlus} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react'

const AddButton = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    color: white;
    font-size: 24px;
    width: 50px;
    height: 50px;
    position: fixed;
    bottom: 70px;
    right: 20px;
    border-radius: 50%;
    box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12);
    ${({theme}) => theme.backgrounds.normal}

`

export default (props) => {
  return (
    <AddButton onClick={props.onClick}>
        <FontAwesomeIcon icon={faPlus} />
    </AddButton>
  )
}
