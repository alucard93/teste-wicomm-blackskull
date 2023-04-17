import styled from "styled-components";

export const BlogPostCarouselStyled = styled.section`
  background: linear-gradient(180deg, #3a3a3c 0%, #0b0b0b 101.48%);
  height: 540px;
  justify-content: center;
  align-items: center;

  .wrapper {
    justify-content: center;
    align-items: center;

    max-width: 1280px;
  }

  .content__heading-button {
    flex-direction: row;
    justify-content: space-between;
    align-items: center;

    max-width: 1168px;

    margin-bottom: 24px;

    & .color {
      color: ${(props) => props.theme.orange1};
    }
  }

  .content-section-articles {
    flex-direction: row;
    justify-content: center;
    gap: 20px;
  }
`;
