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
      <SlMenu
        className="absolute z-50 xl:hidden lg:hidden  top-5 right-5 text-3xl"
        onClick={() => setToggle(!toggle)}
      />
      {toggle && (
        <div className="xl:hidden lock absolute top-0 right-0 w-1/3 h-full bg-gray-200 z-50">
          <RxCross2
            className="absolute top-5 right-5 text-3xl"
            onClick={() => setToggle(!toggle)}
          />
          <ul className="flex flex-col gap-5 p-5 mt-10">
            {navigation.map((link) => (
              <li key={link.name}>
                <NavLink
                  to={link.to}
                  onClick={() => setToggle(!toggle)}
                  className="text-2xl font-semibold capitalize opacity-90 hover:opacity-100 cursor-pointer"
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
            <li className="flex gap-5 flex-wrap">
              <NavLink
                to="/login"
                onClick={() => setToggle(!toggle)}
                className="text-2xl bg-black text-white p-2 rounded-md font-semibold capitalize opacity-90 hover:opacity-100 cursor-pointer"
              >
                Login
              </NavLink>
              <NavLink
                to="/signup"
                onClick={() => setToggle(!toggle)}
                className="text-2xl bg-black text-white p-2 rounded-md font-semibold capitalize opacity-90 hover:opacity-100 cursor-pointer"
              >
                Sign Up
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default SideMenu;
