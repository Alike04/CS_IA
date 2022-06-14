import React from "react";
import { useEffect } from "react";

const Boards = () => {
  useEffect(() => {});
  return (
    <div className="w-screen px-40 pt-20 font-roboto font-light ">
      <div>
        <h1 className="text-2xl my-2 font-extrabold text-gray-400">
          Recently opened
        </h1>
        <div className="grid grid-cols-4 gap-5">
          <Board />
          <Board />
          <Board />
          <Board />
          <Board />
        </div>
        <h1>Personal</h1>
        <div className="grid grid-cols-4 gap-5">
          <Board />
          <Board />
          <Board />
          <Board />
          <Board />
        </div>
        <h1>Public</h1>
        <div className="grid grid-cols-4 gap-5">
          <Board />
          <Board />
          <Board />
          <Board />
          <Board />
        </div>
      </div>
    </div>
  );
};

const Board = (props) => {
  return (
    <div className="h-32 bg-green-500 rounded hover:scale-105 duration-200 opacity-75 hover:opacity-100"></div>
  );
};

export default Boards;
