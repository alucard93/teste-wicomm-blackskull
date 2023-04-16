import { databaseObjectives } from "../../database/database";
import { Heading } from "../../styles/typography";
import { ObjectiveCard } from "./ObjectiveCard/ObjectiveCard";
import { PersonalObjectivesSliderStyled } from "./style";

export const PersonalObjectivesSlider = () => {
  return (
    <PersonalObjectivesSliderStyled>
      <div className="content-title">
        <Heading level={2} lineHeight={"37.5px"} size={"xxxl"} color={"dark1"}>Objetivos</Heading>
      </div>
      <div className="wrapper">
        <ObjectiveCard databaseObjective={databaseObjectives} />
      </div>
    </PersonalObjectivesSliderStyled>
  );
};
