import React from "react";
import { useForm } from "react-hook-form";
import axios from "axios";
import { useAuth } from "../context/Authprovider";
import {  Link } from "react-router-dom";
const Login = () => {
  const [authUser, setAuthUser] = useAuth();
  const {
   
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();
  const onSubmit = async (data) => {
    const userInfo = {
      email: data.email,
      password: data.password,
    };
    await axios
      .post("/api/user/login", userInfo)
      .then((response) => {
        console.log(response.data);
        if (response.data) {
          alert("User Logged in successfully");
        }
        localStorage.setItem("ChatApp", JSON.stringify(response.data));
        setAuthUser(response.data);
      })
      .catch((err) => {
        if (err.response) {
          alert(err.response.data);
        }
      });
  };
  return (
    <>
      <div className="w-full min-h-screen bg-slate-900 flex justify-center items-center">
        <div className="w-1/4 border px-6 py-3 rounded-md border-slate-800">
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="space-y-2 text-white"
          >
            <h1 className="text-white font-bold text-2xl text-center ">
              Chat<span className="text-green-500">App</span>
            </h1>
            <h2 className="text-white font-semibold text-xl">Login</h2>

            {/* email */}
            <label className="input input-bordered flex items-center gap-2  bg-slate-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path d="M2.5 3A1.5 1.5 0 0 0 1 4.5v.793c.026.009.051.02.076.032L7.674 8.51c.206.1.446.1.652 0l6.598-3.185A.755.755 0 0 1 15 5.293V4.5A1.5 1.5 0 0 0 13.5 3h-11Z" />
                <path d="M15 6.954 8.978 9.86a2.25 2.25 0 0 1-1.956 0L1 6.954V11.5A1.5 1.5 0 0 0 2.5 13h11a1.5 1.5 0 0 0 1.5-1.5V6.954Z" />
              </svg>
              <input
                type="email"
                // name="email"
                className="grow"
                placeholder="Email"
                {...register("email", { required: true })}
              />
            </label>
            {errors.email && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
            {/* password */}
            <label className="input input-bordered flex items-center gap-2  bg-slate-700">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 16 16"
                fill="currentColor"
                className="w-4 h-4 opacity-70"
              >
                <path
                  fillRule="evenodd"
                  d="M14 6a4 4 0 0 1-4.899 3.899l-1.955 1.955a.5.5 0 0 1-.353.146H5v1.5a.5.5 0 0 1-.5.5h-2a.5.5 0 0 1-.5-.5v-2.293a.5.5 0 0 1 .146-.353l3.955-3.955A4 4 0 1 1 14 6Zm-4-2a.75.75 0 0 0 0 1.5.5.5 0 0 1 .5.5.75.75 0 0 0 1.5 0 2 2 0 0 0-2-2Z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                type="password"
                // name="password"
                className="grow"
                placeholder="Password"
                {...register("password", { required: true })}
              />
            </label>
            {errors.password && (
              <span className="text-sm text-red-500">
                This field is required
              </span>
            )}
            <div className="flex justify-between items-center">
              <p className="text-white">
                New User?{" "}
                <Link to='/signup' className="text-blue-500 underline">Signup</Link>
              </p>
              <input
                className="px-3 py-2 rounded-md bg-green-500 hover:bg-green-600 cursor-pointer text-white"
                type="Submit"
                value="Login"
              />
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Login;
