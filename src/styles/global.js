import { createGlobalStyle } from 'styled-components';

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

  h1, h2, h3, h4, h5, h6, ul, li, input, label {
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
