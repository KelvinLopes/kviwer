import { createGlobalStyle } from 'styled-components';


export default createGlobalStyle`
*{
    margin: 0;
    padding: 0;
    box-sizing: border-box;

    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale !important;
    text-rendering: optimizeLegibility !important;
}

body {
    color: #fff;
    background: #ebf2f5;
}

button {
    cursor: pointer;
}

a:link {
    text-decoration: no-decorativon;
}

li {
    list-styled: none;
}

body, input, button, textarea {
    font-family: 'Ubuntu';
}
`;