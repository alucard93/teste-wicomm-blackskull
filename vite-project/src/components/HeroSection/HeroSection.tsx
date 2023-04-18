// estilização
import { HeroSectionStiled, StyledSlider } from "./style";

// banco de dados
import { databaseMain } from "../../database/database";

// componentes
import { Heading, Paragraph } from "../../styles/typography";
import { Button } from "../Button/Button";

// tipagem
import { IDatabaseMainProps } from "../../interfaces/DatabaseInterface";

export const HeroSection = () => {
  const settings = {
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: -1,
    autoplay: true,
    autoplaySpeed: 5000,
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
