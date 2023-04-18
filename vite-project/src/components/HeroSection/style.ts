import styled from "styled-components";
import Slider from "react-slick";

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
    margin-top: 120px;
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

export const StyledSlider = styled(Slider)`
  .slick-dots {
    position: absolute;
    bottom: 20px;
    width: 100%;
    list-style: none;
    display: flex !important;

    justify-content: center;

    li {
      button {
        width: 40px;
        height: 2px;

        list-style: none;

        transition: all 0.3s ease;

        &.slick-active {
          background-color: orange;
          color: yellow;
          width: 12px;
          height: 12px;
        }
      }
    }
  }
`;
