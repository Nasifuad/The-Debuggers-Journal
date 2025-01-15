import { NavLink } from "react-router-dom";
import SideMenu from "./SideMenu";
import { navigation } from "../constants/constant";
import { FaUserCircle } from "react-icons/fa";
import { useState } from "react";
const Navbar = () => {
  // eslint-disable-next-line no-unused-vars
  const [userName, setuserName] = useState("Guest");
  return (
    <>
      <header className="sticky top-0  border-b border-gray-200 bg-white ">
        <div className=" absolute top-5 left-5 flex gap-2 justify-center items-center">
          <FaUserCircle className="text-2xl" />
          <span className="text-lg font-semibold">{userName}</span>
        </div>
        <nav
          aria-label="Global"
          className="flex items-center justify-between p-6 lg:px-8"
        >
          <div className="flex lg:flex-1">
            <a href="#" className="-m-1.5 p-1.5">
              <span className="sr-only text-black">The Debugger`s Journal</span>
              <img
                alt=""
                src="https://www.svgrepo.com/plus/img/logos/mark.svg?color=indigo&shade=600"
                className="h-8 w-auto"
              />
            </a>
          </div>
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
            </button>
          </div>
          <div className="hidden lg:flex lg:gap-x-12">
            {navigation.map((item) => (
              <NavLink
                key={item.name}
                to={item.to}
                className={({ isActive }) =>
                  isActive
                    ? "text-sm/6 font-semibold text-white bg-blue-900 px-3 py-2 rounded-lg hover:bg-neutral-800 hover:text-gray-1"
                    : "text-sm/6 font-semibold text-gray-200 bg-neutral-600 px-3 py-2 rounded-lg hover:bg-neutral-800 hover:text-gray-1"
                }
              >
                {item.name}
              </NavLink>
            ))}
          </div>
          <div className="hidden lg:flex lg:flex-1 lg:justify-end gap-4">
            <NavLink
              to="/login"
              className={({ isActive }) =>
                isActive
                  ? "text-sm/6 font-semibold text-white bg-blue-900 px-3 py-2 rounded-lg hover:bg-neutral-800 hover:text-gray-1"
                  : "text-sm/6 font-semibold text-gray-200 bg-neutral-600 px-3 py-2 rounded-lg hover:bg-neutral-800 hover:text-gray-1"
              }
            >
              Log In <span aria-hidden="true">&rarr;</span>
            </NavLink>
            <NavLink
              to="/signup"
              className={({ isActive }) =>
                isActive
                  ? "text-sm/6 font-semibold text-white bg-blue-900 px-3 py-2 rounded-lg hover:bg-neutral-800 hover:text-gray-1"
                  : "text-sm/6 font-semibold text-gray-200 bg-neutral-600 px-3 py-2 rounded-lg hover:bg-neutral-800 hover:text-gray-1"
              }
            >
              Sign Up <span aria-hidden="true">&rarr;</span>
            </NavLink>
          </div>
        </nav>
        <div className="xl:hidden bg-slate-200 w-1/2 flex border border-slate-700 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
          <input
            type="text"
            name=""
            id=""
            className="w-full px-4 border-none outline-none  py-2"
          />
          <button className="bg-slate-700 text-white rou px-2 ">Search</button>
        </div>
      </header>
      <SideMenu navigation={navigation} />
    </>
  );
};

export default Navbar;
