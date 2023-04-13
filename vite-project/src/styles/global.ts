import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    body {
        /* background-color: ${(props) => props.theme['black1']}; */
        -webkit-font-smoothing: antialiased;
    }

    p {
      font-family: 'Barlow';
    }

    h1, h2, h3 {
      text-transform: uppercase;
      font-style: italic;
      font-family: 'Roboto Condensed';
    }

    section, aside, div{
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: flex-start;
      justify-content: flex-start;
    }
`
