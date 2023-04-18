// estilização
import { FooterBottomStyled } from "./style";

// componentes
import { Paragraph } from "../../../styles/typography";

// img
import wicomm from "../../../../public/assets/wicomm.svg";
import vtex from "../../../../public/assets/vtexpink.svg";

export const FooterBottom = () => {
  return (
    <FooterBottomStyled>
      <div className="content-reserve">
        <Paragraph
          fontWeight={400}
          size={"lg"}
          lineHeight={"19px"}
          color={"white"}
          textTransf={"none"}
        >
          Black Skull 2022. Todos os direitos reservados.
        </Paragraph>
      </div>
      <div className="content-imgs">
        <img src={wicomm} alt="logo da empresa wicomm" />
        <img src={vtex} alt="logo da empresa vtex" />
      </div>
    </FooterBottomStyled>
  );
};
