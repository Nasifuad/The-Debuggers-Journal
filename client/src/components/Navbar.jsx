import { NavLink } from "react-router-dom";
import SideMenu from "./SideMenu";
import { navigation } from "../constants/constant";
import { FaUserCircle } from "react-icons/fa";
import { useContext } from "react";
import { MyContext } from "../useContext/UseContext";
import { motion } from "framer-motion";

const Navbar = () => {
  const { currentUser, isLoggedIn } = useContext(MyContext);

  const handleLogout = (e) => {
    e.preventDefault();
    // Add actual logout logic here
  };

  return (
    <header className="sticky top-0 bg-white/5 backdrop-blur-lg border-b border-white/10 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative h-16 flex items-center justify-between">
          {/* User Info */}
          <motion.div
            initial={{ x: -20, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            className="flex items-center gap-2"
          >
            <FaUserCircle className="text-2xl text-blue-400" />
            <span className="text-lg font-semibold bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent">
              {currentUser || "Guest"}
            </span>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            {navigation.map((item, index) => (
              <motion.div
                key={item.name}
                initial={{ y: -20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: index * 0.1 }}
              >
                <NavLink
                  to={item.to}
                  className={({ isActive }) =>
                    `px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${
                      isActive
                        ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg"
                        : "text-gray-300 hover:bg-white/5 hover:text-white"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </motion.div>
            ))}
          </nav>

          {/* Auth Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <motion.div
              initial={{ x: 20, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
            >
              {isLoggedIn ? (
                <button
                  onClick={handleLogout}
                  className="px-4 py-2 bg-gradient-to-r from-red-500 to-pink-500 text-white rounded-md hover:shadow-lg transition-all duration-300"
                >
                  Log Out
                </button>
              ) : (
                <div className="flex gap-4">
                  <NavLink
                    to="/login"
                    className="px-4 py-2 bg-gradient-to-r from-blue-600 to-cyan-500 text-white rounded-md hover:shadow-lg transition-all duration-300"
                  >
                    Log In
                  </NavLink>
                  <NavLink
                    to="/signup"
                    className="px-4 py-2 border border-white/20 text-white rounded-md hover:bg-white/5 transition-all duration-300"
                  >
                    Sign Up
                  </NavLink>
                </div>
              )}
            </motion.div>
          </div>

          {/* Mobile Search */}
          <div className="lg:hidden absolute left-1/2 transform -translate-x-1/2 w-3/4 max-w-md">
            <div className="relative flex items-center bg-white/5 rounded-full px-4 py-2 backdrop-blur-sm">
              <input
                type="text"
                placeholder="Search articles..."
                className="w-full bg-transparent border-none text-white placeholder-gray-400 focus:ring-0"
              />
              <button className="ml-2 p-1.5 bg-blue-500 rounded-full hover:bg-blue-400 transition-colors">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Mobile Menu */}
          <div className="lg:hidden">
            <SideMenu navigation={navigation} />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
