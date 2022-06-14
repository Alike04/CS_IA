import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FiSearch } from "react-icons/fi";
import { FaCat } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 h-20 text-gray-200 flex items-center font-roboto font-light">
      <div className="container px-28 flex justify-between text-xl">
        <ul className="text-decoration decoration-0 flex justify-between ">
          <Link className="w-[100%]" to="/home">
            <li className="nav-link">Home</li>
          </Link>
          <Link to="/boards " className="w-[100%]">
            <li className="nav-link">Boards</li>
          </Link>
        </ul>
        <h1 className="text-grey-100">My small planner</h1>
        <div className="flex justify-between ">
          <div className="flex mx-10">
            <input
              className=" px-2 py-1 my-1 text-base font-normal text-gray-800 bg-white focus:outline-none"
              type="search"
              placeholder="Search..."
            />
            <button
              className="px-6 my-1 py-2.5 bg-gray-600 text-white uppercase rounded  
              hover:bg-gray-500 focus:outline-none active:bg-gray-800 duration-300"
            >
              <FiSearch className="text-xl" />
            </button>
          </div>
          <div className=" bg-gray-600 rounded  w-12 h-12 hover:rounded-2xl hover:bg-gray-500 hover:scale-110 duration-300">
            <FaCat className="relative top-[15%] left-[15%] w-8 h-8 p-1" />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
