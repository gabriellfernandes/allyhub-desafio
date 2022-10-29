//Components imports
import InputMask from "react-input-mask";
import { Controller } from "react-hook-form";
import {
  InputBase,
  MultiSelect,
  PasswordInput,
  TextInput,
} from "@mantine/core";
//Hooks imports
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "../../schema/formSchema";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext/authContext";
//Interface Imports
import { DataValueInterface } from "../../interfaces/authContextInterface/authContextInterface";
//Icons Impports
import { HiOutlineMailOpen } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import {
  AiOutlineEyeInvisible,
  AiOutlineEye,
  AiOutlineUser,
  AiFillIdcard,
} from "react-icons/ai";

export const RegisterPage = () => {
  const { filtredCountry, filtredCity, loading, handleSubmitFunction } =
    useContext(AuthContext);
  const [visible, setVisible] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<DataValueInterface>({
    resolver: yupResolver(formSchema),
  });

  return (
    <>
      {!loading ? (
        <form
          onSubmit={handleSubmit(handleSubmitFunction)}
          style={{ padding: "8rem" }}
        >
          <TextInput
            icon={<AiOutlineUser size={16} />}
            label="Nome"
            placeholder="Nome"
            {...register("name")}
            error={errors.name?.message}
            description="Digite seu nome completo"
            inputWrapperOrder={["label", "input", "error", "description"]}
          />

          <TextInput
            icon={<HiOutlineMailOpen size={16} />}
            placeholder="E-mail"
            label="E-mail"
            {...register("email")}
            error={errors.email?.message}
            description="Digite seu e-mail"
            inputWrapperOrder={["label", "input", "error", "description"]}
          />

          <TextInput
            icon={<RiLockPasswordLine size={16} />}
            label="Senha"
            placeholder="Senha"
            {...register("password")}
            error={errors.password?.message}
            description="Digite sua senha"
            inputWrapperOrder={["label", "input", "error", "description"]}
            rightSection={
              visible == false ? (
                <AiOutlineEyeInvisible onClick={() => setVisible(true)} />
              ) : (
                <AiOutlineEye onClick={() => setVisible(false)} />
              )
            }
            type={visible == false ? "password" : "text"}
          />

          <InputBase
            icon={<AiFillIdcard size={16} />}
            label="CPF"
            placeholder="CPF"
            {...register("cpf")}
            error={errors.cpf?.message}
            description="Digite seu CPF"
            inputWrapperOrder={["label", "input", "error", "description"]}
            component={InputMask}
            mask="999.999.999-99"
          />

          <InputBase
            icon={<HiOutlineMailOpen size={16} />}
            label="Telefone"
            placeholder="Telefone"
            {...register("telephone")}
            error={errors.telephone?.message}
            description="Digite seu telefone"
            inputWrapperOrder={["label", "input", "error", "description"]}
            component={InputMask}
            mask="(99) 9999-99999"
          />

          <Controller
            control={control}
            name="countries"
            render={({ field: { value, onChange, ...rest } }) => (
              <MultiSelect
                label="Paises de interesse"
                placeholder="Selecione os paises de interesse"
                data={filtredCountry}
                nothingFound="Selecione os paises de interesse"
                maxDropdownHeight={400}
                filter={(value, selected, item) =>
                  !selected &&
                  item.label!.toLowerCase().includes(value.toLowerCase().trim())
                }
                onChange={(e) => {
                  onChange(e);
                }}
                error={errors.countries?.message}
                clearButtonLabel="Remover todas as cidades"
                clearable
                searchable
                description="Selecione os países de interesse"
                inputWrapperOrder={["label", "input", "error", "description"]}
              />
            )}
          />

          <Controller
            control={control}
            name="cities"
            render={({ field: { value, onChange, ...rest } }) => (
              <MultiSelect
                label="Cidades de interresse"
                placeholder="Cidades de interresse dos paises selecionados"
                data={filtredCity}
                nothingFound="Não tem mais cidades"
                maxDropdownHeight={400}
                maxLength={10}
                defaultValue={[]}
                filter={(value, selected, item) =>
                  !selected &&
                  item.label!.toLowerCase().includes(value.toLowerCase().trim())
                }
                onChange={(e) => onChange(e)}
                error={errors.cities?.message}
                clearButtonLabel="Remover todas as cidades"
                clearable
                searchable
                description="selecione as cidades de interesse"
                inputWrapperOrder={["label", "input", "error", "description"]}
              />
            )}
          />

          <button type="submit">Enviar</button>
        </form>
      ) : (
        <></>
      )}
    </>
  );
};
