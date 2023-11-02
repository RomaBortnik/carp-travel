import { Controller, Control } from "react-hook-form";
import { Inputs, InputProps } from "@/helpers/formTypes";

interface Props {
  labelExtraStyles?: string;
  errorExtraStyles?: string;
  inputExtraStyles?: string;
  control: Control<Inputs>;
  savedData?: string;
  handleInputChange: (field: string, value: string) => void;
}

export const MessageInput: React.FC<InputProps & Props> = ({
  errors,
  labelExtraStyles,
  errorExtraStyles,
  inputExtraStyles,
  control,
  savedData,
  handleInputChange,
}) => {
  return (
    <label className="relative flex flex-col">
      <span
        className={`text-[12px] font-extralight leading-[24px] tracking-[2.4px] mb-[4px] ${
          errors.message ? "text-[#FF5757]" : ""
        }`}
      >
        Message
      </span>

      <Controller
        name="message"
        defaultValue={savedData}
        shouldUnregister
        rules={{
          required: true,
          minLength: 5,
        }}
        control={control}
        render={({ field }) => (
          <textarea
            {...field}
            onChange={(e) => {
              field.onChange(e);
              handleInputChange("message", e.target.value);
            }}
            className={`flex items-center h-[196px] px-[8px] text-[13px] font-extralight resize-none outline-none leading-[24px] bg-[#ffffff0d] focus:bg-[#ffffff1a] transition-colors 
        md:h-[215px]
        lg:text-[20px]`}
          />
        )}
      />
      {errors.message && (
        <span
          className="absolute right-0 top-full font-extralight text-[12px] text-[#FF5757] leading-[24px] tracking-[2.4px] pl-[4px]
         before:content-['element'] before:absolute before:top-[50%] before:translate-y-[-50%] before:right-[100%] before:h-[18px] before:w-[18px] before:bg-center before:text-transparent before:bg-no-repeat before:bg-[url('/assets/icons/red-incorrect.svg')]"
        >
          Incorrect message
        </span>
      )}
    </label>
  );
};
