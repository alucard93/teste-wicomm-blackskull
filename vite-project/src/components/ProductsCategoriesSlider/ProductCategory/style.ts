import styled from "styled-components";

export const ProductCategoryStyled = styled.div`
  height: 210px;
  max-width: 178px;

  align-items: center;
  justify-content: space-between;

  .background-img {
    background-color: ${props => props.theme.gray3};
    height: 178px;
    border-radius: 50%;

    justify-content: center;
    align-items: center;
  }
`
