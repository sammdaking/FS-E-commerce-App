import React from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "./src/features/Auth/Login/login.validation";
import { ILoginPayload } from "./src/features/Auth/Login/types";

const Signup: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginPayload>({
    resolver: yupResolver(loginSchema),
  });

  const onSubmit = async (data: ILoginPayload) => {
    //supabase login komutları gelicek
    const { email, password } = data;
    const { error } = await supabase.auth.signUp({ email, password });
    if (error) {
      //popup
      setErrorMessage(error.message);
      setErrorModalVisible(true);
    } else {
      //popup
      setSuccessModalVisible(true);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <label>E-posta:</label>
        <input {...register("email")} />
        <p>{errors.email?.message}</p>
      </div>

      <div>
        <label>Şifre:</label>
        <input type="password" {...register("password")} />
        <p>{errors.password?.message}</p>
      </div>

      <button type="submit">Kaydol</button>
    </form>
  );
};

export default Signup;
