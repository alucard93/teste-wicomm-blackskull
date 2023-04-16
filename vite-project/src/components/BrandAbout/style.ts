import styled from "styled-components";

interface BrandAboutStyledProps {
  photo?: string;
}

export const BrandAboutStyled = styled.div<BrandAboutStyledProps>`
  justify-content: center;
  align-items: center;
  margin-top: 64px;

  .container {
    background-image: url(${(props) => props.photo});
    background-size: calc(160px);
    background-position: center top;
    background-repeat: no-repeat;
    justify-content: center;
    align-items: center;
    max-width: 643px;
    height: 278px;
    
    gap: 24px;
    padding-top: 64px;
  }

  .about {
    text-align: center;
  }
`;
