import styled from "styled-components";

interface IHeroSectionStiledProps {
  photo?: string;
}

export const HeroSectionStiled = styled.div<IHeroSectionStiledProps>`
  background-image: url(${(props) => props.photo});
  background-size: cover;
  background-repeat: no-repeat;

  height: 548px;
`;
