import React from "react";
import { LaunchingSoonSliderStyled } from "./style";
import { ProductCard } from "./ProductCard/ProductCard";
import { databaseProducts } from "../../database/database";
import { Heading } from "../../styles/typography";

export const LaunchingSoonSlider = () => {
  return (
    <LaunchingSoonSliderStyled>
      <div className="content">
        <Heading level={2} size={"xxxl"} lineHeight={"37.5px"} color="dark1">
          Lançamentos
        </Heading>
      </div>
      <section className="content-products">
        <ProductCard databaseProducts={databaseProducts} />
      </section>
    </LaunchingSoonSliderStyled>
  );
};
