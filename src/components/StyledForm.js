import React from 'react'
import styled from 'styled-components'

const StyledForm = styled.form`
    width: ${({setWidth}) => setWidth}
`;

export default ({children, setWidth}) => {
  return (
    <StyledForm setWidth={setWidth}>
      {children}
    </StyledForm>
  )
}
