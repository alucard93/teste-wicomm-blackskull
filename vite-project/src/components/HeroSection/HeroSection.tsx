import { databaseMain } from "../../database/database";
import { IDatababaseMain } from "../../interfaces/DatabaseInterface";
import { Heading, Paragraph } from "../../styles/typography";
import { Button } from "../Button/Button";
import { FixedTop } from "./FixedTop/FixedTop";
import { HeroSectionStiled } from "./style";
import { RxCaretUp } from "react-icons/rx";

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
        <Button buttonSize={"120px"} variant={"orange1"}>
          Confira
        </Button>
        <FixedTop />
      </div>
    </HeroSectionStiled>
  );
};
