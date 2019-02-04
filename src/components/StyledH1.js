
import styled from 'styled-components'


export default styled.h1`
    font-size: 40px;
    ${({fontSize}) => fontSize && `font-size: ${fontSize}`}
    ${({shadow}) => shadow && `text-shadow: 0 10px 12px #00000055`}
    ${({align}) => align && `text-align: ${align}`}
    color: ${({theme}) => theme.colors.black}
    ${({color}) => color && `color: ${color}`}
    font-weight: 600;
    ${({small}) => small && `font-size: 32px`}

`;
