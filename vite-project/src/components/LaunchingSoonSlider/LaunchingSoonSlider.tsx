// estilização
import { LaunchingSoonSliderStyled } from "./style";

// banco de dados
import { databaseProducts } from "../../database/database";

// componente
import { ProductCard } from "./ProductCard/ProductCard";
import { Heading } from "../../styles/typography";

export const LaunchingSoonSlider = () => {
  return (
    <LaunchingSoonSliderStyled>
      <div className="container">
        <div className="content">
          <Heading level={2} size={"xxxl"} lineHeight={"37.5px"} color="dark1">
            Lançamentos
          </Heading>
        </div>
        <section className="content-products">
          <ProductCard databaseProducts={databaseProducts} />
        </section>
      </div>
    </LaunchingSoonSliderStyled>
  );
};
