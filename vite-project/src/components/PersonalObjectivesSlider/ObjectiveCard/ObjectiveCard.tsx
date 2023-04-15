import { IDatabaseObjectiveProps } from "../../../interfaces/DatabaseInterface";
import { Paragraph } from "../../../styles/typography";
import { ObjectiveCardStyled } from "./style";

export const ObjectiveCard = ({
  databaseObjective,
}: IDatabaseObjectiveProps) => {
  return (
    <>
      {databaseObjective.map((objective) => (
        <ObjectiveCardStyled key={objective.id}>
          <div className="background-img">
            <img src={objective.src} alt={objective.alt} />
            <Paragraph color={"dark1"} fontWeight={700} lineHeight={"16px"}>
            {objective.title}
          </Paragraph>
          </div>
          
        </ObjectiveCardStyled>
      ))}
    </>
  );
};
