import styled from "styled-components";

export const InputStyled = styled.div`
gap: 16px;
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

  
`
