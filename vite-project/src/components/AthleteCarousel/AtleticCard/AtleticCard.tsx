import { databaseAthetic } from "../../../interfaces/DatabaseInterface";
import { Heading, Paragraph } from "../../../styles/typography";
import { AtleticCardStyled } from "./style";
import { FaArrowRight } from "react-icons/fa";

export const AtleticCard = ({ databaseAthetic }: databaseAthetic) => {
  return (
    <>
      {databaseAthetic.map((atletic) => (
        <AtleticCardStyled key={atletic.id}>
          <div className="background-img">
            <img src={atletic.src} />
          </div>
          <div className="content-description">
            <Heading
              className="title"
              level={3}
              color={"orange1"}
              fontWeight={700}
              lineHeight={"16px"}
              size={"lg"}
            >
              {atletic.nameAthetic}
            </Heading>
            <Paragraph
              color={"white"}
              fontWeight={600}
              lineHeight={"16px"}
              size={"sm"}
            >
              mais informação <FaArrowRight className="icon"/>
            </Paragraph>
          </div>
        </AtleticCardStyled>
      ))}
    </>
  );
};
