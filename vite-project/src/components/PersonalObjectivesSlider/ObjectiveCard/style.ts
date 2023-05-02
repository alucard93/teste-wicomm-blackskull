import styled from "styled-components";

export const ObjectiveCardStyled = styled.div`
  .container {
    justify-content: center;
    align-items: center;
  }

  .background-img {
    position: relative;

    max-width: 277px;
    height: 340px;

    filter: drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25));
    border: 1px solid #000000;

    clip-path: polygon(5px 0px, 275px 0px, 275px 340px, 5px 340px);

  }

  img {
    max-width: 100%;
    height: 100%;
    object-fit: cover;
    
    filter: grayscale(100%);

    &:hover {
      transition: transform 0.5s ease-out;
      transform: scale(1.2);

      filter: grayscale(0%);
    }

    &:not(:hover) {
      transition: transform 0.5s ease-out;
      transform: scale(1);
    }
  }

  .content-title2 {
    display: flex;
    flex-direction: row;
    align-items: center;

    padding-left: 16px;

    position: absolute;
    bottom: 0px;
    left: 0px;

    background: ${(props) => props.theme.orange1};
    height: 40px;

    max-width: 212px;
    clip-path: polygon(0 0, 212px 0, 212px 0, 0 400px, 0 0);
  }

  .icon {
    position: absolute;

    bottom: 0;
    left: 150px;
    opacity: 0;

    transition: transform 0.2s ease-in-out;
  }

  .background-img:hover .icon {
    opacity: 1;
    transform: translateX(30px);
  }
`;
