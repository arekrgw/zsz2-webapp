import React from 'react'

import styled from 'styled-components';


const Loader = styled.div`
  width: 150px;
  height: 150px;
  border: 10px solid white
  border-left: 10px solid transparent
  border-right: 10px solid transparent
  border-radius: 50%;
  animation: Rotate 1s infinite forwards

  @keyframes Rotate {
    from {
      tranform: rotate(0deg);
    }
    to{
      transform: rotate(360deg);
    }
  }
`;

const StyledPageTag = styled.p`
  font-size: 24px
  font-weight: 300;
  color: white
  margin: 50px 0;
  
`

const StyledDiv = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column
`;


export default (props) => {
  return (
    <StyledDiv>
      <Loader/>
      <StyledPageTag>{props.pageLabel}</StyledPageTag>
    </StyledDiv>
  )
}
