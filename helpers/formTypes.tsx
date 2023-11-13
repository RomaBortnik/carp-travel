import { FieldErrors } from "react-hook-form";

export type Inputs = {
  fullName: string;
  email: string;
  message: string;
  position: string;
  phone: string;
  isAgree: boolean;
};

export interface InputProps {
  errors: FieldErrors<Inputs>;
}
