import * as yup from 'yup';

export const formSchema = yup.object().shape({
    email: yup.string().required("Obrigatorio").email("Somente E-mail"),
    name: yup.string().required("Obrigatorio"),
    telephone: yup.string().required("Obrigatorio").min(10, "digite seu numero completo"),
    cpf: yup.string().required("Obrigatorio"),
    countries: yup.array().required("Obrigatorio").min(1, "Selecione pelomenos 1 Item"),
    cities: yup.array().required("Obrigatorio").min(1, "Selecione pelomenos 1 Item"),
})