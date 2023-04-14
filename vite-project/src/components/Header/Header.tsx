import React from "react";
import { Heading, Paragraph } from "../../styles/typography";
import Button from "../Button/Button";
import { TopHeader } from "./TopHeader/TopHeader";
import { BottomHeader } from "./BottomHeader/BottomHeader";

export const Header = () => {
  return (
    <div>
        <TopHeader/>
        <BottomHeader/>
    </div>
  );
};
