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

    body {
      background: linear-gradient(to right, rgba(0,0,0,0), rgb(27, 0, 145)), linear-gradient(to right, rgba(255,0,100,.3), rgba(255,100,127,.2)), linear-gradient(to top right, rgb(0, 255, 234), rgba(81, 5, 182, 0)), radial-gradient(closest-corner at 20% 80%, yellow, red);
      background-attachment: fixed;
    }
`;  

const StyledWrapper = styled.div`
    width: 100%;
`;


const Layout = ({children}) => {
  return (
    <ThemeProvider theme={theme}>
        <React.Fragment>
            <GlobalStyle />
            <StyledWrapper>
                {children}
            </StyledWrapper>
        </React.Fragment>
    </ThemeProvider>
  )
}

export default Layout;


