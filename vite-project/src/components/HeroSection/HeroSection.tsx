import { IDatababaseMain, databaseMain } from "../../database/database";
import { Heading, Paragraph } from "../../styles/typography";
import { HeroSectionStiled } from "./style";

export const HeroSection = () => {
  const mainData: IDatababaseMain = databaseMain[0];
  return (
    <HeroSectionStiled photo={mainData.src}>
      <Heading level={1} size={"xxxxxl"} lineHeight={"66px"}>
        {mainData.title}
      </Heading>
      <Paragraph></Paragraph>
    </HeroSectionStiled>
  );
};
