import styled from 'styled-components'
import React, { Component } from 'react'
import {faMusic, faShoppingBasket, faUser} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const StyledNavContainer = styled.nav`
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 80px;
    background: ${({theme}) => theme.colors.darkblue}
    position: fixed;
    bottom: 0;
    left: 0;
`;

const NavItem = styled.div`
    color: white;
    font-size: 22px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    position: relative;
    

    &:hover::after {
        opacity: 0.2
    }

    &:hover::before {
        opacity: 0.2
    }

    &::after {
        content: '';
        display: block;
        position: absolute;
        width: 75px;
        height: 75px;
        background: ${({theme}) => theme.colors.lightblue}
        opacity: 0;
        border-radius: 50%;
        z-index: -1;
        transition: all .2s ease-in-out
    }
    &::before {
        content: '';
        display: block;
        position: absolute;
        width: 90px;
        height: 75px;
        background: ${({theme}) => theme.colors.lightblue}
        opacity: 0;
        border-radius: 50%;
        z-index: -1;
        transition: all .2s ease-in-out
    }
    
`;

const StyledP = styled.p`
    font-weight: 200;
    color: white;
    font-size: 18px;
    text-align center

`;
export default class Navigation extends Component {
  render() {
    return (
      <StyledNavContainer>
          <NavItem>
            <FontAwesomeIcon icon={faMusic} />
            <StyledP>Radio</StyledP>
          </NavItem>
          <NavItem>
            <FontAwesomeIcon icon={faShoppingBasket} />
            <StyledP>Sklep</StyledP>
          </NavItem>
          <NavItem>
            <FontAwesomeIcon icon={faUser} />
            <StyledP>Konto</StyledP>
          </NavItem>
      </StyledNavContainer>
    )
  }
}
