import styled from "styled-components";

export const ProductCardWithOptionsStyled = styled.div`

  .content-background{
    background-color: white;
    
    height: 200px;
    gap: 16px;
    align-items: center;
    justify-content: center;
    animation: slide-up 0.6s forwards;
  }

@keyframes slide-up {
  from {
    transform: translateY(0%);
  }
  to {
    transform: translateY(-5%);
  }
}

  .content-buttons {
    flex-direction: row;
    justify-content: center;
    padding: 0 32px;
    gap: 8px;
    flex-wrap: wrap;
  }
 
`
