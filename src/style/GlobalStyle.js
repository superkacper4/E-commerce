import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
    body{
        color: ${({ theme }) => theme.colors.font};
        background-color: ${({ theme }) => theme.colors.primary};
        font-family: 'Archivo', sans-serif;
        overflow-x: hidden;
        padding: 0 ;
        margin: 0;
        /* height: 100vh; */

        @media (${({ theme }) => theme.breakPoints.desktop}){
            padding: 0 60px 0 60px;

        }
    }
    * {
        box-sizing: border-box;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;

    }
    html {
  scroll-behavior: smooth;
}
`;

export default GlobalStyle;
