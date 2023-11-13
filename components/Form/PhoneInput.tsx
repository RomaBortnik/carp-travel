import { Controller, Control } from "react-hook-form";
import { Inputs, InputProps } from "@/helpers/formTypes";

interface Props {
  extraStyles?: string;
  control: Control<Inputs>;
  savedData?: string;
  handleInputChange: (field: string, value: string) => void;
}

export const PhoneInput: React.FC<InputProps & Props> = ({
  errors,
  extraStyles,
  control,
  savedData,
  handleInputChange,
}) => {
  return (
    <label
      className="relative flex flex-col
    lg:w-full"
    >
      <span
        className={`text-[12px] font-extralight leading-[24px] tracking-[2.4px] mb-[4px]
        ${errors.email ? "text-[#FF5757]" : ""}`}
      >
        Phone
      </span>
      <Controller
        name="phone"
        defaultValue={savedData}
        shouldUnregister
        control={control}
        rules={{
          required: true,
          pattern: /^(\s*)?(\+)?([- _():=+]?\d[- _():=+]?){10,14}(\s*)?$/,
        }}
        render={({ field }) => (
          <input
            {...field}
            onChange={(e) => {
              field.onChange(e);
              handleInputChange("phone", e.target.value);
            }}
            className={`w-full flex items-center px-[8px] text-[13px] font-extralight outline-none leading-[24px] bg-[#ffffff0d] focus:bg-[#ffffff1a] transition-colors
            md:w-[221px]
            lg:w-full lg:text-[20px] lg:py-[2px]`}
            type="tel"
            placeholder="+ 38 (097) 12 34 567"
          />
        )}
      />
      {errors.phone && (
        <span
          className="absolute right-0 top-full font-extralight text-[12px] text-[#FF5757] leading-[24px] tracking-[2.4px] pl-[4px]
         before:content-['element'] before:absolute before:top-[50%] before:translate-y-[-50%] before:right-[100%] before:h-[18px] before:w-[18px] before:bg-center before:text-transparent before:bg-no-repeat before:bg-[url('/assets/icons/red-incorrect.svg')]"
        >
          Incorrect phone
        </span>
      )}
    </label>
  );
};
