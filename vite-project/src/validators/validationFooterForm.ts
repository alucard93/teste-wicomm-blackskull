import * as yup from "yup";

export const validationFooterForm = yup.object().shape({
  name: yup.string().required("O nome é obrigatório"),
  email: yup.string().email().required("O email é obrigatório"),
});
