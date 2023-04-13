import { ButtonHTMLAttributes, ReactNode } from 'react'

export interface IProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  onClick?: (event: any) => void
  variant?:
    | "black1"
    | "white"
    | "orange1"
    | "orange2"
    | "dark1"
    | "dark2"
    | "dark3"
    | "gray1"
    | "gray2";
  buttonSize?: string
}
