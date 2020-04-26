import { createGlobalStyle } from 'styled-components';

// TODO: use in app https://flatuicolors.com/palette/defo
const GlobalStyle = createGlobalStyle`
  html {
    box-sizing: border-box;
    font-size: 16px; // base size for '1rem'
  }

  *, *:before, *:after {
    box-sizing: inherit;
    margin: 0;
    padding: 0;
  }

  body {
    font-family: "Poppins", sans-serif;
    color: #032139;
    overflow-y: scroll;
    background: #f7fbfb;
  }

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 16px;
  }

  p {
    margin-bottom: 16px;
  }

  ol, ul {
    list-style: none;
  }

  // TODO: add proper typography rules
  h1, h2, h3, h4, h5, h6, ul, li, p, span, input, label {
    line-height: 1;
   }

  a {
    color: #27ae60;
    text-decoration: none;
    display: inline-block;
  }

  a:hover, a:active, a:focus {
    text-decoration: underline;
  }

  a:focus {
    outline: none;
  }

  img {
    display: block;
    width: 100%;
    height: auto;
  }
`;

export { GlobalStyle };
