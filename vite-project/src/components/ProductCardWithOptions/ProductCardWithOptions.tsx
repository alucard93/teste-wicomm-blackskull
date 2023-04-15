import { ProductCardWithOptionsStyled } from "./style";
import Button from "../Button/Button";
import { Paragraph } from "../../styles/typography";

export const ProductCardWithOptions = () => {
  return (
    <ProductCardWithOptionsStyled>
      <div className="content-background">
        <Paragraph fontWeight={700} lineHeight={"16px"} color={"black1"} size={"md"}>
          Sabor
        </Paragraph>
        <div className="content-buttons">
          <Button buttonSize={'sb'} variant={"gray3"}>Toffee</Button>
          <Button buttonSize={'sb'} variant={"gray3"}>Chocolate</Button>
          <Button buttonSize={'sb'} variant={"gray3"}>Morango</Button>
          <Button buttonSize={'sb'} variant={"gray3"}>Baunilha</Button>
        </div>
      </div>

      <Button>Comprar</Button>
    </ProductCardWithOptionsStyled>
  );
};
