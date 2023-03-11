import axios from "axios";
import React, { useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

const Task = ({ init }) => {
  const [data, setData] = useState(init);
  const saveTask = (newData) => {
    axios.patch(`${process.env.REACT_APP_BASE_URL}card`, newData, {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
    });
  };
  const setName = (name) => {
    const newData = data;
    newData.name = name;
    saveTask(newData);
    setData(newData);
  };
  const setDeadline = (deadline) => {
    const newData = data;
    newData.deadline = deadline;
    saveTask(newData);
    setData(newData);
  };
  const deleteTask = () => {
    axios
      .delete(`${process.env.REACT_APP_BASE_URL}card/${data._id}`, {
        headers: { Authorization: `Bearer ${localStorage.getItem("token")}` },
      })
      .then(window.location.reload());
  };
  return (
    <div className="p-2 bg-gray-100 rounded text-black">
      <div className="flex flex-col">
        <div className="flex justify-around">
          <input
            defaultValue={data.name}
            onBlur={(e) => {
              setName(e.target.value);
            }}
            className="text-center rounded text-xl"
          />
          <div
            className="flex items-center hover:scale-125"
            onClick={deleteTask}
          >
            <RiDeleteBin6Line />
          </div>
        </div>
        <input
          type="date"
          defaultValue={data.deadline?.substring(0, 10)}
          onBlur={(e) => setDeadline(e.target.value)}
        />
      </div>
    </div>
  );
};

export default Task;
