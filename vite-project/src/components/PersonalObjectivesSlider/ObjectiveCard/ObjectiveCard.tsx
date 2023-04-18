// estilização
import { ObjectiveCardStyled } from "./style";

// componente
import { Paragraph } from "../../../styles/typography";
import { ImageViewer } from "../../SvgComponents/ImageViewerSvg/ImageViewer";

// interface
import { IDatabaseObjectiveProps } from "../../../interfaces/DatabaseInterface";

export const ObjectiveCard = ({
  databaseObjective,
}: IDatabaseObjectiveProps) => {
  return (
    <>
      {databaseObjective.map((objective) => (
        <ObjectiveCardStyled key={objective.id}>
          <div className="container">
            <div className="background-img">
              <img src={objective.src} alt="" />
              <div className="content-title2">
                <Paragraph
                  className="text-objective"
                  color={"dark1"}
                  fontWeight={700}
                  lineHeight={"16px"}
                >
                  {objective.title}
                </Paragraph>
              </div>
              <ImageViewer className="icon" />
            </div>
          </div>
        </ObjectiveCardStyled>
      ))}
    </>
  );
};
