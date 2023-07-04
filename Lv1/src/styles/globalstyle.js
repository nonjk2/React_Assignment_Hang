import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    font-size: 16px;
    /* line-height: 1.6; */
    letter-spacing: 0em;
  }
  li {
    list-style: none;
  }
  a {
    text-decoration: none;
  }
  button {
    cursor: pointer;
  }
`;

export default GlobalStyle;
