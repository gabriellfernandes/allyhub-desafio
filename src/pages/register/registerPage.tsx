import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "../../schema/formSchema";
import { InputBase, MultiSelect, TextInput } from "@mantine/core";
import { HiOutlineMailOpen } from "react-icons/hi";
import { SelectItems } from "./registeComponents/valueMultiSelect";
import { Controller } from "react-hook-form";
import {
  DataValueInterface,
} from "../../interfaces/registerInterface/registerInterface";
import { useContext, useEffect, useState } from "react";
import { AuthContext } from "../../context/AuthContext/authContext";
import InputMask from 'react-input-mask';
import { FiltredValuesInterface } from "../../interfaces/authContextInterface/authContextInterface";

export const RegistroPage = () => {
  const { cityValues, countryValues, filtredCountry, loading } =
    useContext(AuthContext);
  const [inputValue, setInputValue] = useState<string[]>([] as string[]);
  const [filtredCity, setfiltredCity] = useState<FiltredValuesInterface[]>(
    [] as FiltredValuesInterface[]
  );
  const [testValue, setValue] = useState<string[]>([] as string[]);

  const filterCity = () => {
    if (inputValue.length != 0) {
      setfiltredCity([]);

      cityValues.filter((elem) =>
        inputValue.map(
          (value) =>
            elem.country_code?.includes(value) &&
            elem.label != null &&
            setfiltredCity((old) => [...old, elem])
        )
      );
    } else {
      setfiltredCity([]);
    }
  };

  useEffect(() => {
    filterCity();

    if (inputValue.length == 0) {
      reset({
        cities: [],
      });
    }

    testValue.filter((elem) => {
      inputValue.map((value) => elem.includes(value) && console.log(elem));
    });
  }, [inputValue, cityValues]);

  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    reset,
  } = useForm<DataValueInterface>({
    resolver: yupResolver(formSchema),
  });

  const test = (data: DataValueInterface) => {
    return console.log(data);
  };

  return (
    <>
      {!loading ? (
        <form onSubmit={handleSubmit(test)} style={{ padding: "8rem" }}>
          <TextInput
            icon={<HiOutlineMailOpen size={16} />}
            placeholder="E-mail"
            {...register("email")}
            error={errors.email?.message}
            description="Digite seu E-mail"
          />

          <TextInput
            icon={<HiOutlineMailOpen size={16} />}
            label="Nome"
            placeholder="Nome"
            {...register("name")}
            error={errors.name?.message}
            description="Digite seu Nome completo"
            inputWrapperOrder={["label", "input", "error", "description"]}
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

      <InputBase
            icon={<HiOutlineMailOpen size={16} />}
            label="CPF"
            placeholder="CPF"
            {...register("cpf")}
            error={errors.cpf?.message}
            description="Digite seu Cpf"
            inputWrapperOrder={["label", "input", "error", "description"]}
            component={InputMask}
            mask="999.999.999-99"
          />

          <Controller
            control={control}
            name="countries"
            render={({ field: { value, onChange, ...rest } }) => (
              <MultiSelect
                label="Paises de interesse"
                placeholder="Selecione os paises de interesse"
                itemComponent={SelectItems}
                data={filtredCountry}
                nothingFound="Selecione os paises de interesse"
                maxDropdownHeight={400}
                filter={(value, selected, item) =>
                  !selected &&
                  item.label!.toLowerCase().includes(value.toLowerCase().trim())
                }
                onChange={(e) => {
                  onChange(e);
                  setInputValue(e);
                }}
                error={errors.countries?.message}
                clearButtonLabel="Remover todas as cidades"
                clearable
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
                itemComponent={SelectItems}
                data={filtredCity}
                nothingFound="Selecione um pais de interrese"
                maxDropdownHeight={400}
                defaultValue={[]}
                filter={(value, selected, item) =>
                  !selected &&
                  item.label!.toLowerCase().includes(value.toLowerCase().trim())
                }
                onChange={(e) => {
                  onChange(e);
                  setValue(e);
                }}
                error={errors.cities?.message}
                clearButtonLabel="Remover todas as cidades"
                clearable
              />
            )}
          />

          <button type="submit">Enviar</button>
        </form>
      ) : (
        <h2>Carregando aguarde</h2>
      )}
    </>
  );
};
