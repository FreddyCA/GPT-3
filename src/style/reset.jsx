import { createGlobalStyle } from "styled-components";
const GlobalStyle = createGlobalStyle`

    :root {
        --primary-color: #007bff; 
        --font-family: 'Manrope', sans-serif;
        --gradient-text: linear-gradient(89.97deg, #AE67FA 1.84%, #F49867 102.67%);
        --gradient-bar: linear-gradient(103.22deg, #AE67FA -13.86%, #F49867 99.55%);
        --color-bg: #040C18;
        --color-footer : #031B34;
        --color-blog: #042c54;
        --color-text: #81AFDD;
        --color-subtext: #FF8A71;
    } 

  *,
  *::before,
  *::after {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    scroll-behavior: smooth;
  }
  html {
    font-size: 16px;
    background-color: var(--color-bg);
    font-family: var(--font-family);
  }
  a {
    color: unset;
    text-decoration: none;
  }
`;

export default GlobalStyle;
