import React from "react";
import { FooterStyled } from "./style";
import { FooterLeftInterative } from "./FooterLeftInterative/FooterLeftInterative";
import { FooterBottom } from "./FooterBottom/FooterBottom";

export const Footer = () => {
  return (
    <FooterStyled>
      <div className="content-header">
        <div className="content-interative">
          <FooterLeftInterative />
        </div>
        <div className="content-contact">
          <h1>teste</h1>
        </div>
      </div>

      <div className="content-footer">
        <FooterBottom />
      </div>
    </FooterStyled>
  );
};
