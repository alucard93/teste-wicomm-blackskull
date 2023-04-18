// estilização
import { InputStyled } from "./style";

// componente
import { Paragraph } from "../../styles/typography";

// tipagem
import { InputHTMLAttributes } from "react";

// tipagem / lib
import { FieldValues, UseFormRegister } from "react-hook-form";

export interface IValues {}

export interface IPropsInput extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  register: UseFormRegister<FieldValues>;
  errosMessage?: string;
}

export const Input = ({
  name,
  placeholder,
  type,
  label,
  register,
  errosMessage,
  defaultValue,
}: IPropsInput) => {
  return (
    <InputStyled>
      <div className="content-input-icon">
        <label htmlFor={name}>{label}</label>

        <input
          id={name.toLowerCase()}
          type={type}
          placeholder={placeholder}
          {...register(name)}
          defaultValue={defaultValue}
        />
      </div>
      <Paragraph
        size={"xs"}
        color={"orange1"}
        textTransf={"capitalize"}
        className="error-message"
      >
        {errosMessage}
      </Paragraph>
    </InputStyled>
  );
};
