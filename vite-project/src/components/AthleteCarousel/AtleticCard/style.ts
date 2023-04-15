import styled from "styled-components";
import { keyframes } from "styled-components";

const slideInFromLeft = keyframes`
  0% {
    width: 0;
    left: 0;
    background-color: transparent;
  }

  10% {
    background-color: orange;
  }
  
  100% {
    width: 100%;
    left: 0;
    opacity: 0.945;
    background-color: '#2C2C2E';
  }
`;

const slideInFromLeftReverse = keyframes`
  0% {
    width: 100%;
    left: 0;
    opacity: 0.945;
    background-color: '#2C2C2E';
  }

  60% {
    opacity: 0.6;
  }

  90% {
    opacity: 0.2;
  }

  90% {
    background-color: orange;
    opacity: 0.1;
  }

  100% {
    width: 0;
    left: 0;
    opacity: 0;
    background-color: transparent;
    
  }
`;

export const AtleticCardStyled = styled.div`
  justify-content: center;
  align-items: center;
  background: red;
  position: relative;
  max-width: 277px;

  .background-img {
    flex-direction: row;
    background: green;
    max-width: 277px;
  }

  .content-description {
    display: none;
    flex-direction: column;
    justify-content: space-around;
    padding-left: 16px;
    position: absolute;
    height: 105px;
    opacity: 0.945;
    background-color: ${(props) => props.theme.dark2};
    bottom: 0;
  }

  &:hover .content-description {
    display: flex;
    animation: ${slideInFromLeft} 0.3s ease-in-out forwards;
    animation-delay: 0.05s;
  }

  &:not(:hover) .content-description {
    display: flex;
    animation: ${slideInFromLeftReverse} 0.3s ease-in-out forwards;
  }



  .title {
    white-space: nowrap;
  }

  .icon{
    font-size: 16px;
    vertical-align: middle;
    margin-left: 2px;
  }
`;
