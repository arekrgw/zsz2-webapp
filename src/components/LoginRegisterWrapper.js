import React from 'react'
import styled from 'styled-components';

const StyledDiv = styled.div`
    display: flex;
    width: 100%
    min-height: calc(100vh - 40px);
    box-sizing: border-box;
    background: rgba(255,255,255, 0.7);
    border-radius: 3px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px 20px;
`

export default ({children}) => {
  return (
    <StyledDiv>
        {children}
    </StyledDiv>
  )
}
