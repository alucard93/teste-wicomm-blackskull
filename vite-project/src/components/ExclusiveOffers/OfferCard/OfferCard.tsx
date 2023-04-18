import React, { ReactNode } from "react";
import { OfferCardStyled } from "./style";
import { Heading } from "../../../styles/typography";
import Button from "../../Button/Button";

interface OfferCardProps {
  children?: ReactNode;
  contentButton?: string;
  className?: string;
  classNameTitle?: string;
  classNameButton?: string;
  ComponentSvg?: string | boolean;
}

export const OfferCard = ({
  children,
  classNameTitle,
  classNameButton,
  contentButton,
}: OfferCardProps) => {
  
  return (
    <OfferCardStyled>
      <div className="content-info">
        <Heading
          className={classNameTitle}
          level={2}
          color={"white"}
          lineHeight={"47px"}
          size={"xxxxl"}
        >
          {children}
        </Heading>
        <Button className={classNameButton} buttonSize={"123px"}>
          {contentButton}
        </Button>
      </div>
    </OfferCardStyled>
  );
};
