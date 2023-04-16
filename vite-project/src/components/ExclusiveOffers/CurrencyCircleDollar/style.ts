import styled, { keyframes } from "styled-components";

const rotate = keyframes`
  from {
    transform: rotate(180deg) translate(0%, 0%);
  }
  to {
    transform: rotate(0deg) translate(-10%, -10%);
  }
`;

const moveUp = keyframes`
  from {
    transform: translateY(0);
  }
  to {
    transform: translateY(30px);
  }
`;

const rotateBack = keyframes`
  from {
    transform: rotate(0deg) translate(-10%, -10%);
  }
  to {
    transform: rotate(180deg) translate(0%, 0%);
  }
`;

const moveDown = keyframes`
  from {
    transform: translateY(-30px);
  }
  to {
    transform: translateY(0);
  }
`;

export const AnimatedSvg = styled.svg`
  transform-origin: center;

  &:hover {
    animation: ${rotate} 0.5s forwards;
    animation-direction: forwards;
  }

  &:hover + .move-up {
    animation: ${moveUp} 0.5s forwards;
    animation-direction: forwards;
  }

  &:not(:hover) {
    animation: ${rotateBack} 0.5s backwards;
  }

  &:not(:hover) + .move-up {
    animation: ${moveDown} 0.5s backwards;
  }
`;
