//types do hook form
import {
  FieldValues,
  FieldName,
  RegisterOptions,
  Control,
  ControllerRenderProps,
} from "react-hook-form";

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
