import { databaseMain } from "../../database/database";
import { IDatabaseMainProps } from "../../interfaces/DatabaseInterface";
import { Heading, Paragraph } from "../../styles/typography";
import { Button } from "../Button/Button";
import { FixedTop } from "../FixedTop/FixedTop";
import { HeroSectionStiled, StyledSlider } from "./style";

export const HeroSection = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    appendDots: (dots: any) => (
      <div style={{}}>
        <ul style={{ margin: "0px", listStyle: "none", padding: "0px" }}>
          {" "}
          {dots}{" "}
        </ul>
      </div>
    ),
  };

  return (
    <StyledSlider {...settings}>
      {databaseMain.map((data) => (
        <div key={data.id}>
          <HeroSectionSlide data={data} />
        </div>
      ))}
    </StyledSlider>
  );
};

const HeroSectionSlide = ({ data }: IDatabaseMainProps) => (
  <HeroSectionStiled photo={data.src}>
    <div className="content">
      <Heading level={1} size={"xxxxxl"} lineHeight={"66px"}>
        {data.title}
      </Heading>
      <Paragraph
        fontWeight={400}
        size={"lg"}
        color={"white"}
        lineHeight={"20px"}
        fontFamily={"Barlow"}
        textTransf={"none"}
      >
        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy
        eirmod tempor invidunt ut labore et dolore magna
      </Paragraph>
      <Button buttonSize={"120px"} variant={"orange1"}>
        Confira
      </Button>
    </div>
  </HeroSectionStiled>
);
