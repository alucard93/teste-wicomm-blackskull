import styled from "styled-components";

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
    flex-direction: column;
    justify-content: space-around;
    padding-left: 16px;
    position: absolute;
    height: 105px;
    opacity: 0.945;
    background-color: ${(props) => props.theme.dark2};
    bottom: 0;
  }
`;
