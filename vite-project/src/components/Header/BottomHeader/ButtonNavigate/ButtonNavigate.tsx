import { ReactNode } from "react";
import { NavLink } from "react-router-dom";
import { Paragraph } from "../../../../styles/typography";
import { ButtonNavigateStyled } from "./style";


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
