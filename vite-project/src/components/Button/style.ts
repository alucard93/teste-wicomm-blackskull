import styled, { css } from "styled-components";

type ButtonVariant =
  | "black1"
  | "white"
  | "orange1"
  | "orange2"
  | "dark1"
  | "dark2"
  | "dark3"
  | "gray1"
  | "gray2"
  | "gray3";

interface ButtonContainerProps {
  variant: ButtonVariant;
  buttonSize?: string;
}

const buttonVariants = {
  black1: "#0B0B0B",
  white: "#FFFFFF",
  orange1: "#FF9601",
  orange2: "##FFC470",

  dark1: "#1C1C1E",
  dark2: "#2C2C2E",
  dark3: "#3A3A3C",
  gray1: "#9A9A9A",
  gray2: "#CACACA",
  gray3: "#F1F1F1",
};

export const ButtonContainer = styled.button<ButtonContainerProps>`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 14px 24px;

  gap: 10px;

  width: 100%;
  height: 48px;

  border-radius: 4px;

  font-weight: 700;
  font-size: 1rem;
  line-height: 20px;
  letter-spacing: 0.08em;
  color: ${(props) => props.theme.black1};
  white-space: nowrap;

  &:hover {
    border: none;
    background: ${(props) => props.theme.orange2};
  }

  ${({ variant }) => {
    return css`
      background-color: ${buttonVariants[variant]};

      &:hover {
        background-color: #ffc470;
      }
    `;
  }}

  ${({ buttonSize }) => {
    switch (buttonSize) {
      case "sb":
        return css`
          height: 40px;
          max-width: 90px;
          font-size: 0.75rem;
          opacity: 0.6;
          padding: 10px 20px;
          color: ${(props) => props.theme.dark1};
          border: 1.5px solid ${(props) => props.theme.dark1};
          
          &:hover{
            opacity: 1;
            background: ${(props) => props.theme.gray3};
            border: 1.5px solid ${(props) => props.theme.dark1};
          }

        `;

      default:
        return css`
          max-width: ${buttonSize};
        `;
    }
  }}
`;
