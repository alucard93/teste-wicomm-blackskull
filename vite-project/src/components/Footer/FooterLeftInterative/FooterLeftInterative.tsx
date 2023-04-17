import React from "react";
import { FooterLeftInterativeStyled } from "./style";
import brand from "../../../../public/assets/blackskull-logo.svg";
import facebook from "../../../../public/assets/facebook.svg";
import instagram from "../../../../public/assets/instagram.svg";
import youtube from "../../../../public/assets/youtube.svg";
import twitter from "../../../../public/assets/twitter.svg";
import tiktok from "../../../../public/assets/tiktok.svg";
import { Paragraph } from "../../../styles/typography";
import { databaseFooter } from "../../../database/database";

type FooterType = "about" | "norms" | "regulation";

export const FooterLeftInterative = () => {
  function renderSocialItems() {
    return databaseFooter.social.map((item) => (
      <img key={item.id} src={item.src} alt={item.alt} />
    ));
  }

  function renderInfo(type: FooterType) {
    let data;
    switch (type) {
      case "about":
        data = databaseFooter.about;
        break;
      case "norms":
        data = databaseFooter.norms;
        break;
      case "regulation":
        data = databaseFooter.regulation;
        break;

      default:
        throw new Error(`Unsupported footer type: ${type}`);
    }

    return data.map((item) => {
      if (item.id === "1") {
        return (
          <Paragraph
            key={item.id}
            fontWeight={700}
            size={"lg"}
            color={"white"}
            lineHeight={"19px"}
          >
            {item.text}
          </Paragraph>
        );
      } else {
        return (
          <Paragraph
            key={item.id}
            fontWeight={400}
            size={"md"}
            color={"gray1"}
            lineHeight={"17px"}
            textTransf={"capitalize"}
          >
            {item.text}
          </Paragraph>
        );
      }
    });
  }
  return (
    <FooterLeftInterativeStyled>
      <div className="container">
        <div className="content-top">
          <div className="content-brand-icons">
            <img src={brand} alt="logo da marca Black Skull" />

            
            <div className="content-social">
              <div className="content-title-follower">
                <Paragraph
                  color={"white"}
                  fontWeight={400}
                  lineHeight={"16.8px"}
                  size={"md"}
                  textTransf={"capitalize"}
                >
                  nos siga:
                </Paragraph>
              </div>
              <figure className="content-imgs">{renderSocialItems()}</figure>
            </div>
          </div>

          <section className="content-top-brand">
            <div className="content-about">{renderInfo("about")}</div>
            <div className="content-norms">{renderInfo("norms")}</div>
            <div className="content-regulation">{renderInfo("regulation")}</div>
          </section>
        </div>
        <div className="content-bottom">
          <div className="content-payment-options">
            <Paragraph
              fontWeight={700}
              size={"lg"}
              color={"white"}
              lineHeight={"19px"}
            >
              Formas de Pagamento
            </Paragraph>
            <div className="content-payment">
              {databaseFooter.paymentMethods.map((payment) => (
                <img key={payment.id} src={payment.src} alt={payment.alt} />
              ))}
            </div>
          </div>
          <div className="content-save">
            <Paragraph
              fontWeight={700}
              size={"lg"}
              color={"white"}
              lineHeight={"19px"}
            >
              segurança
            </Paragraph>
            <div className="content-securition">
              {databaseFooter.securition.map((payment) => (
                <img key={payment.id} src={payment.src} alt={payment.alt} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </FooterLeftInterativeStyled>
  );
};
