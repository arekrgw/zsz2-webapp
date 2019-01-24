import React from 'react';
import styled, { createGlobalStyle, ThemeProvider } from 'styled-components'
import theme from '../utils/theme.style';

const GlobalStyle = createGlobalStyle`
    @import url('https://fonts.googleapis.com/css?family=Montserrat');

    *, *::before, *::after{
      margin: 0;
      padding: 0;
      font-family: Montserrat;
      box-sizing: border-box;
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
`;


const Layout = ({children, backgroundColor}) => {
  return (
    <ThemeProvider theme={theme}>
        <React.Fragment>
            <GlobalStyle />
            <StyledWrapper backgroundColor={backgroundColor}>
                {children}
            </StyledWrapper>
        </React.Fragment>
    </ThemeProvider>
  )
}

export default Layout;


