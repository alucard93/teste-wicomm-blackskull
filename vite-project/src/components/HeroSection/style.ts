import styled from "styled-components";

interface IHeroSectionStiledProps {
  photo?: string;
}

export const HeroSectionStiled = styled.div<IHeroSectionStiledProps>`
  justify-content: center;
  background-image: url(${(props) => props.photo});
  background-size: cover;
  background-repeat: no-repeat;

  height: 548px;

  .content {
    justify-content: center;
    gap: 16px;

    max-width: 551px;

    margin-left: 155px;

    & > p {
      max-width: 349px;
    }

    & > button {
      margin-top: 16px;
      
    }
  }
`;
