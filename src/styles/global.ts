import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`
    @font-face {
        font-family: 'Anteb-Regular';
        src: local('Anteb-Regular'), url('./fonts/Anteb-Regular.ttf') format('ttf');
        font-style: normal;
        font-weight: normal;
    }
`;

export default GlobalStyles;