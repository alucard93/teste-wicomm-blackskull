import { IDatababaseMain, databaseMain } from "../../database/database";
import { Heading, Paragraph } from "../../styles/typography";
import { Button } from "../Button/Button";
import { HeroSectionStiled } from "./style";

export const HeroSection = () => {
  const mainData: IDatababaseMain = databaseMain[0];
  return (
    <HeroSectionStiled photo={mainData.src}>
      <div className="content">
        <Heading level={1} size={"xxxxxl"} lineHeight={"66px"}>
          {mainData.title}
        </Heading>
        <Paragraph
          fontWeight={400}
          size={"lg"}
          color={"white"}
          lineHeight={"20px"}
          fontFamily={"Barlow"}
          textTransf={"none"}
        >
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna
        </Paragraph>
        <Button buttonSize={"120px"}>Confira</Button>
      </div>
    </HeroSectionStiled>
  );
};
