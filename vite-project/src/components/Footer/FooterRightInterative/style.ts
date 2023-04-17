import styled from "styled-components";

export const FooterRightInterativeStyled = styled.footer`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  justify-content: center;
  padding: 64px 43px 86px 44px;
  
  
  .content-card {
    /* background-color: red; */
    align-items: center;
    
    height: 350px;
    max-width: 266px;
    text-align: center;
    gap: 16px;

    & > p {
      margin-bottom: 16px;
    }
  }
  
  .text-title-form {
    max-width: 146px;
    vertical-align: middle;
    /* text-align: center; */
  }
  
  form > button {
    margin: 0 auto;
    margin-top: 8px;
  }

  `
