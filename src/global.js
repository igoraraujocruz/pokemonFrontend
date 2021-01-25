import { createGlobalStyle } from 'styled-components';
import backgroundImage from './imgs/background.jpg';
export default createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
        outline: 0;
        box-sizing: border-box;
    }
    body {
        background-image: url(${backgroundImage});
        align-items: center;
        font-family: 'Potta One', cursive;
    }
`;