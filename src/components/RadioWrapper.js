import styled from 'styled-components';


export default styled.div`
   
    width: 100%;
    padding: 30px 10px
    background: white;
    margin-bottom: 10px
    ${({nopadding}) => nopadding && `padding: 0`}

`