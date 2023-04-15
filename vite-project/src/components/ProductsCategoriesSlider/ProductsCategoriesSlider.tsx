import { databaseCategories } from "../../database/database";
import { ProductCategory } from "./ProductCategory/ProductCategory";
import { ProductsCategoriesSliderStyled } from "./style";

export const ProductsCategoriesSlider = () => {
  return (
    <ProductsCategoriesSliderStyled>
      <ProductCategory databaseCategories={databaseCategories} />
    </ProductsCategoriesSliderStyled>
  );
};
