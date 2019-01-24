import React from 'react'
import styled from 'styled-components'

const StyledH3 = styled.h3`
    font-size: 15px;
    ${({align}) => align && `text-align: ${align}`}
    ${({margin}) => margin && `margin: ${margin}`}
    ${({fontSize}) => fontSize && `font-size: ${fontSize}`}
`;

export default (props) => {
  return (
    <StyledH3 {...props}>
        {props.children}
    </StyledH3>
  )
}
