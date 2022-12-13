import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    
    @font-face {
        font-family: "Exo2-Regular.ttf";
        src: url('./fonts/Exo-Regular.ttf') format('ttf');
        font-style: normal;
        font-weight: normal;
    }

    @font-face {
        font-family: "Exo2-Light.ttf";
        src: url('./fonts/Exo-Light.ttf') format('ttf');
        font-style: light;
        font-weight: 300;
    }
`;

export default GlobalStyles;