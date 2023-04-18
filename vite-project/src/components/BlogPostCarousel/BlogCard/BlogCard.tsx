// react slick
import Slider from "react-slick";

// estilização
import { BlogCardStyled } from "./style";

// interface props
import { IDatabaseBlogProps } from "../../../interfaces/DatabaseInterface";

// componentes
import Button from "../../Button/Button";
import { Paragraph } from "../../../styles/typography";
import { LeftArrow } from "../../SvgComponents/LeftArrow/LeftArrow";
import { RightArrow } from "../../SvgComponents/RightArrow/RightArrow";

// icon
import { BsBoxArrowUpRight } from "react-icons/bs";

export const BlogCard = ({ databaseBlog }: IDatabaseBlogProps) => {
  const settings = {
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: -2,

    speed: 6000,
    autoplaySpeed: 2000,
    cssEase: "linear",
    prevArrow: <LeftArrow />,
    nextArrow: <RightArrow />,
  };

  return (
    <>
      <Slider {...settings}>
        {databaseBlog.map((article) => (
          <BlogCardStyled key={article.id}>
            <div className="container">
              <div className="content-img">
                <img src={article.src} alt={article.alt} />
              </div>
              <div className="content-info">
                <Paragraph
                  size={"md"}
                  fontWeight={400}
                  lineHeight={"17px"}
                  color={"gray2"}
                >
                  {article.date}
                </Paragraph>
                <Paragraph
                  size={"xl"}
                  fontWeight={700}
                  lineHeight={"22px"}
                  color={"white"}
                >
                  {article.description}
                </Paragraph>
                <div className="content-button">
                  <Button className="button" buttonSize={"138px"}>
                    Ler mais
                  </Button>
                  <BsBoxArrowUpRight className="icon" />
                </div>
              </div>
            </div>
          </BlogCardStyled>
        ))}
      </Slider>
    </>
  );
};
