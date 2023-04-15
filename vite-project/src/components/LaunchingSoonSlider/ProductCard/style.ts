import styled from "styled-components";

export const ProductCardStyled = styled.div`
  position: relative;
  max-width: 277px;
  height: 341px;
  background: ${(props) => props.theme.white};

  border: 1px solid ${(props) => props.theme.gray3};
  border-radius: 4px;

  .content-img {
    align-items: center;
    justify-content: center;
    padding: 32px 56px 0px 56px;
    position: relative;
  }

  .icon {
    position: absolute;
    top: 20px;
    right: 16px;
    height: 24px;
    color: ${props => props.theme.gray1};
  }

  .iconCart {
    position: absolute;
    top: 52px;
    right: 16px;
    height: 24px;
    color: ${props => props.theme.gray1};
  }

  .content-product {
    padding-top: 24px;
    padding-left: 24px;
  }

  .content-product > p:nth-child(2) {
    padding-top: 16px;
  }

  .container-option-off{
    display: none;
  }

  .container-option{
    display: flex;
    position: absolute;
    bottom: -48px;
  }
`;
