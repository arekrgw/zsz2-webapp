import styled from 'styled-components'
import React, { Component } from 'react'
import {faMusic, faShoppingBasket, faUser} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import { NavLink } from 'react-router-dom'



const StyledNavContainer = styled.nav`
    -webkit-tap-highlight-color:transparent;
    display: flex;
    justify-content: space-around;
    width: 100%;
    height: 50px;
    background: ${({theme}) => theme.backgrounds.navBackground}
    position: fixed;
    bottom: 0;
    left: 0;
    border-top: 1px solid ${({theme}) => theme.colors.black} 
    overflow: hidden
    color: #badeff
    box-shadow: 0 -2px 8px 10px #00000011;
`;

const NavItem = styled.div`
    font-size: 22px;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    cursor: pointer;
    position: relative;
    
    &:hover {
        color: white;
    }
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
        width: 85px;
        height: 100px;
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
        width: 100px;
        height: 90px;
        background: ${({theme}) => theme.colors.lightblue}
        opacity: 0;
        border-radius: 50%;
        z-index: -1;
        transition: all .2s ease-in-out
    }
    
`;

const StyledP = styled.p`
    display: block;
    font-weight: 200;
    font-size: 12px;
    text-align center
    

`;

const StyledLink = styled(NavLink)`
    text-decoration: none;
    color: inherit
    &.active {
        color: white;
    }
    &.active::after, &.active::before {
        opacity: 0.2
    }
`

export default class Navigation extends Component {
  render() {
    return (
      <StyledNavContainer>
          <NavItem as={StyledLink} to="/radio">
            <FontAwesomeIcon icon={faMusic} />
            <StyledP>Radio</StyledP>
          </NavItem>
          <NavItem as={StyledLink} to="/sklep">
            <FontAwesomeIcon icon={faShoppingBasket} />
            <StyledP>Sklep</StyledP>
          </NavItem>
          <NavItem as={StyledLink} to="/account">
            <FontAwesomeIcon icon={faUser} />
            <StyledP>Konto</StyledP>
          </NavItem>
      </StyledNavContainer>
    )
  }
}
