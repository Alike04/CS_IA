import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Quotes from "./Quotes.js";
import { GrUpdate } from "react-icons/gr";

const Home = () => {
  const [quote, setQuote] = useState("");
  useEffect(() => {
    setQuote(Quotes.data[Math.floor(Math.random() * Quotes.data.length)]);
  }, []);
  return (
    <div className="px-40 pt-20 font-roboto font-light mb-10">
      <h1 className="text-center text-3xl">Добро пожаловать, Username!</h1>
      <div className="bg-orange-50 rounded pl-16 pr-16 py-2 mt-10">
        <h1 className="my-3 text-2xl font-extralight italic">
          {"'" + quote["quote"] + "'"}
        </h1>
        <h3 className=" text-2xl italic text-right font-extralight">
          {quote["author"]}
        </h3>
        <button
          onClick={() => {
            setQuote(
              Quotes.data[Math.floor(Math.random() * Quotes.data.length)]
            );
          }}
          className=" hover:animate-spin"
        >
          <GrUpdate />
        </button>
      </div>
      <div className="flex justify-between mt-10">
        <div className="w-[30%] border-2 rounded-md p-6">
          <h2 className="text-xl">Recently opened</h2>
          <div className="grid grid-cols-1 gap-4 mt-5">
            <HomeBoard />
            <HomeBoard />
            <HomeBoard />
          </div>
        </div>
        <div className=" w-[65%] border-2 rounded-md p-6">
          <h2 className="text-2xl font-medium">For today</h2>
          <div className="grid grid-cols-2 gap-4 mt-5">
            <HomeTask></HomeTask>
            <HomeTask></HomeTask>
            <HomeTask></HomeTask>
            <HomeTask></HomeTask>
          </div>
        </div>
      </div>
    </div>
  );
};

const HomeTask = () => {
  return (
    <>
      <div className="bg-gray-200 h-40 hover:bg-gray-300 duration-200  px-5 py-3">
        <h1 className="text-center text-xl">Board </h1>
        <hr className="h-1 bg-gray-400"></hr>
        <h1 className="text-lg">Name </h1>
        <h2 className="text-sm text-gray-500">Description:</h2>
      </div>
    </>
  );
};
const HomeBoard = () => {
  return (
    <>
      <div className="bg-gray-200 h-20 hover:bg-gray-300 duration-200  px-5 py-3">
        <h1 className="text-center text-xl">Board </h1>
      </div>
    </>
  );
};

// bg - indigo - 600;
// bg - emerald - 600;
export default Home;
