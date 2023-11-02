"use client";

import { useState, useEffect } from "react";
import { useForm, SubmitHandler } from "react-hook-form";

import { Inputs } from "@/helpers/formTypes";
import { FullNameInput, EmailInput, MessageInput, SubmitButton } from "../Form";

export const ContactsForm: React.FC = () => {
  const [formData, setFormData] = useState<Inputs | any>();
  const {
    handleSubmit,
    control,
    reset,
    setValue,
    formState: { errors },
  } = useForm<Inputs>();

  useEffect(() => {
    const storedData = sessionStorage.getItem("contactsForm");
    if (storedData) {
      const savedData = JSON.parse(storedData);
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

  const handleInputChange = (field: string, value: string) => {
    const storedData = sessionStorage.getItem("contactsForm");

    if (storedData) {
      const updatedData = { ...JSON.parse(storedData), [field]: value };
      sessionStorage.setItem("contactsForm", JSON.stringify(updatedData));
    } else {
      sessionStorage.setItem(
        "contactsForm",
        JSON.stringify({ [field]: value })
      );
    }
  };

  const onSubmit: SubmitHandler<Inputs> = (data) => {
    console.log(data);
    setFormData(undefined);
    reset();
    sessionStorage.removeItem("contactsForm");
  };

  return (
    <>
      <form
        className="flex flex-col gap-[24px]
        md:flex-row md:gap-[20px]
        lg:w-[607px] lg:flex-col lg:gap-[40px]"
        autoComplete="off"
        onSubmit={handleSubmit(onSubmit)}
      >
        <div
          className="md:flex md:flex-col md:gap-[28px]
        lg:w-full lg:flex-row lg:gap-[20px]"
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
        </div>
        <div
          className="flex flex-col gap-[16px] 
        md:w-full
        lg:gap-[24px]"
        >
          <MessageInput
            errors={errors}
            errorExtraStyles="justify-center"
            control={control}
            savedData={formData ? formData.message : ""}
            handleInputChange={handleInputChange}
          />
          <SubmitButton />
        </div>
      </form>
    </>
  );
};
