import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Task from "../components/Task";
import { nanoid } from "nanoid";

const Board = () => {
  const params = useParams();
  const [board, setBoard] = useState();
  const [isLoaded, setIsLoaded] = useState(false);
  const fetch = async () => {
    setIsLoaded(false);
    const board = await axios.get(
      `${process.env.REACT_APP_BASE_URL}board/${params.boardId}`,
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    );
    setBoard(board.data.board);
    setIsLoaded(true);
  };
  useEffect(() => {
    fetch();
  }, []);
  const saveList = (list, value) => {
    list.name = value;
    axios.patch(`${process.env.REACT_APP_BASE_URL}list`, list, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
  };
  const CreateTask = ({ listId }) => {
    const createTask = (data) => {
      axios
        .post(`${process.env.REACT_APP_BASE_URL}card`, data, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        })
        .then(fetch);
    };
    const data = { name: "task", listId: listId };
    return (
      <div
        className="bg-slate-500 p-5 rounded"
        onClick={() => createTask(data)}
      >
        create task
      </div>
    );
  };
  const CreateList = () => {
    const createList = (data) => {
      axios
        .post(`${process.env.REACT_APP_BASE_URL}list`, data, {
          headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
        })
        .then(fetch);
    };
    const data = { name: "list", boardId: board._id };
    return (
      <div
        className="p-5 w-[350px] overflow-auto inline-block rounded-md bg-red-500  text-center"
        onClick={() => createList(data)}
      >
        create list
      </div>
    );
  };
  async function saveBoard(data) {
    setIsLoaded(false);
    await axios.patch(
      `${process.env.REACT_APP_BASE_URL}board/${board._id}`,
      data,
      {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      }
    );
    setIsLoaded(true);
  }
  const setName = (name) => {
    const newBoard = board;
    newBoard.name = name;
    setBoard(newBoard);
    saveBoard(newBoard);
  };
  if (!isLoaded) return <></>;
  return (
    <div className=" h-[90vh] mx-20 flex flex-col">
      <input
        className="text-center text-3xl"
        defaultValue={board.name}
        onBlur={(e) => {
          setName(e.target.value);
        }}
      />
      <div className="w-[100%] inline-block h-[90vh]  space-x-5">
        {board.lists.map((list, index) => {
          return (
            <div
              key={nanoid()}
              className="w-[350px] overflow-auto inline-block p-8 rounded-md bg-red-500 text-center"
            >
              <input
                className="text-center rounded text-2xl mb-6 bg-transparent border-2"
                type="text"
                defaultValue={list.name}
                onBlur={(e) => {
                  saveList(list, e.target.value);
                }}
              />
              <div className="space-y-5">
                {list.cards.map((task, index) => {
                  return <Task key={nanoid()} init={task} />;
                })}
              </div>
              <CreateTask listId={list._id} />
            </div>
          );
        })}
        <CreateList />
      </div>
    </div>
  );
};

export default Board;
