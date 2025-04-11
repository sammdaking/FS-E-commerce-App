/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { supabase } from "../../../lib/supabaseClient";
import { yupResolver } from "@hookform/resolvers/yup";
import { Controller, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
//import { Modal } from "antd";
import { signInSchema } from "./signup.validation";
import { ISignInPayload } from "./type";

const Signup: React.FC = () => {
  const navigate = useNavigate();

  // const [email, setEmail] = useState<string>("");
  // const [password, setPassword] = useState<string>("");

  // const [errorModalVisible, setErrorModalVisible] = useState(false);
  // const [successModalVisible, setSuccessModalVisible] = useState(false);
  // const [errorMessage, setErrorMessage] = useState("");

  const {
    control,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ISignInPayload>({
    //1
    resolver: yupResolver(signInSchema),
  });
  const navigateLoginPage = () => {
    navigate("/");
  };
  const onSubmit = async (data: ISignInPayload) => {
    try {
      const { data, error } = await supabase.auth.signUp(
        {
          email: email,
          password: password,
        },
        {
          data: {
            user_name: name,
            user_surname: surname,
            user_adress: address,
            user_phone_number: phoneNumber,
          },
        }
      );

      if (error) throw error;
      alert("Signup Succes");
    } catch (error: any) {
      alert(error.message);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="max-w-4xl w-full h-170 shadow-xl rounded-xl overflow-hidden flex">
        {/* Left Side - Image */}
        <div className=" md:block justify-center  flex content-start md:w-1/2  text-red-700 text-center bg-gradient-to-r from-purple-600 to-pink-200  ">
          <p className="text-4xl text-white my-35">Welcome</p>
          <p className="text-2xl text-white ">Join Us With New Account</p>
        </div>

        {/* Right Side - Form */}
        <div className="w-full md:w-1/2 p-8 flex flex-col   justify-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-10 ">Sign Up</h2>
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
                render={({ field }) => (
                  <input
                    {...field}
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
              Sign Up
            </button>
            <button
              onClick={navigateLoginPage}
              className="cursor-pointer hover:text-red-700"
            >
              Go Back
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Signup;
