import * as yup from 'yup';

export const formSchema = yup.object().shape({
    name: yup.string().required("Obrigatorio"),
    email: yup.string().required("Obrigatorio").email("Somente E-mail"),
    password: yup.string().required("Obrigatorio"),
    cpf: yup.string().required("Obrigatorio"),
    telephone: yup.string().required("Obrigatorio").min(10, "digite seu numero completo"),
    countries: yup.array().required("Obrigatorio").min(1, "Selecione pelomenos 1 Item"),
    cities: yup.array().required("Obrigatorio").min(1, "Selecione pelomenos 1 Item"),
})