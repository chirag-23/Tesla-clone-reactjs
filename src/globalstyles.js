import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    :root{
        --teslaColor : #393c41;
    }
    *{
        box-sizing: border-box;
        margin: 0;
        padding: 0;
        font-family:"Rubik" , sans-serif;
        color: #393c41;
    }
    body{
        width: 100%;
        overflow-x: hidden;
    }
`;

export default GlobalStyle