import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    *, *::before, *::after {
        box-sizing: border-box;
        margin: 0;
        padding: 0;
    }
    html {
        font-size: 62.5%;
    }
    body {
        overflow-y: scroll;
        font-size: 1.6rem;
        font-family: 'Montserrat', sans-serif;
    }
`;

export default GlobalStyle;
