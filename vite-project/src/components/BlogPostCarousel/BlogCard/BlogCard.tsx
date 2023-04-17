import React from "react";
import { BlogCardStyled } from "./style";
import Button from "../../Button/Button";
import { Paragraph } from "../../../styles/typography";
import { IDatabaseBlogProps } from "../../../interfaces/DatabaseInterface";
import { BsBoxArrowUpRight } from "react-icons/bs";

export const BlogCard = ({ databaseBlog }: IDatabaseBlogProps) => {
  return (
    <>
      {databaseBlog.map((article) => (
        <BlogCardStyled key={article.id}>
          <div className="container">
            <div className="content-img">
              <img src={article.src} alt={article.alt} />
            </div>
            <div className="content-info">
              <Paragraph
                size={"md"}
                fontWeight={400}
                lineHeight={"17px"}
                color={"gray2"}
              >
                {article.date}
              </Paragraph>
              <Paragraph
                size={"xl"}
                fontWeight={700}
                lineHeight={"22px"}
                color={"white"}
              >
                {article.description}
              </Paragraph>
              <div className="content-button">
                <Button className="button" buttonSize={"138px"}>Ler mais</Button>
                <BsBoxArrowUpRight className="icon"/>
              </div>
            </div>
          </div>
        </BlogCardStyled>
      ))}
    </>
  );
};
