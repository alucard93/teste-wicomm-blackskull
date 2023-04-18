// estilização
import { ButtonNavigateStyled } from "./style";

// components
import { Paragraph } from "../../../../styles/typography";

// lib - futuro filtro
import { NavLink } from "react-router-dom";

// tipagem
import { ReactNode } from "react";

interface ButtonNavigateProps {
  children: ReactNode;
}

const ButtonNavigate = ({ children }: ButtonNavigateProps) => {
  return (
    <ButtonNavigateStyled>
      <li>
        <NavLink to="/">
          <Paragraph
            fontWeight={700}
            size={"sm"}
            lineHeight={"16px"}
            color={"gray1"}
          >
            {children}
          </Paragraph>
        </NavLink>
      </li>
    </ButtonNavigateStyled>
  );
};

export default ButtonNavigate;
