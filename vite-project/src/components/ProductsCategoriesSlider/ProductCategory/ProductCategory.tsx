import { Paragraph } from "../../../styles/typography";
import { ProductCategoryStyled } from "./style";
import { IDatabaseCategoriesProps } from "../../../interfaces/DatabaseInterface";

export const ProductCategory = ({
  databaseCategories,
}: IDatabaseCategoriesProps) => {
  return (
    <>
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
    </>
  );
};
