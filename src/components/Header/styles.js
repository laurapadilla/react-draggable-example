import styled from "styled-components";

export const HeaderWrapper = styled.header`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 2rem;
  position: fixed;
  top: 0;
  left: 50%;
  transform: translate(-50%, 0);
  font-size: 96px;
  text-align: center;
  width: 100%;
  transition: all 0.3s ease-in;

  &.active {
    color: red;
    font-size: 3rem;
    transition: all 0.3s ease-in;
  }
`;
