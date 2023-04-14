import { Paragraph } from "../../../styles/typography";
import { IconTruck } from "../IconTruck/IconTruck";
import { TopHeaderStyle } from "./style";

export const TopHeader = () => {
  return (
    <TopHeaderStyle>
      <div className="container">
        <div className="content-contact ">
          <Paragraph
            fontWeight={700}
            lineHeight={"14px"}
            color={"orange1"}
            size={"sm"}
          >
            Fale conosco
          </Paragraph>
        </div>

        <div className="content-icon-text">
          <IconTruck />
          <Paragraph
            fontWeight={500}
            lineHeight={"12px"}
            color={"gray2"}
            size={"xs"}
          >
            Frete grátis a partir de R$ 199,90 para todo Brasil
          </Paragraph>
        </div>

        <div className="content-blog">
          <Paragraph
            fontWeight={700}
            lineHeight={"14px"}
            color={"orange1"}
            size={"sm"}
          >
            Blog.Blackskull
          </Paragraph>
        </div>
      </div>
    </TopHeaderStyle>
  );
};
