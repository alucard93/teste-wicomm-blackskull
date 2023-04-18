// estilização
import { BottomHeaderStyled } from "./style";

// componentes
import ButtonNavigate from "./ButtonNavigate/ButtonNavigate";

// img - logo
import blackskull from "/assets/blackskull-logo.svg";

// icons
import { HiMagnifyingGlass } from "react-icons/hi2";
import { BiUserCircle, BiStar } from "react-icons/bi";
import { BsCart3 } from "react-icons/bs";

export const BottomHeader = () => {
  return (
    <BottomHeaderStyled>
      <div className="container">
        <figure>
          <img src={blackskull} alt="logo da marca blackskull" />
        </figure>
        <div className="nav-links">
          <ButtonNavigate>Categorias</ButtonNavigate>
          <ButtonNavigate>Vestuário</ButtonNavigate>
          <ButtonNavigate>Objetivos</ButtonNavigate>
          <ButtonNavigate>Promoções</ButtonNavigate>
          <ButtonNavigate>Atletas</ButtonNavigate>
          <ButtonNavigate>Assinatura</ButtonNavigate>
        </div>
        <div className="content-user">
          <div className="content-input-icon">
            <input placeholder="Buscar" type="text" />
            <HiMagnifyingGlass className="iconGlass" />
          </div>
          <BiUserCircle className="icon" />
          <BiStar className="icon" />
          <BsCart3 className="icon" />
        </div>
      </div>
    </BottomHeaderStyled>
  );
};
