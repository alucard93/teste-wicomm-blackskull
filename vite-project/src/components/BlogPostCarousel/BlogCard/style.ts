import styled, { keyframes } from "styled-components";

const slideInFromLeft = keyframes`
  0% {
    width: 0;
    left: 0;
    opacity: 0;
  }

  90% {
    opacity: 1
  }
  
  100% {
    width: 100%;
    left: 0;
    opacity: 1;
  }
`;

const slideInFromLeftReverse = keyframes`
  0% {
    width: 100%;
    left: 0;
    opacity: 0;
  }

  70% {
    opacity: 0.4;
  }

  100% {
    width: 0;
    left: 0;
    opacity: 0;
  }
`;

export const BlogCardStyled = styled.article`
  max-width: 376px;
  height: 380px;

  .container {
    background: ${(props) => props.theme.dark1};
    border: 1px solid ${(props) => props.theme.dark3};

    &:hover {
      background: ${(props) => props.theme.dark2};

      img {
        transition: transform 0.5s ease;
        transform: scale(1.2);
      }

      .icon {
        animation: ${slideInFromLeft} 0.2s ease-in-out forwards;
      }
    }
    &:not(:hover) {
      img {
        transition: transform 0.5s ease;
        transform: scale(1);
      }

      .icon {
        animation: ${slideInFromLeftReverse} 0.2s ease-in-out forwards;
      }
    }
  }

  .content-img {
    overflow: hidden;
  }

  img {
    width: 100%;
  }

  .content-info {
    gap: 16px;
    padding: 15px 0 24px 24px;
  }

  .content-button {
    position: relative;
  }

  .icon {
    position: absolute;
    top: 10px;
    color: ${(props) => props.theme.orange1};
    height: 24px;
    left: 120px;
  }
  
`;
