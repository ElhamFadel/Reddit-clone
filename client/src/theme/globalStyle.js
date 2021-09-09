import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  *{
      padding: 0;
      margin: 0;
      box-sizing: border-box;
      font-family: 'Roboto', sans-serif;
  }
  :root {
    --primary: #DAE0E6;
    --secondary:#1C1C1C;
    --tertiary: #FA4502;
   /*
   color for font , header, footer, button, etc
   */
}
  html{
      font-size: 62.5%;
  }
  body{
      background-color: #fafafa;
  }
  a{
      text-decoration: none;
  }
  img {
    max-width: 100%;
}

i {
    cursor: pointer;
}

ul,
nav {
    list-style: none;
}

`;
export default GlobalStyle;
