// banco de dados
import { databaseAthetic } from "../../database/database";

// componente
import { AtleticCard } from "./AtleticCard/AtleticCard";

// estilização
import { AthleticCarouselStyled } from "./style";

// img - logo
import backgroundSkull from "../../../public/assets/background-skull.svg";

// componentes
import { Heading } from "../../styles/typography";
import Button from "../Button/Button";

const AthleteCarousel = () => {
  return (
    <AthleticCarouselStyled photo={backgroundSkull}>
      <div className="content">
        <Heading level={2}>Conheça a Tropa <span className="color">Black Skull</span></Heading>
        <div className="container">
          <AtleticCard databaseAthetic={databaseAthetic} />
        </div>
      </div>
      <Button className="button" buttonSize={"139px"}>Ver todos</Button>
    </AthleticCarouselStyled>
  );
};

export default AthleteCarousel;
