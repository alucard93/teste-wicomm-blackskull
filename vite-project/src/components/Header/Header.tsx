import React from "react";
import { Heading, Paragraph } from "../../styles/typography";
import Button from "../Button/Button";
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
