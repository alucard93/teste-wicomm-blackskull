// estilização
import { FixedTopStyled } from "./style";

// icons 
import { RxCaretUp } from "react-icons/rx";

// componente
import Button from "../Button/Button";

export const FixedTop = () => {
  const scrollUp = () => {
    window.scroll({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <FixedTopStyled>
      <div className="content-top">
        <RxCaretUp className="icon" size={"32px"} onClick={scrollUp} />
        <Button className="button-talk" buttonSize="124px">
          Fale conosco
        </Button>
      </div>
    </FixedTopStyled>
  );
};
