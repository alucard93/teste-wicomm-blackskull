import { IDatabaseObjectiveProps } from "../../../interfaces/DatabaseInterface";
import { Paragraph } from "../../../styles/typography";
import { ImageViewer } from "./ImageViewerSvg/ImageViewer";
import { ObjectiveCardStyled } from "./style";

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
