// estilização
import { ProductCategoryStyled } from "./ProductCategory/style";
import { ProductsCategoriesSliderStyled } from "./style";

// banco de dados
import { databaseCategories } from "../../database/database";

// componente
import { Paragraph } from "../../styles/typography";
import { ProductCategory } from "./ProductCategory/ProductCategory";

export const ProductsCategoriesSlider = () => {
  return (
    <ProductsCategoriesSliderStyled>
      <ProductCategory autoSlide={true}>
        {databaseCategories.map((category) => (
          <ProductCategoryStyled key={category.id}>
            <div className="background-img">
              <img src={category.src} alt={category.alt} />
            </div>
            <Paragraph color={"dark1"} fontWeight={700} lineHeight={"16px"}>
              {category.title}
            </Paragraph>
          </ProductCategoryStyled>
        ))}
      </ProductCategory>
    </ProductsCategoriesSliderStyled>
  );
};
