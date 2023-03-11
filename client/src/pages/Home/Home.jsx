import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import Quotes from "./Quotes.js";
import { GrUpdate } from "react-icons/gr";
import { nanoid } from "nanoid";
import axios from "axios";

const Home = ({ funcNav }) => {
  funcNav(true);
  const [quote, setQuote] = useState("");
  const [tasks, setTasks] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setQuote(Quotes.data[Math.floor(Math.random() * Quotes.data.length)]);
  }, []);

  function dateCheck(from, to, check) {
    if (check <= to && check >= from) {
      return true;
    }
    return false;
  }

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BASE_URL}card/today`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        setTasks(res.data.cards);
        setIsLoaded(true);
      });
  }, []);
  if (!isLoaded) {
    return <></>;
  }
  return (
    <div className="px-40 pt-20 font-roboto font-light mb-10">
      <h1 className="text-center text-3xl">Welcome!</h1>
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
        <div className=" w-[65%] border-2 rounded-md p-6">
          <h2 className="text-2xl font-medium">For today</h2>
          <div className="grid grid-cols-2 gap-4 mt-5">
            {tasks?.map((el, index) => {
              const today = new Date().setHours(0, 0, 0, 0);
              const tomorrow = today + 86400000;
              if (dateCheck(today, tomorrow, Date.parse(el.deadline)))
                return <HomeTask key={nanoid()} name={el.name} />;
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

const HomeTask = ({ name }) => {
  return (
    <>
      <div className="bg-gray-200 h-40 hover:bg-gray-300 duration-200  px-5 py-3">
        <h1 className="text-center text-xl">Board </h1>
        <hr className="h-1 bg-gray-400"></hr>
        <h1 className="text-lg">Name: {name}</h1>
      </div>
    </>
  );
};
const HomeBoard = ({ title, description }) => {
  return (
    <>
      <div className="bg-gray-200 h-20 hover:bg-gray-300 duration-200  px-5 py-3">
        <h1 className="text-center text-xl">{title} </h1>
      </div>
    </>
  );
};

// bg - indigo - 600;
// bg - emerald - 600;
export default Home;
