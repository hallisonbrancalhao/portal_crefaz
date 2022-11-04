import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: "exo2regular";
        src: url('./fonts/Exo-Regular.ttf') format('truetype');
        font-style: normal;
        font-weight: normal;
    }

    @font-face {
        font-family: "exo2light";
        src: url('./fonts/Exo-Light.ttf') format('truetype');
        font-style: normal;
        font-weight: normal;
    }

    * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }
    
    body {
    width: 100vw;
    height: 100vh;
    background-color: #000000;
    font-family: Arial, Helvetica, sans-serif
    }
`;

export default GlobalStyles;