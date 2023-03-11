import React, { useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Register = ({ funcNav }) => {
  funcNav(false);
  const [error, setError] = useState("");
  const email = useRef();
  const password1 = useRef();
  const password2 = useRef();
  const name = useRef();

  const navigate = useNavigate();

  const onClick = () => {
    if (password1.current.value !== password2.current.value) {
      setError("Passwords do not match");
      return;
    }
    axios
      .post(`${process.env.REACT_APP_BASE_URL}auth/register`, {
        name: name.current.value,
        email: email.current.value,
        password: password1.current.value,
      })
      .then((res) => {
        localStorage.setItem("token", res.data.token);
        navigate("/boards");
      })
      .catch((e) => console.error(e));
  };
  return (
    <div className="h-screen bg-gray-200 pt-20 px-auto">
      <div className="bg-gray-50 w-[25%] h-[80%] mx-auto rounded">
        <div className="h-[20%] p-10">
          <h1 className="text-center font-bold text-3xl font-roboto">
            Register
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
                ref={email}
                class="bg-gray-200 appearance-none border-2 rounded w-full  py-2 px-4
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
                Name
              </label>
              <input
                ref={name}
                class="bg-gray-200 appearance-none border-2  rounded w-full py-2 px-4
              text-gray-700 leading-tight focus:outline-none focus:bg-white
              focus:border-blue-200"
                id="inline-full-name"
                type="text"
                placeholder="productivity"
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
                ref={password1}
                class="bg-gray-200 appearance-none border-2  rounded w-full py-2 px-4
                text-gray-700 leading-tight focus:outline-none focus:bg-white
                focus:border-blue-200"
                id="inline-full-name"
                type="text"
              />
            </div>
            <div>
              <label
                htmlFor="inline-full-name"
                className="uppercase text-gray-700 text-xs font-bold"
              >
                repeat Password
              </label>
              <input
                ref={password2}
                class="bg-gray-200 appearance-none border-2  rounded w-full py-2 px-4
              text-gray-700 leading-tight focus:outline-none focus:bg-white
              focus:border-blue-200"
                id="inline-full-name"
                type="text"
              />
            </div>
            <div class="flex items-center mt-5">
              <div class="mx-auto">
                <button
                  onClick={onClick}
                  class="shadow bg-gray-500 hover:bg-gray-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  type="button"
                >
                  Sign Up
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
