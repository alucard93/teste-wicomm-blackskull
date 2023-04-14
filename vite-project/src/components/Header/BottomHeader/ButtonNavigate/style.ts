import styled, { keyframes } from "styled-components";

const slideInFromLeft = keyframes`
  0% {
    width: 0;
    left: 0;
  }
  100% {
    width: 100%;
    left: 0;
  }
`;

export const ButtonNavigateStyled = styled.ul`
  height: 72px;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;

  &:hover {
    background-color: ${props => props.theme.dark3};
    p {
      color: white;
    }

    &::before {
      content: "";
      position: absolute;
      bottom: 0;
      left: 0;
      width: 0;
      height: 4px;
      background-color: ${props => props.theme.orange1};
      animation: ${slideInFromLeft} 0.275s ease-in-out forwards;
    }
  }
`;
