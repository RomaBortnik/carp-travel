import { Controller, Control } from "react-hook-form";
import { Inputs, InputProps } from "@/helpers/formTypes";

interface Props {
  control: Control<Inputs>;
  isChecked: boolean;
  setIsChecked: (b: boolean) => void;
  handleInputChange: (field: string, value: boolean) => void;
}

export const DataCheckbox: React.FC<InputProps & Props> = ({
  errors,
  control,
  isChecked,
  setIsChecked,
  handleInputChange,
}) => {
  return (
    <label
      className="relative flex items-start pl-[30px] font-extralight text-[12px] leading-[24px] cursor-pointer 
    lg:mt-[12px]"
    >
      <Controller
        name="isAgree"
        shouldUnregister
        rules={{
          required: true,
        }}
        control={control}
        render={({ field }) => (
          <input
            checked={isChecked}
            onChange={(e) => {
              field.onChange(e);
              setIsChecked(e.target.checked);
              handleInputChange("isAgree", e.target.checked);
            }}
            className="hidden-checkbox outline-none"
            type="checkbox"
          />
        )}
      />
      <span className="custom-checkbox flex justify-center items-center p-[3px] bg-black">
        <span className="inner-checkbox-marker"></span>
      </span>
      {errors.isAgree && (
        <span
          className="absolute right-0 top-full font-extralight text-[12px] text-[#FF5757] leading-[24px] tracking-[2.4px] pl-[4px]
         before:content-['element'] before:absolute before:top-[50%] before:translate-y-[-50%] before:right-[100%] before:h-[18px] before:w-[18px] before:bg-center before:text-transparent before:bg-no-repeat before:bg-[url('/assets/icons/red-incorrect.svg')]"
        >
          Must be accepted
        </span>
      )}
      I confirm my consent to the processing of personal data.
    </label>
  );
};
