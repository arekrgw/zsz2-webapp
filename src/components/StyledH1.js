import React from 'react'
import styled from 'styled-components'



const StyledH1 = styled.h1`
    ${({fontSize}) => fontSize && `font-size: ${fontSize}`}
    ${({shadow}) => shadow && `text-shadow: 0 10px 12px #00000055`}
    ${({align}) => align && `text-align: ${align}`}
    color: ${({theme}) => theme.colors.black}
    ${({color}) => color && color}
    ${({margin}) => margin && `margin: ${margin}`}
`;

export default (props) => {
  return (
    <StyledH1 {...props}>
      {props.children}
    </StyledH1>
  )
}
