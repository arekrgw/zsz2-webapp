
import styled from 'styled-components'

export default styled.h3`
    font-size: 15px;
    ${({align}) => align && `text-align: ${align}`}
    margin: 15px 0;
    ${({fontSize}) => fontSize && `font-size: ${fontSize}`}
`;
