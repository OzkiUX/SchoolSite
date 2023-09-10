import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
    &::scroll-region {
    }

    * {
        margin: 0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        font-family: 'Poppins', sans-serif;
    }

    body {
        margin: 0;
        padding: 0;
        font-family: sans-serif;
        font-size: 16px;
        line-height: 1.5;
        color: #333;
        background-color: #fefefe;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-rendering: optimizeLegibility;
        -webkit-text-size-adjust: 100%;
        -ms-text-size-adjust: 100%;
        -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
        -webkit-touch-callout: none;
        -webkit-user-select: none;
        -khtml-user-select: none;
        -moz-user-select: none;
    }

    .powrót-button {
        background-color: white;
        color: #f65868;
        border: none;
        border-radius: 5px;
        padding: 10px 20px;
        font-size: 15px;
        cursor: pointer;
        margin-top: 20px;

        transition: all 0.3s ease-in-out;

        &:hover {
            background-color: #5c616e;
            color: white;
        }
    }
`;

export default GlobalStyle;