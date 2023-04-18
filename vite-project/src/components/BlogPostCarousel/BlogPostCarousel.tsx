// estilização
import { BlogPostCarouselStyled } from "./style";

// banco de dados
import { databaseBlog } from "../../database/database";

// componentes
import { BlogCard } from "./BlogCard/BlogCard";
import { Heading } from "../../styles/typography";
import Button from "../Button/Button";

export const BlogPostCarousel = () => {
  return (
    <BlogPostCarouselStyled>
      <div className="wrapper">
        <div className="content__heading-button">
          <Heading level={2}>
            Confira o <span className="color"> nosso blog</span>
          </Heading>
          <Button buttonSize={"138px"}>Ler todos</Button>
        </div>
        <div className="content-section-articles">
          <BlogCard databaseBlog={databaseBlog} />
        </div>
      </div>
    </BlogPostCarouselStyled>
  );
};
