import styled from "styled-components";

export const ProductCategoryStyled = styled.div`
  height: 210px;
  max-width: 178px;

  align-items: center;
  justify-content: space-between;
  transition: background-color 0.5s ease;

  .background-img {
    background-color: ${(props) => props.theme.gray3};
    height: 178px;
    border-radius: 50%;

    justify-content: center;
    align-items: center;

    img {
      transition: transform 0.5s ease;
      transform: scale(1);
    }

    &:hover {
      background-color: ${(props) => props.theme.orange1};
      transition: background-color 0.5s ease;
      border: 4px solid #ffc470;

      img {
        transform: scale(1.5);
      }
    }
  }
`;
