//Hooks imports
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { formSchema } from "../../schema/formSchema";
import { useContext, useState } from "react";
import { AuthContext } from "../../context/AuthContext/authContext";
//Components imports
import InputMask from "react-input-mask";
import { Controller } from "react-hook-form";
import { Input, InputBase, MultiSelect, Tooltip } from "@mantine/core";
import { BodyConteirner, ConteinerForm, ImgConteiner } from "./styled";
import { Button } from "../../styles/components/button";
//Interface Imports
import { DataValueInterface } from "../../interfaces/authContextInterface/authContextInterface";
//Icons Impports
import { HiOutlineMailOpen, HiOutlineFlag } from "react-icons/hi";
import { RiLockPasswordLine } from "react-icons/ri";
import {
  AiOutlineEyeInvisible,
  AiOutlineEye,
  AiOutlineUser,
  AiFillIdcard,
  AiOutlineInfoCircle,
} from "react-icons/ai";
import { BsTelephonePlus, BsBuilding } from "react-icons/bs";
//imagens import
import verctorForm from "../../assets/img/vectorForm.png";


export const RegisterPage = () => {
  const { filtredCountry, filtredCity, loading, handleSubmitFunction } =
    useContext(AuthContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<DataValueInterface>({
    resolver: yupResolver(formSchema),
  });

  return (
    <BodyConteirner>
      {!loading ? (
        <>
          <ConteinerForm onSubmit={handleSubmit(handleSubmitFunction)}>
            <InputBase
              className="input"
              icon={<AiOutlineUser size={16} />}
              placeholder="Digite seu nome"
              {...register("name")}
              error={errors.name?.message}
              rightSection={
                errors.name?.message ? (
                  <Tooltip
                    label={errors.name?.message}
                    position="top-end"
                    withArrow
                  >
                    <div>
                      <AiOutlineInfoCircle
                        size={22}
                        style={{ display: "block", opacity: 0.5, color: "red" }}
                      />
                    </div>
                  </Tooltip>
                ) : (
                  <Tooltip label="Digite seu nome" position="top-end" withArrow>
                    <div>
                      <AiOutlineInfoCircle
                        size={22}
                        style={{ display: "block", opacity: 0.5 }}
                      />
                    </div>
                  </Tooltip>
                )
              }
              inputWrapperOrder={["input"]}
              radius="xl"
              size="md"
            />

            <InputBase
              className="input"
              icon={<HiOutlineMailOpen size={16} />}
              placeholder="Digite seu email"
              {...register("email")}
              error={errors.email?.message}
              rightSection={
                errors.email?.message ? (
                  <Tooltip
                    label={errors.email?.message}
                    position="top-end"
                    withArrow
                  >
                    <div>
                      <AiOutlineInfoCircle
                        size={22}
                        style={{ display: "block", opacity: 0.5, color: "red" }}
                      />
                    </div>
                  </Tooltip>
                ) : (
                  <Tooltip
                    label="Digite seu email"
                    position="top-end"
                    withArrow
                  >
                    <div>
                      <AiOutlineInfoCircle
                        size={22}
                        style={{ display: "block", opacity: 0.5 }}
                      />
                    </div>
                  </Tooltip>
                )
              }
              inputWrapperOrder={["input"]}
              radius="xl"
              size="md"
            />

            <InputBase
              className="input"
              icon={<RiLockPasswordLine size={16} />}
              placeholder="Digite sua senha"
              type="password"
              {...register("password")}
              error={errors.password?.message}
              rightSection={
                errors.password?.message ? (
                  <Tooltip
                    label={errors.password?.message}
                    position="top-end"
                    withArrow
                  >
                    <div>
                      <AiOutlineInfoCircle
                        size={22}
                        style={{ display: "block", opacity: 0.5, color: "red" }}
                      />
                    </div>
                  </Tooltip>
                ) : <Tooltip
                    label="Digite sua senha"
                    position="top-end"
                    withArrow
                  >
                    <div>
                      <AiOutlineInfoCircle
                        size={22}
                        style={{ display: "block", opacity: 0.5, }}
                      />
                    </div>
                  </Tooltip>
              }
              inputWrapperOrder={["input"]}
              radius="xl"
              size="md"
            />

            <InputBase
              className="input"
              icon={<RiLockPasswordLine size={16} />}
              placeholder="Confirme sua senha"
              type="password"
              {...register("confirmpassword")}
              error={errors.confirmpassword?.message}
              rightSection={
                errors.confirmpassword?.message ? (
                  <Tooltip
                    label={errors.confirmpassword?.message}
                    position="top-end"
                    withArrow
                  >
                    <div>
                      <AiOutlineInfoCircle
                        size={22}
                        style={{ display: "block", opacity: 0.5, color: "red" }}
                      />
                    </div>
                  </Tooltip>
                ) : <Tooltip
                    label="Confirme sua senha"
                    position="top-end"
                    withArrow
                  >
                    <div>
                      <AiOutlineInfoCircle
                        size={22}
                        style={{ display: "block", opacity: 0.5, }}
                      />
                    </div>
                  </Tooltip>
              }
              inputWrapperOrder={["input"]}
              radius="xl"
              size="md"
            />

            <InputBase
              className="input"
              icon={<AiFillIdcard size={16} />}
              placeholder="Digite seu CPF"
              {...register("cpf")}
              error={errors.cpf?.message}
              rightSection={
                errors.cpf?.message ? (
                  <Tooltip
                    label={errors.cpf?.message}
                    position="top-end"
                    withArrow
                  >
                    <div>
                      <AiOutlineInfoCircle
                        size={22}
                        style={{ display: "block", opacity: 0.5, color: "red" }}
                      />
                    </div>
                  </Tooltip>
                ) : (
                  <Tooltip label="Digite seu CPF" position="top-end" withArrow>
                    <div>
                      <AiOutlineInfoCircle
                        size={22}
                        style={{ display: "block", opacity: 0.5 }}
                      />
                    </div>
                  </Tooltip>
                )
              }
              component={InputMask}
              mask="999.999.999-99"
              inputWrapperOrder={["input"]}
              radius="xl"
              size="md"
            />

            <InputBase
              className="input"
              icon={<BsTelephonePlus size={16} />}
              placeholder="Digite seu telefone"
              {...register("telephone")}
              error={errors.telephone?.message}
              rightSection={
                errors.telephone?.message ? (
                  <Tooltip
                    label={errors.telephone?.message}
                    position="top-end"
                    withArrow
                  >
                    <div>
                      <AiOutlineInfoCircle
                        size={22}
                        style={{ display: "block", opacity: 0.5, color: "red" }}
                      />
                    </div>
                  </Tooltip>
                ) : (
                  <Tooltip
                    label="Digite seu telefone"
                    position="top-end"
                    withArrow
                  >
                    <div>
                      <AiOutlineInfoCircle
                        size={22}
                        style={{ display: "block", opacity: 0.5 }}
                      />
                    </div>
                  </Tooltip>
                )
              }
              component={InputMask}
              mask="(99) 9999-99999"
              inputWrapperOrder={["input"]}
              radius="xl"
              size="md"
            />

            <Controller
              control={control}
              name="countries"
              render={({ field: { value, onChange, ...rest } }) => (
                <MultiSelect
                  className="multiSelect"
                  icon={<HiOutlineFlag />}
                  placeholder="Selecione os paises de interesse"
                  data={filtredCountry}
                  nothingFound="Nenhum pais encontrado"
                  maxDropdownHeight={200}
                  filter={(value, selected, item) =>
                    !selected &&
                    item
                      .label!.toLowerCase()
                      .includes(value.toLowerCase().trim())
                  }
                  onChange={(e) => {
                    onChange(e);
                  }}
                  clearButtonLabel="Remover todas as cidades"
                  clearable
                  searchable
                  inputWrapperOrder={["input"]}
                  maxSelectedValues={3}
                  radius="xl"
                  size="md"
                  error={errors.countries?.message}
                  rightSection={
                    errors.countries?.message ? (
                      <div style={{ position: "absolute" }}>
                        <Tooltip
                          label={errors.countries?.message}
                          position="top-end"
                          withArrow
                          style={{ position: "fixed" }}
                        >
                          <div>
                            <AiOutlineInfoCircle
                              size={22}
                              style={{
                                display: "block",
                                opacity: 0.5,
                                color: "red",
                              }}
                            />
                          </div>
                        </Tooltip>
                      </div>
                    ) : (
                      <div style={{ position: "absolute" }}>
                        <Tooltip
                          label="Selecione os países de interesse"
                          position="top-end"
                          withArrow
                          style={{ position: "fixed" }}
                        >
                          <div>
                            <AiOutlineInfoCircle
                              size={22}
                              style={{ display: "block", opacity: 0.5 }}
                            />
                          </div>
                        </Tooltip>
                      </div>
                    )
                  }
                />
              )}
            />

            <Controller
              control={control}
              name="cities"
              render={({ field: { value, onChange, ...rest } }) => (
                <MultiSelect
                  className="multiSelect"
                  icon={<BsBuilding />}
                  placeholder="Selecione as cidades de interresse"
                  data={filtredCity}
                  style={{ overflow: "visible" }}
                  nothingFound="Não tem mais cidades"
                  maxDropdownHeight={150}
                  defaultValue={[]}
                  filter={(value, selected, item) =>
                    !selected &&
                    item
                      .label!.toLowerCase()
                      .includes(value.toLowerCase().trim())
                  }
                  onChange={(e) => onChange(e)}
                  clearButtonLabel="Remover todas as cidades"
                  clearable
                  searchable
                  inputWrapperOrder={["input"]}
                  radius="xl"
                  size="md"
                  maxSelectedValues={3}
                  error={errors.cities?.message}
                  rightSection={
                    errors.cities?.message ? (
                      <div style={{ position: "absolute" }}>
                        <Tooltip
                          label={errors.cities?.message}
                          position="top-end"
                          withArrow
                          style={{ position: "fixed" }}
                        >
                          <div>
                            <AiOutlineInfoCircle
                              size={22}
                              style={{
                                display: "block",
                                opacity: 0.5,
                                color: "red",
                              }}
                            />
                          </div>
                        </Tooltip>
                      </div>
                    ) : (
                      <div style={{ position: "absolute" }}>
                        <Tooltip
                          label="Selecione as cidades de interresse"
                          position="top-end"
                          withArrow
                          style={{ position: "fixed" }}
                        >
                          <div>
                            <AiOutlineInfoCircle
                              size={22}
                              style={{ display: "block", opacity: 0.5 }}
                            />
                          </div>
                        </Tooltip>
                      </div>
                    )
                  }
                />
              )}
            />

            <Button type="submit">
              Enviar
            </Button>
          </ConteinerForm>

          <ImgConteiner>
            <img src={verctorForm} alt="vectorForm" />
          </ImgConteiner>
        </>
      ) : (
        <></>
      )}
      <div className="vector"></div>
    </BodyConteirner>
  );
};
