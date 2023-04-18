import styled from "styled-components";

export const FixedTopStyled = styled.div`

  .icon {
    background: #3a3a3c;
    color: ${(props) => props.theme.gray1};
    border: 1px solid ${(props) => props.theme.gray1};
    border-radius: 4px;
    height: 56px;
    width: 56px;
  }
  .button-talk {
    font-weight: 700;
    font-size: 14px;
    line-height: 20px;
    text-transform: none;
  }
  
  .content-top{
    position: fixed;
    
    z-index: 999;
    top: 460px;
    left: 1130px;
    gap: 10px;
    
  }

`
