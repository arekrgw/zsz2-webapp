
import styled from 'styled-components';

export default styled.button`   
    font-size: 16px;
    color: white;
    padding: 12px 0;
    width: 150px;
    border: none;
    border-radius: 3px;
    box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12);
    ${({fullWidth}) => fullWidth && `width: 100%`}
    background: ${({theme}) => theme.colors.blue}   
    cursor: pointer;
    transition: all .2s linear
    text-transform: uppercase
    &:hover {
        background: #3f51b5;
    }

`

