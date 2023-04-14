import styled from "styled-components";

export const BottomHeaderStyled = styled.nav`
  display: flex;
  align-items: center;
  height: 72px;
  width: 100%;
  justify-content: center;
  background-color: ${(props) => props.theme.black1};

  .container {
    flex-direction: row;
    max-width: 71.125rem;
    align-items: center;
    justify-content: space-between;
  }

  figure {
    margin-right: 42px;
  }

  .nav-links {
    flex-direction: row;
    align-items: center;
    height: 72px;
  }

  .content-user {
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    max-width: 336px;
    

    &::before {
      content: "03";
      border: 1px solid ${(props) => props.theme.orange1};
      border-radius: 50%;
      background: ${(props) => props.theme.orange1};
      color: ${(props) => props.theme.gray1};
      height: 12px;
      font-size: 10px;
      color: ${(props) => props.theme.black1};
      margin-right: 8px;

      font-family: "Barlow";
      font-style: normal;
      font-weight: 700;
      font-size: 10px;
      line-height: 12px;
      text-align: center;

      position: relative;
      left: 330px;
      bottom: 6px;
    }
  }

  .content-input-icon {
    flex-direction: row;
    max-width: 216px;
    min-width: 216px;
    align-items: center;
    background-color: ${(props) => props.theme.dark1};
    border: 1px solid ${(props) => props.theme.dark3};
    color: ${(props) => props.theme.gray1};
    border-radius: 4px;

    &:hover {
      background: ${(props) => props.theme.dark3};
    }

    &:focus-within {
      border: 1px solid ${(props) => props.theme.gray1};
    }
  }

  .content-input-icon input {
    background-color: transparent;
    border: none;
    width: 100%;
    height: 40px;
    color: ${(props) => props.theme.gray1};
    caret-color: ${(props) => props.theme.gray1};

    &:focus {
      outline: transparent;
      text-indent: 10px;
    }

    &::placeholder {
      padding-left: 16px;
      font-family: "Barlow";

      font-weight: 500;
      font-size: 0.75rem;
      line-height: 14px;
    }

    &:focus::placeholder {
      opacity: 0;
    }
  }

  .iconGlass {
    color: ${(props) => props.theme.gray1};
    height: 24px;
    width: 24px;
    margin-right: 11px;
  }

  .icon {
    color: ${(props) => props.theme.gray1};
    width: 24px;
    height: 24px;

    &:hover{
      color: ${props => props.theme.white};
    }
  }
`;
