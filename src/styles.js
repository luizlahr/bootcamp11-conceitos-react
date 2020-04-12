import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin:0;
    padding: 0;
    font-family: Arial, Helvetica, sans-serif;
    outline:none;
  }

  html, body, #app {
    min-height: 100vh;
    font-size: 14px;
  }

  body {
    background-color : #0D0D0D;
  }

  button {
    font-size: 14px;
    cursor: pointer;
  }
`;

export const Container = styled.div``;
