
import styled from 'styled-components'

export default styled.h3`
    font-size: 15px;
    ${({align}) => align && `text-align: ${align}`}
    margin: 10px 0;
    ${({fontSize}) => fontSize && `font-size: ${fontSize}`}
    ${({underline}) => underline && `text-decoration: underline`}
    ${({bold}) => bold && `font-weight: bold`}
    ${({bigger}) => bigger && `font-size: 20px`}
`;
