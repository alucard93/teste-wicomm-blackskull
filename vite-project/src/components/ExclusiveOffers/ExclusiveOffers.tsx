

import { OfferCard } from "./OfferCard/OfferCard";
import { ExcluseOffersStyled } from "./style";
import { CurrencyCircleDollar } from "../SvgComponents/CurrencyCircleDollar/CurrencyCircleDollar";
import { BoxSvg } from "../SvgComponents/BoxSvg/BoxSvg";

interface ExclusiveOffersProps {
  svg: boolean
}

export const ExclusiveOffers = ({ svg }: ExclusiveOffersProps) => {
  
  return (
    <ExcluseOffersStyled>
      <OfferCard contentButton={"consulte"}>garanta o frete grátis</OfferCard>
      <div className="content-svg">
        { svg ? (<BoxSvg />) : (<CurrencyCircleDollar />)}
      </div>
    </ExcluseOffersStyled>
  );
};
