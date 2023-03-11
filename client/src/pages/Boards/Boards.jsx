import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import axios from "axios";

const Boards = ({ funcNav }) => {
  funcNav(true);
  const navigate = useNavigate();
  const [boards, setBoards] = useState([]);
  const [isLoaded, setIsLoaded] = useState(false);
  const [user, setUser] = useState(null);
  useEffect(() => {
    if (localStorage.getItem("token")) setUser(localStorage.getItem("token"));
    axios
      .get(`${process.env.REACT_APP_BASE_URL}board`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then((res) => {
        setBoards(res.data.boards);
        setIsLoaded(true);
      })
      .catch((e) => console.log(e));
  }, []);
  const createBoard = () => {
    axios
      .post(
        `${process.env.REACT_APP_BASE_URL}board`,
        { name: "Board" },
        {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        }
      )
      .then((res) => {
        navigate(`/boards/${res.data.board._id}`);
      })
      .catch();
  };
  const BoardCreate = () => {
    return (
      <div
        onClick={createBoard}
        className="h-32 bg-gray-300 rounded hover:scale-105 duration-200 opacity-75 hover:opacity-100 p-10 text-center"
      >
        <h1 className="text-2xl">Create board</h1>
      </div>
    );
  };
  if (!user) {
    return (
      <div className="flex items-center justify-center h-[80vh] ">
        <Link to="/login" className="nav-link text-white">
          Login
        </Link>
      </div>
    );
  }
  if (!isLoaded) {
    return <></>;
  }
  return (
    <div className="px-40 pt-20 font-roboto font-light">
      <div>
        <h1 className="text-lg font-medium mt-5">Personal</h1>
        <div className="grid grid-cols-4 gap-5">
          {boards.map((el, index) => {
            return <BoardCard title={el.name} id={el._id} />;
          })}
          <BoardCreate />
        </div>
      </div>
    </div>
  );
};

const BoardCard = ({ title, id }) => {
  return (
    <Link to={`/boards/${id}`}>
      <div className="h-32 bg-green-500 rounded hover:scale-105 duration-200 opacity-90 hover:opacity-100 p-4 px-6">
        <h1 className="text-xl font-bold text-gray-200">{title}</h1>
      </div>
    </Link>
  );
};

export default Boards;
