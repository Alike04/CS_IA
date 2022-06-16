import React from "react";
import { useEffect } from "react";

const Boards = () => {
  useEffect(() => {});
  return (
    <div className="px-40 pt-20 font-roboto font-light">
      <div>
        <h1 className="text-2xl my-2 font-extrabold text-gray-400">
          Recently opened
        </h1>
        <div className="grid grid-cols-4 gap-5">
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
        </div>
        <h1>Personal</h1>
        <div className="grid grid-cols-4 gap-5">
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCreate />
        </div>
        <h1>Public</h1>
        <div className="grid grid-cols-4 gap-5">
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCreate />
        </div>
      </div>
    </div>
  );
};

const BoardCard = (props) => {
  return (
    <div className="h-32 bg-green-500 rounded hover:scale-105 duration-200 opacity-90 hover:opacity-100 p-4 px-6">
      <h1 className="text-xl font-bold text-gray-200">Name</h1>
    </div>
  );
};
const BoardCreate = (props) => {
  return (
    <div className="h-32 bg-gray-300 rounded hover:scale-105 duration-200 opacity-75 hover:opacity-100 p-10 text-center">
      <h1 className="text-2xl">Create board</h1>
    </div>
  );
};

export default Boards;
