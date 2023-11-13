"use client";

import { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { Inputs } from "@/helpers/formTypes";
import { CareerDescription } from "./CareerDescription";
import { FormDescription } from "@/helpers/careerData";
import {
  FullNameInput,
  EmailInput,
  MessageInput,
  SubmitButton,
  PositionInput,
  PhoneInput,
  DataCheckbox,
} from "../Form";

export const CarrerForm: React.FC = () => {
  const [formData, setFormData] = useState<Inputs | any>();
  const [isChecked, setIsChecked] = useState<boolean>(false);
  const {
    handleSubmit,
    control,
    reset,
    setValue,
    formState: { errors },
  } = useForm<Inputs>();

  useEffect(() => {
    const storedData = sessionStorage.getItem("careerForm");
    if (storedData) {
      const savedData = JSON.parse(storedData);
      setIsChecked(savedData.isAgree);
      setFormData(savedData);
    }
  }, []);

  useEffect(() => {
    if (formData) {
      for (const field in formData) {
        setValue(field as keyof Inputs, formData[field]);
      }
    }
  }, [formData, setValue]);

  const handleInputChange = (field: string, value: string | boolean) => {
    const storedData = sessionStorage.getItem("carrerForm");

    if (storedData) {
      const updatedData = { ...JSON.parse(storedData), [field]: value };
      sessionStorage.setItem("careerForm", JSON.stringify(updatedData));
    } else {
      sessionStorage.setItem("careerForm", JSON.stringify({ [field]: value }));
    }
  };

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    setFormData(undefined);
    setIsChecked(false);
    reset();
    sessionStorage.removeItem("careerForm");
  };

  return (
    <>
      <CareerDescription
        text={FormDescription}
        extraStyles="mb-[24px]
      md:w-[176px] md:mb-[32px] md:ml-0"
      />
      <form
        className="flex flex-col gap-[16px]"
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <FullNameInput
          errors={errors}
          control={control}
          savedData={formData ? formData.fullName : ""}
          handleInputChange={handleInputChange}
        />
        <EmailInput
          errors={errors}
          control={control}
          savedData={formData ? formData.email : ""}
          handleInputChange={handleInputChange}
        />
        <PositionInput
          errors={errors}
          control={control}
          handleInputChange={handleInputChange}
          savedData={formData ? formData.phone : ""}
        />
        <PhoneInput
          errors={errors}
          control={control}
          handleInputChange={handleInputChange}
          savedData={formData ? formData.phone : ""}
        />
        <DataCheckbox
          errors={errors}
          control={control}
          handleInputChange={handleInputChange}
          isChecked={isChecked}
          setIsChecked={setIsChecked}
        />
        <MessageInput
          errors={errors}
          errorExtraStyles="justify-center"
          control={control}
          savedData={formData ? formData.message : ""}
          handleInputChange={handleInputChange}
        />
        <SubmitButton />
      </form>
    </>
  );
};
