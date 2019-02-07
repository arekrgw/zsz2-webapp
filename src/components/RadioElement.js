import styled from 'styled-components';


export default styled.div`
   
    width: 100%;
    padding: 10px 10px
    background: white;
    ${({transparent}) => transparent && `background: #FFFFFFCC`}
    margin-bottom: 10px
    border: 2px solid transparent
    box-shadow: 0px 1px 5px 0px rgba(0,0,0,0.2), 0px 2px 2px 0px rgba(0,0,0,0.14), 0px 3px 1px -2px rgba(0,0,0,0.12);
    ${({nopadding}) => nopadding && `padding: 0`}
    ${({bigpadding}) => bigpadding && `padding: 30px 10px`}
    transition: all 0.2s ease-in-out
    word-break: break-all;
    ${({transparent, theme}) => transparent && ` &:hover {
        background: #FFFFFFDD;
        border: 2px solid ${theme.colors.darkblue} 
    }` }

`