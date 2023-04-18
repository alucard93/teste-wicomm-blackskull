import { IDatabaseAtheticProps } from "../../../interfaces/DatabaseInterface";
import { Heading, Paragraph } from "../../../styles/typography";
import { AtleticCardStyled } from "./style";
import { FaArrowRight } from "react-icons/fa";
import Slider from "react-slick";

import { ImageViewer } from "../../SvgComponents/ImageViewerSvg/ImageViewer";
import { LeftArrow } from "../../SvgComponents/LeftArrow/LeftArrow";
import { RightArrow } from "../../SvgComponents/RightArrow/RightArrow";

export const AtleticCard = ({ databaseAthetic }: IDatabaseAtheticProps) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: -2,
    autoplay: true,
    speed: 6000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    prevArrow: <LeftArrow />,
    nextArrow: <RightArrow />,
  };

  return (
    <Slider {...settings}>
      {databaseAthetic.map((atletic) => (
        <div className="center" key={atletic.id}>
          <AtleticCardStyled>
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
                mais informação <FaArrowRight className="icon" />
              </Paragraph>
            </div>
          </AtleticCardStyled>
        </div>
      ))}
    </Slider>
  );
};
