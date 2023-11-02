import { Inputs, InputProps } from "@/helpers/formTypes";
import { Control, Controller } from "react-hook-form";

interface Props {
  extraStyles?: string;
  control: Control<Inputs>;
  savedData?: string;
  handleInputChange: (field: string, value: string) => void;
}

export const FullNameInput: React.FC<InputProps & Props> = ({
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
         ${errors.fullName ? "text-[#FF5757]" : ""}`}
      >
        Full name
      </span>
      <Controller
        name="fullName"
        defaultValue={savedData}
        shouldUnregister
        control={control}
        rules={{
          required: true,
          minLength: 3,
        }}
        render={({ field }) => (
          <input
            {...field}
            onChange={(e) => {
              field.onChange(e);
              handleInputChange("fullName", e.target.value);
            }}
            className={`w-full flex items-center px-[8px] text-[13px] font-extralight outline-none leading-[24px] bg-[#ffffff0d] focus:bg-[#ffffff1a] transition-colors
            md:w-[221px]
            lg:w-full lg:text-[20px] lg:py-[2px]`}
            type="text"
            placeholder="John Smith"
          />
        )}
      />
      {errors.fullName && (
        <span
          className="absolute right-0 top-full font-extralight text-[12px] text-[#FF5757] leading-[24px] tracking-[2.4px] pl-[4px]
         before:content-['element'] before:absolute before:top-[50%] before:translate-y-[-50%] before:right-[100%] before:h-[18px] before:w-[18px] before:bg-center before:text-transparent before:bg-no-repeat before:bg-[url('/assets/icons/red-incorrect.svg')]"
        >
          Incorrect name
        </span>
      )}
    </label>
  );
};
