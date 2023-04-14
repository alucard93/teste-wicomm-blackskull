import React from "react";
import { ProductCardWithOptionsStyled } from "./style";
import Button from "../Button/Button";

export const ProductCardWithOptions = () => {
  return (
    <ProductCardWithOptionsStyled>
      <div className="content-background">teste</div>
      <Button>Comprar</Button>
    </ProductCardWithOptionsStyled>
  );
};
