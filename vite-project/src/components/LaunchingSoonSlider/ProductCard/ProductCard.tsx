import React from "react";
import { ProductCardStyled } from "./style";
import { IDatabaseProducts } from "../../../database/database";
import { Paragraph } from "../../../styles/typography";
import { BiStar } from "react-icons/bi";
import { BsCart3 } from "react-icons/bs";

export const ProductCard = ({ databaseProducts }: IDatabaseProducts) => {
  return (
    <>
      {databaseProducts.map((product) => (
        <ProductCardStyled key={product.id}>
          <div className="content-img">
            <img src={product.src} alt="" />
            <BiStar className="icon" />
            <BsCart3 className="iconCart" />
          </div>
          <div className="content-product">
            <Paragraph
              fontWeight={600}
              color={"black1"}
              lineHeight={"16px"}
              textMaxWidth={"182px"}
            >
              {product.title}
            </Paragraph>
            <Paragraph
              fontWeight={700}
              color={"orange1"}
              size={"xxl"}
              lineHeight={"26px"}
            >
              {product.price}
            </Paragraph>
            <Paragraph
              fontWeight={400}
              color={"dark3"}
              size={"md"}
              lineHeight={"16.8px"}
              textTransf="none"
            >
              {product.payment}
            </Paragraph>
          </div>
        </ProductCardStyled>
      ))}
    </>
  );
};
