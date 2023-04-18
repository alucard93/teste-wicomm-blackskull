// estilização
import { PersonalObjectivesSliderStyled } from "./style";

// banco de dados
import { databaseObjectives } from "../../database/database";

// componente
import { ObjectiveCard } from "./ObjectiveCard/ObjectiveCard";
import { Heading } from "../../styles/typography";

export const PersonalObjectivesSlider = () => {
  return (
    <PersonalObjectivesSliderStyled>
      <div className="content-title">
        <Heading level={2} lineHeight={"37.5px"} size={"xxxl"} color={"dark1"}>
          Objetivos
        </Heading>
      </div>
      <div className="wrapper">
        <ObjectiveCard databaseObjective={databaseObjectives} />
      </div>
    </PersonalObjectivesSliderStyled>
  );
};
