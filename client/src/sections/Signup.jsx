import { useContext, useState } from "react";
import { images } from "../constants/constant";
import { useNavigate } from "react-router-dom";
import { MyContext } from "../useContext/UseContext";
import { motion } from "framer-motion";

const Signup = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordConfirm, setPasswordConfirm] = useState("");
  const [errors, setErrors] = useState({});
  const [userExists, setUserExists] = useState(false);
  const [success, setSuccess] = useState(false);
  const { setCurrentUser, setIsLoggedIn } = useContext(MyContext);

  const validateForm = () => {
    let newErrors = {};
    if (username.length < 6)
      newErrors.username = "Username must be at least 6 characters.";
    if (password.length < 6)
      newErrors.password = "Password must be at least 6 characters.";
    if (password !== passwordConfirm)
      newErrors.passwordConfirm = "Passwords do not match.";
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    const newUserData = { username, email, password };
    try {
      const res = await fetch(
        "https://the-debuggers-journal-backend.onrender.com/api/signup",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(newUserData),
        }
      );
      const result = await res.json();

      if (result.message === "User created successfully") {
        setSuccess(true);
        setCurrentUser(result.data.username);
        setIsLoggedIn(true);
        setTimeout(() => navigate("/"), 2000);
      } else {
        setUserExists(true);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  };

  // Animation Variants
  const containerVariants = {
    hidden: { opacity: 0, y: 50 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const inputVariants = {
    hidden: { opacity: 0, x: -20 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.5, delay: 0.2 } },
  };

  const buttonVariants = {
    hover: { scale: 1.05, transition: { duration: 0.2 } },
    tap: { scale: 0.95 },
  };

  const imageVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, delay: 0.3 },
    },
  };

  const successVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.3 } },
  };

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 p-6"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <h1 className="text-4xl font-semibold text-white mb-6">Sign Up</h1>
      <motion.div
        className="bg-white shadow-2xl rounded-lg flex overflow-hidden w-full max-w-4xl"
        variants={containerVariants}
      >
        <motion.img
          src={images.signup}
          alt="Sign up"
          className="w-1/2 hidden md:block object-cover"
          variants={imageVariants}
        />
        <div className="w-full md:w-1/2 p-8">
          <form className="space-y-4" onSubmit={handleSubmit}>
            <motion.div variants={inputVariants}>
              <label className="block text-gray-700 font-medium">
                Username
              </label>
              <input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter username"
                required
              />
              {errors.username && (
                <p className="text-red-500 text-sm">{errors.username}</p>
              )}
            </motion.div>
            <motion.div variants={inputVariants}>
              <label className="block text-gray-700 font-medium">Email</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter email"
                required
              />
            </motion.div>
            <motion.div variants={inputVariants}>
              <label className="block text-gray-700 font-medium">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Enter password"
                required
              />
              {errors.password && (
                <p className="text-red-500 text-sm">{errors.password}</p>
              )}
            </motion.div>
            <motion.div variants={inputVariants}>
              <label className="block text-gray-700 font-medium">
                Confirm Password
              </label>
              <input
                type="password"
                value={passwordConfirm}
                onChange={(e) => setPasswordConfirm(e.target.value)}
                className="w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                placeholder="Confirm password"
                required
              />
              {errors.passwordConfirm && (
                <p className="text-red-500 text-sm">{errors.passwordConfirm}</p>
              )}
            </motion.div>
            <motion.button
              type="submit"
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
              variants={buttonVariants}
              whileHover="hover"
              whileTap="tap"
            >
              Sign Up
            </motion.button>
          </form>
          {userExists && (
            <motion.p
              className="text-red-500 text-sm mt-2"
              variants={successVariants}
            >
              User already exists
            </motion.p>
          )}
          {success && (
            <motion.p
              className="text-green-500 text-sm mt-2"
              variants={successVariants}
            >
              User created successfully
            </motion.p>
          )}
          <motion.button
            onClick={() => navigate("/login")}
            className="mt-4 text-blue-600 hover:underline"
            variants={buttonVariants}
            whileHover="hover"
            whileTap="tap"
          >
            Already have an account? Log in
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Signup;
