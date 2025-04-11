import { AuthError } from "@supabase/supabase-js";

export interface ISignInPayload {
  email: string;
  password: string;
  name: string;
  surname: string;
  address: string;
  phoneNumber: string;
  loading: boolean;
  error: AuthError | null;
}
