import React from "react";

const Register = () => {
  return (
    <div className="h-screen bg-gray-200 pt-20 px-auto">
      <div className="bg-gray-50 w-[25%] h-[80%] mx-auto rounded">
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
