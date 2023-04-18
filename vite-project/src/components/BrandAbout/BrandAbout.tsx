// estilização
import { BrandAboutStyled } from "./style";

//  componentes
import { Heading, Paragraph } from "../../styles/typography";

// img marca
import brand from "../../../public/assets/brandAbout.svg";

export const BrandAbout = () => {
  return (
    <BrandAboutStyled photo={brand}>
      <div className="container">
        <Heading level={2} size={"xxxl"} lineHeight={"37.5px"} color={"dark1"}>
          sobre a black skull
        </Heading>
        <Paragraph
          className="about"
          size={"sm"}
          lineHeight={"20px"}
          fontWeight={400}
          color={"dark3"}
        >
          A Black Skull USA é uma marca de suplementos alimentares com foco em
          atletas de alta performance. Nossa sede no Brasil está alocada em Embu
          das Artes – SP, com mais de 12.000 m² de área construída, com alta
          capacidade produtiva. Nossos produtos trabalham com as melhores
          matérias-primas do mercado e tem como principal característica maior
          concentração de insumos, que proporcionam níveis de pureza mais altos
          e por consequência otimizam a qualidade de nossos produtos.
        </Paragraph>
      </div>
    </BrandAboutStyled>
  );
};
