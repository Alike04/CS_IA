import React from "react";
import axios from "axios";
import { useState } from "react";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  function handSubmit() {
    const body = { email: email, password: password };
    axios
      .post(`${process.env.REACT_APP_BASE_URL}auth/login`, body)
      .then((res) => {
        localStorage.setItem("token", res.data.token);
      });
  }
  return (
    <div className="h-screen bg-gray-200 pt-20 px-auto">
      <div className="bg-gray-50 w-[25%] h-[70%] mx-auto rounded">
        <div className="h-[20%] p-10">
          <h1 className="text-center font-bold text-3xl font-roboto">
            Planner
          </h1>
        </div>
        <hr className="h-1 w-[80%] mx-auto bg-gray-600 rounded border-none" />
        <div className="p-10 pt-2">
          <div className="h-[100%]">
            <div>
              <label
                htmlFor="inline-full-name"
                className="uppercase text-gray-700 text-xs font-bold"
              >
                Email
              </label>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                className="bg-gray-200 appearance-none border-2 rounded w-full  py-2 px-4
              text-gray-700 leading-tight focus:outline-none focus:bg-white
              focus:border-blue-200"
                id="inline-full-name"
                type="text"
                placeholder="planner@gmail.com"
              />
            </div>
            <div>
              <label
                htmlFor="inline-full-name"
                className="uppercase text-gray-700 text-xs font-bold"
              >
                Password
              </label>
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                className="bg-gray-200 appearance-none border-2  rounded w-full py-2 px-4
              text-gray-700 leading-tight focus:outline-none focus:bg-white
              focus:border-blue-200"
                id="inline-full-name"
                type="text"
              />
            </div>

            <div className="mt-5 flex items-center">
              <label className="md:w-2/3 block text-gray-500 font-bold">
                <input className="mr-2 leading-tight" type="checkbox" />
                <span className="text-sm">remember me</span>
              </label>
            </div>
            <div className="flex items-center mt-5">
              <div className="mx-auto">
                <button
                  className="shadow bg-gray-500 hover:bg-gray-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  type="button"
                  onClick={handSubmit}
                >
                  Log in
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
