import * as yup from "yup";

export const formSchema = yup.object().shape({
  name: yup.string().required("Nome Obrigatorio"),
  email: yup.string().required("Email Obrigatorio").email("Somente E-mail"),
  password: yup
    .string()
    .required("Senha obrigatoria")
    .min(8, "deve conter 8 digitos")
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/,
      "Deve conter 8 caracteres, um maiúsculo, um minúsculo, um número e um caractere especial"
    ),
  confirmpassword: yup
    .string()
    .required("Confirme sua senha")
    .oneOf([yup.ref("password")], "Senhas não correspondem"),
  cpf: yup.string().required("CPF Obrigatorio").matches(/^([0-9]{3}.?[0-9]{3}.?[0-9]{3}-?[0-9]{2})$/, "Digite um CPF válido"),
  telephone: yup
    .string()
    .required("Telefone Obrigatorio").matches(/((\d{2})\s)(\d{4,5}-\d{4})/g, "Digite um número válido")
    .min(10, "digite seu numero completo"),
  countries: yup
    .array()
    .required("Selecione pelo menos 1 Item")
    .min(1, "Selecione pelo menos 1 Item"),
  cities: yup
    .array()
    .required("Selecione pelo menos 1 Item")
    .min(1, "Selecione pelo menos 1 Item"),
});
