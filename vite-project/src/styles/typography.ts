import styled, { css } from "styled-components";

// opções de escolha
const theme = {
  colors: {
    black1: "#0B0B0B",
    white: "#FFFFFF",
    orange1: "#FF9601",
    orange2: "##FFC470",

    dark1: "#1C1C1E",
    dark2: "#2C2C2E",
    dark3: "#3A3A3C",
    gray1: "#9A9A9A",
    gray2: "#CACACA",
    background: "#F1F1F1",
  },
  sizes: {
    xs: "10px",
    sm: "12px",
    md: "14px",
    lg: "16px",
    xl: "18px",
    xxl: "22px",
    xxxl: "32px",
    xxxxl: "40px",
    xxxxxl: "56px",
  },
};

// tipagem titulo
export type HeadingProps = {
  color?: keyof typeof theme.colors;
  size?: keyof typeof theme.sizes;
  fontWeight?: 400 | 500 | 600 | 700;
  lineHeight?: string | number;
  level?: 1 | 2 | 3 | 4 | 5 | 6;
};

//tipagem paragrafo
export type ParagraphProps = {
  color?: keyof typeof theme.colors;
  size?: keyof typeof theme.sizes;
  fontWeight?: 400 | 500 | 600 | 700;
  lineHeight?: string | number;
  fontFamily?: string;
  textTransf?: string;
  textMaxWidth?: string;
};

// componente Title
export const Heading = styled("h1").attrs<HeadingProps>(({ level }) => ({
  as: `h${level}`,
}))<HeadingProps>`
  ${({
    color = "background",
    size = "xxxl",
    fontWeight = 700,
    lineHeight,
  }) => css`
    font-size: ${theme.sizes[size]};
    font-weight: ${fontWeight};
    line-height: ${lineHeight};

    &::first-line {
      color: ${theme.colors[color]};
    }
  `}
`;

// componente paragrafo
export const Paragraph = styled.p<ParagraphProps>`
  ${({
    color = "gray1",
    size = "sm",
    fontWeight,
    lineHeight,
    fontFamily,
    textTransf = "uppercase",
    textMaxWidth
  }) => css`
    font-size: ${theme.sizes[size]};
    color: ${theme.colors[color]};
    font-weight: ${fontWeight};
    line-height: ${lineHeight};
    font-family: ${fontFamily};
    text-transform: ${textTransf};
    max-width: ${textMaxWidth};
  `}
`;
