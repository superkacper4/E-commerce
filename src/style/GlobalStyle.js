import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body{
        color: ${({ theme }) => theme.colors.font};
        background-color: ${({ theme }) => theme.colors.third};
        font-family: 'Sedgwick Ave Display', cursive;
        overflow-x: hidden;
        padding: 0;
        margin: 0;
        /* height: 100vh; */
    }
    * {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
    }
`;

export default GlobalStyle;
