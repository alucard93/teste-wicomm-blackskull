import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
      -webkit-font-smoothing: antialiased;
    }

    a {
      text-decoration: none;
    }

    p {
      font-family: 'Barlow';
    }

    ul, ol {
      width: 100%;
      list-style: none;
    }

    button {
      cursor: pointer;
      border: none;
      font-family: 'Barlow';
      text-transform: uppercase;
    }

    h1, h2, h3 {
      text-transform: uppercase;
      font-style: italic;
      font-family: 'Roboto Condensed';
      color: ${(props) => props.theme.orange1};
    }

    section, aside, div, article{
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
    }

    .container-product__model{
      max-width: 277px;
    }

    // css slider arrow
   .iconLeft{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 32px;
    position: absolute;
    top: 150px;
    left: -45px;
   }

   .iconRight{
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 32px;
    position: absolute;
    top: 150px;
    right: -45px;
   }
`;
