import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { FiSearch } from "react-icons/fi";
import { FaCat } from "react-icons/fa";
import { Menu } from "@headlessui/react";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 h-20 text-gray-200 flex items-center font-roboto font-light">
      <div className="w-[100%] px-28 flex justify-between text-xl">
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
          <Menu as="div" className="text-left inline-block">
            <Menu.Button className="bg-gray-600 rounded  w-12 h-12 active:rounded-2xl active:bg-gray-500  duration-300">
              <FaCat className="relative top-[0%] left-[15%] w-8 h-8 p-1" />
            </Menu.Button>
            <Menu.Items className="absolute right-28 w-56 origin-top-right bg-gray-600">
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={`${
                      active && "bg-blue-500 rounded-lg  duration-300"
                    } p-2 m-2`}
                    href="/account-settings"
                  >
                    Account settings
                  </a>
                )}
              </Menu.Item>{" "}
              <Menu.Item>
                {({ active }) => (
                  <a
                    className={`${
                      active && "bg-blue-500 rounded-lg  duration-300"
                    } p-2 m-2`}
                    href="/account-settings"
                  >
                    Account settings
                  </a>
                )}
              </Menu.Item>
            </Menu.Items>
          </Menu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
