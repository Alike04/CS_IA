import React from "react";
import { Link } from "react-router-dom";
import useAuth from "../hooks/useAuth";
import "./Navbar.css";

const Navbar = ({ isLogged }) => {
  const Buttons = () => {
    if (!isLogged) {
      return (
        <ul className="text-decoration decoration-0 flex justify-between ">
          <Link className="w-[100%]" to="/login">
            <li className="nav-link">Login</li>
          </Link>
          <Link to="/register" className="w-[100%]">
            <li className="nav-link">Signup</li>
          </Link>
        </ul>
      );
    }
    return (
      <div
        className="w-[100%]"
        onClick={() => {
          localStorage.removeItem("token");
          window.location.reload();
        }}
      >
        <li className="nav-link">Log out</li>
      </div>
    );
  };
  return (
    <nav className="bg-gray-800 h-[10vh] text-gray-200 flex items-center font-roboto font-light">
      <div className="w-[100%] px-28 flex justify-between text-xl">
        <ul className="text-decoration decoration-0 flex justify-between ">
          <Link className="w-[100%]" to="/">
            <li className="nav-link">Home</li>
          </Link>
          <Link to="/boards " className="w-[100%]">
            <li className="nav-link">Boards</li>
          </Link>
        </ul>
        <h1 className="text-grey-100">My small planner</h1>
        <ul className="text-decoration decoration-0 flex justify-between ">
          <Buttons />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
