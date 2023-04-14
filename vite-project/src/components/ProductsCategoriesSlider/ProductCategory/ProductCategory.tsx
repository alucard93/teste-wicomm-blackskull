import React from "react";
import product from "../../../../public/assets/category.svg";
import { Paragraph } from "../../../styles/typography";
import { ProductCategoryStyled } from "./style";

export const ProductCategory = () => {
  return (
    <ProductCategoryStyled>
      <div className="background-img">
        <img src={product} alt="" />
      </div>
      <Paragraph color={"dark1"} fontWeight={700} lineHeight={"16px"}>
        Proteínas
      </Paragraph>
    </ProductCategoryStyled>
  );
};
