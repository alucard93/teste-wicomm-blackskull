import styled from "styled-components";

export const FooterStyled = styled.footer`
  display: flex;
  width: 100%;
  flex-direction: column;
  background-color: ${props => props.theme.black1};;
  

  .content-header {
    
    flex-direction: row;
    
    height: 500px;
  }

  .content-interative {
    
    width: 927px;
    height: 500px;
  }

  .content-contact {
    border-left: 1px solid ${props => props.theme.dark3};
    width: 353px;
    height: 500px;
  }

  .content-footer {
    border-top: 1px solid ${props => props.theme.dark3};
  
    /* flex-direction: row; */
    height: 88px;
  }
`;
