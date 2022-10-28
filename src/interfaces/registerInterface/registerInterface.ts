import {
  FieldValues,
  FieldName,
  RegisterOptions,
  Control,
  ControllerRenderProps,
} from "react-hook-form";
import { CountryResultsInterface } from "../authContextInterface/authContextInterface";

//tipagem do react hook form controller.
export type UseControllerProps<TFieldValues extends FieldValues = FieldValues> =
  {
    name: FieldName<TFieldValues>;
    rules?: Exclude<
      RegisterOptions,
      "valueAsNumber" | "valueAsDate" | "setValueAs"
    >;
    onFocus?: () => void;
    defaultValue?: unknown;
    control?: Control<TFieldValues>;
  };

export type UseControllerReturn<
  TFieldValues extends FieldValues = FieldValues
> = {
  field: ControllerRenderProps<TFieldValues>;
};

//typagem do valor passado para função
export interface DataValueInterface {
  email: string;
  name: string;
  telephone: string;
  cpf: string;
  cities: string[];
  countries: string[];
}

//props do component do multiselect item
export interface ItemProps extends React.ComponentPropsWithoutRef<"div"> {
  label: string;
  country_code: string | undefined;
  value: string;
}
