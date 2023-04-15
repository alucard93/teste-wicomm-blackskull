import { databaseAthetic } from "../../database/database";
import { AtleticCard } from "./AtleticCard/AtleticCard";
import { AthleticCarouselStyled } from "./style";
import backgroundSkull from "../../../public/assets/background-skull.svg";
import { Heading } from "../../styles/typography";

const AthleteCarousel = () => {
  return (
    <AthleticCarouselStyled photo={backgroundSkull}>
      <div className="content">
        <Heading level={2}>Conheça a Tropa <span className="color">Black Skull</span></Heading>
        <div className="container">
          <AtleticCard databaseAthetic={databaseAthetic} />
        </div>
      </div>
    </AthleticCarouselStyled>
  );
};

export default AthleteCarousel;
