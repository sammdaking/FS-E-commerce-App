import { FieldValues, UseFormReturn } from "react-hook-form";

export interface AuthComProps<T extends FieldValues> {
  title: string;
  submitButtonText: string;
  onSubmit: (data: T) => void;
  form: UseFormReturn<T>;
  successMessage: string;
  errorMessage: string;
}
