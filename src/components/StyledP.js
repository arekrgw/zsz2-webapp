
import styled from 'styled-components'


export default styled.p`
    margin: 10px 0;
    ${({align}) => align && `text-align: ${align}`}
    color: ${({theme}) => theme.colors.black}
    ${({error, theme}) => error && `color: ${theme.colors.error}`}
    ${({success, theme}) => success && `color: ${theme.colors.success}`}
    ${({color}) => color && `color: ${color}`}

`;
