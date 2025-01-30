/* eslint-disable react/prop-types */
import { useState } from "react";
import { SlMenu } from "react-icons/sl";
import { RxCross2 } from "react-icons/rx";
import { NavLink } from "react-router-dom";

// eslint-disable-next-line react/prop-types
const SideMenu = ({ navigation }) => {
  const [toggle, setToggle] = useState(false);

  return (
    <>
      {/* Menu Toggle Button */}
      <button
        aria-label="Open Menu"
        className="xl:hidden lg:hidden fixed top-5 right-5 text-3xl z-40 text-gray-900 hover:text-gray-300 transition-colors duration-200"
        onClick={() => setToggle(!toggle)}
      >
        {!toggle && <SlMenu />}
      </button>

      {/* Side Menu Overlay */}
      {toggle && (
        <div
          className="fixed inset-0 bg-black/10 backdrop-blur-3xl z-40 h-screen"
          onClick={() => setToggle(false)}
        ></div>
      )}

      {/* Side Menu Content */}
      <div
        className={`fixed top-0 right-0 h-screen bg-black/40 w-64 backdrop-blur-lg   z-50 transform transition-transform duration-300 ease-in-out ${
          toggle ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Close Button */}
        <button
          aria-label="Close Menu"
          className="absolute top-5 right-5 text-3xl text-gray-100 hover:text-gray-300 transition-colors duration-200"
          onClick={() => setToggle(false)}
        >
          <RxCross2 />
        </button>

        {/* Navigation Links */}
        <ul className="flex flex-col gap-6 p-6 mt-16">
          {navigation.map((link) => (
            <li key={link.name}>
              <NavLink
                to={link.to}
                onClick={() => setToggle(false)}
                className={({ isActive }) =>
                  `text-2xl font-semibold capitalize text-gray-100 hover:text-blue-400 transition-colors duration-200 ${
                    isActive ? "text-blue-400" : ""
                  }`
                }
              >
                {link.name}
              </NavLink>
            </li>
          ))}
          <li>
            <div className="flex gap-4">
              <NavLink
                to="/login"
                className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-md hover:shadow-lg transition-all duration-300"
                onClick={() => setToggle(false)}
              >
                Log In
              </NavLink>
              <NavLink
                to="/signup"
                className="px-4 py-2 border border-white/20 text-white rounded-md hover:bg-white/5 transition-all duration-300"
                onClick={() => setToggle(false)}
              >
                Sign Up
              </NavLink>
            </div>
          </li>
        </ul>

        {/* Auth Buttons */}
      </div>
    </>
  );
};

export default SideMenu;
