import React from "react";
import { FooterRightInterativeStyled } from "./style";
import { Heading, Paragraph } from "../../../styles/typography";
import { Input } from "../../Input/Input";
import { useForm, FieldValues } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import { validationFooterForm } from "../../../validators/validationFooterForm";
import Button from "../../Button/Button";
validationFooterForm;

export const FooterRightInterative = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FieldValues>({
    resolver: yupResolver(validationFooterForm),
  });

  function handleSubmitForm(data: any) {
    console.log("enviado com sucesso");
    reset()
  }
  return (
    <FooterRightInterativeStyled>
      <div className="content-card">
        <Heading
          className="text-title-form"
          level={3}
          size={"xxxl"}
          lineHeight={"37.5px"}
        >
          Fique por Dentro
        </Heading>
        <Paragraph
          size={"md"}
          color={"gray1"}
          lineHeight={"16.8px"}
          fontWeight={400}
          textMaxWidth={"260px"}
          textTransf="none"
        >
          Inscreva-se e seja o primeiro a saber sobre as novidades, promoções e
          muito mais!
        </Paragraph>
        <form onSubmit={handleSubmit((data) => handleSubmitForm(data))}>
          <Input
            placeholder="Digitar seu nome"
            name="name"
            register={register}
            errosMessage={errors.name?.message?.toString()}
          />
          <Input
            placeholder="Digitar seu email"
            name="email"
            register={register}
            errosMessage={errors.email?.message?.toString()}
          />
          <Button buttonSize={"138px"} type="submit">Enviar</Button>
        </form>
      </div>
    </FooterRightInterativeStyled>
  );
};
