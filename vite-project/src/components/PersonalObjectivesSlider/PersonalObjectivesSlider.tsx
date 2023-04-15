import { databaseObjectives } from "../../database/database";
import { ObjectiveCard } from "./ObjectiveCard/ObjectiveCard";

export const PersonalObjectivesSlider = () => {
  return (
    <div>
      <ObjectiveCard databaseObjective={databaseObjectives} />
    </div>
  );
};
