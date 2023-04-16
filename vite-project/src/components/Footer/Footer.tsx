import React from "react";
import { FooterStyled } from "./style";
import { FooterLeftInterative } from "./FooterLeftInterative/FooterLeftInterative";
import { FooterBottom } from "./FooterBottom/FooterBottom";
import { FooterRightInterative } from "./FooterRightInterative/FooterRightInterative";

export const Footer = () => {
  return (
    <FooterStyled>
      <div className="content-header">
        <div className="content-interative">
          <FooterLeftInterative />
        </div>
        <div className="content-contact">
          <FooterRightInterative />
        </div>
      </div>

      <div className="content-footer">
        <FooterBottom />
      </div>
    </FooterStyled>
  );
};
