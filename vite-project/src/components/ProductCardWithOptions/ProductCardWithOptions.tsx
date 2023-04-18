// estilização
import { ProductCardWithOptionsStyled } from "./style";

// componente
import Button from "../Button/Button";
import { Paragraph } from "../../styles/typography";

// hook
import { useState } from "react";

export const ProductCardWithOptions = () => {
  const [selectedFlavorIds, setSelectedFlavorIds] = useState<number[]>([]);

  const handleFlavorButtonClick = (flavorId: number) => {
    if (selectedFlavorIds.includes(flavorId)) {
      setSelectedFlavorIds(selectedFlavorIds.filter((id) => id !== flavorId));
    } else {
      setSelectedFlavorIds([...selectedFlavorIds, flavorId]);
    }
  };

  return (
    <ProductCardWithOptionsStyled>
      <div className="content-background">
        <Paragraph
          fontWeight={700}
          lineHeight={"16px"}
          color={"black1"}
          size={"md"}
        >
          Sabor
        </Paragraph>
        <div className="content-buttons">
          <Button
            buttonSize={"sb"}
            variant={selectedFlavorIds.includes(1) ? "black1" : "gray3"}
            onClick={() => handleFlavorButtonClick(1)}
          >
            Toffee
          </Button>

          <Button
            buttonSize={"sb"}
            variant={selectedFlavorIds.includes(2) ? "black1" : "gray3"}
            onClick={() => handleFlavorButtonClick(2)}
          >
            Chocolate
          </Button>

          <Button
            buttonSize={"sb"}
            variant={selectedFlavorIds.includes(3) ? "black1" : "gray3"}
            onClick={() => handleFlavorButtonClick(3)}
          >
            Morango
          </Button>

          <Button
            buttonSize={"sb"}
            variant={selectedFlavorIds.includes(4) ? "black1" : "gray3"}
            onClick={() => handleFlavorButtonClick(4)}
          >
            Baunilha
          </Button>
        </div>
      </div>

      <Button>Comprar</Button>
    </ProductCardWithOptionsStyled>
  );
};
