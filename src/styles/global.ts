import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    
    @font-face {
        font-family: "exo2regular";
        src: url('./fonts/Exo-Regular.ttf') format('ttf');
        font-style: normal;
        font-weight: normal;
    }

    @font-face {
        font-family: "exo2light";
        src: url('./fonts/Exo-Light.ttf') format('ttf');
        font-style: normal;
        font-weight: normal;
    }
`;

export default GlobalStyles;