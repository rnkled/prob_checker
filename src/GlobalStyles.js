import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  html, body, #root {
    height: 100vh;
    overflow-y: scroll;
    color: white;
    background-image: linear-gradient(#cdd1eb, #bbb);

  }
  
  *::-webkit-scrollbar {
    display: none;
    width: 0px;
    -ms-overflow-style: none; 
    scrollbar-width: none;
  }

  a {
    font: inherit;
    color: inherit;
    font-size: inherit;
    text-decoration: none;
  }

  button{
    outline: none;
  }

  `

