import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import theme from '../utils/theme.style';

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css?family=Montserrat:200,300,400,600,800&subset=latin-ext');;

    *, *::before, *::after{
      margin: 0;
      padding: 0;
      font-family: 'Montserrat', sans-serif;
      box-sizing: border-box;
      outline: none;
      font-weight: 400;
    }
    a {
      color: inherit;
      text-decoration: none;
    }

    a:visited {
      color: inherit;
    }


`;  

const StyledWrapper = styled.div`
    width: 100%;
    padding: 20px;
    transition: all .2s ease
    ${({backgroundColor, theme}) => {
      switch(backgroundColor){
        case "normal":
          return theme.backgrounds.normal
        case "success":
          return theme.backgrounds.success
        case "failure":
          return theme.backgrounds.failure
        default:
          return theme.backgrounds.normal
      }
    }
    }
    ${({fullVh}) => fullVh && `height: 100vh`}
`;


const Layout = ({children, backgroundColor, fullVh}) => {
  return (
    <ThemeProvider theme={theme}>
        <React.Fragment>
            <GlobalStyle />
            <StyledWrapper backgroundColor={backgroundColor} fullVh={fullVh}>
                {children}
            </StyledWrapper>
        </React.Fragment>
    </ThemeProvider>
  )
}

export default Layout;


