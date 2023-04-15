import { TopHeader } from "./TopHeader/TopHeader";
import { BottomHeader } from "./BottomHeader/BottomHeader";
import { HeaderStyled } from "./style";

export const Header = () => {
  return (
    <HeaderStyled>
      <TopHeader />
      <BottomHeader />
    </HeaderStyled>
  );
};
