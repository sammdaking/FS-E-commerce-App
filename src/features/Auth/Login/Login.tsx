/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { supabase } from "../../../lib/supabaseClient";
import { ILoginPayload } from "./types";
import { loginSchema } from "./login.validation";
import { Controller, useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
// import AuthCom from "@/components/AuthCom/AuthCom";
import { Modal } from "antd";

const Login: React.FC = () => {
  // const [email, setEmail] = useState<string>("");
  // const [password, setPassword] = useState<string>("");

  const navigate = useNavigate();
  // const [errorModalVisible, setErrorModalVisible] = useState(false);
  // const [successModalVisible, setSuccessModalVisible] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [isModalVisible, setModalVisible] = useState(false);

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ILoginPayload>({
    resolver: yupResolver(loginSchema),
  });
  const showLoginModal = () => {
    setModalVisible(!isModalVisible);
  };
  const navigateHomePage = () => {
    navigate("/home");
  };

  const navigateSıgnUpPage = () => {
    navigate("/signup");
  };

  const onSubmit = async (data: ILoginPayload) => {
    try {
      const { email, password } = data;
      const { error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password,
      });
      if (error) {
        //popup
        setErrorMessage(error.message);

        showLoginModal();
      } else {
        //navigate home page
        console.log("giriş yapıldı");
        navigateHomePage();
      }
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-4xl w-full h-170 shadow-xl rounded-xl overflow-hidden flex">
        {/* Left Side - Image */}
        <div
          className="hidden md:block  md:w-1/2  bg-no-repeat bg-cover bg-center"
          style={{ backgroundImage: "url('/signup.jpg')" }}
        ></div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 p-8 flex flex-col   justify-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-10 ">
            Login Page
          </h2>
          <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
            <div>
              <label className="block text-gray-600 font-medium mb-2">
                Email
              </label>
              <Controller
                name="email"
                control={control}
                defaultValue=""
                render={({ field }) => (
                  <input
                    {...field}
                    type="email"
                    placeholder="Enter your email"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 mb-3 focus:ring-blue-500"
                  />
                )}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email?.message}
                </p>
              )}
            </div>
            <div>
              <label className="block text-gray-600 mb-2 font-medium">
                Password
              </label>
              <Controller
                name="password"
                control={control}
                defaultValue=""
                render={({
                  field: { onChange, value },
                  fieldState: { error },
                }) => (
                  <input
                    value={value}
                    onChange={onChange}
                    type="password"
                    placeholder="Enter your password"
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 mb-3 focus:ring-blue-500"
                  />
                )}
              />
              {errors.password && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.password?.message}
                </p>
              )}
            </div>
            <button
              disabled={isSubmitting}
              type="submit"
              className="w-full mb-10 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg transition"
            >
              Login
            </button>
            <div className="flex justify-end -my-5">
              <button
                onClick={navigateSıgnUpPage}
                className="cursor-pointer hover:text-red-700 "
              >
                Don't you have account
              </button>
            </div>
            <div className="">{errorMessage}</div>
            <div>
              <Modal
                title={errorMessage}
                open={isModalVisible}
                onCancel={showLoginModal}
                onOk={showLoginModal}
                style={{
                  minWidth: "30%", // Modal genişliğini ayarla
                  maxWidth: "40%", // Maksimum genişlik ayarla
                  top: "40%", // Modalın üstten konumunu ayarla
                  left: "5%", // Modalın soldan konumunu ayarla
                }}
              />
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
