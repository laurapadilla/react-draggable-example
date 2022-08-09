import styled, { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  font-size: 20px;
  color: black;
  background: #F3EFE6;
}

a {
  color: inherit;
  text-decoration: none;
}
`;

export const Main = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;
  position: fixed;
  top: 50%;
  left: 50%;
  width: 100%;
  transform: translate(-50%, -50%);
  padding: 3rem;
  text-align: center;
`;

export const Container = styled.div`
  margin-top: 12rem;
`;
