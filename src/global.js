import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    body {
        background: #3d72b4;
        align-items: center;
        background: #34e89e;
        background: -webkit-linear-gradient(to right, #0f3443, #34e89e);
        background: linear-gradient(to right, #0f3443, #34e89e); 
        font-family: 'Potta One', cursive;
    }
`;