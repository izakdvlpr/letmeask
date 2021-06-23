import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    padding: 0;
    margin: 0;
    
    box-sizing: border-box;
  }
  
  body {
    color: #29292E;
    
    background: #F8F8F8;
  }
  
  body, input, button, textarea {
    font: 400 16px 'Roboto', sans-serif;
  }
`;
