import styled from "styled-components";

interface AthleticCarouselProps {
  photo?: string;
}

export const AthleticCarouselStyled = styled.div<AthleticCarouselProps>`
  position: relative;
  flex-direction: column;

  justify-content: center;
  align-items: center;
  background-image: url(${(props) => props.photo});
  background-size: cover;
  background-repeat: no-repeat;
  height: 461px;
  
  
  .content{
    max-width: 877px;
    gap: 24px;
  }

  .color {
    color: ${props => props.theme.orange1};
  }
  
  .container{
    flex-direction: row;
    justify-content: center;
    gap: 16px;
  }

  .button{
    position: absolute;
    padding: 14px 24px;
    font-size: 16px;
    white-space: nowrap;

    bottom: -24px;
  }
`;
